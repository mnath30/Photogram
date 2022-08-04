import "./authentication.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSignup } from "../../features/authentication/authSlice";
import { Loader } from "../../Components";
import { banner } from "../../asset";

const Signup = () => {
  const [userDetail, setUserDetail] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { encodedToken, loading, errormessage, userAccountName } = useSelector(
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

  const signupHandler = async (e) => {
    e.preventDefault();
    const { email, fullname, username, password } = userDetail;
    if (email && fullname && password && username) {
      if (email.match(/\S+@\S+\.\S+/)) {
        dispatch(
          userSignup({
            fullname,
            email,
            username,
            password,
          })
        );
        navigate("/");
      } else {
        setEmailError("Enter valid email");
      }
    }
  };

  return (
    <div className="auth__background">
      {loading && <Loader />}
      {!loading && (
        <div className="banner__container">
          <div className="banner__image">
            <img src={banner} alt="banner" className="responsive-img" />
          </div>
          <div className="auth__container">
            <h2 className="auth__container-header logo-name">Photogram</h2>
            <form>
              <label htmlFor="email" className="auth__container-label">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                placeholder="Email"
                className="auth__container-input"
                value={userDetail.email}
                onChange={(e) => {
                  setEmailError("");
                  setUserDetail({ ...userDetail, email: e.target.value });
                }}
              />

              {emailError && <p className="error-msg">{emailError}</p>}
              <label htmlFor="userfullname" className="auth__container-label">
                Name
              </label>
              <input
                type="text"
                id="userfullname"
                placeholder="Full Name"
                className="auth__container-input"
                value={userDetail.fullname}
                onChange={(e) =>
                  setUserDetail({ ...userDetail, fullname: e.target.value })
                }
                required
              />
              <label htmlFor="username" className="auth__container-label">
                User Name
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="auth__container-input"
                value={userDetail.username}
                onChange={(e) =>
                  setUserDetail({ ...userDetail, username: e.target.value })
                }
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
                  value={userDetail.password}
                  onChange={(e) =>
                    setUserDetail({ ...userDetail, password: e.target.value })
                  }
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
                className={`auth__container-btn
          ${
            userDetail.email &&
            userDetail.password &&
            userDetail.fullname &&
            userDetail.username
              ? ""
              : "btn-disabled"
          }`}
                onClick={signupHandler}
              >
                Sign up
              </button>
              {errormessage && <p className="error-msg">{errormessage}</p>}
              <p>
                Have an account?{" "}
                <Link to="/login" className="auth__container-link">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export { Signup };
