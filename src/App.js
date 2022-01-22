import React, { useState } from "react";

import UserEntry from "./components/UserEntry";
import ModalWindow from "./components/ModalWindow";
import UserDisplay from "./components/UserDisplay";

const defaultValues = [];

const App = () => {
  const [allUsers, setAllUsers] = useState(defaultValues);
  const [invalidMessage, setInvalidMessage] = useState("");

  const invalidMessageHandler = msg => {
    setInvalidMessage(msg);
  };

  const addUserHandler = newUser => {
    setAllUsers(prevUsers => {
      return [newUser, ...prevUsers];
    });
  };

  const closeModalHandler = () => {
    setInvalidMessage("");
  };

  return (
    <div>
      <UserEntry
        onSubmitForm={addUserHandler}
        onInvalidInput={invalidMessageHandler}
      />
      <ModalWindow
        invalidMessage={invalidMessage}
        onCloseModal={closeModalHandler}
      />
      <UserDisplay usernames={allUsers} />
    </div>
  );
};

export default App;
