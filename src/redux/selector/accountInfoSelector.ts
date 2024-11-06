import { RootState } from '../store';

export const selectUsedCompanyCount = (state: RootState) => state.accountInfo.usedCompanyCount;
export const selectCompanyLimit = (state: RootState) => state.accountInfo.companyLimit;
