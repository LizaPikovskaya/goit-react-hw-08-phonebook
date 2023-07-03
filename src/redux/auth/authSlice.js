import { createSlice } from "@reduxjs/toolkit";
import { register } from "./thunk";

const initialState = {
    user: {name: '', email: ''},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      });
}
})


export const authReducer = authSlice.reducer