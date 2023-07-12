import { HeaderStyled } from './Header.styles';
import { Container } from 'components/Container/Container';
import { Navigation } from './Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthMenu } from './AuthMenu/AuthMenu';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderStyled>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </div>
      </Container>
    </HeaderStyled>
  );
};
