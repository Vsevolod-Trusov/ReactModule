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

const InfinityScrollContainer: FC<TInfinityScrollProps> = ({
  handleSetSelectedNote,
  isShared,
}) => {
  const notes = useSelector(isShared ? selectShared : selectNotes);
  const dispatch = useDispatch();
  const postData = useSelector(selectPostNotes);

  const [hasMore, setHasMore] = useState(true);
  const [getMore, setGetMore] = useState(false);

  const setNotes = () => {
    setGetMore(true);
  };

  useEffect(() => {
    dispatch(setPostNotes(notes.slice(START, LIMIT)));
  }, [notes]);

  useEffect(() => {
    if (getMore) {
      const newLimit = postData.length + LIMIT;
      const addNotes = notes.slice(postData.length, newLimit);
      if (notes.length > postData.length) {
        setTimeout(() => {
          dispatch(setPostNotes([...postData].concat(addNotes)));
        }, 200);
      }
    }
    setGetMore(false);
  }, [getMore]);

  useEffect(() => {
    if (postData.length < notes.length) {
      setHasMore(notes.length > LIMIT);
    } else {
      setHasMore(false);
    }
  }, [postData.length]);

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
