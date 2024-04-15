import React, { useState } from "react";
import "../style/fragment.css";

function Fragment() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [about, setAbout] = useState("");
  const [name1, setName1] = useState("");
  const [age1, setAge1] = useState("");
  const [gender1, setGender1] = useState("");
  const [skills1, setSkills1] = useState([]);
  const [about1, setAbout1] = useState("");

  const handleSubmit = () => {
    console.log("Full Name:", name);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Skills:", skills.join(", "));
    console.log("About:", about);
    setName1(name);
    setAge1(age);
    setGender1(gender);
    setSkills1(skills);
    setAbout1(about);
    alert("Registered successfully done");
  };
  const handleReset = () => {
    setName1("");
    setAge1("");
    setGender1("");
    setSkills1([]);
    setAbout1("");
  };

  return (
    <>
      <div className="frag-container">
        <div className="frag-form">
          <>
            <p>Full Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </>

          <>
            <p>Age</p>
            <input
              type="text"
              placeholder="Enter your age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </>

          <>
            <p>Gender</p>
            <select
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </>

          <>
            <p>Skills</p>
            <input
              type="checkbox"
              value="Programming"
              onChange={(event) => setSkills([...skills, event.target.value])}
            />
            <label>Programming</label>

            <input
              type="checkbox"
              value="Development"
              onChange={(event) => setSkills([...skills, event.target.value])}
            />
            <label>Development</label>

            <input
              type="checkbox"
              value="Design"
              onChange={(event) => setSkills([...skills, event.target.value])}
            />
            <label>Design</label>

            <input
              type="checkbox"
              value="Testing"
              onChange={(event) => setSkills([...skills, event.target.value])}
            />
            <label>Testing</label>
          </>

          <>
            <p>About You</p>
            <textarea 
              rows="5" 
              cols="20"
              value={about}
              placeholder="Write something about yourself"
              onChange={(event) => setAbout(event.target.value)}

            />
          </>

          <div className="frag-btn">
            <>
              <button onClick={handleSubmit} type="button">
                Submit
              </button>
            </>

            <>
              <button onClick={handleReset} type="button">
                Reset
              </button>
            </>
          </div>
        </div>

        <div className="frag-res">
          <>
            <h3>Full Name: {name1}</h3>
            <h3>Age: {age1}</h3>
            <h3>Gender: {gender1}</h3>
            <h3>Skills: {skills1.join(", ")}</h3>
            <h3>About: {about1}</h3>
          </>
        </div>
      </div>
    </>
  );
}

export default Fragment;

//state, props, and hooks
