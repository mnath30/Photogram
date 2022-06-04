import { avatar } from "../../asset";
import "./navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
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

              <img src={avatar} alt="john doe" className="avatar xs" />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Navigation };
