import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizeReponse, AuthorizeRequest } from '../model/authModel';

const accessTokenKey = 'accessToken';
const expireKey = 'expire';

interface AuthState {
    [accessTokenKey]: string | null;
    [expireKey]: string | null;
    isLoading: boolean;
    isAuthorized: boolean;
    error: string | null;
}

const initialState: AuthState = {
    [accessTokenKey]: localStorage.getItem(accessTokenKey) || null,
    [expireKey]: localStorage.getItem(expireKey) || null,
    isLoading: false,
    isAuthorized: localStorage.getItem(accessTokenKey) ? true : false,
    error: null,
};

export const authorize = createAsyncThunk(
    'auth/authorize',
    async (credintials: AuthorizeRequest, { rejectWithValue }) => {
        try {
            const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credintials),
            });

            if (!response.ok) {
                throw new Error('Authorization failed');
            }

            const data = await response.json();
            return data;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    },
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state[accessTokenKey] = null;
            state[expireKey] = null;
            state.isAuthorized = false;
            state.error = null;

            localStorage.removeItem(accessTokenKey);
            localStorage.removeItem(expireKey);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authorize.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(authorize.fulfilled, (state, action: PayloadAction<AuthorizeReponse>) => {
                state.isLoading = false;
                state.accessToken = action.payload.accessToken;
                state.expire = action.payload.expire;
                state.isAuthorized = true;

                localStorage.setItem(accessTokenKey, state.accessToken);
                localStorage.setItem(expireKey, state.expire);
            })
            .addCase(authorize.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
