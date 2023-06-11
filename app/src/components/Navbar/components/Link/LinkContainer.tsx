import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ILinkContainer } from 'components/Navbar/types';
import { ROUTE } from 'config/routes/routes';

import Link from './Link';
import { LOCALSTORAGE_EMAIL } from './contstants';

const LinkContainer: FC<ILinkContainer> = ({ name, route, isExit }) => {
  const navigate = useNavigate();

  if (isExit) {
    return (
      <Link
        onClick={() => {
          window.localStorage.removeItem(LOCALSTORAGE_EMAIL);
          navigate(ROUTE.MAIN);
        }}
        name={name}
      />
    );
  }

  return (
    <Link
      onClick={() => navigate(route ? route : ROUTE.NOT_FOUND)}
      name={name}
    />
  );
};

export default LinkContainer;
