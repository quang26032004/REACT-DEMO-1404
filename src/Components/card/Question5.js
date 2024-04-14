import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../style/question5.css";

function Question5() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [object, setObject] = useState([]);
  const [skills, setSkills] = useState([]);
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [picture, setPicture] = useState("");
  const [fullName1, setFullName1] = useState("");
  const [userName1, setUserName1] = useState("");
  const [password1, setPassword1] = useState("");
  const [email1, setEmail1] = useState("");
  const [telephoneNumber1, setTelephoneNumber1] = useState("");
  const [object1, setObject1] = useState([]);
  const [skills1, setSkills1] = useState([]);
  const [address1, setAddress1] = useState("");
  const [birthday1, setBirthday1] = useState("");
  const [picture1, setPicture1] = useState("");

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Full Name:", fullName);
    console.log("Username:", userName);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Telephone Number:", telephoneNumber);
    console.log("Object:", object);
    console.log("Skills:", skills.join(", "));
    console.log("Address:", address);
    console.log("Birthday:", birthday);
    console.log("Picture:", picture);
    setFullName1(fullName);
    setUserName1(userName);
    setPassword1(password);
    setEmail1(email);
    setTelephoneNumber1(telephoneNumber);
    setObject1(object);
    setSkills1(skills);
    setAddress1(address);
    setBirthday1(birthday);
    setPicture1(picture);
    alert("Đăng ký thành công");
  };

  const handleReset = () => {
    setFullName1("");
    setUserName1("");
    setPassword1("");
    setEmail1("");
    setTelephoneNumber1("");
    setObject1([]);
    setSkills1([]);
    setAddress1("");
    setBirthday1("");
    setPicture1("");
  };

  return (
    <>
      <div className="container">
        <div className="register">
          <div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            ></Box>

            <>
              <p>Please fill in this form to create account please</p>
            </>

            <>
              <p>Full name *</p>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Enter your name"
                onChange={(event) => setFullName(event.target.value)}
              />
            </>

            <>
              <p>Username *</p>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Username"
                onChange={(event) => setUserName(event.target.value)}
              />
            </>

            <>
              <p>Password *</p>
              <TextField
                required
                id="outlined-required"
                label="Required"
                type="password"
                defaultValue="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </>

            <>
              <p>Email *</p>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </>

            <>
              <p>Telephone Number *</p>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Telephone Number"
                onChange={(event) => setTelephoneNumber(event.target.value)}
              />
            </>
          </div>

          <div>
            <>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Input object
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="teacher"
                    control={<Radio />}
                    label="Teacher"
                    onChange={(event) => setObject(event.target.value)}
                  />
                  <FormControlLabel
                    value="student"
                    control={<Radio />}
                    label="Student"
                    onChange={(event) => setObject(event.target.value)}
                  />
                </RadioGroup>
              </FormControl>
            </>

            <>
              <p>Favourite: </p>
              <input
                type="checkbox"
                value="Badminton"
                onChange={(event) => setSkills([...skills, event.target.value])}
              />
              <label>Badminton</label>

              <input
                type="checkbox"
                value="Volleyball"
                onChange={(event) => setSkills([...skills, event.target.value])}
              />
              <label>Volleyball</label>

              <input
                type="checkbox"
                value="Football"
                onChange={(event) => setSkills([...skills, event.target.value])}
              />
              <label>Football</label>
            </>
          </div>

          <div>
            <p>Your Address</p>
            <Box>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Address</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={address}
                  label="Address"
                  onChange={handleChange}
                >
                  <MenuItem value="Hải Phòng">Hải Phòng</MenuItem>
                  <MenuItem value="Hà Nội">Hà Nội</MenuItem>
                  <MenuItem value="Bắc Ninh">Bắc Ninh</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <>
              <p>Birthday</p>
              <TextField
                id="date"
                type="date"
                defaultValue="2021-09-22"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(event) => setBirthday(event.target.value)}
              />
            </>
          </div>

          <div>
            <>
              <p>Your picture</p>
              <input
                type="file"
                label="Choose file"
                onChange={(event) => setPicture(event.target.value)}
              />
            </>
          </div>

          <div>
            <>
              <Stack spacing={2} direction="row">
                <Button variant="text" onClick={handleReset} type="button">
                  Reset
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  type="button"
                >
                  ĐĂNG KÝ
                </Button>
              </Stack>
            </>
          </div>
        </div>

        <div className="result">
          <>
            <h2>Result</h2>
            <p>Full name: {fullName1}</p>
            <p>Username: {userName1}</p>
            <p>Password: {password1}</p>
            <p>Email: {email1}</p>
            <p>Telephone Number: {telephoneNumber1}</p>
            <p>Object: {object1}</p>
            <p>Skills: {skills1.join(", ")}</p>
            <p>Address: {address1}</p>
            <p>Birthday: {birthday1}</p>
            <p>Picture: {picture1}</p>
          </>
        </div>
      </div>
    </>
  );
}

export default Question5;
