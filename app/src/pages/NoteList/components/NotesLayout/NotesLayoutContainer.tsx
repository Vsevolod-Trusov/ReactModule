import React, { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';

import { setPostNotes } from 'store/slices/notes.slice';
import { NOTES_LAYOUT_ID } from 'pages/SignIn/constants';
import { Loader } from 'components';

import { IInfinityScroll } from './types';
import { DROPPABLE_ID, NO_NOTES } from './constants';
import {
  StyledNotesLayout,
  StyledLoaderWrapper,
  StyledNotification,
} from './styled';
import NotesLayout from './NotesLayout';

const NotesLayoutContainer: FC<IInfinityScroll> = ({
  notes,
  dataLength,
  handleSetSelectedNote,
  setNotes,
  hasMore,
}) => {
  const dispatch = useDispatch();

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === 'group') {
      const reorderedStores = [...notes];

      const storeSourceIndex = source.index;
      const storeDestinationIndex = destination.index;
      const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
      reorderedStores.splice(storeDestinationIndex, 0, removedStore);
      dispatch(setPostNotes(reorderedStores));
    }
  };

  return (
    <>
      {notes.length ? (
        <DragDropContext onDragEnd={handleDragDrop}>
          <StyledNotesLayout id={NOTES_LAYOUT_ID}>
            <Droppable droppableId={DROPPABLE_ID} type={'group'}>
              {(provided) => (
                <InfiniteScroll
                  dataLength={dataLength}
                  next={setNotes}
                  loader={
                    <StyledLoaderWrapper>
                      <Loader />
                    </StyledLoaderWrapper>
                  }
                  scrollableTarget={NOTES_LAYOUT_ID}
                  hasMore={hasMore || false}
                >
                  <Box {...provided.droppableProps} ref={provided.innerRef}>
                    <NotesLayout
                      notes={notes}
                      handleSetSelectedNote={handleSetSelectedNote}
                    />
                  </Box>
                </InfiniteScroll>
              )}
            </Droppable>
          </StyledNotesLayout>
        </DragDropContext>
      ) : (
        <StyledNotesLayout>
          <StyledNotification>{NO_NOTES}</StyledNotification>
        </StyledNotesLayout>
      )}
    </>
  );
};

export default NotesLayoutContainer;
