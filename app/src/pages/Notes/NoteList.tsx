import React from 'react';
import Box from '@mui/material/Box/Box';

import SelectedNote from './components/SelectedNote/index';
import { TNodeListProps } from './types';
import { formatDate } from '../../utils/formatDate';
import NotesLayoutContainer from './components/NotesLayout/index';

const NoteList = ({ note, setNotes, notes, setSelectedNode, handleSetSelectedNote }: TNodeListProps) => {

  const dateCreationString = formatDate(note.dateCreation ? note.dateCreation : new Date());

  return (
    <Box>
      <SelectedNote note={note}
                    dateCreation={dateCreationString}
                    setNotes={setNotes}
                    notes={notes} />

      <NotesLayoutContainer title={note.title}
                            notes={notes}
                            setSelectedNode={setSelectedNode}
                            handleSetSelectedNote={handleSetSelectedNote} />
    </Box>
  );
};

export default NoteList;
