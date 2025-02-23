import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  auth: any;
  user: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  auth: null, // Added default value
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
