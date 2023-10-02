import React, { useEffect, useState } from "react";
import "./collections.css";

import { useNavigate } from "react-router-dom";
import { axiosApi } from "../../api/axios-method";
import Header from "../../Components/Header";

const Collections = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
    
  }, []);

  async function fetchData() {
    const response = await axiosApi.get("/product/get/user/all");
    setProducts(response?.data?.product);
  }
  const navigate = useNavigate();

  return (
    <div className="collectinPage">
      <Header />
      <section className="collection-section ">
        <h3 className="findproductshead">HERE’S WHAT WE FIND FOR YOU!</h3>
        <h3 style={{ color: "blue" }} className="findproductshead">
          {products[0]?.size}
        </h3>

        <div className="card-container">
          {/* list of suggested products */}
          {products.map((product) => (
            <div
              onClick={() => navigate(`/singleproduct/${product?._id}`)}
              className="card"
              key={product?._id}
            >
              <div className="image_section">
                <img src={product?.image?.url} alt="" />
              </div>
              <div className="text_section">
                <label htmlFor="" className="card_label">
                  {product?.title}
                </label>
                <span className="card_priceText">{product?.price}$</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections;
