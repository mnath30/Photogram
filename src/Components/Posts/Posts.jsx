import "./posts.css";

const Posts = ({ post }) => {
  const { info, image } = post;
  return (
    <>
      <div className="singlepost__container">
        <img src={image} alt={info} className="singlepost__img" />
        <div className="singlepost__overlay flex">
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
