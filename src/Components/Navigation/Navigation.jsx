import { avatar } from "../../asset";
import "./navigation.css";
import { NavLink } from "react-router-dom";
import { useOnClickOutside } from "../../hooks";
import { ProfileDropdown } from "../ProfileDropdown/ProfileDropdown";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../../features/posts/postSlice";

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
        <div className="nav-search">
          <input
            className="nav-search-input"
            type="text"
            placeholder="Search"
          />
          <button className="nav-search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="nav-options">
          <div className="nav-sub-options">
            <ul className="nav-ul">
              <NavLink to="/">
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
