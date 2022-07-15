import { PostDropdown } from "../ProfileDropdown/PostDropdown";
import "./post-user-header.css";

const PostUserHeader = ({
  setShowPostDropdown,
  showPostDropdown,
  item,
  dispatchfunc,
  encodedToken,
  currentUserName,
  handleChange,
  singlePost = false,
}) => {
  const { profile, username } = item;
  return (
    <div className="flex postcard__container-header padding-sm">
      <img src={profile} alt={username} className="avatar" />
      <h4 className="padding-sm">{username}</h4>
      {(!singlePost || (singlePost && currentUserName === username)) && (
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
                currentPost={singlePost}
              />
            )}
          </button>
        </span>
      )}
    </div>
  );
};

export { PostUserHeader };
