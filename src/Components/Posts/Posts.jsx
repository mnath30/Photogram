import { useNavigate } from "react-router-dom";
import "./posts.css";

const Posts = ({ post }) => {
  const navigate = useNavigate();
  const { _id, info, image, likes, comments } = post;

  return (
    <>
      <div className="post__container" onClick={() => navigate(`/post/${_id}`)}>
        <img src={image} alt={info} className="post__img" />
        <div className="post__overlay flex">
          <i className="fa-solid fa-heart fa-lg padding-sm">
            <span className=" padding-sm">{likes?.likeCount}</span>
          </i>
          <i className="fa-solid fa-comment fa-lg padding-sm">
            <span className=" padding-sm">{comments?.length}</span>
          </i>
        </div>
      </div>
    </>
  );
};

export { Posts };
