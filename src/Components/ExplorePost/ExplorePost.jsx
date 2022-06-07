import "./explore-post.css";

const ExplorePost = ({ post }) => {
  const { info, image } = post;
  return (
    <>
      <div className="explorepost__container">
        <img src={image} alt={info} className="explorepost__img" />
        <div className="explorepost__overlay flex">
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

export { ExplorePost };
