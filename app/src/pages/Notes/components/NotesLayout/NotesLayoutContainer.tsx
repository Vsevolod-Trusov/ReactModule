import React, { FC, useEffect } from 'react';
import Box from '@mui/material/Box';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { TNote } from 'pages/Notes/types';
import { EMPTY_LINE, SLICE_POSITION } from 'pages/Notes/constants';
import { NOTES_LAYOUT_ID } from 'pages/SignIn/constants';
import { sliceText } from 'utils/formatText';
import { formatDate } from 'utils/formatDate';

import { IInfinityScroll } from './types';
import { StyledNotesLayout, StyledNote, StyledOutputLine } from './styled';
import { setPostNotes, setReduxNotes } from '../../../../config/redux/slices/notes.slice';
import { useDispatch } from 'react-redux';


const NotesLayoutContainer: FC<IInfinityScroll> = ({ notes, handleSetSelectedNote, setNotes, hasMore }) => {

  const dispatch = useDispatch()
  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedStores = [...notes];

      const storeSourceIndex = source.index;
      const storeDestinatonIndex = destination.index;
      const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
      reorderedStores.splice(storeDestinatonIndex, 0, removedStore);
    dispatch(setPostNotes(reorderedStores));
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      <StyledNotesLayout id={NOTES_LAYOUT_ID}>

          <Droppable droppableId={'ROOT'} type={'group'}>
            {
              (provided) => (
                <InfiniteScroll
                  dataLength={notes.length}
                  next={setNotes}
                  hasMore={hasMore}
                  loader={<h4>Loading...</h4>}
                  scrollableTarget={NOTES_LAYOUT_ID}

                  style={{overflow: 'none'}}
                >
                <Box {...provided.droppableProps} ref={provided.innerRef}>
                  {
                    notes.map((item: TNote, index) => {
                      return (
                        <Draggable draggableId={item.testId} key={item.testId} index={index}>
                          {
                            (provided) => (
                              <Box {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                              >
                                <StyledNote
                                  onClick={() => handleSetSelectedNote && handleSetSelectedNote(item)}
                                >
                                  <Box>
                                    Title: {item.title}
                                  </Box>

                                  <StyledOutputLine>
                                    {
                                      sliceText(item.description, SLICE_POSITION)
                                    }
                                  </StyledOutputLine>

                                  <StyledOutputLine>
                                    {
                                      item.dateCreation ? formatDate(new Date(item.dateCreation)) : EMPTY_LINE
                                    }
                                  </StyledOutputLine>
                                </StyledNote>
                              </Box>
                            )
                          }
                        </Draggable>
                      )
                    })
                  }
                </Box>
                </InfiniteScroll>
              )
            }
          </Droppable>
      </StyledNotesLayout>
    </DragDropContext>
  );
};

export default NotesLayoutContainer;

