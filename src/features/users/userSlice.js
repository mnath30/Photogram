import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loadUsersService,
  followUserService,
  unfollowUserService,
} from "../../services";

// Load all users
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

// Folloing users
const followUser = createAsyncThunk(
  "/users/followUser",
  async ({ userId, encodedToken }, { rejectWithValue }) => {
    try {
      const response = await followUserService(userId, encodedToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Unfollowing users
const unfollowUser = createAsyncThunk(
  "/users/unfollowUser",
  async ({ userId, encodedToken }, { rejectWithValue }) => {
    try {
      const response = await unfollowUserService(userId, encodedToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  allUsers: [],
  loggedInUser: {},
  loading: false,
  errormessage: "",
  bookmarks: [],
  bookmarkLoading: false,
  bookmarkError: "",
  followUserloading: false,
  followUserError: "",
  unfollowUserloading: false,
  unfollowUserError: "",
  following: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Loading all users
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
    // Following users
    builder.addCase(followUser.pending, (state) => {
      state.followUserloading = true;
      state.followUserError = "";
    });
    builder.addCase(followUser.fulfilled, (state, action) => {
      state.followUserloading = false;
      state.following.unshift(action.payload.followUser);
      state.loggedInUser = action.payload.user;
      state.followUserError = "";
    });
    builder.addCase(followUser.rejected, (state, action) => {
      state.followUserloading = false;
      state.followUserError = action.payload.errors[0];
    });
    // Unfollowing users
    builder.addCase(unfollowUser.pending, (state) => {
      state.unfollowUserloading = true;
      state.unfollowUserError = "";
    });
    builder.addCase(unfollowUser.fulfilled, (state, action) => {
      state.unfollowUserloading = false;
      state.loggedInUser = action.payload.user;
      state.unfollowUserError = "";
      state.following = state.following.filter(
        (user) => user.username !== action.payload.followUser.username
      );
    });
    builder.addCase(unfollowUser.rejected, (state, action) => {
      state.unfollowUserloading = false;
      state.unfollowUserError = action.payload.errors[0];
    });
  },
});

export default userSlice.reducer;
export { loadUsers, followUser, unfollowUser };
