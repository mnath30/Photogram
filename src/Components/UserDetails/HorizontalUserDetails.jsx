import "./user-details.css";
import { Link } from "react-router-dom";

const HorizontalUserDetails = ({
  source,
  username,
  fullname,
  btntext = "",
  handleClick,
  btnstyle = "",
  userId,
}) => {
  return (
    <div className="flex padding-sm userdetails__horiz-container">
      <Link to={`/users/${userId}`}>
        <img src={source} alt="userprofile" className="avatar" />
      </Link>
      <div className="userdetails__section flex-col">
        <Link to={`/users/${userId}`}>
          <p className="userdetails__username">{username}</p>
        </Link>
        <p className="userdetails__name">{fullname} </p>
      </div>
      <button className={`btn ${btnstyle}`} onClick={handleClick}>
        {btntext}
      </button>
    </div>
  );
};

export { HorizontalUserDetails };
