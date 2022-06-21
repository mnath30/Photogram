import ReactLoading from "react-loading";
import "./loader.css";

const Loader = () => {
  return (
    <ReactLoading
      type="spin"
      color="#0095f6"
      height="4rem"
      width="4rem"
      className="loader"
    />
  );
};

export { Loader };
