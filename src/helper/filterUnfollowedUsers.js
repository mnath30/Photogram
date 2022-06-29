const filterUnfollowedUsers = (currentUser, following, allUsers) => {
  const filteredUsers = allUsers.filter(
    (user) =>
      !following.includes(user.username) && user.username !== currentUser
  );
  return filteredUsers;
};

export { filterUnfollowedUsers };
