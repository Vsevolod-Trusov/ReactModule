import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { ILinkContainer } from 'components/Navbar/types';
import { ROUTE } from 'config/constants/routes';
import { INITIAL_STATE, INITIAL_USER_STATE } from 'pages/NoteList/constants';
import { setSelectedNote } from 'store/slices/notes.slice';
import { setUser } from 'store/slices/user.slice';

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
          dispatch(setUser(INITIAL_USER_STATE));
          navigate(ROUTE.SIGNIN);
        }}
      >
        <ExitToAppIcon />
      </Link>
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
