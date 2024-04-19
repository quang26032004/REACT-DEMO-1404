import React from "react";

const PersonItem = (props) => {
  console.log("props", props);
  return (
    <div className="setup">
      <div className="person">
        <h2>Fullname: {props?.PersonItem?.fullName ?? "Name Default"}</h2>
        <p>Age: {props?.PersonItem?.age}</p>
        <p>Slogan: {props?.PersonItem?.slogan || "You don't have slogan"}</p>
        {props?.children}
      </div>
    </div>
  );
};

export default PersonItem;
