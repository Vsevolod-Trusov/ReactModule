import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectFirstName, selectUser } from 'store/slices/user.slice';
import { ROUTE } from 'config/constants/routes';

import Profile from './Profile';
import { ProfileWrapper } from './styled';
import { LOCAL_STARAGE_NAMES } from 'config/globalConstants';

const ProfileContainer = () => {
  const firstname = useSelector(selectFirstName);
  const { id, password, ...user } = useSelector(selectUser);
  const savedUser = JSON.parse(
    window.localStorage.getItem(LOCAL_STARAGE_NAMES.USER),
  );

  if (!savedUser || !firstname) {
    return <Navigate to={ROUTE.SIGN_IN} />;
  }

  return (
    <ProfileWrapper>
      <Profile {...user} />
    </ProfileWrapper>
  );
};

export default ProfileContainer;
