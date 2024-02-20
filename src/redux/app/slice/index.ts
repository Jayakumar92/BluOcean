import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSliceStateProps } from '../interfaces'

const initialState: AppSliceStateProps = {
    token: undefined,
    isAuthenticated: false
};

const AppSlice = createSlice({
    name: 'APP_REDUCER',
    initialState,
    reducers: {
        saveToken: (state: AppSliceStateProps, action: PayloadAction<string | undefined>) => {
            state.token = action.payload;
        },
        setIsAuthenticated: (state: AppSliceStateProps, action: PayloadAction<any>) => {
            state.isAuthenticated = action.payload;
        },
    }
})

const APP_REDUCER = AppSlice.reducer;
export const { saveToken, setIsAuthenticated } = AppSlice.actions;
export { APP_REDUCER }