import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Admin {
    password: string;
    isAdmin: boolean;
}

const initialState: Admin = {
    password: '12345678910',
    isAdmin: false,
}

export const AdminState = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdmin(state, action: PayloadAction<boolean>) {
            const isAdmin = action.payload;
            state.isAdmin = isAdmin;
        },
    }
})

export const adminActions = AdminState.actions;
export const adminReducer = AdminState.reducer;

