const filterUnfollowedUsers = (currentUser, following, allUsers) => {
  const filteredUsers = allUsers.filter(
    (user) =>
      !following.find((item) => item.username === user.username) &&
      user.username !== currentUser
  );
  return filteredUsers;
};

export { filterUnfollowedUsers };
