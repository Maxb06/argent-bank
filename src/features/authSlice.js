import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state) {
      state.token = null;
      state.user = null;
    },
    // Ajout d'autres actions si besoin
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;