import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ?  <NavLink to="/contacts">Contacts</NavLink> : <></>}
    </nav>
  );
};
