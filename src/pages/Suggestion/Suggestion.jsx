import "./suggestion.css";
import { Navigation, HorizontalUserDetails, Loader } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUsers, followUser } from "../../features/users/userSlice";
import { filterUnfollowedUsers } from "../../helper";

const Suggestion = () => {
  const { allUsers, loggedInUser, following, followUserloading } = useSelector(
    (store) => store.users
  );
  const encodedToken = localStorage.getItem("encodedToken");
  const dispatch = useDispatch();
  let suggestedUsers = [];
  useEffect(() => {
    if (!allUsers && !loggedInUser) {
      dispatch(loadUsers());
    }
  }, [loggedInUser, allUsers, dispatch]);

  if (following && allUsers && loggedInUser) {
    suggestedUsers = filterUnfollowedUsers(
      loggedInUser.username,
      following,
      allUsers
    );
  }

  const followHandler = (userId) => {
    dispatch(followUser({ userId, encodedToken }));
  };

  return (
    <>
      <Navigation />
      <div className="suggested-user__container">
        {followUserloading && <Loader />}
        {!followUserloading && (
          <>
            <h3 className="suggested-user__header">Suggested</h3>
            <div className="suggested-user__details">
              {!followUserloading && suggestedUsers.length === 0 && (
                <p className="suggested-user__msg">No Suggestions Available</p>
              )}
              {!followUserloading &&
                suggestedUsers.length !== 0 &&
                suggestedUsers.map((user) => (
                  <HorizontalUserDetails
                    size="avatar-lg"
                    source={user.profilePicture}
                    username={user.username}
                    btntext="Follow"
                    key={user._id}
                    fullname={user.fullname}
                    handleClick={() => followHandler(user._id)}
                    btnstyle="primary_btn"
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export { Suggestion };
