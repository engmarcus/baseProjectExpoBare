import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { UsetesteApi } from '@/Services/testeApi'
import { authReducer } from '../Features/auth/slice';
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer : {
        'auth': authReducer,
        [UsetesteApi.reducerPath] : UsetesteApi.reducer
    },
    middleware :(getDefaultMiddleware) => getDefaultMiddleware().concat(UsetesteApi.middleware)

})

setupListeners(store.dispatch);

export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;