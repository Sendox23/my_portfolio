import React from "react";
import classes from "./ModalImage.module.css";

const ModalImage = ({ modalImage, closeModal }) => {
  return (
    <div className={classes.modal} onClick={closeModal}>
      <button className={classes.closeButton} onClick={closeModal}>
        X
      </button>
      <img src={modalImage} alt="full-screen" />
    </div>
  );
};

export default ModalImage;