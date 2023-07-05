import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/thunk';
import { Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  return (
    <Wrapper>
      <p>Welcome, {name}!</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};
