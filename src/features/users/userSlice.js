import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loadUsersService,
  editProfileService,
  followUserService,
  unfollowUserService,
  addBookmarkService,
  removeBookmarkService,
  getUserBookmarksService,
  getUserDetailsService,
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

// Edit user profile
const editProfile = createAsyncThunk(
  "/users/editProfile",
  async ({ userData, encodedToken }, { rejectWithValue }) => {
    try {
      const response = await editProfileService(userData, encodedToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Following users
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

// Bookmarks
const loadBookmarks = createAsyncThunk(
  "/users/loadBookmarks",
  async (token, { rejectWithValue }) => {
    try {
      const response = await getUserBookmarksService(token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addBookmark = createAsyncThunk(
  "/users/addBookmark",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await addBookmarkService(postId, token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const removeBookmark = createAsyncThunk(
  "/users/removeBookmark",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await removeBookmarkService(postId, token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Get user details
const getUserDetails = createAsyncThunk(
  "/users/getUserDetails",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await getUserDetailsService(userId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
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
  editProfileLoading: false,
  editProfileError: "",
  displayEditProfileModal: false,
  editProfile: false,
  otherUserDetail: {},
  otherUserLoading: false,
  otherUserError: "",
  filterText: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    editUserProfile: (state) => {
      state.editProfile = true;
    },
    hideEditUserProfile: (state) => {
      state.editProfile = false;
    },
    applyFilter: (state, action) => {
      state.filterText = action.payload;
    },
  },
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
      state.loggedInUser =
        filterCurrentUser.length === 0 ? {} : filterCurrentUser[0];
    });
    builder.addCase(loadUsers.rejected, (state, action) => {
      state.loading = false;
      state.errormessage = action.payload;
    });
    // Editing user profile
    builder.addCase(editProfile.pending, (state) => {
      state.editProfileLoading = true;
      state.editProfileError = "";
    });
    builder.addCase(editProfile.fulfilled, (state, action) => {
      state.editProfileLoading = false;
      state.editProfileError = "";
      state.loggedInUser = action.payload.user;
      state.editProfile = false;
      state.allUsers = state.allUsers.map((user) =>
        user.username === action.payload.user.username
          ? action.payload.user
          : user
      );
    });
    builder.addCase(editProfile.rejected, (state, action) => {
      state.editProfileLoading = false;
      state.editProfileError = action.payload;
      state.editProfile = false;
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
    // Bookmarks
    builder.addCase(loadBookmarks.pending, (state) => {
      state.bookmarkLoading = true;
      state.bookmarkError = "";
    });
    builder.addCase(loadBookmarks.fulfilled, (state, action) => {
      state.bookmarkLoading = false;
      state.bookmarks = action.payload.bookmarks;
      state.bookmarkError = "";
    });
    builder.addCase(loadBookmarks.rejected, (state, action) => {
      state.bookmarkLoading = false;
      state.bookmarkError = action.payload;
    });
    builder.addCase(addBookmark.fulfilled, (state, action) => {
      state.bookmarks = action.payload.bookmarks;
    });
    builder.addCase(removeBookmark.fulfilled, (state, action) => {
      state.bookmarks = action.payload.bookmarks;
    });
    // Loading other user details
    builder.addCase(getUserDetails.pending, (state) => {
      state.otherUserLoading = true;
      state.otherUserError = "";
    });
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.otherUserLoading = false;
      state.otherUserDetail = action.payload.user;
      state.otherUserError = "";
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.otherUserLoading = false;
      state.otherUserError = action.payload;
    });
  },
});

export default userSlice.reducer;
export const { editUserProfile, hideEditUserProfile, applyFilter } =
  userSlice.actions;
export {
  loadUsers,
  editProfile,
  followUser,
  unfollowUser,
  removeBookmark,
  addBookmark,
  loadBookmarks,
  getUserDetails,
};
