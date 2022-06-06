import { data } from "../../helper/data";
import "./single-post.css";
import { Comment } from "../../Components";

const SinglePost = () => {
  const newData = data[2];
  const { username, profile, info, image, description } = newData;
  return (
    <div className="grid singlepost__container">
      <div className="singlepost__container-image flex">
        <img src={image} alt={info} className="responsive-img" />
      </div>
      <div className="singlepost__container-header">
        <div className="flex padding-sm">
          <img src={profile} alt={username} className="avatar" />
          <h4 className="padding-sm">{username}</h4>
        </div>

        <div className="hr"></div>
        <div className="singlepost__container-comments">
          <div>
            <div className="flex padding-sm">
              <img src={profile} alt={username} className="avatar" />
              <h4 className="padding-sm">{username}</h4>
            </div>
          </div>
          <p className=" txt-left padding-sm">{description}</p>

          <Comment
            profileName={username}
            image={profile}
            comment="This is a comment added for test "
          />
          <Comment
            profileName={username}
            image={profile}
            comment="This is a comment added for test "
          />
          <Comment
            profileName={username}
            image={profile}
            comment="This is a comment added for test "
          />
          <Comment
            profileName={username}
            image={profile}
            comment="This is a comment added for test "
          />
        </div>
        <div className="hr "></div>
        <div className="flex padding-md">
          <i className="fa-regular fa-heart fa-lg padding-sm"></i>
          <i className="fa-regular fa-bookmark fa-lg padding-sm"></i>
        </div>
        <div className="padding-sm flex ">
          <input
            type="text"
            placeholder="Add a comment..."
            className="padding-sm comment-input"
          />
          <button className="post__container-btn">Post</button>
        </div>
      </div>
    </div>
  );
};

export { SinglePost };
