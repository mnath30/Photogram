import { Loader, Posts } from "../../Components";
import "./user-posts.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadPosts } from "../../features/posts/postSlice";

const Explore = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((store) => store.posts);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(loadPosts());
    }
  }, [posts, dispatch]);

  return (
    <>
      {loading && <Loader />}
      {!loading && posts && (
        <div className="explore__container">
          <div className="grid explore__grid">
            {posts.map((item) => (
              <Posts post={item} key={item._id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export { Explore };
