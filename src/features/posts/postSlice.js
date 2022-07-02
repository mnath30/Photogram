import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loadPostService,
  likePostService,
  unlikePostService,
} from "../../services";

// load all posts
const loadPosts = createAsyncThunk(
  "/posts/allposts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await loadPostService();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

// Like and unlike posts
const likePost = createAsyncThunk(
  "/posts/likePost",
  async ({ postId, encodedToken }, { rejectWithValue }) => {
    try {
      const response = await likePostService(postId, encodedToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

const unlikePost = createAsyncThunk(
  "/posts/dislikePost",
  async ({ postId, encodedToken }, { rejectWithValue }) => {
    try {
      const response = await unlikePostService(postId, encodedToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  posts: [],
  loading: false,
  errormessage: "",
  likeUnlikeError: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // load all posts
    builder.addCase(loadPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
      state.errormessage = "";
    });
    builder.addCase(loadPosts.rejected, (state, action) => {
      state.loading = false;
      state.errormessage = action.payload;
    });
    // Like and unlike posts
    builder.addCase(likePost.fulfilled, (state, action) => {
      state.likeUnlikeError = "";
      state.posts = action.payload.posts;
    });
    builder.addCase(likePost.rejected, (state, action) => {
      state.likeUnlikeError = action.payload.errors[0];
    });
    builder.addCase(unlikePost.fulfilled, (state, action) => {
      state.likeUnlikeError = "";
      state.posts = action.payload.posts;
    });
    builder.addCase(unlikePost.rejected, (state, action) => {
      state.likeUnlikeError = action.payload.errors[0];
    });
  },
});

export default postSlice.reducer;
export { loadPosts, likePost, unlikePost };
