import "./user-posts.css";
import { Posts, Loader } from "../../Components";
import { useSelector } from "react-redux";

const BookmarkedPost = () => {
  const { bookmarks, bookmarkLoading, bookmarkError } = useSelector(
    (store) => store.users
  );

  return (
    <>
      {bookmarkLoading && <Loader />}
      {!bookmarkLoading && bookmarks.length !== 0 && (
        <div className="explore__container">
          <div className="grid explore__grid">
            {bookmarks.map((item, id) => (
              <Posts post={item} key={id} />
            ))}
          </div>
        </div>
      )}
      {!bookmarkLoading && !bookmarkError && bookmarks.length === 0 && (
        <p className="empty_msg">You have not bookmarked any posts yet</p>
      )}
      {!bookmarkLoading && bookmarkError && (
        <p className="empty_msg">
          There was some error in fetching the user bookmarks
        </p>
      )}
    </>
  );
};
export { BookmarkedPost };
