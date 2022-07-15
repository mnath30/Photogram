import "./authentication.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../features/authentication/authSlice";
import { Loader } from "../../Components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { encodedToken, loading, userAccountName, errormessage } = useSelector(
    (store) => store.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (encodedToken && userAccountName) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [encodedToken]);

  const setTestCredentials = (e) => {
    e.preventDefault();
    setUsername("maitreyee");
    setPassword("mait123");
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(userLogin({ username, password }));
      navigate("/");
    }
  };

  return (
    <div className="auth__background">
      {loading && <Loader />}
      {!loading && (
        <div className="auth__container">
          <h2 className="auth__container-header logo-name">Photogram</h2>
          <form>
            <label htmlFor="username" className="auth__container-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="auth__container-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password" className="auth__container-label">
              Password
            </label>
            <div className="auth__container-passwor auth__container-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="auth__container-passinp"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showPassword ? (
                <span
                  className="auth__password-visibility"
                  onClick={() => setShowPassword(false)}
                >
                  <i className="fa-solid fa-eye"></i>
                </span>
              ) : (
                <span
                  className="auth__password-visibility"
                  onClick={() => setShowPassword(true)}
                >
                  <i className="fa-solid fa-eye-slash"></i>
                </span>
              )}
            </div>
            <button
              type="submit"
              className={`auth__container-btn ${
                username && password ? "" : "btn-disabled"
              }`}
              onClick={loginHandler}
            >
              Log In
            </button>
            <button
              className="auth__container-btn btn-prim"
              onClick={setTestCredentials}
            >
              Use test credentials
            </button>
            {errormessage && <p className="error-msg">{errormessage}</p>}
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="auth__container-link">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export { Login };
