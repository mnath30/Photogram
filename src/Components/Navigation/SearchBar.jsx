import "./navigation.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = ({ dispatch, applyFilter, navsize }) => {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  return (
    <div className={` ${navsize} nav-search`}>
      <input
        className="nav-search-input"
        type="text"
        placeholder="Search users..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {filter.length > 0 && (
        <button
          className=" btn-close"
          onClick={() => {
            dispatch(applyFilter(""));
            setFilter("");
          }}
        >
          <i className="fas fa-times"></i>
        </button>
      )}
      <button
        className="nav-search-btn"
        onClick={(e) => {
          dispatch(applyFilter(filter));
          navigate("/explore/people");
        }}
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export { SearchBar };
