import { Wrapper } from 'components/Phonebook/Phonebook.styled';
import { List } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { deleteContact, fetchContacts } from 'redux/thunk';
import { DeletingLoader } from 'components/Loader/Loader';

export const Contacts = () => {
  const [idToDelete, setIdToDelete] = useState(null);
  const { items, isDeleting, error } = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filterUser = () => {
    return items?.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const visibleUsers = filterUser();
  return (
    <Wrapper>
      {/* {isLoading && <Loader />} */}
      {error && <p>{error}</p>}
      {items && (
        <List>
          {visibleUsers?.map(({ id, name, phone }) => (
            <li key={id}>
              {name}: {phone}
              <button
                type="button"
                onClick={() => {
                  setIdToDelete(id);
                  dispatch(deleteContact(id)).then(() => {
                    setIdToDelete(null);
                  });
                }}
              >
                {isDeleting && idToDelete === id ? (
                  <DeletingLoader />
                ) : (
                  'Delete'
                )}
              </button>{' '}
            </li>
          ))}
        </List>
      )}
    </Wrapper>
  );
};
