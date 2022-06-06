import "./comment.css";

const Comment = ({ profileName, image, comment }) => {
  return (
    <div className="padding-sm">
      <div className="flex comment-section">
        <img src={image} alt={profileName} className="avatar" />
        <h4 className=" padding-sm">{profileName}</h4>
      </div>
      <p className="txt-left comment-txt">{comment}</p>
    </div>
  );
};

export { Comment };
