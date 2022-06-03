import { UserDetails } from "../UserDetails/UserDetails";
import { avatar } from "../../asset";

const SideSection = () => {
  return (
    <div className="flex-col">
      <UserDetails
        size="avatar-xxl"
        source={avatar}
        username="Maitreyee nath"
        btntext="View Profile"
      />
      <p>Suggestions For You </p>
      <UserDetails
        size="avatar-lg"
        source={avatar}
        username="Pikachu"
        btntext="Follow"
      />
      <UserDetails
        size="avatar-lg"
        source={avatar}
        username="Ash"
        btntext="Follow"
      />
      <UserDetails size="lg" source={avatar} username="Rock" btntext="Follow" />
      <UserDetails
        size="lg"
        source={avatar}
        username="John Doe"
        btntext="Follow"
      />
      <UserDetails
        size="avatar-lg"
        source={avatar}
        username="Jane Doe"
        btntext="Follow"
      />
    </div>
  );
};

export { SideSection };
