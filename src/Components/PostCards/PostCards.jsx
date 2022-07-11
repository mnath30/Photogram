import "./post-cards.css";
import { likeHandler, unlikeHandler } from "../../helper";
import { addBookmarkHandler, removeBookmarkHandler } from "../../helper";
import { likePost, unlikePost } from "../../features/posts/postSlice";
import { removeBookmark, addBookmark } from "../../features/users/userSlice";
import { PostDropdown } from "../ProfileDropdown/PostDropdown";
import { useState } from "react";

const PostCards = ({ item, dispatchfunc, bookmark }) => {
  const { _id, username, profile, info, image, description, likes } = item;
  const { likeCount, likedBy } = likes;
  const encodedToken = localStorage.getItem("encodedToken");
  const currentUserName = localStorage.getItem("username");
  const likedByUser = likedBy.includes(currentUserName);
  const { bookmarks } = bookmark;
  let isBookmarked = false;
  const [showPostDropdown, setShowPostDropdown] = useState(false);

  if (bookmarks) {
    isBookmarked = bookmarks.some((item) => item._id === _id);
  }

  const handleChange = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowPostDropdown(false);
    }
  };

  return (
    <div className="postcard__container flex-col">
      <div className="flex postcard__container-header padding-sm">
        <img src={profile} alt={username} className="avatar" />
        <h4 className="padding-sm">{username}</h4>
        <span
          className="postcard__dropdown_container"
          onBlur={(e) => handleChange(e)}
        >
          <button
            className="postcard__dropdown_button"
            onClick={() => setShowPostDropdown((prev) => !prev)}
          >
            <i className="fa-solid fa-ellipsis fa-lg"></i>
            {showPostDropdown && (
              <PostDropdown
                className="postcard__dropdown"
                postDetail={item}
                updaterFunc={dispatchfunc}
                encodedToken={encodedToken}
                currentUserPost={username === currentUserName}
                closePost={setShowPostDropdown}
              />
            )}
          </button>
        </span>
      </div>
      <div className="postcard__container-image">
        <img src={image} alt={info} className="responsive-img" />
      </div>
      <div className="postcard__container-content flex-col">
        <div className="flex padding-sm postcard_items">
          {likedByUser ? (
            <span
              onClick={() =>
                unlikeHandler(dispatchfunc, encodedToken, _id, unlikePost)
              }
            >
              <i className="fa-solid fa-heart fa-lg padding-sm postcard__like liked">
                <span className="postcard_text">{likeCount}</span>
              </i>
            </span>
          ) : (
            <span
              onClick={() =>
                likeHandler(dispatchfunc, encodedToken, _id, likePost)
              }
            >
              <i className="fa-regular fa-heart fa-lg postcard__like padding-sm ">
                <span className="postcard_text">{likeCount}</span>
              </i>
            </span>
          )}
          <label htmlFor={_id}>
            <i className="fa-regular fa-comment fa-lg padding-sm"></i>
          </label>
          {isBookmarked ? (
            <span
              className="post_bookmark"
              onClick={() =>
                removeBookmarkHandler(
                  dispatchfunc,
                  removeBookmark,
                  _id,
                  encodedToken
                )
              }
            >
              <i className="fa-solid fa-bookmark fa-lg padding-sm"></i>
            </span>
          ) : (
            <span
              className="post_bookmark"
              onClick={() =>
                addBookmarkHandler(dispatchfunc, addBookmark, _id, encodedToken)
              }
            >
              <i className="fa-regular fa-bookmark fa-lg padding-sm"></i>
            </span>
          )}
        </div>

        <p className="postcard__container-description padding-sm">
          <strong>{username} </strong>
          {description}
        </p>
        <div className="hr"></div>
        <div className="padding-sm flex">
          <label htmlFor={_id}></label>
          <input
            type="text"
            placeholder="Add a comment..."
            className="padding-sm"
            id={_id}
          />
          <button className="postcard__container-btn">Post</button>
        </div>
      </div>
    </div>
  );
};

export { PostCards };
