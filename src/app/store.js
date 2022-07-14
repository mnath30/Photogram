import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice.js";
import postsReducer from "../features/posts/postSlice";
import userReducer from "../features/users/userSlice";
import commentReducer from "../features/comments/commentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    users: userReducer,
    comments: commentReducer,
  },
});

export { store };
