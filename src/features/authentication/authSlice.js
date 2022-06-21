import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, signupService } from "../../services";

const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await loginService(userDetails);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userSignup = createAsyncThunk(
  "/auth/userSignup",
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await signupService(userDetails);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  encodedToken: localStorage.getItem("encodedToken")
    ? localStorage.getItem("encodedToken")
    : "",
  userAccountName: localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "",
  loading: false,
  errormessage: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.encodedToken = "";
      state.userAccountName = "";
      localStorage.removeItem("encodedToken");
      localStorage.removeItem("username");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.errormessage = "";
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.errormessage = "";
      state.encodedToken = action.payload.encodedToken;
      state.userAccountName = action.payload.foundUser.username;
      localStorage.setItem("encodedToken", state.encodedToken);
      localStorage.setItem("username", state.userAccountName);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.errormessage = action.payload.errors[0];
    });
    builder.addCase(userSignup.pending, (state) => {
      state.loading = true;
      state.errormessage = "";
    });
    builder.addCase(userSignup.fulfilled, (state, action) => {
      state.loading = false;
      state.errormessage = "";
      state.encodedToken = action.payload.encodedToken;
      state.userAccountName = action.payload.createdUser.username;
      localStorage.setItem("encodedToken", state.encodedToken);
      localStorage.setItem("username", state.userAccountName);
    });
    builder.addCase(userSignup.rejected, (state, action) => {
      state.loading = false;
      state.errormessage = action.payload.errors[0];
    });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
export { userLogin, userSignup };
