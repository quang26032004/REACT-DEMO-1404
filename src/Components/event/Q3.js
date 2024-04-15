import React, { useState } from "react";
import "./Q3.css";

const Q3 = () => {
  const [fullname, setFullname] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onFullNameChange = (event) => {
    setFullname(event.target.value);
  };

  const onEnter = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    } else {
      setErrorMsg("");
    }
  };
  const onSubmit = () => {
    if (fullname !== "") {
      const capitalizedFullName = fullname
        .split(" ")
        .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
        .join(" ");
      setDisplayName(capitalizedFullName);
    } else {
      setErrorMsg("Please enter your name");
    }
  };

  return (
    <div className="Question3">
      <h1>Event - Question3</h1>
      <h3>{displayName}</h3>
      <div className="question3__textfield">
        <input
          type="text"
          placeholder="Enter your name"
          className="question3__textfield__input"
          name="fullname"
          id="fullname"
          onChange={onFullNameChange}
          onKeyDown={onEnter}
        />

        <button className="question3__textfield__button" onClick={onSubmit}>
          Submit
        </button>
      </div>
      <div className="question3__msg">{errorMsg}</div>
    </div>
  );
};

export default Q3;
