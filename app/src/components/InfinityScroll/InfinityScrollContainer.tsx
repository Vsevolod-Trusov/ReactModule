import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NotesLayoutContainer from 'pages/Notes/components/NotesLayout';
import { TInfinityScrollProps } from 'pages/Notes/types';
import {
  selectNotes,
  selectPostNotes,
  selectShared,
  setPostNotes,
} from 'config/redux/slices/notes.slice';

import { LIMIT, START } from './constants';

const InfinityScrollContainer: FC<TInfinityScrollProps> = ({
  handleSetSelectedNote,
  isShared,
}) => {
  const notes = useSelector(isShared ? selectShared : selectNotes);
  const dispatch = useDispatch();
  const postData = useSelector(selectPostNotes);

  const [visible, setVisible] = useState(LIMIT);
  const [hasMore, setHasMore] = useState(true);

  const setNotes = () => {
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
  };

  useEffect(() => {
    dispatch(setPostNotes(notes.slice(START, LIMIT)));
  }, [notes.length]);

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
