import { data } from "../../helper/data";
import { ExplorePost } from "../../Components";
import "./explore.css";

const Explore = () => {
  return (
    <div className="explore__container">
      <div className="grid explore__grid">
        {data.map((item, id) => (
          <ExplorePost post={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export { Explore };
