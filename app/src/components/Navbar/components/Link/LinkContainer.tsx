import { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ExitToApp } from '@mui/icons-material';

import { ILinkContainer } from 'components/Navbar/types';
import { ROUTE } from 'config/constants/routes';
import { INITIAL_STATE, INITIAL_USER_STATE } from 'pages/NoteList/constants';
import { setFilter, setSelectedNote } from 'store/slices/notes.slice';
import { setUser } from 'store/slices/user.slice';
import { INITIAL_FILTER } from 'components/FilterNotes/constants';

import Link from './Link';

const LinkContainer: FC<PropsWithChildren<ILinkContainer>> = ({
  name,
  route,
  isExit,
  isNoteLink,
  isSelectedNow,
  children,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isExit) {
    return (
      <Link
        isSelectedNow={isSelectedNow}
        onClick={() => {
          window.localStorage.clear();
          dispatch(setUser(INITIAL_USER_STATE));
          navigate(ROUTE.SIGN_IN);
        }}
      >
        <ExitToApp />
      </Link>
    );
  }

  return (
    <Link
      name={name}
      isSelectedNow={isSelectedNow}
      onClick={() => {
        if (isNoteLink) {
          localStorage.removeItem('selected');
          dispatch(setFilter(INITIAL_FILTER));
          dispatch(setSelectedNote(INITIAL_STATE));
        }
        navigate(route ? route : ROUTE.NOT_FOUND);
      }}
    >
      {children}
    </Link>
  );
};

export default LinkContainer;
