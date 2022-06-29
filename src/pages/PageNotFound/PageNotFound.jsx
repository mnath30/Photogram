import { pageNotFound } from "../../asset";
import { Link } from "react-router-dom";
import "./page-not-found.css";

const PageNotFound = () => {
  return (
    <div className="page__container">
      <img src={pageNotFound} alt="page-not-found" className="responsive-img" />
      <p className="page__msg">
        We could not find what you were looking for. Go back
        <Link to="/" className="page__link">
          {" "}
          Home
        </Link>
      </p>
    </div>
  );
};

export { PageNotFound };
