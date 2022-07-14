import { ProfileHeader, Navigation, Loader } from "../../Components";
import "./profile.css";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUserPost } from "../../features/posts/postSlice";
import {
  loadUsers,
  editUserProfile,
  loadBookmarks,
} from "../../features/users/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { loggedInUser, loading } = useSelector((store) => store.users);
  const { userPost, posts } = useSelector((store) => store.posts);
  const encodedToken = localStorage.getItem("encodedToken");

  useEffect(() => {
    if (Object.keys(loggedInUser).length === 0) {
      dispatch(loadUsers());
    } else {
      dispatch(loadUserPost(loggedInUser.username));
      dispatch(loadBookmarks(encodedToken));
    }
  }, [loggedInUser, dispatch, encodedToken, posts]);

  const modalDisplayHandler = () => {
    dispatch(editUserProfile());
  };

  return (
    <>
      <Navigation />
      {loading && <Loader />}
      {!loading && Object.keys(loggedInUser).length !== 0 && userPost && (
        <div className="flex-col profile__container">
          <ProfileHeader
            userData={loggedInUser}
            userPosts={userPost}
            setDisplayEditModal={modalDisplayHandler}
          />
          <Outlet />
        </div>
      )}
    </>
  );
};

export { Profile };
