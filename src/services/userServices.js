import axios from "axios";

// Loading All Users
const loadUsersService = async () => await axios.get("/api/users");

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

export { loadUsersService, followUserService, unfollowUserService };
