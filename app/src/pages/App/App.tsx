import React from 'react';

import {default as Navbar} from '../../components/Navbar/index'

import {
  Outlet,
  Box,

  appStyled,
  navbarStyle,
  navbarWrapper,
  outletStyle,

} from './index';

export const App = () => {
  return (
    <Box className='App'
         sx={appStyled}
    >
      <Box sx={navbarWrapper}>
        <Box sx={navbarStyle}>
          <Navbar />
        </Box>

        <Box sx={outletStyle}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};


