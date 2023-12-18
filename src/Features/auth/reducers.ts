import type { PayloadAction } from '@reduxjs/toolkit';
import { AuthInterface } from "./interfaces";

export const loginReducer = (state: AuthInterface) => {
    state.isLogin = true;
};
  
export const logoutReducer = (state: AuthInterface, action: PayloadAction) => {
    state.isLogin = false;

};


