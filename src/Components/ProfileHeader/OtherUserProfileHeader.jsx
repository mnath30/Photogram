import "./profile-header.css";
import { followUser, unfollowUser } from "../../features/users/userSlice";
import { useDispatch } from "react-redux";

const OtherUserProfileHeader = ({ userData, userPosts, userfollowing }) => {
  const {
    username,
    description,
    fullname,
    followers,
    following,
    profilePicture,
    _id,
  } = userData;
  const encodedToken = localStorage.getItem("encodedToken");
  const dispatch = useDispatch();

  return (
    <>
      <div className="grid profileheader__container padding-md">
        <div className="profileheader__icon">
          <img
            className="profileheader__image"
            alt="profile"
            src={profilePicture}
          />
        </div>
        <div className="flex-col profileheader__username txt-left">
          <span className="txt-md profile_name ">{username}</span>
          {userfollowing ? (
            <button
              className="btn profileheader-btn unfollow_btn"
              onClick={() => {
                dispatch(unfollowUser({ userId: _id, encodedToken }));
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className="btn profileheader-btn"
              onClick={() => {
                dispatch(followUser({ userId: _id, encodedToken }));
              }}
            >
              Follow
            </button>
          )}
        </div>
        <div className="profileheader__description">
          <h4 className="txt-left">{fullname}</h4>
          <p className="txt-left">{description}</p>
        </div>
      </div>

      <div className="flex profileheader__bottom otheruser__profile_bottom">
        <div className="padding-md">
          <div>{userPosts.length}</div>
          <div>Posts</div>
        </div>

        <div className="padding-md">
          <div>{followers.length}</div>
          <div>Followers</div>
        </div>

        <div className="padding-md">
          <div>{following.length}</div>
          <div>Following</div>
        </div>
      </div>
    </>
  );
};

export { OtherUserProfileHeader };
