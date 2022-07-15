import {
  likeHandler,
  unlikeHandler,
  addBookmarkHandler,
  removeBookmarkHandler,
} from "../../helper";
import {
  likePost,
  unlikePost,
  loadSinglePost,
} from "../../features/posts/postSlice";
import { removeBookmark, addBookmark } from "../../features/users/userSlice";

const LikeCommentBookmark = ({
  dispatchfunc,
  postId,
  likedByUser,
  isBookmarked,
  likeCount,
  singlePostPage = false,
}) => {
  const encodedToken = localStorage.getItem("encodedToken");

  return (
    <div className="flex padding-sm postcard_items">
      {/* Like post */}
      <span
        className="postcard__like"
        onClick={() => {
          likedByUser
            ? unlikeHandler(dispatchfunc, encodedToken, postId, unlikePost)
            : likeHandler(dispatchfunc, encodedToken, postId, likePost);
          singlePostPage && dispatchfunc(loadSinglePost(postId));
        }}
      >
        <i
          className={`${
            likedByUser ? "fa-solid  liked" : "fa-regular"
          } fa-heart fa-lg padding-sm`}
        >
          <span className="postcard_text">{likeCount}</span>
        </i>
      </span>

      {/* Comment Icon */}
      <label htmlFor={postId} className="post_comment">
        <i className="fa-regular fa-comment fa-lg padding-sm"></i>
      </label>

      {/* Bookmark Post */}
      <span
        className="post_bookmark"
        onClick={() => {
          isBookmarked
            ? removeBookmarkHandler(
                dispatchfunc,
                removeBookmark,
                postId,
                encodedToken
              )
            : addBookmarkHandler(
                dispatchfunc,
                addBookmark,
                postId,
                encodedToken
              );
          singlePostPage && dispatchfunc(loadSinglePost(postId));
        }}
      >
        <i
          className={`${
            isBookmarked ? "fa-solid" : "fa-regular"
          } fa-bookmark fa-lg padding-sm`}
        ></i>
      </span>
    </div>
  );
};

export { LikeCommentBookmark };
