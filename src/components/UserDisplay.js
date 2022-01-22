import React from "react";

import UserDisplayItem from "./UserDisplayItem";
import styles from "./UserDisplay.module.css";

const UserDisplay = props => {
  return (
    <div className={styles.container}>
      <div className={styles.usernames}>
        {props.usernames.map(user => (
          <UserDisplayItem
            key={user.id}
            name={user.username}
            age={user.userage}
          />
        ))}
      </div>
    </div>
  );
};

export default UserDisplay;
