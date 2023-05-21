import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Link from './Link';
import { ILinkContainer } from '../../types';

const LinkContainer:FC<ILinkContainer> = ({name, route}) => {
  const navigate = useNavigate();

  return (
    <Link onClick={() => navigate(route)}
          name={name} />
  );
};

export default LinkContainer;
