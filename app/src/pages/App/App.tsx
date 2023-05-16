import React from 'react';

import {default as NavbarContainer} from '../../components/Navbar/index'

import {
  Outlet,
  Box,

  appStyled,
  navbarWrapper,
  outletStyle,

} from './index';

export const App = () => {
  return (
    <Box className='App'
         sx={appStyled}
    >
      <Box sx={navbarWrapper}>
          <NavbarContainer />

        <Box sx={outletStyle}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};


