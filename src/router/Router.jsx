import { Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  Profile,
  UserPost,
  BookmarkedPost,
  SinglePost,
  Login,
  Signup,
  Logout,
  PageNotFound,
} from "../pages";
import { RequiresAuth } from "../helper";
import Mockman from "mockman-js";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequiresAuth>
            <Home />
          </RequiresAuth>
        }
      />
      <Route
        path="explore"
        element={
          <RequiresAuth>
            <Explore />
          </RequiresAuth>
        }
      />
      {/* <Route path="liked" element={<Like />} /> */}
      <Route
        path="profile"
        element={
          <RequiresAuth>
            <Profile />
          </RequiresAuth>
        }
      >
        <Route
          path="posts"
          element={
            <RequiresAuth>
              <UserPost />
            </RequiresAuth>
          }
        />
        <Route
          path="saved"
          element={
            <RequiresAuth>
              <BookmarkedPost />
            </RequiresAuth>
          }
        />
      </Route>
      {/* <Route path="*" element={<PageNotFound />} /> */}
      <Route
        path="/singlepost"
        element={
          <RequiresAuth>
            <SinglePost />
          </RequiresAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/logout"
        element={
          <RequiresAuth>
            <Logout />
          </RequiresAuth>
        }
      />
      <Route path="/mockman" element={<Mockman />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export { Router };
