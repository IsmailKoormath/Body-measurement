import React, { useEffect, useState } from "react";
import "./collections.css";

import avatar from "../../assets/avatar.svg";
import shirt1 from "../../assets/shirt-1.png";
import { useNavigate } from "react-router-dom";
import { axiosApi } from "../../api/axios-method";
import Header from "../../Components/Header";


const Collections = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosApi.get("/product/get/all");
      setProducts(response.data.product);
    }
    fetchData();
  }, []);


  const navigate = useNavigate();
  return (
    <div className="collectinPage">
      <Header />
      <section className="collection-section ">
        <h3 className="findproductshead">HERE’S WHAT WE FIND FOR YOU!</h3>
        <div className="card-container">
          {/* list of suggested products */}
          {products.map((product) => (
            <div onClick={() => navigate("/singleproduct")} className="card">
              <div className="image_section">
                <img src={product.images[0].url} alt="" />
              </div>
              <div className="text_section">
                <label htmlFor="" className="card_label">
                  {product.title}
                </label>
                <span className="card_priceText">{product.price}$</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections;
