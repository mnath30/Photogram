import "./single-post.css";
import { Comment, Navigation, Loader } from "../../Components";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { loadSinglePost } from "../../features/posts/postSlice";
import { useSelector, useDispatch } from "react-redux";

const SinglePost = () => {
  const { postId } = useParams();
  const { singlePostLoading, singlePostError, singlePostData } = useSelector(
    (store) => store.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      Object.keys(singlePostData).length === 0 ||
      singlePostData._id !== postId
    ) {
      dispatch(loadSinglePost(postId));
    }
  }, [singlePostData, dispatch, postId]);

  return (
    <>
      <Navigation />
      {singlePostLoading && <Loader />}
      {!singlePostLoading && Object.keys(singlePostData).length !== 0 && (
        <div className="grid singlepost__container">
          <div className="singlepost__container-image flex">
            <img
              src={singlePostData?.image}
              alt={singlePostData?.info}
              className="responsive-img"
            />
          </div>
          <div className="singlepost__container-header flex-col">
            <div className="flex padding-sm singlepost__usename">
              <img
                src={singlePostData?.profile}
                alt={singlePostData?.username}
                className="avatar"
              />
              <h4 className="padding-sm">{singlePostData?.username}</h4>
            </div>
            <div className="hr"></div>
            <div className="singlepost__container-comments">
              {singlePostData?.comments.length === 0 && (
                <p>No comments on the post yet</p>
              )}
              {singlePostData?.comments.length !== 0 &&
                singlePostData?.comments.map((comment) => (
                  <Comment
                    profileName={comment.username}
                    image={singlePostData?.profile}
                    comment={comment.text}
                  />
                ))}
            </div>
            <div className="hr "></div>
            <span className="singlepost__container_details">
              <div className="flex padding-md ">
                <i className="fa-regular fa-heart fa-lg padding-sm"></i>
                {singlePostData?.likes?.likeCount}
                <i className="fa-regular fa-bookmark fa-lg padding-sm"></i>
              </div>
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
              <p className="txt-left">{singlePostData?.description}</p>
              <div className="flex singlepost__addcomment">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="padding-sm comment-input"
                />
                <button className="post__container-btn">Post</button>
              </div>
            </span>
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
