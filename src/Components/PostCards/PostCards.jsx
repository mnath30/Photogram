import "./post-cards.css";
import { likeHandler, unlikeHandler } from "../../helper/likeHandlers";
import { likePost, unlikePost } from "../../features/posts/postSlice";

const PostCards = ({ item, dispatchfunc }) => {
  const { _id, username, profile, info, image, description, likes } = item;
  const { likeCount, likedBy } = likes;
  const encodedToken = localStorage.getItem("encodedToken");
  const currentUserName = localStorage.getItem("username");
  const likedByUser = likedBy.includes(currentUserName);

  return (
    <div className="postcard__container flex-col">
      <div className="flex postcard__container-header padding-sm">
        <img src={profile} alt={username} className="avatar" />
        <h4 className="padding-sm">{username}</h4>
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
          <i className="fa-regular fa-bookmark fa-lg padding-sm"></i>
        </div>

        <p className="postcard__container-description padding-sm">
          <strong>{username} </strong>
          {description}
        </p>
        <div className="hr"></div>
        <div className="padding-sm flex">
          <input
            type="text"
            placeholder="Add a comment..."
            className="padding-sm"
          />
          <button className="postcard__container-btn">Post</button>
        </div>
      </div>
    </div>
  );
};

export { PostCards };
