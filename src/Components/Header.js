import React from 'react'
import './header.css'

import avatar from "../assets/avatar.svg";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link href="/home">HOME</Link>
          </li>
          <li>
            <a href="/">SHOP</a>
          </li>
          <li>
            <a href="/">BEAUTY</a>
          </li>
          <li>
            <a href="/">SALE</a>
          </li>
          <li>
            <a href="/">JOURNAL</a>
          </li>
        </ul>
        <img className="avatar" src={avatar} alt="" />
      </header>
    </div>
  );
}

export default Header