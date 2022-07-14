import { avatar } from "../../asset";
import "./navigation.css";
import { NavLink } from "react-router-dom";
import { useOnClickOutside } from "../../hooks";
import { ProfileDropdown } from "../ProfileDropdown/ProfileDropdown";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { showModal } from "../../features/posts/postSlice";
import { applyFilter } from "../../features/users/userSlice";
import { SearchBar } from "./SearchBar";

const Navigation = () => {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const domNode = useOnClickOutside(() => setDisplayDropdown(false));
  const dispatch = useDispatch();

  return (
    <div className="flex container__nav">
      <nav className="navigation">
        <div className="nav-brand-logo">
          <img className="nav-img" src="../../favicon.ico" alt="logo" />
        </div>
        <NavLink to="/">
          <h3 className="nav-brand">Photogram</h3>
        </NavLink>
        <SearchBar
          dispatch={dispatch}
          applyFilter={applyFilter}
          navsize="nav-search-lg"
        />
        <div className="nav-options">
          <div className="nav-sub-options">
            <ul className="nav-ul">
              <NavLink
                to="/"
                // // className={(navLink) =>
                //   navLink.isActive ? "nav-li-active" : ""
                // }
              >
                <li className="nav-li">
                  <i className="fa-solid fa-house fa-lg"></i>
                </li>
              </NavLink>
              <span onClick={() => dispatch(showModal())}>
                <li className="nav-li">
                  <i className="fa-regular fa-square-plus fa-lg"></i>
                </li>
              </span>
              <NavLink to="/explore">
                <li className="nav-li">
                  <i className="fa-regular fa-compass fa-lg"></i>
                </li>
              </NavLink>
              <NavLink to="/explore/people">
                <li className="nav-li">
                  <i className="fa-regular fa-heart fa-lg"></i>
                </li>
              </NavLink>
              <li
                onClick={() => setDisplayDropdown((prev) => !prev)}
                className="nav-li-profile"
                ref={domNode}
              >
                <img src={avatar} alt="john doe" className="avatar xs" />
                {displayDropdown && (
                  <ProfileDropdown className="navigation__dropdown" />
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Navigation };
