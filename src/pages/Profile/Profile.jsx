import { ProfileHeader } from "../../Components";
import "./profile.css";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../Components";

const Profile = () => {
  return (
    <>
      <Navigation />
      <div className="flex-col profile__container">
        <ProfileHeader />
        <Outlet />
      </div>
    </>
  );
};

export { Profile };
