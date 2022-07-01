import "./user-details.css";

const UserDetails = ({ source, username, btntext, handleClick }) => {
  return (
    <div className="flex padding-sm userdetails__container">
      <img src={source} alt="userprofile" className="avatar" />
      <p className="userdetails__username">{username}</p>
      <button className="btn userprofile__container-btn" onClick={handleClick}>
        {btntext}
      </button>
    </div>
  );
};

export { UserDetails };
