import React from "react";
import "./homeStyle.css";

import avatar from "../../assets/avatar.svg";
import newEdition from "../../assets/new-edition.png";
import group from "../../assets/group.png";
import shirt1 from "../../assets/shirt-1.png";
import shirt2 from "../../assets/shirt-2.png";
import shirt3 from "../../assets/shirt-3.png";
import { Link, NavLink } from "react-router-dom";
import Header from "../../Components/Header";
const Home = () => {
  return (
    <div className="homePage">
      <Header />

      <section className="banner-section">
        <div className="first-sec">
          <div className="text-container">
            <h1>FABRIC THAT</h1>
          </div>
          <div className="text-container">
            <h1>SPEEKS</h1>
          </div>
          <Link to="/findsize">
            <button className="viw-all" id="openModal">
              FIND YOUR SIZE
            </button>
          </Link>
          <button className="watch-now">Watch now</button>
        </div>
        <div className="second-sec">
          <img src={newEdition} alt="" />
        </div>
      </section>
      <section className="second-banner">
        <img className="group-image" src={group} alt="" />
        <h2>Fashion is not about clothes, It is about a look.</h2>
      </section>

      <section id="newarrievels" className="featured-section">
        <h3>FEATURED STYLES</h3>
        <div className="card-container">
          <div className="card">
            <img src={shirt1} alt="" />
          </div>
          <div className="card">
            <img src={shirt2} alt="" />
          </div>
          <div className="card">
            <img src={shirt3} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
