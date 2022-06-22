import "./profile-dropdown.css";
import { Link } from "react-router-dom";

const ProfileDropdown = ({ className }) => {
  return (
    <div className={className}>
      <ul className="dropdown__container">
        <Link to="/profile/posts">
          <li className="dropdown__items">Profile</li>
        </Link>
        <Link to="/profile/saved">
          <li className="dropdown__items">Saved</li>
        </Link>
        <Link to="/logout">
          <li className="dropdown__items">Logout</li>
        </Link>
      </ul>
    </div>
  );
};

export { ProfileDropdown };
