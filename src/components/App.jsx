// import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyles/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';


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
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage/>}/>
        </Route>
      </Routes>

      {/* <MainTitle>Phonebook</MainTitle>
      <Phonebook />
      <Title>Contacts</Title>
      <Filter />
      <Contacts /> */}
    </>
  );
};







// <Filter value={filter} onChangeFilter={changeFilter} />;
