import React from 'react';
import { useNavigate } from 'react-router-dom';

import Link from './Link';
import { NODES } from '../../../../pages/constants';
import { ROUTE } from '../../../../config/routes/routes';

const LinkContainer = () => {
  const navigate = useNavigate();

  return (
    <Link onClick={() => navigate(ROUTE.NOTES)}
          name={NODES} />
  );
};

export default LinkContainer;
