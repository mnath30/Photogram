import "./posts.css";

const Posts = ({ post }) => {
  const { info, image } = post;
  return (
    <>
      <div className="post__container">
        <img src={image} alt={info} className="post__img" />
        <div className="post__overlay flex">
          <i className="fa-solid fa-heart fa-lg padding-sm">
            <span className=" padding-sm">23</span>
          </i>
          <i className="fa-solid fa-comment fa-lg padding-sm">
            <span className=" padding-sm">10</span>
          </i>
        </div>
      </div>
    </>
  );
};

export { Posts };
