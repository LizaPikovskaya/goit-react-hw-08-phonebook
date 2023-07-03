import { NavLink } from 'react-router-dom';
import { HeaderStyled } from './Header.styles';
import { Container } from 'components/Container/Container';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log in</NavLink>
        </nav>
      </Container>
    </HeaderStyled>
  );
};
