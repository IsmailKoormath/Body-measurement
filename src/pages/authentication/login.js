import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="authpages">
      <div className="formCard">
        <h2 className="form_headingText">Log In To Your Account</h2>
        <form action="">
          <label for="" className="form_labelText">
            Username
          </label>
          <input
            className="form_textInput"
            type="text"
            placeholder="Enter your username"
          />
          <label for="" className="form_labelText">
            Password
          </label>
          <input
            className="form_textInput"
            type="password"
            placeholder="Enter your password"
          />
          <Link to="/home">
            {" "}
            <button className="form_button">Log In</button>
          </Link>
          <Link className="form_linkText" to="/register">
            Create new account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login