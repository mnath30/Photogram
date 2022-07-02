const filterUserFeed = (currentUser, following, allPosts) => {
  const filteredPosts = allPosts.filter(
    (post) =>
      following.find((item) => item.username === post.username) ||
      post.username === currentUser
  );
  return filteredPosts;
};

export { filterUserFeed };
