import React, { FC } from 'react';
import Box from '@mui/material/Box';
import InfiniteScroll from 'react-infinite-scroll-component';

import { TNote } from 'pages/Notes/types';
import { EMPTY_LINE, SLICE_POSITION } from 'pages/Notes/constants';
import { sliceText } from 'utils/formatText';
import { formatDate } from 'utils/formatDate';

import { IInfinityScroll, INodesLayout } from './types';
import { StyledNotesLayout, StyledNote, StyledOutputLine } from './styled';

const NotesLayoutContainer: FC<IInfinityScroll> = ({ notes, handleSetSelectedNote, setNotes, hasMore }) => {
  /*   const handleIsSelected = (item: TNote, title: string) => (
     {
       ...currentItemWrapper,
       boxShadow: `0 10px 15px -3px ${isSelected(item.title, title) ?
         SELECTED_NODE_SHADOW :
         DEFAULT_NODE_SHADOW}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
     })*/

  return (
    <StyledNotesLayout id={'asd'}>
      <InfiniteScroll
        dataLength={notes.length}
        next={setNotes}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget={'asd'}
      >
      {
        notes.map((item: TNote) => (
          <StyledNote key={item.id}
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
        ))
      }
      </InfiniteScroll>
    </StyledNotesLayout>
  );
};

export default NotesLayoutContainer
