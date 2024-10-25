import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    loading: false,
    error: null,
    successMessage: null, // Add this
  };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      localStorage.setItem('token', token);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
    setSuccessMessage: (state, action) => {
        state.successMessage = action.payload;
    },
    clearMessages: (state) => {
        state.error = null;
        state.successMessage = null;
    },
  },
});

export const { setCredentials, setLoading, setError, logout , setSuccessMessage , clearMessages} = authSlice.actions;
export default authSlice.reducer;