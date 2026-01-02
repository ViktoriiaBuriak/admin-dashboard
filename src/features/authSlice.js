import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      const { user, token } = action.payload;

      state.user = {
        ...user,
        avatar: null,
      };
      state.token = token;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    updateUserName(state, action) {
      if (!state.user) return;
      state.user.name = action.payload;
    },
    updateUserAvatar(state, action) {
      if (!state.user) return;
      state.user.avatar = action.payload;
    },
  },
});

export const { loginSuccess, logout, updateUserName, updateUserAvatar } = authSlice.actions;
export default authSlice.reducer;
