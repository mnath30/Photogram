import { Routes, Route } from "react-router-dom";
import { Home, Explore, Profile, UserPost, BookmarkedPost } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="explore" element={<Explore />} />
      {/* <Route path="liked" element={<Like />} /> */}
      <Route path="profile" element={<Profile />}>
        <Route path="posts" element={<UserPost />} />
        <Route path="saved" element={<BookmarkedPost />} />
      </Route>
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export { Router };
