import { Navigation, PostCards, SideSection } from "../../Components";
import "./home.css";
import { data } from "../../helper/data";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="home__container">
        <div className="flex">
          <div className="home__container-main">
            {data.map((post, id) => (
              <PostCards item={post} key={id} />
            ))}
          </div>
          <div className="home__container-side">
            <SideSection />
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };
