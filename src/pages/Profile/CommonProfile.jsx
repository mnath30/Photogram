import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails } from "../../features/users/userSlice";
import { loadUserPost } from "../../features/posts/postSlice";
import { OtherUserProfileHeader, Loader, Posts } from "../../Components";

const CommonProfile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { otherUserDetail, otherUserLoading, loggedInUser } = useSelector(
    (store) => store.users
  );
  const { userPost, userPostLoading, userPostError } = useSelector(
    (store) => store.posts
  );
  const isFollowing = loggedInUser?.following.some(
    (user) => user.username === otherUserDetail?.username
  );

  useEffect(() => {
    dispatch(getUserDetails(userId));
  }, [userId, dispatch, loggedInUser]);

  useEffect(() => {
    if (otherUserDetail?.username) {
      dispatch(loadUserPost(otherUserDetail?.username));
    }
  }, [otherUserDetail, dispatch]);

  return (
    <>
      {otherUserLoading && <Loader />}
      {!otherUserLoading &&
        Object.keys(otherUserDetail).length !== 0 &&
        userPost && (
          <>
            <div className="flex-col profile__container">
              <OtherUserProfileHeader
                userData={otherUserDetail}
                userPosts={userPost}
                userfollowing={isFollowing}
              />
            </div>
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
              <p className="empty_msg">
                {otherUserDetail.username} has not added any posts yet
              </p>
            )}
            {!userPostLoading && userPostError && (
              <p className="empty_msg">
                There was some error in fetching the user posts
              </p>
            )}
          </>
        )}
    </>
  );
};

export { CommonProfile };
