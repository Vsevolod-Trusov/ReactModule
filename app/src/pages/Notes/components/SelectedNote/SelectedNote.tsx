import React, {FC} from 'react';
import Box from '@mui/material/Box/Box';

import { TSelectedNode } from './types';
import { StyledSelectedNode } from './styled';
import { SELECT_NODE } from './constants';

const SelectedNote: FC<TSelectedNode> = () => {

  return (
    <StyledSelectedNode>
        <Box>
          {SELECT_NODE}
        </Box>
    </StyledSelectedNode>
  );
};

export default SelectedNote;
