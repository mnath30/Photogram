import { HorizontalUserDetails, Loader } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUsers, unfollowUser } from "../../features/users/userSlice";
import { Link } from "react-router-dom";

const Following = () => {
  const { loggedInUser, unfollowUserloading } = useSelector(
    (store) => store.users
  );
  const encodedToken = localStorage.getItem("encodedToken");
  const dispatch = useDispatch();
  let following = [];

  useEffect(() => {
    if (!loggedInUser) {
      dispatch(loadUsers());
    }
  }, [loggedInUser, dispatch]);

  if (loggedInUser) {
    following = loggedInUser?.following;
  }

  const unFollowHandler = (userId) => {
    dispatch(unfollowUser({ userId, encodedToken }));
  };

  return (
    <>
      <div className="related-user__container">
        {unfollowUserloading && <Loader />}
        {!unfollowUserloading && (
          <div className="related-user__details">
            {following && following.length === 0 && (
              <p className="related-user__msg">
                You are not yet following anyone.{" "}
                <Link to="/explore/people" className="page__link">
                  Follow people
                </Link>
              </p>
            )}
            {following &&
              following.length !== 0 &&
              following.map((user) => (
                <HorizontalUserDetails
                  size="avatar-lg"
                  source={user.profilePicture}
                  username={user.username}
                  btntext="Unfollow"
                  key={user._id}
                  fullname={user.fullname}
                  handleClick={() => unFollowHandler(user._id)}
                  btnstyle="secondary_btn"
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export { Following };
