import { Routes, Route } from "react-router-dom";
import { Home, Explore } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      {/* <Route path="/liked" element={<Like />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export { Router };
