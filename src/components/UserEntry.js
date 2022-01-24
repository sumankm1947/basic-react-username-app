import React, { useState } from "react";

import styles from "./UserEntry.module.css";

const UserEntry = props => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  const resetForm = () => {
    setEnteredName("");
    setEnteredAge("");
  };

  const submitHandler = event => {
    event.preventDefault();
    const age = parseInt(enteredAge);

    if (isNaN(age) || enteredName.trim() === "") {
      props.onInvalidInput("Please enter something 😊");
      resetForm();
      return;
    }
    if (age < 0) {
      props.onInvalidInput("Age cannot be negative 🙂");
      resetForm();
      return;
    } else if (age === 0) {
      props.onInvalidInput("Age cannot be zero 🙂");
      resetForm();
      return;
    }

    const userObj = {
      id: Math.random().toString(),
      username: enteredName,
      userage: age,
    };

    props.onSubmitForm(userObj);
    resetForm();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles["form-control"]}>
        <label>Username</label>
        <input
          type="text"
          onChange={nameChangeHandler}
          className={styles.username}
          value={enteredName}
        />

        <label>Age</label>
        <input
          type="number"
          onChange={ageChangeHandler}
          className={styles.userage}
          value={enteredAge}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserEntry;
