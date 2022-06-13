import "./post-cards.css";

const PostCards = ({ item }) => {
  const { username, profile, info, image, description } = item;
  return (
    <div className="postcard__container flex-col">
      <div className="flex postcard__container-header padding-sm">
        <img src={profile} alt={username} className="avatar" />
        <h4 className="padding-sm">{username}</h4>
      </div>
      <div className="postcard__container-image">
        <img src={image} alt={info} className="responsive-img" />
      </div>
      <div className="postcard__container-content flex-col">
        <div className="flex padding-sm">
          <i className="fa-regular fa-heart fa-lg padding-sm"></i>
          <i className="fa-regular fa-bookmark fa-lg padding-sm"></i>
        </div>

        <p className="postcard__container-description padding-sm">
          <strong>{username} </strong>
          {description}
        </p>
        <div className="hr"></div>
        <div className="padding-sm flex">
          <input
            type="text"
            placeholder="Add a comment..."
            className="padding-sm"
          />
          <button className="postcard__container-btn">Post</button>
        </div>
      </div>
    </div>
  );
};

export { PostCards };
