import React, { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';

import { setPostNotes } from 'store/slices/notes.slice';
import { NOTES_LAYOUT_ID } from 'pages/SignIn/constants';

import { IInfinityScroll } from './types';
import { DROPPABLE_ID } from './constants';
import {
  StyledNotesLayout,
  StyledNotesWrapper,
  StyledLoaderWrapper,
} from './styled';
import NotesLayout from './NotesLayout';

const NotesLayoutContainer: FC<IInfinityScroll> = ({
  notes,
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
      const storeDestinatonIndex = destination.index;
      const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
      reorderedStores.splice(storeDestinatonIndex, 0, removedStore);
      dispatch(setPostNotes(reorderedStores));
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      <StyledNotesLayout id={NOTES_LAYOUT_ID}>
        <Droppable droppableId={DROPPABLE_ID} type={'group'}>
          {(provided) => (
            <InfiniteScroll
              dataLength={notes?.length}
              next={setNotes}
              hasMore={hasMore}
              loader={
                <StyledLoaderWrapper>
                  <CircularProgress />
                </StyledLoaderWrapper>
              }
              scrollableTarget={NOTES_LAYOUT_ID}
              style={{ overflow: 'none' }}
            >
              <StyledNotesWrapper
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <NotesLayout
                  notes={notes}
                  handleSetSelectedNote={handleSetSelectedNote}
                />
              </StyledNotesWrapper>
            </InfiniteScroll>
          )}
        </Droppable>
      </StyledNotesLayout>
    </DragDropContext>
  );
};
export default NotesLayoutContainer;
