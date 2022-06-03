import "./user-details.css";

const UserDetails = ({ source, username, btntext }) => {
  return (
    <div className="flex padding-sm userdetails__container">
      <img src={source} alt="userprofile" className="avatar" />
      <p>{username}</p>
      <button className="btn userprofile__container-btn">{btntext}</button>
    </div>
  );
};

export { UserDetails };
