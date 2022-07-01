import axios from "axios";

//Load all posts
const loadPostService = async () => await axios.get("/api/posts");

// Like and Unlike posts
const likePostService = async (postId, token) => {
  console.log(postId, "kdfjd", token);
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
  console.log(postId, "kdfjd", token);
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

export { loadPostService, likePostService, unlikePostService };
