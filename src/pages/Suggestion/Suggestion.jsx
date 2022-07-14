import "./suggestion.css";
import { HorizontalUserDetails, Loader, SearchBar } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  loadUsers,
  followUser,
  applyFilter,
} from "../../features/users/userSlice";
import { filterUnfollowedUsers } from "../../helper";

const Suggestion = () => {
  const { allUsers, loggedInUser, following, followUserloading, filterText } =
    useSelector((store) => store.users);
  const encodedToken = localStorage.getItem("encodedToken");
  const dispatch = useDispatch();
  let suggestedUsers = [];
  let searchedUsers = [];

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

  if (allUsers && filterText) {
    searchedUsers = allUsers.filter(
      (user) =>
        user.username.toLowerCase().includes(filterText.toLowerCase()) ||
        user.fullname.toLowerCase().includes(filterText.toLowerCase())
    );
  }

  return (
    <>
      <div className="suggested-user__container">
        {followUserloading && <Loader />}
        {!followUserloading && (
          <>
            <div className="mobile__search">
              <SearchBar
                dispatch={dispatch}
                applyFilter={applyFilter}
                navsize="search_sm"
              />
            </div>
            {filterText ? (
              <h3 className="suggested-user__header">Search Results </h3>
            ) : (
              <h3 className="suggested-user__header">Suggested </h3>
            )}
            <div className="suggested-user__details">
              {!followUserloading &&
                suggestedUsers.length === 0 &&
                !filterText && (
                  <p className="suggested-user__msg">
                    No Suggestions Available
                  </p>
                )}
              {filterText && searchedUsers.length === 0 && (
                <p className="suggested-user__msg">No Search Results Found</p>
              )}
              {!followUserloading &&
                suggestedUsers.length !== 0 &&
                !filterText &&
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
                    userId={user._id}
                  />
                ))}
              {filterText &&
                searchedUsers.length !== 0 &&
                searchedUsers.map((user) => (
                  <HorizontalUserDetails
                    size="avatar-lg"
                    source={user.profilePicture}
                    username={user.username}
                    key={user._id}
                    fullname={user.fullname}
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
