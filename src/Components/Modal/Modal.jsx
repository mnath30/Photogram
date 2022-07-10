import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

const modal = document.getElementById("modal-root");
const Modal = ({ children }) => {
  const { displayModal } = useSelector((store) => store.posts);

  return <>{displayModal && ReactDOM.createPortal(children, modal)}</>;
};

export { Modal };
