import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountInfoResponse } from '../model/accountInfoModel';

interface AccountInfoState {
    usedCompanyCount: number | null;
    companyLimit: number | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AccountInfoState = {
    usedCompanyCount: null,
    companyLimit: null,
    isLoading: false,
    error: null,
};

export const getAccountInfo = createAsyncThunk(
    'account/info',
    async (accessToken: string, { rejectWithValue }) => {
        try {
            const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/info', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                throw new Error('Account info can`t be fetched');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

const accountInfoSlice = createSlice({
    name: 'accountInfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAccountInfo.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAccountInfo.fulfilled, (state, action: PayloadAction<AccountInfoResponse>) => {
            state.isLoading = false;
            state.usedCompanyCount = action.payload.eventFiltersInfo.usedCompanyCount;
            state.companyLimit = action.payload.eventFiltersInfo.companyLimit;
        })
        .addCase(getAccountInfo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        });
    },
});

export default accountInfoSlice.reducer;