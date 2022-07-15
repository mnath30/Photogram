import "./post-cards.css";
import { addCommentHandler } from "../../helper";
import { loadPosts } from "../../features/posts/postSlice";
import { addPostComment } from "../../features/comments/commentSlice";
import { PostUserHeader } from "../PostUserHeader/PostUserHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LikeCommentBookmark } from "../LikeCommentBookmark/LikeCommentBookmark";

const PostCards = ({ item, dispatchfunc, bookmark }) => {
  const { _id, username, info, image, description, likes, comments } = item;
  const { likeCount, likedBy } = likes;
  const encodedToken = localStorage.getItem("encodedToken");
  const currentUserName = localStorage.getItem("username");
  const likedByUser = likedBy.includes(currentUserName);
  let isBookmarked = false;
  const [showPostDropdown, setShowPostDropdown] = useState(false);
  const [commentText, setCommentText] = useState("");

  if (bookmark) {
    isBookmarked = bookmark.some((item) => item._id === _id);
  }

  const handleChange = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowPostDropdown(false);
    }
  };

  return (
    <div className="postcard__container flex-col">
      <PostUserHeader
        setShowPostDropdown={setShowPostDropdown}
        showPostDropdown={showPostDropdown}
        item={item}
        dispatchfunc={dispatchfunc}
        encodedToken={encodedToken}
        currentUserName={currentUserName}
        handleChange={handleChange}
      />
      {/* Post Image section */}
      <div className="postcard__container-image">
        <img src={image} alt={info} className="responsive-img" />
      </div>
      <div className="postcard__container-content flex-col">
        <LikeCommentBookmark
          dispatchfunc={dispatchfunc}
          postId={_id}
          likedByUser={likedByUser}
          isBookmarked={isBookmarked}
          likeCount={likeCount}
        />
        <p className="postcard__container-description padding-sm">
          <strong>{username} </strong>
          {description}
        </p>
        {comments.length !== 0 && (
          <Link to={`/post/${_id}`} className="comments_text">
            View all {comments.length} comments
          </Link>
        )}
        <div className="hr"></div>

        {/* Comment Input section */}
        <div className="padding-sm flex">
          <label htmlFor={_id}></label>
          <input
            type="text"
            placeholder="Add a comment..."
            className="padding-sm comment_inp"
            id={_id}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            maxLength="100"
          />
          <button
            className={`${
              commentText.length === 0 && "comment__btn_disabled"
            } postcard__container-btn`}
            disabled={commentText.length === 0 ? true : false}
            onClick={() => {
              addCommentHandler(
                _id,
                dispatchfunc,
                addPostComment,
                {
                  text: commentText,
                },
                encodedToken
              );
              dispatchfunc(loadPosts());
              setCommentText("");
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export { PostCards };
