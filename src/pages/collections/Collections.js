import React, { useEffect, useState } from "react";
import "./collections.css";

import avatar from "../../assets/avatar.svg";
import shirt1 from "../../assets/shirt-1.png";
// import shirt2 from "../../assets/shirt-2.png";
// import shirt3 from "../../assets/shirt-3.png";
import { useNavigate } from "react-router-dom";
import { axiosApi } from "../../api/axios-method";


const Collections = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosApi.get("");
      setProducts(response.data);
    }
    fetchData();
  }, [products]);


  const navigate = useNavigate();
  return (
    <div className="collectinPage">
      <header>
        <ul>
          <li>
            <a href="/">HOME</a>
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
      <section className="collection-section ">
        <h3 className="findproductshead">HERE’S WHAT WE FIND FOR YOU!</h3>
        <div className="card-container">

          {/* list of suggested products */}
          {products.map((product) => (
            <div onClick={() => navigate("/singleproduct")} className="card">
              <div className="image_section">
                <img src={shirt1} alt="" />
              </div>
              <div className="text_section">
                <label htmlFor="" className="card_label">
                  Denim Bomber Lightweight Jacket
                </label>
                <span className="card_priceText">9.99$</span>
              </div>
            </div>
          ))}

          {/* <div className="card">
            <div className="image_section">
              <img src={shirt2} alt="" />
            </div>
            <div className="text_section">
              <label htmlFor="" className="card_label">
                Denim Bomber Lightweight Jacket
              </label>
              <span className="card_priceText">9.99$</span>
            </div>
          </div>
          <div className="card">
            <div className="image_section">
              <img src={shirt3} alt="" />
            </div>
            <div className="text_section">
              <label htmlFor="" className="card_label">
                Denim Bomber Lightweight Jacket
              </label>
              <span className="card_priceText">9.99$</span>
            </div>
          </div>
          <div className="card">
            <div className="image_section">
              <img src={shirt1} alt="" />
            </div>
            <div className="text_section">
              <label htmlFor="" className="card_label">
                Denim Bomber Lightweight Jacket
              </label>
              <span className="card_priceText">9.99$</span>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Collections;
