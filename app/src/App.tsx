import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/composites/Navbar/Navbar';

function App() {
  return (
    <Box className='App'
         sx={{
           fontFamily: 'Montserrat'
         }}
    >
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: '0.2' }}>
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
