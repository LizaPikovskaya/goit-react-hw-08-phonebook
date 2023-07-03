import { Phonebook } from "components/Phonebook/Phonebook";
import { MainTitle, Title } from "./ContactsPage.styled";
import { Filter } from "components/Filter/Filter";
import { Contacts } from "components/Contacts/Contacts";
import { Container } from "components/Container/Container";

const ContactsPage = () => {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <Phonebook />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
    </Container>
  );
};

export default ContactsPage;
