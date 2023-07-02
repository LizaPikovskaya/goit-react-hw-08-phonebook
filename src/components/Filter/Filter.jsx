import { Label } from './Filter.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterUser } from 'redux/filterSlice';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const changeFilter = ({ target }) => {
    setFilter(target.value);
    dispatch(filterUser(target.value));
  };
  return (
    <Label>
      <span>Find contacts by name</span>
      <input type="text" name="filter" value={filter} onChange={changeFilter} />
    </Label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChangeFilter: PropTypes.func,
// };
