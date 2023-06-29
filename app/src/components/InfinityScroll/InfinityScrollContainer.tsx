import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectPostNotes } from 'store/slices/notes.slice';
import NotesLayoutContainer from 'pages/NoteList/components/NotesLayout';
import { TInfinityScrollProps } from 'pages/NoteList/types';
import { getNotes, getSharedNotes } from 'api/notes';

import { START } from './constants';

const InfinityScrollContainer: FC<TInfinityScrollProps> = ({
  handleSetSelectedNote,
  isShared,
}) => {
  const { data, hasNextPage, fetchNextPage } = isShared
    ? getSharedNotes()
    : getNotes();
  const postData = useSelector(selectPostNotes);

  const dataLength =
    data?.pages.reduce((total, page) => total + page.length, START) || START;

  return (
    <NotesLayoutContainer
      notes={postData}
      dataLength={dataLength}
      hasMore={hasNextPage}
      handleSetSelectedNote={handleSetSelectedNote}
      setNotes={fetchNextPage}
    />
  );
};
export default InfinityScrollContainer;
