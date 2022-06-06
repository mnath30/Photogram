import { Routes, Route } from "react-router-dom";
import { Home, Explore } from "../pages";
import { SinglePost } from "../pages/SinglePost/SinglePost";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      {/* <Route path="/liked" element={<Like />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<PageNotFound />} /> */}
      <Route path="/singlepost" element={<SinglePost />} />
    </Routes>
  );
};

export { Router };
