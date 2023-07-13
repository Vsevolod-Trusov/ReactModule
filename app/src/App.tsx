import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from 'components';

import { StyledApp, StyledNavbarWrapper, StyledOutlet } from './styled';

const App: FC = () => (
  <StyledApp className='App'>
    <StyledNavbarWrapper>
      <Navbar />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </StyledNavbarWrapper>
  </StyledApp>
);

export default App;
