import { ProfileHeader } from "../../Components";
import "./profile.css";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex-col profile__container">
      <ProfileHeader />
      <Outlet />
    </div>
  );
};

export { Profile };
