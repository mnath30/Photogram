import "./user-details.css";
import { Link } from "react-router-dom";

const UserDetails = ({ source, username, btntext, handleClick, userId }) => {
  const currentuser = localStorage.getItem("username");

  return (
    <div className="flex padding-sm userdetails__container">
      <img src={source} alt="userprofile" className="avatar" />
      {username !== currentuser ? (
        <Link
          to={`/users/${userId}`}
          className="userdetails__username padding-sm"
        >
          <p>{username}</p>
        </Link>
      ) : (
        <Link
          to={`/profile/${currentuser}`}
          className="userdetails__username padding-sm"
        >
          <p>{username}</p>
        </Link>
      )}
      <button className="btn userprofile__container-btn" onClick={handleClick}>
        {btntext}
      </button>
    </div>
  );
};

export { UserDetails };
