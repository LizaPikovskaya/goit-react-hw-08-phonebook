import { Container } from 'components/Container/Container';
import LoginForm from 'components/LoginForm/LoginForm';
import { MainTitle } from './ContactsPage.styled';

const LoginPage = () => {
  return (
    <section style={{ paddingTop: 40 }}>
      <Container>
        <MainTitle>Log in</MainTitle>
        <LoginForm />
      </Container>
    </section>
  );
};

export default LoginPage;
