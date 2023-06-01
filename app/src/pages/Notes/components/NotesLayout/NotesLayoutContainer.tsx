import React, { FC, useEffect } from 'react';
import Box from '@mui/material/Box';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

import { selectPostNotes } from 'config/redux/slices/notes.slice';
import { TNote } from 'pages/Notes/types';
import { EMPTY_LINE, SLICE_POSITION } from 'pages/Notes/constants';
import { NOTES_LAYOUT_ID } from 'pages/SignIn/constants';
import { sliceText } from 'utils/formatText';
import { formatDate } from 'utils/formatDate';

import { IInfinityScroll} from './types';
import { StyledNotesLayout, StyledNote, StyledOutputLine } from './styled';


const NotesLayoutContainer: FC<IInfinityScroll> = ({ notes, handleSetSelectedNote, setNotes, hasMore }) => {

  /* const handleIsSelected = (item: TNote, title: string) => (
     {
       ...currentItemWrapper,
       boxShadow: `0 10px 15px -3px ${isSelected(item.title, title) ?
         SELECTED_NODE_SHADOW :
         DEFAULT_NODE_SHADOW}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
     })*/

  return (
    <StyledNotesLayout id={NOTES_LAYOUT_ID}>
      <InfiniteScroll
        dataLength={notes.length}
        next={setNotes}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget={NOTES_LAYOUT_ID}
      >
      {
        notes.map((item: TNote) => (
          <StyledNote key={uuidv4()}
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
