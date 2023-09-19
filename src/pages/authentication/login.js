import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        // "http://localhost:5000/auth/signin",
        "http://192.168.29.217:5000/auth/signin",
        loginData
      );
      console.log(result.data.result);
      if (result?.data?.result?.token) {
        localStorage.setItem("token", result.data.result.token);

        if (result?.data?.result?.role) {
          localStorage.setItem("role", result.data.result.role);
        }
        if (result.data.result.role === "admin") {
          navigate("/addproduct");
        }
        if (result.data.result.role === "tailor") {
          navigate("/tailerpanel");
        } else {
          navigate("/home");
        }
      }
    } catch (error) {
      if (error.response.status === 400) {
        setMessage("invalid username or password");
      }
    }
  };

  return (
    <div className="authpages">
      <div className="formCard">
        <h2 className="form_headingText">Log In To Your Account</h2>
        <form action="" onSubmit={loginSubmit}>
          <label htmlFor="" className="form_labelText">
            Username
          </label>
          <input
            name="username"
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
            className="form_textInput"
            type="text"
            placeholder="Enter your username"
          />
          <label htmlFor="" className="form_labelText">
            Password
          </label>
          <input
            name="password"
            g
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className="form_textInput"
            type="password"
            placeholder="Enter your password"
          />
          <h5 style={{color:"red",marginTop:"10px"}}> {message}</h5>
          <button type="submit" className="form_button">
            Log In
          </button>
          <Link className="form_linkText" to="/register">
            Create new account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
