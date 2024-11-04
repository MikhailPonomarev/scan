import { RootState } from '../store';

export const selectAuthState = (state: RootState) => state.auth;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectExpire = (state: RootState) => state.auth.expire;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectError = (state: RootState) => state.auth.error;
