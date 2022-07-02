import "./user-details.css";

const HorizontalUserDetails = ({
  source,
  username,
  fullname,
  btntext = "",
  handleClick,
  btnstyle = "",
}) => {
  return (
    <div className="flex padding-sm userdetails__horiz-container">
      <img src={source} alt="userprofile" className="avatar" />
      <div className="userdetails__section flex-col">
        <p className="userdetails__username">{username}</p>
        <p className="userdetails__name">{fullname} </p>
      </div>
      <button className={`btn ${btnstyle}`} onClick={handleClick}>
        {btntext}
      </button>
    </div>
  );
};

export { HorizontalUserDetails };
