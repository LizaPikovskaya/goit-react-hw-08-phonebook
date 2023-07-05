import { Phonebook } from "components/Phonebook/Phonebook";
import { MainTitle, Title } from "./ContactsPage.styled";
import { Filter } from "components/Filter/Filter";
import { Contacts } from "components/Contacts/Contacts";
import { Container } from "components/Container/Container";
import { useSelector } from "react-redux";
import { selectLoading } from "redux/auth/selectors";
import { Loader } from "components/Loader/Loader";

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading)
  return (
    <section style={{paddingTop: 40}}>
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <Phonebook />
        <Title>Contacts</Title>
        <Filter />
        <Contacts />
      </Container>
    </section>
  );
};

export default ContactsPage;
