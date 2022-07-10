import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loadPostService,
  likePostService,
  unlikePostService,
  uploadPostService,
} from "../../services";
import {
  deletePostService,
  loadSinglePostService,
  updatePostService,
} from "../../services/postServices";

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

// load single post
const loadSinglePost = createAsyncThunk(
  "/posts/loadSinglePost",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await loadSinglePostService(postId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
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

// Upload Post
const uploadPost = createAsyncThunk(
  "/posts/uploadPost",
  async ({ postData, encodedToken }, { rejectWithValue }) => {
    try {
      const response = await uploadPostService(postData, encodedToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deletePost = createAsyncThunk(
  "/posts/deletePost",
  async ({ postID, encodedToken }, { rejectWithValue }) => {
    try {
      const response = await deletePostService(postID, encodedToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const updatePost = createAsyncThunk(
  "/posts/updatePost",
  async ({ postData, encodedToken }, { rejectWithValue }) => {
    try {
      const response = await updatePostService(postData, encodedToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  posts: [],
  loading: false,
  errormessage: "",
  singlePostLoading: false,
  singlePostData: {},
  singlePostError: "",
  likeUnlikeError: "",
  uploadPostLoading: false,
  uploadPostError: "",
  deletePostLoading: false,
  deletePostError: "",
  displayModal: false,
  editingPost: false,
  currentPost: {},
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    showModal: (state) => {
      state.displayModal = true;
    },
    hideModal: (state) => {
      state.displayModal = false;
      state.currentPost = {};
      state.editingPost = false;
    },
    updateCurrentPost: (state, action) => {
      state.editingPost = true;
      state.currentPost = { ...action.payload };
      state.displayModal = true;
    },
  },
  extraReducers: (builder) => {
    // load all posts
    builder.addCase(loadPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts.reverse();
      state.errormessage = "";
    });
    builder.addCase(loadPosts.rejected, (state, action) => {
      state.loading = false;
      state.errormessage = action.payload;
    });
    // load single post
    builder.addCase(loadSinglePost.pending, (state) => {
      state.singlePostLoading = true;
      state.singlePostError = "";
    });
    builder.addCase(loadSinglePost.fulfilled, (state, action) => {
      state.singlePostLoading = false;
      state.singlePostError = "";
      state.singlePostData = action.payload.post;
    });
    builder.addCase(loadSinglePost.rejected, (state) => {
      state.singlePostLoading = false;
      state.singlePostError = "There was some error in processing your request";
    });
    // Like and unlike posts
    builder.addCase(likePost.fulfilled, (state, action) => {
      state.likeUnlikeError = "";
      state.posts = action.payload.posts.reverse();
    });
    builder.addCase(likePost.rejected, (state, action) => {
      state.likeUnlikeError = action.payload?.errors[0];
    });
    builder.addCase(unlikePost.fulfilled, (state, action) => {
      state.likeUnlikeError = "";
      state.posts = action.payload.posts.reverse();
    });
    builder.addCase(unlikePost.rejected, (state, action) => {
      state.likeUnlikeError = action.payload?.errors[0];
    });
    // Uploading a new post
    builder.addCase(uploadPost.pending, (state) => {
      state.uploadPostLoading = true;
      state.uploadPostError = "";
    });
    builder.addCase(uploadPost.fulfilled, (state, action) => {
      state.uploadPostLoading = false;
      state.displayModal = false;
      state.uploadPostError = "";
      state.posts = action.payload.posts.reverse();
    });
    builder.addCase(uploadPost.rejected, (state, action) => {
      state.uploadPostLoading = false;
      state.uploadPostError = action.response?.errors[0];
      state.displayModal = false;
    });
    // Deleting a post
    builder.addCase(deletePost.pending, (state) => {
      state.deletePostLoading = true;
      state.deletePostError = "";
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.deletePostLoading = false;
      state.deletePostError = "";
      state.posts = action.payload.posts.reverse();
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.deletePostLoading = false;
      state.deletePostError = action.payload?.errors[0];
    });
    // Updating a post
    builder.addCase(updatePost.pending, (state) => {
      state.uploadPostLoading = true;
      state.uploadPostError = "";
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.uploadPostLoading = false;
      state.uploadPostError = "";
      state.posts = action.payload.posts.reverse();
      state.displayModal = false;
      state.currentPost = {};
      state.editingPost = false;
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.uploadPostLoading = false;
      state.uploadPostError = action.payload?.errors[0];
      state.displayModal = false;
      state.currentPost = {};
      state.editingPost = false;
    });
  },
});

export default postSlice.reducer;
export {
  loadPosts,
  loadSinglePost,
  likePost,
  unlikePost,
  uploadPost,
  deletePost,
  updatePost,
};
export const { showModal, hideModal, updateCurrentPost } = postSlice.actions;
