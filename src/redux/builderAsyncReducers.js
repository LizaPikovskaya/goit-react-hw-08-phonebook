export const handlerPendingDelete = state => {
  state.isDeleting = true;
};
export const handlerPendingAdd = state => {
  state.isAdding = true;
};
export const handlerError = (state, action) => {
  state.isDeleting = false;
  state.isAdding = false;
  state.error = action.payload;
};
export const handlerFetchContactsFulfilled = (state, action) => {
  state.items = action.payload;
  state.isDeleting = false;
  state.isAdding = false;
  state.error = null;
};
export const handlerAddContactFulfilled = (state, action) => {
  state.isDeleting = false;
  state.isAdding = false;
  state.error = null;
  state.items.push(action.payload);
};
export const handlerDeleteContactFulfilled = (state, action) => {
  state.isDeleting = false;
  state.isAdding = false;
  state.error = null;
  const index = state.items.findIndex(({ id }) => id === action.payload.id);
  state.items.splice(index, 1);
};
