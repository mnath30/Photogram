import "./comment.css";
import { deleteCommentHandler } from "../../helper";
import { loadPosts, loadSinglePost } from "../../features/posts/postSlice";

const Comment = ({
  dispatch,
  postId,
  deleteComment,
  encodedToken,
  commentDetails,
  postUser,
}) => {
  const { _id, profilePicture, username, text } = commentDetails;
  const currentUsername = localStorage.getItem("username");

  return (
    <div>
      <div className="flex comment-section">
        <img src={profilePicture} alt={username} className="avatar" />
        <div className="flex-col comment__content">
          <h4>{username}</h4>
          <p className="comment__text">{text}</p>
        </div>
        {(username === currentUsername || currentUsername === postUser) && (
          <span
            className="comment__btn"
            onClick={() => {
              deleteCommentHandler(
                postId,
                dispatch,
                deleteComment,
                _id,
                encodedToken
              );
              dispatch(loadPosts());
              dispatch(loadSinglePost(postId));
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </span>
        )}
      </div>
    </div>
  );
};

export { Comment };
