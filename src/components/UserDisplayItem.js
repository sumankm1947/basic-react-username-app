import React from "react";

import styles from "./UserDisplayItem.module.css";

const UserDisplayItem = props => {
  return (
    <div className={styles["display-details"]}>
      <div className={styles.name}>Name : {props.name}</div>
      <div className={styles.age}>Age : {props.age}</div>
    </div>
  );
};

export default UserDisplayItem;
