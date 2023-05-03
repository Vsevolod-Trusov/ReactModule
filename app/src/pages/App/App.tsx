import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/composites/Navbar/Navbar';
import { appStyled, navbarStyle, navbarWrapper } from './styled';

function App() {
  return (
    <Box className='App'
         sx={appStyled}
    >
      <Box sx={navbarWrapper}>
        <Box sx={navbarStyle}>
          <Navbar />
        </Box>

        <Box sx={{ flex: '0.8' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
