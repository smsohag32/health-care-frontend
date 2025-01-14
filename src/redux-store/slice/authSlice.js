import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { loginApi } from "../api/loginApi";
import { deleteCookie, getCookie, setCookie } from "@/utils/helper";
const getPersistedToken = getCookie("hc-token");
const getPersistedUser = JSON.parse(getCookie("hc-user"));

const initialState = {
   token: getPersistedToken || null,
   user: getPersistedUser || null,
   isLoading: false,
   error: null,
};

export const loginUser = createAsyncThunk(
   "auth/loginUser",
   async (credentials, { rejectWithValue }) => {
      try {
         const response = await loginApi(credentials);
         return response?.data;
      } catch (error) {
         return rejectWithValue(error.message || "Login failed");
      }
   }
);

// AUTH slice
const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      logoutUser: (state) => {
         state.token = null;
         state.user = null;
         deleteCookie("hc-token");
         deleteCookie("hc-user");
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(loginUser.fulfilled, (state, action) => {
            console.log("action", action?.payload);
            const { token, user } = action.payload;
            state.isLoading = false;
            state.token = token;
            state.user = user;
            if (token) setCookie("hc-token", token);
            if (user) setCookie("hc-user", JSON.stringify(user));
         })
         .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || "Login failed";
         });
   },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
