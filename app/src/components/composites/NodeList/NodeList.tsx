import React from 'react';
import {
  Box,
  useState,
  NODES,
  TNode,

  itemAlignment,
  itemsBox,
  selectedNodeBox,
  currentItemWrapper,

  DEFAULT_NODE_SHADOW,
  SELECTED_NODE_SHADOW,

  POOR_LINE,
  SELECT_NODE,
  SLICE_POSITION,

  initialState,

  sliceText,
  formatDate,
  isSelected,
} from './index';

const NodeList = () => {
  const [selectedNode, setSelectedNode] = useState<TNode>(initialState);
  const { title, description, dateCreation } = selectedNode;

  return (
    <Box>
      <Box sx={selectedNodeBox}>
        {(title && description && dateCreation) ? (
            <Box>

              <Box>
                Title: {title}
              </Box>

              <Box>
                {sliceText(description, 20)}
              </Box>

              <Box>
                {formatDate(dateCreation)}
              </Box>

            </Box>)
          :
          <Box>
            {SELECT_NODE}
          </Box>
        }
      </Box>
      <Box sx={itemsBox}>
        {
          NODES.map((item: TNode, index: number) => (
            <Box key={index}
                 onClick={() => setSelectedNode(item)}
                 sx={{
                   ...currentItemWrapper,
                   boxShadow:
                     `0 10px 15px -3px ${isSelected(item.title, title) ?
                       SELECTED_NODE_SHADOW :
                       DEFAULT_NODE_SHADOW}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
                 }}
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
    </Box>
  );
};

export default NodeList;
