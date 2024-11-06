import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import accountInfoReducer from './slice/accountInfoSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        accountInfo: accountInfoReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
