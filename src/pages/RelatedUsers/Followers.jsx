import { HorizontalUserDetails } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "../../features/users/userSlice";

const Followers = () => {
  const { loggedInUser } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  let followers = [];

  useEffect(() => {
    if (!loggedInUser) {
      dispatch(loadUsers());
    }
  }, [loggedInUser, dispatch]);

  if (loggedInUser) {
    followers = loggedInUser?.followers;
  }

  return (
    <>
      <div className="related-user__container">
        <div className="related-user__details">
          {followers && followers.length === 0 && (
            <p className="related-user__msg">
              You do not have any followers yet.
            </p>
          )}
          {followers &&
            followers.length !== 0 &&
            followers.map((user) => (
              <HorizontalUserDetails
                size="avatar-lg"
                source={user.profilePicture}
                username={user.username}
                key={user._id}
                fullname={user.fullname}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export { Followers };
