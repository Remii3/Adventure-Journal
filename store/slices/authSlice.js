import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }) => {
    const response = await signInWithEmailAndPassword(email, password);
    return response.user;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: "idel",
    error: null,
  },
  reducers: {
    signOut(state) {},
  },
  extraReducers: {
    [signIn.pending]: (state) => {
      state.status = "loading";
    },
    [signIn.fulfilled]: (state, action) => {
      state.status = "idle";
      state.user = action.payload;
    },
    [signIn.rejected]: (state, action) => {
      state.status = "idle";
      state.error = action.error.message;
    },
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
