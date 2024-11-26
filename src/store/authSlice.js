import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('user/login', {
        email: credentials.email,
        password: credentials.password,
      });
      const token = response.data.body.token;

      // Stock le token en fonction du "Remember me"
      if (credentials.rememberMe) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }
      return token;
    } catch (error) {
      let errorMessage = 'An error occurred';

      if (error.response) {
        const status = error.response.status;

        if (status === 401) {
          errorMessage = 'Invalid email or password';
        } else if (status === 503) {
          errorMessage = 'Service unavailable. Please try again later.';
        } else {
          errorMessage = `Error ${status}: ${error.response.data.message || 'An error occurred'}`;
        }
      } else if (error.request) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else {
        errorMessage = error.message;
      }

      console.error('Login error:', errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('user/profile');
      return response.data.body;
    } catch (error) {
      let errorMessage = 'An error occurred';

      if (error.response) {
        const status = error.response.status;

        if (status === 401) {
          errorMessage = 'Session expired. Please log in again.';
          thunkAPI.dispatch(logout());
        } else if (status === 503) {
          errorMessage = 'Service unavailable. Please try again later.';
        } else {
          errorMessage = `Error ${status}: ${error.response.data.message || 'An error occurred'}`;
        }
      } else if (error.request) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else {
        errorMessage = error.message;
      }

      console.error('Error fetching user profile:', errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async (updatedData, thunkAPI) => {
    try {
      const response = await axios.put('user/profile', updatedData);
      return response.data.body;
    } catch (error) {
      let errorMessage = 'An error occurred';

      if (error.response) {
        const status = error.response.status;

        if (status === 401) {
          errorMessage = 'Session expired. Please log in again.';
          thunkAPI.dispatch(logout());
        } else if (status === 503) {
          errorMessage = 'Service unavailable. Please try again later.';
        } else {
          errorMessage = `Error ${status}: ${error.response.data.message || 'An error occurred'}`;
        }
      } else if (error.request) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else {
        errorMessage = error.message;
      }

      console.error('Error updating user profile:', errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const initialState = {
  token:
    localStorage.getItem('token') ||
    sessionStorage.getItem('token') ||
    null,
  user: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Logs out the user by removing the token from local storage and session
     * storage, and setting the user and token to null in the state.
     * @function
     */
    logout(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
    },
  },

  extraReducers: (builder) => {
    builder
      // Actions pour loginUser
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Actions pour fetchUserProfile
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload; // Met à jour les info utilisateur
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Actions pour updateUserProfile
      .addCase(updateUserProfile.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = {
          ...state.user,
          ...action.payload,
        };
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;