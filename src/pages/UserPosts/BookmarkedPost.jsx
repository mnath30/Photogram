import "./user-posts.css";
import { data } from "../../helper/data";
import { Posts } from "../../Components";

const BookmarkedPost = () => {
  // Will be replaced with data from the api
  const dataNew = data.slice(0, 4);
  return (
    <div className="explore__container">
      <div className="grid explore__grid">
        {dataNew.map((item, id) => (
          <Posts post={item} key={id} />
        ))}
      </div>
    </div>
  );
};
export { BookmarkedPost };
