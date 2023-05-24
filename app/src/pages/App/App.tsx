import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import {default as NavbarContainer} from 'components/Navbar/index'

import { StyledApp, StyledNavbarWrapper, StyledOutlet } from './styled';

const App: FC = () => (
    <StyledApp className='App'>
      <StyledNavbarWrapper>
          <NavbarContainer />

        <StyledOutlet>
          <Outlet />
        </StyledOutlet>
      </StyledNavbarWrapper>
    </StyledApp>
  );

export default App

