import { emptyfeed } from "../../asset";
import "./empty-feed.css";

const EmptyFeed = () => {
  return (
    <div className="feed__container">
      <img src={emptyfeed} alt="empty-user-feed" className="responsive-img" />
      <p className="feed__msg">
        No posts to display. Follow users to see their posts
      </p>
    </div>
  );
};

export { EmptyFeed };
