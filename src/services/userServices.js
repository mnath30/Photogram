import axios from "axios";

// Loading All Users
const loadUsersService = async () => await axios.get("/api/users");

// updating user details
const editProfileService = async (userData, token) => {
  return await axios.post(
    "/api/users/edit",
    { userData },
    { headers: { authorization: token } }
  );
};

// Following and unfollowing users
const followUserService = async (followUserId, token) => {
  return await axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};

const unfollowUserService = async (unfollowUserId, token) =>
  await axios.post(
    `/api/users/unfollow/${unfollowUserId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

//Bookmarks
const getUserBookmarksService = async (token) =>
  await axios.get(`/api/users/bookmark`, {
    headers: {
      authorization: token,
    },
  });

const addBookmarkService = async (postId, token) =>
  await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

const removeBookmarkService = async (postId, token) =>
  await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export {
  loadUsersService,
  followUserService,
  unfollowUserService,
  editProfileService,
  getUserBookmarksService,
  addBookmarkService,
  removeBookmarkService,
};
