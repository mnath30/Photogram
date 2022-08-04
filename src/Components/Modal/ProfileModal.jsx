import {
  hideEditUserProfile,
  loadUsers,
  editProfile,
} from "../../features/users/userSlice";
import { loadPosts } from "../../features/posts/postSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { avatar } from "../../asset";

const ProfileModal = () => {
  const encodedToken = localStorage.getItem("encodedToken");
  const dispatch = useDispatch();
  const { editProfileLoading, loggedInUser } = useSelector(
    (store) => store.users
  );
  const [userProfileData, setUserProfileData] = useState({
    displayProfileModal: true,
    fullName: "",
    bio: "",
    profilePicture: "",
    dataErrorMsg: "",
  });

  useEffect(() => {
    if (Object.keys(loggedInUser).length === 0) {
      dispatch(loadUsers());
    } else {
      setUserProfileData({
        ...userProfileData,
        fullName: loggedInUser.fullname,
        bio: loggedInUser.description,
        profilePicture: loggedInUser.profilePicture,
      });
    }
    // eslint-disable-next-line
  }, [loggedInUser, dispatch]);

  const handleImageSelection = (e) => {
    setUserProfileData({
      ...userProfileData,
      profilePicture: URL.createObjectURL(e.target.files[0]),
      dataErrorMsg: "",
    });
  };

  const profileUpdateHandler = () => {
    if (userProfileData.fullName === "") {
      setUserProfileData({
        ...userProfileData,
        dataErrorMsg: "Full name cannot be empty",
      });
    } else {
      setUserProfileData({
        ...userProfileData,
        dataErrorMsg: "",
        displayProfileModal: false,
      });
      dispatch(
        editProfile({
          userData: {
            fullname: userProfileData.fullName,
            description: userProfileData.bio,
            profilePicture: userProfileData.profilePicture,
          },
          encodedToken,
        })
      );
      dispatch(loadPosts());
    }
  };

  return (
    <div
      className="modal__background"
      onClick={() => dispatch(hideEditUserProfile())}
    >
      {editProfileLoading && !userProfileData.displayProfileModal && <Loader />}
      {!editProfileLoading && userProfileData.displayProfileModal && (
        <div className="modal__container" onClick={(e) => e.stopPropagation()}>
          {/* Header Section */}
          <div className="modal__header">
            <p className="txt-md padding-sm txt-center">Update Profile</p>
          </div>

          {/* Image Upload Section */}
          <div className="padding-sm">
            <div className="profile_img">
              <img
                src={userProfileData.profilePicture}
                alt="upload-placeholder"
                className="profile__modal_img"
              />
            </div>

            <div className="txt-center btn-section">
              <label htmlFor="modal-input" className="profile_btn">
                Update Photo
                <span className="modal__select padding-sm ">
                  <i className="fa-solid fa-camera"></i>
                </span>
                <input
                  id="modal-input"
                  type="file"
                  accept="image/png, image/jpg, image/jpeg"
                  className="modal__inp"
                  onChange={handleImageSelection}
                />
              </label>
              <button
                className="profile_btn"
                onClick={() =>
                  setUserProfileData({
                    ...userProfileData,
                    profilePicture: avatar,
                  })
                }
              >
                Use Default
              </button>
            </div>
          </div>

          {/* Footer Section */}
          <div className="padding-sm flex-col profile__footer">
            <label htmlFor="fullname" className="profile__label">
              Name
            </label>
            <input
              id="fullname"
              type="text"
              maxLength="20"
              placeholder="Enter full name"
              className="profile__inp"
              value={userProfileData.fullName}
              onChange={(e) => {
                setUserProfileData({
                  ...userProfileData,
                  dataErrorMsg: "",
                  fullName: e.target.value,
                });
              }}
            />
            <label htmlFor="bio">Profile Bio</label>
            <textarea
              id="bio"
              type="text"
              rows="2"
              placeholder="Add bio..."
              className="profile__inp profile__description"
              value={userProfileData.bio}
              maxLength="150"
              onChange={(e) => {
                setUserProfileData({
                  ...userProfileData,
                  bio: e.target.value,
                });
              }}
            ></textarea>
            <div className="flex">
              <span className="txt-xs">{userProfileData.bio.length}/150</span>
              <span className="btn__section">
                <button
                  onClick={profileUpdateHandler}
                  className="primary_btn margin-sm"
                >
                  Save
                </button>
                <button
                  onClick={() => dispatch(hideEditUserProfile())}
                  className="secondary_btn"
                >
                  Close
                </button>
              </span>
            </div>
          </div>
          {userProfileData.dataErrorMsg && (
            <p className="txt-center error-msg">
              {userProfileData.dataErrorMsg}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export { ProfileModal };
