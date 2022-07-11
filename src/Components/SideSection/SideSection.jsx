import { useNavigate } from "react-router-dom";
import { UserDetails } from "../UserDetails/UserDetails";
import "./side-section.css";

const SideSection = ({ currentUserName, userList, clickHandler }) => {
  const navigate = useNavigate();
  return (
    <div className="flex-col padding-sm">
      <UserDetails
        size="avatar-xxl"
        source={currentUserName?.profilePicture}
        username={currentUserName?.username}
        btntext="View Profile"
        handleClick={() => navigate(`/profile/${currentUserName?.username}/`)}
      />
      <p className="suggested-section">Suggestions For You </p>
      {userList.length === 0 && (
        <p className="suggested-section">No Suggestions Available </p>
      )}
      {userList.length !== 0 &&
        userList.map((user) => (
          <UserDetails
            size="avatar-lg"
            source={user.profilePicture}
            username={user.username}
            btntext="Follow"
            key={user._id}
            handleClick={() => clickHandler(user._id)}
            userId={user._id}
          />
        ))}
    </div>
  );
};

export { SideSection };
