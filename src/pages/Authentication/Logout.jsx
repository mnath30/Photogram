import "./authentication.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authentication/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      {/* <Navigation /> */}
      <div className="auth__container">
        <h2 className="auth__container-header">Log Out</h2>
        <p>Are you sure you want to leave?</p>
        <button
          className="auth__container-btn logout-btn btn-prim"
          onClick={logoutHandler}
        >
          Yes
        </button>
        <Link to="/">
          <button className="auth__container-btn logout-btn">No</button>
        </Link>
      </div>
    </>
  );
};

export { Logout };
