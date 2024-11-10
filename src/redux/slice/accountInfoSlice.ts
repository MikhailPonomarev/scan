import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountInfoResponse } from '../model/accountInfoModel';

const usedCompanyKey = 'usedCompanyCount';
const companyLimitKey = 'companyLimit';

interface AccountInfoState {
    [usedCompanyKey]: number | null;
    [companyLimitKey]: number | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AccountInfoState = {
    usedCompanyCount:
        Number(localStorage.getItem(usedCompanyKey)) === 0
            ? 0
            : Number(localStorage.getItem(usedCompanyKey)),
    companyLimit:
        Number(localStorage.getItem(companyLimitKey)) === 0
            ? 0
            : Number(localStorage.getItem(companyLimitKey)),
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
        builder
            .addCase(getAccountInfo.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                getAccountInfo.fulfilled,
                (state, action: PayloadAction<AccountInfoResponse>) => {
                    state.isLoading = false;
                    state[usedCompanyKey] = action.payload.eventFiltersInfo.usedCompanyCount;
                    state[companyLimitKey] = action.payload.eventFiltersInfo.companyLimit;

                    localStorage.setItem(usedCompanyKey, state[usedCompanyKey].toString());
                    localStorage.setItem(companyLimitKey, state[companyLimitKey].toString());
                },
            )
            .addCase(getAccountInfo.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export default accountInfoSlice.reducer;
