const filterUserFeed = (currentUser, following, allPosts) => {
  const filteredPosts = allPosts.filter(
    (post) => following.includes(post.username) || post.username === currentUser
  );
  return filteredPosts;
};

export { filterUserFeed };
