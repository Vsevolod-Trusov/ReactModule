import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ILinkContainer } from 'components/Navbar/types';
import { ROUTE } from 'config/constants/routes';
import { INITIAL_STATE } from 'pages/NoteList/constants';
import { setSelectedNote } from 'store/slices/notes.slice';

import Link from './Link';

const LinkContainer: FC<ILinkContainer> = ({
  name,
  route,
  isExit,
  isNoteLink,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isExit) {
    return (
      <Link
        onClick={() => {
          window.localStorage.clear();
          navigate(ROUTE.SIGNIN);
        }}
        name={name}
      />
    );
  }

  return (
    <Link
      onClick={() => {
        if (isNoteLink) {
          localStorage.removeItem('selected');
          dispatch(setSelectedNote(INITIAL_STATE));
        }
        navigate(route ? route : ROUTE.NOT_FOUND);
      }}
      name={name}
    />
  );
};

export default LinkContainer;
