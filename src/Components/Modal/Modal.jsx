import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

const modal = document.getElementById("modal-root");
const Modal = ({ children }) => {
  const { displayModal } = useSelector((store) => store.posts);
  const { editProfile } = useSelector((store) => store.users);

  return (
    <>
      {(displayModal || editProfile) && ReactDOM.createPortal(children, modal)}
    </>
  );
};

export { Modal };
