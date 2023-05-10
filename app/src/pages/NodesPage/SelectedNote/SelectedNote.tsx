import React from 'react';
import {
  Box,
  EditNodeForm,
  editWrapper,
  formatDate, SELECT_NODE,
  selectedNodeBox,
  TNode,
} from '../NodeList';
import { TSelectedNode } from './types';

export const SelectedNote = ({ title, description, dateCreation, setNotes, notes }: TSelectedNode) => {
  return (
    <Box sx={selectedNodeBox}>
      {(title && description && dateCreation) ? (
          <Box>

            <Box sx={editWrapper}>
              <EditNodeForm nodeTitle={title}
                            nodeDate={formatDate(dateCreation)}
                            nodeText={description}
                            setNotes={setNotes}
                            notes={notes}
                            selectedNoteIndex={notes.findIndex((item: TNode) => (item.title === title))}

              />
            </Box>
          </Box>)
        :
        <Box>
          {SELECT_NODE}
        </Box>
      }
    </Box>
  );
};

export default SelectedNote;
