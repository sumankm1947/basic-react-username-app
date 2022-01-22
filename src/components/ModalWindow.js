import React from "react";

import styles from "./ModalWindow.module.css";

const ModalWindow = props => {
  return (
    <div>
      <div
        onClick={props.onCloseModal}
        className={`${styles["modal-overlay"]} ${
          !props.invalidMessage.length && styles.hidden
        }`}
      ></div>
      <div
        className={`${styles["modal-container"]} ${
          !props.invalidMessage.length && styles.hidden
        }`}
      >
        <button onClick={props.onCloseModal}>&times;</button>
        <p>{props.invalidMessage}</p>
      </div>
    </div>
  );
};

export default ModalWindow;
