import { useEffect, useState } from "react";
import {
  hideModal,
  loadSinglePost,
  updatePost,
  uploadPost,
} from "../../features/posts/postSlice";
import "./modal.css";
import { uploadImage } from "../../asset";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import { useLocation } from "react-router-dom";

const PostUploadModal = () => {
  const location = useLocation();
  const postId = location.pathname.split("/");
  const [postModalDetails, setPostModalDetails] = useState({
    imagePreview: "",
    imageInfo: "",
    dataErrorMsg: "",
    showUploadContainer: true,
  });
  const encodedToken = localStorage.getItem("encodedToken");
  const dispatch = useDispatch();
  const { uploadPostLoading, currentPost, editingPost } = useSelector(
    (store) => store.posts
  );

  useEffect(() => {
    if (editingPost) {
      setPostModalDetails({
        ...postModalDetails,
        _id: currentPost._id,
        imagePreview: currentPost.image,
        imageInfo: currentPost.description,
      });
    }
    // eslint-disable-next-line
  }, [currentPost, editingPost]);

  const handleImageSelection = (e) => {
    setPostModalDetails({
      ...postModalDetails,
      imagePreview: URL.createObjectURL(e.target.files[0]),
      dataErrorMsg: "",
    });
  };

  const imageUploadHandler = () => {
    if (postModalDetails.imagePreview && postModalDetails.imageInfo) {
      if (editingPost) {
        dispatch(
          updatePost({
            postData: {
              description: postModalDetails.imageInfo,
              image: postModalDetails.imagePreview,
              _id: postModalDetails._id,
            },
            encodedToken,
          })
        );
        postId[2] && dispatch(loadSinglePost(postId[2]));
      } else {
        dispatch(
          uploadPost({
            postData: {
              description: postModalDetails.imageInfo,
              image: postModalDetails.imagePreview,
            },
            encodedToken,
          })
        );
      }
      setPostModalDetails({ ...postModalDetails, showUploadContainer: false });
    } else {
      setPostModalDetails({
        ...postModalDetails,
        dataErrorMsg: "Enter all the fields",
      });
    }
  };

  return (
    <div className="modal__background" onClick={() => dispatch(hideModal())}>
      {uploadPostLoading && !postModalDetails.showUploadContainer && <Loader />}
      {!uploadPostLoading && postModalDetails.showUploadContainer && (
        <div className="modal__container" onClick={(e) => e.stopPropagation()}>
          {/* Header Section */}
          <div className="modal__header">
            <p className="txt-md padding-sm txt-center">Create New Post</p>
          </div>

          {/* Image Upload Section */}
          <div className="modal__image padding-sm">
            <label htmlFor="modal-input" className="modal__input_selection">
              Select File
              <span className="modal__select padding-sm">
                <i className="fa-solid fa-camera"></i>
              </span>
              <input
                id="modal-input"
                type="file"
                accept="image/png, image/jpg, image/gif, image/jpeg"
                className="modal__inp"
                onChange={handleImageSelection}
              />
              {/* default image when no image is uploaded */}
              {!postModalDetails.imagePreview && (
                <div className="image__container">
                  <img
                    src={uploadImage}
                    alt="upload-placeholder"
                    className="modal__img"
                  />
                </div>
              )}
            </label>
            {/* Image uploaded by user */}
            {postModalDetails.imagePreview && (
              <div className="image__container">
                <img
                  src={postModalDetails.imagePreview}
                  alt="selected-upload"
                  className="modal__img"
                />
                <span
                  onClick={() =>
                    setPostModalDetails({
                      ...postModalDetails,
                      imagePreview: "",
                    })
                  }
                  className="img__btnclose flex"
                >
                  <i className="fa fa-times"></i>
                </span>
              </div>
            )}
          </div>

          {/* Footer Section */}
          <div className="padding-sm">
            <input
              type="text"
              placeholder="Write a caption..."
              className="modal__description padding-sm"
              value={postModalDetails.imageInfo}
              onChange={(e) => {
                setPostModalDetails({
                  ...postModalDetails,
                  imageInfo: e.target.value,
                  dataErrorMsg: "",
                });
              }}
              maxLength="150"
            />
            <div className="flex">
              <span className="txt-xs">
                {postModalDetails.imageInfo.length}/150
              </span>
              <span className="btn__section">
                <button
                  onClick={imageUploadHandler}
                  className="primary_btn margin-sm"
                >
                  Upload
                </button>
                <button
                  onClick={() => dispatch(hideModal())}
                  className="secondary_btn"
                >
                  Close
                </button>
              </span>
            </div>
          </div>
          {postModalDetails.dataErrorMsg && (
            <p className="txt-center error-msg">
              {postModalDetails.dataErrorMsg}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export { PostUploadModal };
