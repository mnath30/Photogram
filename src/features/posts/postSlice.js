import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadPostService } from "../../services";

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

const initialState = {
  posts: [],
  loading: false,
  errormessage: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
});

export default postSlice.reducer;
export { loadPosts };
