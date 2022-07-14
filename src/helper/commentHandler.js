const getCommentHandler = (postId, dispatch, getComment) => {
  dispatch(getComment(postId));
};

const addCommentHandler = (
  postId,
  dispatch,
  addComment,
  commentData,
  encodedToken
) => {
  dispatch(addComment({ postId, commentData, encodedToken }));
};

const deleteCommentHandler = (
  postId,
  dispatch,
  deleteComment,
  commentId,
  encodedToken
) => {
  dispatch(deleteComment({ postId, commentId, encodedToken }));
};

export { getCommentHandler, addCommentHandler, deleteCommentHandler };
