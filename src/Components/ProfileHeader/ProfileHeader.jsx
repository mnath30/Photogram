import "./profile-header.css";
import { NavLink } from "react-router-dom";

const ProfileHeader = ({ userData, userPosts, setDisplayEditModal }) => {
  const {
    username,
    description,
    fullname,
    followers,
    following,
    profilePicture,
  } = userData;

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
          <button
            className="btn profileheader-btn "
            onClick={setDisplayEditModal}
          >
            Edit profile
          </button>
        </div>
        <div className="profileheader__description">
          <h4 className="txt-left">{fullname}</h4>
          <p className="txt-left">{description}</p>
        </div>
      </div>

      <div className="flex profileheader__bottom">
        <NavLink to={`/profile/${username}/`}>
          <div className="padding-md profile__subheader">
            <div>{userPosts.length}</div>
            <div>Posts</div>
          </div>
        </NavLink>
        <NavLink to={`/profile/${username}/followers`}>
          <div className="padding-md profile__subheader">
            <div>{followers.length}</div>
            <div>Followers</div>
          </div>
        </NavLink>
        <NavLink to={`/profile/${username}/following`}>
          <div className="padding-md profile__subheader">
            <div>{following.length}</div>
            <div>Following</div>
          </div>
        </NavLink>
      </div>
      <div className="flex  profileheader__bottom">
        <NavLink
          to={`/profile/${username}/`}
          className={({ isActive }) =>
            isActive ? `nav-active` : `profile__bottom`
          }
        >
          <div className="nav-btn">
            <div>
              <i className="fa-solid fa-table-cells-large padding-sm"></i>Posts
            </div>
          </div>
        </NavLink>
        <NavLink
          to={`/profile/${username}/saved`}
          className={({ isActive }) =>
            isActive ? `nav-active` : `profile__bottom`
          }
        >
          <div className="nav-btn">
            <div>
              <i className="fa-solid fa-bookmark padding-sm"></i>Saved
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export { ProfileHeader };
