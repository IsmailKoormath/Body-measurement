import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {

  const [userdata, setUserdata] = useState({});
  const navigate = useNavigate();

  const handleRegister = async(e) => {
    e.preventDefault();
    const result = await axios.post(
      "http://192.168.29.217:5000/auth/signup/user",
      // "http://localhost:5000/auth/signup/user",
      userdata
    );
    console.log(result);
    if (result?.status === 200) {
      navigate("/");
    }
    // if(result.status == 400){
    //   result.data.
    // }
  };

  return (
    <div className="authpages">
      <div className="formCard">
        <h2 className="form_headingText">Create your account</h2>
        <form action="" onSubmit={handleRegister}>
          <label  className="form_labelText">
            Username
          </label>
          <input
            name="username"
            onChange={(e) =>
              setUserdata({ ...userdata, username: e.target.value })
            }
            className="form_textInput"
            type="text"
            placeholder="Enter your username"
          />
          <label  className="form_labelText">
            Password
          </label>
          <input
            name="password"
            onChange={(e) =>
              setUserdata({ ...userdata, password: e.target.value })
            }
            className="form_textInput"
            type="password"
            placeholder="Enter your password"
          />
          <label  className="form_labelText">
            Phone Number
          </label>
          <input
            name="phone"
            onChange={(e) =>
              setUserdata({ ...userdata, phone: e.target.value })
            }
            className="form_textInput"
            type="number"
            placeholder="Enter your phone number"
          />
            <button type="submit" className="form_button">Sign Up</button>
          <Link className="form_linkText" to="/">
            Already have an account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
