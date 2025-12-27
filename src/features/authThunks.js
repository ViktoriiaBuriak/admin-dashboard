import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../services/auth.service";
import { loginSuccess } from "./authSlice";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { dispatch }) => {
    const data = await authService.login(credentials);
    dispatch(loginSuccess(data));
  }
);
