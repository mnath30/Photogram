import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPostCommentService,
  deletePostCommentService,
} from "../../services";

const addPostComment = createAsyncThunk(
  "/comments/addPostComment",
  async ({ postId, commentData, encodedToken }, { rejectWithvalue }) => {
    try {
      const response = await addPostCommentService(
        postId,
        encodedToken,
        commentData
      );
      return response.data;
    } catch (error) {
      return rejectWithvalue(error);
    }
  }
);

const deletePostComment = createAsyncThunk(
  "/comments/deletePostComment",
  async ({ postId, commentId, encodedToken }, { rejectWithvalue }) => {
    try {
      const response = await deletePostCommentService(
        postId,
        commentId,
        encodedToken
      );
      return response.data;
    } catch (error) {
      return rejectWithvalue(error);
    }
  }
);

const initialState = {
  comments: [],
  commentsLoading: false,
  commentsError: "",
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPostComment.pending, (state) => {
      state.commentsLoading = true;
      state.commentsError = "";
    });
    builder.addCase(addPostComment.fulfilled, (state, action) => {
      state.commentsLoading = false;
      state.commentsError = "";
      state.comments = action.payload.comments;
    });
    builder.addCase(addPostComment.rejected, (state, action) => {
      state.commentsLoading = false;
      state.commentsError = action.payload;
    });
    builder.addCase(deletePostComment.pending, (state) => {
      state.commentsLoading = true;
      state.commentsError = "";
    });
    builder.addCase(deletePostComment.fulfilled, (state, action) => {
      state.commentsLoading = false;
      state.commentsError = "";
      state.comments = action.payload.comments;
    });
    builder.addCase(deletePostComment.rejected, (state, action) => {
      state.commentsLoading = false;
      state.commentsError = action.payload;
    });
  },
});

export default commentSlice.reducer;
export { addPostComment, deletePostComment };
