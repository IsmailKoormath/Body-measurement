import React from "react";
import "./header.css";

import avatar from "../assets/avatar.svg";
import { Link } from "react-router-dom";

const Header = () => {
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
        <img className="avatar" src={avatar} alt="" />
      </header>
    </div>
  );
};

export default Header;
