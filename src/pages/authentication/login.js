import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { axiosApi } from "../../api/axios-method";
const Login = () => {
  const [loginData, setLoginData] = useState({});

  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    const result = await axiosApi.post(
      "http://192.168.57.27:6000/auth/signin",
      loginData
    );
    console.log(result);
    if (result?.data?.token ) {
      sessionStorage.setItem("token", result.data.token);
    
    if (result?.data?.role) {
      sessionStorage.setItem("role", result.data.role);
    }
    if (result.data.role === "admin") {
      navigate("/admin");
    }
    if (result.data.role === "tailor") {
      navigate("/tailerpanel");
    } else {
      navigate("/");
    }
  }
  };
  
  return (
    <div className="authpages">
      <div className="formCard">
        <h2 className="form_headingText">Log In To Your Account</h2>
        <form action="" onSubmit={loginSubmit}>
          <label for="" className="form_labelText">
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
          <label for="" className="form_labelText">
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
          <Link to="/home">
            {" "}
            <button type="submit" className="form_button">
              Log In
            </button>
          </Link>
          <Link className="form_linkText" to="/register">
            Create new account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
