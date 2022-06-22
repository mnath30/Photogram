import { avatar } from "../../asset";
import "./navigation.css";
import { NavLink } from "react-router-dom";
import { useOnClickOutside } from "../../hooks";
import { ProfileDropdown } from "../ProfileDropdown/ProfileDropdown";
import { useState } from "react";

const Navigation = () => {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const domNode = useOnClickOutside(() => setDisplayDropdown(false));

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
              <NavLink to="/explore">
                <li className="nav-li">
                  <i className="fa-solid fa-compass fa-lg"></i>
                </li>
              </NavLink>
              <li className="nav-li">
                <i className="fa-regular fa-heart fa-lg"></i>
              </li>

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
