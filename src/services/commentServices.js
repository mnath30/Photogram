import axios from "axios";

const addPostCommentService = async (postId, encodedToken, commentData) => {
  return axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    { headers: { authorization: encodedToken } }
  );
};

const deletePostCommentService = async (postId, commentId, encodedToken) => {
  return await axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

export { addPostCommentService, deletePostCommentService };
