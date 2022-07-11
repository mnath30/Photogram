import axios from "axios";

//Load all posts
const loadPostService = async () => await axios.get("/api/posts");

// load single post
const loadSinglePostService = async (postId) => {
  return await axios.get(`/api/posts/${postId}`);
};

// load user specific posts
const loadUserPostService = async (username) =>
  await axios.get(`/api/posts/user/${username}`);

// Like and Unlike posts
const likePostService = async (postId, token) => {
  return await axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};

const unlikePostService = async (postId, token) => {
  return await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};

const uploadPostService = async (postData, token) => {
  return await axios.post(
    "/api/posts",
    { postData },
    { headers: { authorization: token } }
  );
};

const deletePostService = async (postID, token) => {
  return await axios.delete(`/api/posts/${postID}`, {
    headers: { authorization: token },
  });
};

const updatePostService = async (postData, token) => {
  const { _id: postId, description, image } = postData;
  return await axios.post(
    `/api/posts/edit/${postId}`,
    {
      postData: { description, image },
    },
    { headers: { authorization: token } }
  );
};

export {
  loadPostService,
  loadSinglePostService,
  loadUserPostService,
  likePostService,
  unlikePostService,
  uploadPostService,
  deletePostService,
  updatePostService,
};
