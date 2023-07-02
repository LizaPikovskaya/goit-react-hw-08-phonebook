import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './thunk';
import {
  handlerAddContactFulfilled,
  handlerDeleteContactFulfilled,
  handlerError,
  handlerFetchContactsFulfilled,
  handlerPendingAdd,
  handlerPendingDelete,
} from './builderAsyncReducers';

const arrayTHunk = [fetchContacts, deleteContact, addContact];
const handlerActionCreatorByStatus = (type) => {
  return arrayTHunk.map(item => item[type])
}
const contactsInitialState = {
  items: [],
  isAdding: false,
  isDeleting: false,
  // isLoading: false,
  error: null,
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handlerFetchContactsFulfilled)
      .addCase(deleteContact.fulfilled, handlerDeleteContactFulfilled)
      .addCase(addContact.fulfilled, handlerAddContactFulfilled)
      .addCase(deleteContact.pending, handlerPendingDelete)
      .addCase(addContact.pending, handlerPendingAdd)
      .addMatcher(
        isAnyOf(...handlerActionCreatorByStatus('rejected')),
        handlerError
      );
  }





  // =======WITHOUT BUILDER========

  // extraReducers: {
  //   [fetchContacts.pending]: (state, action) => {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  //   [fetchContacts.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [deleteContact.pending]: (state, action) => {
  //     state.isLoading = true;
  //   },
  //   [deleteContact.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(({ id }) => id === action.payload.id);
  //     state.items.splice(index, 1);
  //   },
  //   [deleteContact.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [addContact.pending]: (state, action) => {
  //     state.isLoading = true;
  //   },
  //   [addContact.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     console.log(action.payload);
  //     state.items.push(action.payload);
  //   },
  //   [addContact.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const contactsReducer = contactsSlice.reducer;
