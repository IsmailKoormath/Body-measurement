import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Register = () => {
  const [userdata, setUserdata] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="authpages">
      <div className="formCard">
        <h2 className="form_headingText">Create your account</h2>
        <form action="" onSubmit={handleRegister}>
          <label for="" className="form_labelText">
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
          <label for="" className="form_labelText">
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
          <label for="" className="form_labelText">
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
          <Link to="/">
            {" "}
            <button type="submit" className="form_button">Sign Up</button>
          </Link>
          <Link className="form_linkText" to="/">
            Already have an account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
