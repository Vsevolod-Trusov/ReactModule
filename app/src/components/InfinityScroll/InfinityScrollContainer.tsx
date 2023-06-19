import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectPostNotes } from 'store/slices/notes.slice';
import NotesLayoutContainer from 'pages/NoteList/components/NotesLayout';
import { TInfinityScrollProps } from 'pages/NoteList/types';
import { getNotes, getSharedNotes } from 'api/notes';

const InfinityScrollContainer: FC<TInfinityScrollProps> = ({
  handleSetSelectedNote,
  isShared,
}) => {
  const { data, hasNextPage, fetchNextPage } = isShared
    ? getSharedNotes()
    : getNotes();
  const postData = useSelector(selectPostNotes);

  const dataLength =
    data?.pages.reduce((total, page) => total + page.length, 0) || 0;

  return (
    <NotesLayoutContainer
      notes={postData}
      dataLength={dataLength}
      handleSetSelectedNote={handleSetSelectedNote}
      setNotes={fetchNextPage}
      hasMore={hasNextPage}
    />
  );
};
export default InfinityScrollContainer;
