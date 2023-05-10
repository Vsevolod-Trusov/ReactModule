import React from 'react';
import {
  Box,
  formatDate,
  handleSelectNode,
  itemAlignment,
  itemsBox, POOR_LINE,
  SLICE_POSITION, sliceText,
  TNode,
} from '../NodeList';
import { INodesLayout } from './interfaces';
import { handleIsSelected } from './api/nodesLayout.api';

export const NodesLayout = ({ notes, setSelectedNode, title }: INodesLayout) => {

  return (
    <Box sx={itemsBox}>
      {
        notes.map((item: TNode, index: number) => (
          <Box key={index}
               onClick={() => handleSelectNode(item, setSelectedNode)}
               sx={handleIsSelected(item, title)}
          >
            <Box>
              Title: {item.title}
            </Box>

            <Box sx={itemAlignment}>
              {
                sliceText(item.description, SLICE_POSITION)
              }
            </Box>

            <Box sx={itemAlignment}>
              {
                item.dateCreation ? formatDate(item.dateCreation) : POOR_LINE
              }
            </Box>
          </Box>
        ))
      }
    </Box>
  );
};

