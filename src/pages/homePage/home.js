import React, { useEffect, useState } from "react";
import "./homeStyle.css";

import newEdition from "../../assets/new-edition.png";
import group from "../../assets/group.png";
import shirt1 from "../../assets/shirt-1.png";
// import shirt2 from "../../assets/shirt-2.png";
// import shirt3 from "../../assets/shirt-3.png";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";

import avatar from "../../assets/avatar.svg";
import { axiosApi } from "../../api/axios-method";

const Home = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosApi.get("/product/get/all");
      setCollections(response.data.product);
    }
    fetchData();
  }, []);

  const role = localStorage.getItem("role");
  return (
    <div className="homePage">
      {role === "admin" ? (
        <header>
          <ul>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li className="active">
              <Link to="/addproduct">ADD PRODUCT</Link>
            </li>
            <li>
              <Link to="/taileradd">ADD TAILOR</Link>
            </li>
          </ul>
          <img className="avatar-image" src={avatar} alt="" />
        </header>
      ) : (
        <Header />
      )}

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
          {/* List  all product */}
          {collections.map((product) => (
            <div className="card">
              <img src={product.images[0].url} alt="" />
            </div>
          ))}
          {/* 
          <div className="card">
            <img src={shirt2} alt="" />
          </div>
          <div className="card">
            <img src={shirt3} alt="" />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
