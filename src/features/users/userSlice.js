import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadUsersService } from "../../services";

const loadUsers = createAsyncThunk(
  "/users/loadUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await loadUsersService();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

const initialState = {
  allUsers: [],
  loggedInUser: {},
  loading: false,
  errormessage: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.allUsers = action.payload.users;
      const currentUser = localStorage.getItem("username");
      const filterCurrentUser = action.payload.users.filter(
        (user) => user.username === currentUser
      );
      state.loggedInUser = filterCurrentUser[0];
    });
    builder.addCase(loadUsers.rejected, (state, action) => {
      state.loading = false;
      state.errormessage = action.payload;
    });
  },
});

export default userSlice.reducer;
export { loadUsers };
