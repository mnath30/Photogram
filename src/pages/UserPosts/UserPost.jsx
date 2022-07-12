import "./user-posts.css";
import { Posts, Loader } from "../../Components";
import { useSelector } from "react-redux";

const UserPost = () => {
  const { userPost, userPostLoading, userPostError } = useSelector(
    (store) => store.posts
  );

  return (
    <>
      {userPostLoading && <Loader />}
      {!userPostLoading && userPost.length !== 0 && (
        <div className="explore__container">
          <div className="grid explore__grid">
            {userPost.map((item, id) => (
              <Posts post={item} key={id} />
            ))}
          </div>
        </div>
      )}
      {!userPostLoading && userPost.length === 0 && (
        <p className="empty_msg">No Posts Added Yet</p>
      )}
      {!userPostLoading && userPostError && (
        <p className="empty_msg">
          There was some error in fetching the user posts
        </p>
      )}
    </>
  );
};
export { UserPost };
