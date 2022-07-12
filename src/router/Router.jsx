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
  Suggestion,
  RelatedUsers,
  Followers,
  Following,
  CommonProfile,
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
      <Route
        path="explore/people"
        element={
          <RequiresAuth>
            <Suggestion />
          </RequiresAuth>
        }
      />
      <Route
        path="profile/:username"
        element={
          <RequiresAuth>
            <Profile />
          </RequiresAuth>
        }
      >
        <Route
          index
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
      <Route
        path="profile/:username"
        element={
          <RequiresAuth>
            <RelatedUsers />
          </RequiresAuth>
        }
      >
        <Route
          path="followers"
          element={
            <RequiresAuth>
              <Followers />
            </RequiresAuth>
          }
        />
        <Route
          path="following"
          element={
            <RequiresAuth>
              <Following />
            </RequiresAuth>
          }
        />
      </Route>
      <Route
        path="/post/:postId"
        element={
          <RequiresAuth>
            <SinglePost />
          </RequiresAuth>
        }
      />
      <Route
        path="/users/:userId"
        element={
          <RequiresAuth>
            <CommonProfile />
          </RequiresAuth>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route
        path="logout"
        element={
          <RequiresAuth>
            <Logout />
          </RequiresAuth>
        }
      />
      <Route path="mockman" element={<Mockman />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export { Router };
