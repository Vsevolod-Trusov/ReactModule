import React from 'react';
import { useNavigate } from 'react-router-dom';
import Link from './Link';
import { NODES } from '../../../../pages/constants';

const LinkContainer = () => {
  const navigate = useNavigate();

  return (
    <Link onClick={() => navigate('/nodes')}
          name={NODES} />
  );
};

export default LinkContainer;
