import {
  Loader,
  Navigation,
  PostCards,
  SideSection,
  EmptyFeed,
} from "../../Components";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import { filterUnfollowedUsers, filterUserFeed } from "../../helper";
import { useEffect } from "react";
import { loadPosts } from "../../features/posts/postSlice";
import { loadUsers, followUser } from "../../features/users/userSlice";

const Home = () => {
  const { posts, loading } = useSelector((store) => store.posts);
  const { allUsers, loggedInUser } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const encodedToken = localStorage.getItem("encodedToken");
  let userFeed = [];
  let followUsers = [];
  useEffect(() => {
    if (!posts) {
      dispatch(loadPosts());
    }
    if (!allUsers && !loggedInUser) {
      dispatch(loadUsers());
    }
  }, [posts, allUsers, loggedInUser, dispatch]);

  if (loggedInUser?.following && loggedInUser?.username && posts) {
    userFeed = filterUserFeed(
      loggedInUser?.username,
      loggedInUser?.following,
      posts
    );
  }
  if (allUsers && loggedInUser?.following && loggedInUser?.username) {
    followUsers = filterUnfollowedUsers(
      loggedInUser?.username,
      loggedInUser?.following,
      allUsers
    );
  }

  const followHandler = (userId) => {
    dispatch(followUser({ userId, encodedToken }));
  };

  return (
    <>
      <Navigation />
      <div className="home__container">
        <div className="flex">
          <div className="home__container-main">
            {loading && <Loader />}
            {!loading && userFeed.length === 0 && <EmptyFeed />}
            {userFeed.length !== 0 &&
              userFeed.map((post) => (
                <PostCards item={post} key={post._id} dispatchfunc={dispatch} />
              ))}
          </div>
          <div className="home__container-side">
            <SideSection
              currentUserName={loggedInUser}
              userList={followUsers.slice(0, 5)}
              clickHandler={followHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };
