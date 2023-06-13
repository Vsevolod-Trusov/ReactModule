import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectNotes,
  selectPostNotes,
  selectShared,
  setPostNotes,
} from 'store/slices/notes.slice';
import NotesLayoutContainer from 'pages/NoteList/components/NotesLayout';
import { TInfinityScrollProps } from 'pages/NoteList/types';

import { LIMIT, START } from './constants';
import { useGetNotes } from '../../api/notes';

const InfinityScrollContainer: FC<TInfinityScrollProps> = ({
  handleSetSelectedNote,
  isShared,
}) => {
  const notes = useSelector(isShared ? selectShared : selectNotes);
  const dispatch = useDispatch();
  const postData = useSelector(selectPostNotes);

  const [visible, setVisible] = useState(LIMIT);
  const [hasMore, setHasMore] = useState(true);
  const [getMore, setGetMore] = useState(false);

  const setNotes = () => {
    setGetMore(true);
  };

  useEffect(() => {
    dispatch(setPostNotes(notes.slice(START, LIMIT)));
    if (postData.length < notes.length) {
      setHasMore(notes.length > LIMIT);
    } else {
      setHasMore(false);
    }
  }, [notes]);

  useEffect(() => {
    if (getMore) {
      const newLimit = visible + LIMIT;
      const addNotes = notes.slice(visible, newLimit);
      if (notes.length > postData.length) {
        setTimeout(() => {
          dispatch(setPostNotes([...postData].concat(addNotes)));
        }, 500);
        setVisible(newLimit);
      } else {
        setHasMore(false);
      }
    }
    setGetMore(false);
  }, [getMore]);

  return (
    <NotesLayoutContainer
      notes={postData}
      handleSetSelectedNote={handleSetSelectedNote}
      setNotes={setNotes}
      hasMore={hasMore}
    />
  );
};
export default InfinityScrollContainer;
