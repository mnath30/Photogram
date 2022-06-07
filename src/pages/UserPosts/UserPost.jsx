import "./user-posts.css";
import { data } from "../../helper/data";
import { Posts } from "../../Components";

const UserPost = () => {
  // Will be replaced with data from the api
  const dataNew = data.slice(7);
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
export { UserPost };
