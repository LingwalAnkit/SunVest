import { setCredentials, setLoading, setError ,clearMessages , setSuccessMessage } from './authSlice';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

export const register = (userData) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(clearMessages());
      
      const response = await axios.post(`${API_URL}/signup`, userData);
      
      dispatch(setCredentials({
        user: response.data.user,
        token: response.data.token,
      }));
      
      dispatch(setSuccessMessage('Registration successful! Redirecting...'));
      
      return response.data;
    } catch (error) {
      dispatch(setError(error.response?.data?.message || 'Registration failed'));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
  
  export const login = (credentials) => async (dispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(clearMessages());
      
      const response = await axios.post(`${API_URL}/login`, credentials);
      
      dispatch(setCredentials({
        user: response.data.user,
        token: response.data.token,
      }));
      
      dispatch(setSuccessMessage('Login successful! Redirecting...'));
      
      return response.data;
    } catch (error) {
      dispatch(setError(error.response?.data?.message || 'Login failed'));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };