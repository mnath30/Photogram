import { data } from "../../helper/data";
import { Posts } from "../../Components";
import "./user-posts.css";

const Explore = () => {
  return (
    <div className="explore__container">
      <div className="grid explore__grid">
        {data.map((item, id) => (
          <Posts post={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export { Explore };
