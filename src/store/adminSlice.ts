import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Admin {
  password: string;
  isAdmin: boolean;
}

const getAdminFromLocalStorage = (): Admin | null => {
  const adminData = localStorage.getItem('admin');
  if (adminData) {
    return JSON.parse(adminData);
  }
  return null;
};

const saveAdminToLocalStorage = (admin: Admin) => {
  localStorage.setItem('admin', JSON.stringify(admin));
};

const initialState: Admin = getAdminFromLocalStorage() || {
  password: '1',
  isAdmin: false,
};

export const AdminState = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin(state, action: PayloadAction<boolean>) {
      const isAdmin = action.payload;
      state.isAdmin = isAdmin;
      saveAdminToLocalStorage(state);
    },
    willLogOut(state) {
      state.isAdmin = false;
      saveAdminToLocalStorage(state);
    },
  },
});

export const adminActions = AdminState.actions;
export const adminReducer = AdminState.reducer;
