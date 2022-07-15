import "./profile-dropdown.css";
import { Link, useNavigate } from "react-router-dom";
import { updateCurrentPost, deletePost } from "../../features/posts/postSlice";

const PostDropdown = ({
  className,
  currentUserPost = false,
  currentPost = false,
  postDetail,
  updaterFunc,
  encodedToken,
  closePost,
}) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <ul className="dropdown__container">
        {!currentPost && (
          <Link to={`/post/${postDetail._id}`}>
            <li className="dropdown__items">Go To Post</li>
          </Link>
        )}
        {currentUserPost && (
          <>
            <span
              onClick={() => {
                updaterFunc(updateCurrentPost(postDetail));
                closePost(false);
              }}
            >
              <li className="dropdown__items">Edit Post</li>
            </span>
            <span
              onClick={() => {
                updaterFunc(
                  deletePost({ postID: postDetail._id, encodedToken })
                );

                closePost(false);
                currentPost && navigate("/");
              }}
            >
              <li className="dropdown__items">Delete Post</li>
            </span>
          </>
        )}
      </ul>
    </div>
  );
};

export { PostDropdown };
