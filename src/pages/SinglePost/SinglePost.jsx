import "./single-post.css";
import {
  Comment,
  Navigation,
  Loader,
  LikeCommentBookmark,
  PostUserHeader,
} from "../../Components";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadSinglePost, loadPosts } from "../../features/posts/postSlice";
import { useSelector, useDispatch } from "react-redux";
import { addCommentHandler } from "../../helper";
import {
  addPostComment,
  deletePostComment,
} from "../../features/comments/commentSlice";

const SinglePost = () => {
  const { postId } = useParams();
  const {
    singlePostLoading,
    singlePostError,
    singlePostData,
    posts,
    editingPost,
  } = useSelector((store) => store.posts);
  const currentUserName = localStorage.getItem("username");
  const encodedToken = localStorage.getItem("encodedToken");
  const dispatch = useDispatch();
  let currentUserLiked = false;
  const { bookmarks } = useSelector((store) => store.users);
  let currentUserBookmarked = false;
  const [showEditPost, setShowEditPost] = useState(false);

  if (singlePostData?.likes) {
    currentUserLiked = singlePostData?.likes?.likedBy.some(
      (user) => user === currentUserName
    );
  }

  if (bookmarks) {
    currentUserBookmarked = bookmarks.some(
      (item) => item._id === singlePostData?._id
    );
  }
  const [commentText, setCommentText] = useState("");
  const closeDropdownHandler = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowEditPost(false);
    }
  };

  useEffect(() => {
    if (
      Object.keys(singlePostData).length === 0 ||
      singlePostData._id !== postId
    ) {
      dispatch(loadSinglePost(postId));
    }
  }, [singlePostData, dispatch, postId, posts]);

  return (
    <>
      <Navigation />
      {singlePostLoading && !editingPost && <Loader />}
      {!singlePostLoading && Object.keys(singlePostData).length !== 0 && (
        <div className="singlepost__container">
          <div className="singlepost__usename_mobile">
            <PostUserHeader
              setShowPostDropdown={setShowEditPost}
              showPostDropdown={showEditPost}
              item={singlePostData}
              dispatchfunc={dispatch}
              encodedToken={encodedToken}
              currentUserName={currentUserName}
              handleChange={closeDropdownHandler}
              singlePost="true"
            />
          </div>
          <div className="grid singlepost__grid">
            <div className="singlepost__container-image flex">
              <img
                src={singlePostData?.image}
                alt={singlePostData?.info}
                className="responsive-img"
              />
            </div>
            <div className="singlepost__container-header flex-col">
              <div className="singlepost__usename">
                <PostUserHeader
                  setShowPostDropdown={setShowEditPost}
                  showPostDropdown={showEditPost}
                  item={singlePostData}
                  dispatchfunc={dispatch}
                  encodedToken={encodedToken}
                  currentUserName={currentUserName}
                  handleChange={closeDropdownHandler}
                  singlePost="true"
                />
              </div>
              <div className="singlepost__container-comments">
                {singlePostData?.comments.length === 0 && (
                  <p>No comments on the post yet</p>
                )}
                {singlePostData?.comments.length !== 0 &&
                  singlePostData?.comments.map((comment) => (
                    <Comment
                      key={comment?._id}
                      dispatch={dispatch}
                      postId={singlePostData?._id}
                      deleteComment={deletePostComment}
                      encodedToken={encodedToken}
                      commentDetails={comment}
                      postUser={singlePostData?.username}
                    />
                  ))}
              </div>
              <div className="hr "></div>
              <span className="singlepost__container_details">
                <LikeCommentBookmark
                  dispatchfunc={dispatch}
                  postId={singlePostData?._id}
                  likedByUser={currentUserLiked}
                  isBookmarked={currentUserBookmarked}
                  likeCount={singlePostData?.likes?.likeCount}
                  singlePostPage="true"
                />
                <div>
                  <div className="flex padding-sm">
                    <img
                      src={singlePostData?.profile}
                      alt={singlePostData?.username}
                      className="avatar"
                    />
                    <h4 className="padding-sm">{singlePostData?.username}</h4>
                  </div>
                </div>
                <p className="singlepost__description">
                  {singlePostData?.description}
                </p>
                <div className="hr"></div>
                <div className="flex singlepost__addcomment">
                  <label htmlFor={singlePostData?._id}></label>
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="padding-sm comment-input"
                    id={singlePostData?._id}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <button
                    className={`${
                      commentText.length === 0 && "comment__btn_disabled"
                    } addcomment__btn`}
                    disabled={commentText.length === 0 ? true : false}
                    onClick={() => {
                      addCommentHandler(
                        singlePostData?._id,
                        dispatch,
                        addPostComment,
                        {
                          text: commentText,
                        },
                        encodedToken
                      );
                      dispatch(loadSinglePost(singlePostData?._id));
                      setCommentText("");
                      dispatch(loadPosts());
                    }}
                  >
                    Post
                  </button>
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
      {singlePostError && (
        <p className="padding-md">
          There was some error in processing your request. Go Back to{" "}
          <Link to="/" className="page__link">
            Home
          </Link>
        </p>
      )}
    </>
  );
};

export { SinglePost };
