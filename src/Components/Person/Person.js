import React from "react";
import PersonItem from "./PersonItem";
import "./person.css";

const Person = () => {
  const PersonID = [
    {
      id: "1",
      fullName: "John Doe",
      age: "25",
    },

    {
      id: "2",
      fullName: "Jane Doe",
      age: "26",

    },

    {
      id: "3",
      fullName: "John Smith",
      age: "27",
    },
  ];

  return (
    <div className="setup">

        {PersonID.map((item) => {
          return <PersonItem PersonItem={item} key={item.id}>
            <h1>This is children text</h1>
          </PersonItem>;
        })}

    </div>
  );
};

export default Person;
