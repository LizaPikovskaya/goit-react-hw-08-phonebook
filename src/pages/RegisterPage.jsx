import { Container } from 'components/Container/Container';
import RegistratonForm from 'components/RegistrationForm/RegistrationForm';
import { MainTitle, Title } from './ContactsPage.styled';

const RegisterPage = () => {
  return (
    <section style={{ paddingTop: 40 }}>
      <Container>
        <MainTitle>Registration</MainTitle>
        <RegistratonForm />
      </Container>
    </section>
  );
};
export default RegisterPage;
