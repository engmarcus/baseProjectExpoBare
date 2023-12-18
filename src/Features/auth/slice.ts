import { createSlice } from "@reduxjs/toolkit"
import { getItensApi } from './Thunks/thunks';
import { initialState } from './initialState';

import { 
  loginReducer, 
  logoutReducer 
} from './reducers';

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: loginReducer,
      logout: logoutReducer,
    },
    extraReducers(builder) {
      getItensApi(builder)
    },
});

export const { 
  login, 
  logout 
} = authSlice.actions;
export const authReducer = authSlice.reducer;