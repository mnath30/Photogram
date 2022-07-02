const likeHandler = (dispatch, encodedToken, postId, likePost) => {
  dispatch(likePost({ postId, encodedToken }));
};

const unlikeHandler = (dispatch, encodedToken, postId, unlikePost) => {
  dispatch(unlikePost({ postId, encodedToken }));
};

export { likeHandler, unlikeHandler };
