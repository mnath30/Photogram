// import { Navigation } from "../../Components";
import { NavLink, Outlet } from "react-router-dom";
import "./related-users.css";

const RelatedUsers = () => {
  const username = localStorage.getItem("username");

  return (
    <>
      {/* <Navigation /> */}
      <div className="subtab__container">
        <div className="subtab__header">
          <ul className="flex subtab__contents">
            <NavLink
              to={`/profile/${username}/followers`}
              className={({ isActive }) =>
                isActive
                  ? "subtab_active subtab__contents-item"
                  : "subtab__contents-item"
              }
            >
              <li>Followers</li>
            </NavLink>
            <NavLink
              to={`/profile/${username}/following`}
              className={({ isActive }) =>
                isActive
                  ? "subtab_active subtab__contents-item"
                  : "subtab__contents-item"
              }
            >
              <li>Following</li>
            </NavLink>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export { RelatedUsers };
