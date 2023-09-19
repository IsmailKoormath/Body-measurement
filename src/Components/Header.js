import React from "react";
import "./header.css";

import avatar from "../assets/avatar.svg";
import logoutIcon from "../assets/Logout.svg";

import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();


    const handleLogout = async () => {
      localStorage.clear();
      navigate("/");
    };
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/home">SHOP</Link>
          </li>
          <li>
            <Link to="/home">BEAUTY</Link>
          </li>
          <li>
            <Link to="/home">SALE</Link>
          </li>
          <li>
            <Link to="/home">JOURNAL</Link>
          </li>
        </ul>
        <div onClick={handleLogout} className="logoutbox">
          <img src={logoutIcon} alt="" />
          <h5 className="logoutText">Log Out</h5>
        </div>
        <img className="avatar" src={avatar} alt="" />
      </header>
    </div>
  );
};

export default Header;
