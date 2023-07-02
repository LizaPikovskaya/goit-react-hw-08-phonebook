
// import { useState, useEffect } from 'react';
import { Container } from './Container/Container';
import { GlobalStyle } from './GlobalStyles/GlobalStyles';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Title, MainTitle } from './App.styled';

// const LOCAL_STORAGE_KEY = 'contacts';
export const App = () => {
  // const [contacts, setContacts] = useState(() =>
  //   JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? [])
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // const addUser = ({ name, number }) => {
  //   const userId = nanoid();
  //   const user = {
  //     id: userId,
  //     name,
  //     number,
  //   };
  //   const arrayOfNames = [];
  //   contacts.forEach(user => {
  //     arrayOfNames.push(user.name.toLowerCase());
  //   });
  //   if (arrayOfNames.includes(user.name.toLowerCase())) {
  //     alert(`${user.name} is already in contacts.`);
  //     return;
  //   } else {
  //     setContacts(prevState => {
  //       return [user, ...prevState];
  //     });
  //   }
  // };
  // const deleteUser = id => {
  //   setContacts(prevState => prevState.filter(user => user.id !== id));
  // };
  // const changeFilter = ({ target }) => {
  //   // setFilter(target.value);
  //   dispatchEvent(filterUser(target.value));
  // };
  // const filterUser = () => {
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };
  // const visibleUsers = filterUser();
  return (
    <Container>
      <GlobalStyle />
      <MainTitle>Phonebook</MainTitle>
      <Phonebook />
      <Title>Contacts</Title>
      <Filter/>
      <Contacts />
    </Container>
  );
};


      // <Filter value={filter} onChangeFilter={changeFilter} />;


