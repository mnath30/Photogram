const addBookmarkHandler = (dispatch, addToBookmark, postId, token) => {
  dispatch(addToBookmark({ postId, token }));
};

const removeBookmarkHandler = (dispatch, removeFromBookmark, postId, token) => {
  dispatch(removeFromBookmark({ postId, token }));
};

const getBookmarkHandler = (dispatch, getBookmark, token) => {
  dispatch(getBookmark(token));
};

export { addBookmarkHandler, removeBookmarkHandler, getBookmarkHandler };
