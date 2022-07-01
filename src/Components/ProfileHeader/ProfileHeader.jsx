import "./profile-header.css";
import { avatar } from "../../asset";
import { NavLink } from "react-router-dom";

const ProfileHeader = () => {
  const username = localStorage.getItem("username");
  return (
    <>
      <div className="grid profileheader__container padding-md">
        <div className="profileheader__icon">
          <img className="profileheader__image" alt="profile" src={avatar} />
        </div>
        <div className="flex-col profileheader__username txt-left">
          <span className="txt-md profile_name ">UserName</span>
          <button className="btn profileheader-btn">Edit profile</button>
        </div>
        <div className="profileheader__description">
          <h4 className="txt-left">Username</h4>
          <p className="txt-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            voluptas itaque in, fuga deserunt ipsa! Voluptatum quasi ipsa,.
          </p>
        </div>
      </div>

      <div className="flex profileheader__bottom">
        <NavLink to={`/profile/${username}/`}>
          <div className="padding-md">
            <div>16</div>
            <div>Posts</div>
          </div>
        </NavLink>
        <NavLink to={`/profile/${username}/followers`}>
          <div className="padding-md">
            <div>12</div>
            <div>Followers</div>
          </div>
        </NavLink>
        <NavLink to={`/profile/${username}/following`}>
          <div className="padding-md">
            <div>10</div>
            <div>Following</div>
          </div>
        </NavLink>
      </div>
      <div className="flex  profileheader__bottom">
        <NavLink
          to={`/profile/${username}/`}
          className={({ isActive }) => (isActive ? `nav-active` : ``)}
        >
          <div className="nav-btn">
            <div>
              <i className="fa-solid fa-table-cells-large padding-sm"></i>Posts
            </div>
          </div>
        </NavLink>
        <NavLink
          to={`/profile/${username}/saved`}
          className={({ isActive }) => (isActive ? `nav-active` : ``)}
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
