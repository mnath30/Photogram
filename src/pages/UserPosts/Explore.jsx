import { data } from "../../helper/data";
import { Posts } from "../../Components";
import "./user-posts.css";
import { Navigation } from "../../Components";

const Explore = () => {
  return (
    <>
      <Navigation />
      <div className="explore__container">
        <div className="grid explore__grid">
          {data.map((item, id) => (
            <Posts post={item} key={id} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Explore };
