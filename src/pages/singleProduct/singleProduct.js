import React from "react";
import "./singleProduct.css";

import product from "../../assets/singleproduct.png";
import Header from "../../Components/Header";

const SingleProduct = () => {
  return (
    <div className="singleViewPage">
     <Header/>
      <section className="singleproduct-section">
        <div className="singleproductimg">
          <img src={product} alt="product" />
        </div>
        <div className="singleproducttext-section">
          <h3>TrueBasics Heart Blue Denim Printed<br/> Shirt</h3>
          <div className="prise-size">
            <span>
              <h5>Price:</h5>
              <h4>₹799</h4>
            </span>
            <div className="product-size">M</div>
          </div>
          <div className="choose-buttons">
            <div className="counter">
              <div className="operator">-</div>
              <div className="count">1</div>
              <div className="operator">+</div>
            </div>
            <div className="choose-tailer">
              <select className="choose-tailer-drop" name="tailer" id="tailer">
                <option value="tailer 1">choose tailor &nbsp;&nbsp;</option>
                <option value="tailer 1">tailer 1</option>
              </select>
            </div>
            <button className="sendTailor">Sent to tailor</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
