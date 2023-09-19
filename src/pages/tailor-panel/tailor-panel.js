import React, { useEffect, useState } from "react";
import "./tailorPanel.css";

// import avatar from '../../assets/avatar.svg'
import product from "../../assets/product.png";
import whatsapp from "../../assets/whatsapp.svg";
import logoutIcon from "../../assets/Logout.svg";
import { axiosApi } from "../../api/axios-method";
import { Link, useNavigate } from "react-router-dom";
const Tailorpanel = () => {
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

 useEffect(() => {
   async function fetchData() {
     try {
       const response = await axiosApi.get("/order/get/all");
       setOrders(response.data);
       console.log(response.data);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   }

   fetchData();

 }, []);

 const handleLogout = async () => {
   localStorage.clear();
   navigate("/");
 };



  return (
    <div className="tailorPanerpage">
      <header>
        <ul>
          <li>
            <Link href="">HOME</Link>
          </li>
          <li>
            <Link href="">SHOP</Link>
          </li>
          <li>
            <Link href="">BEAUTY</Link>
          </li>
          <li>
            <Link href="">SALE</Link>
          </li>
          <li>
            <Link href="">JOURNAL</Link>
          </li>
        </ul>
        <div onClick={handleLogout} className="logoutbox">
          <img src={logoutIcon} alt="" />
          <h5 className="logoutText">Log Out</h5>
        </div>
        {/* <img className="avatar-image" src={avatar} alt="" /> */}
      </header>
      <section className="panel_section">
        <h1 className="panel_heding">TAILOR PANEL</h1>
        <div className="panel_card_container">
          {orders.map((tailor) => (
            <div className="panel_card">
              <div className="whatsapp_container">
                <img className="whatsapp_image" src={whatsapp} alt="whatsapp" />
                <div className="whatsapp_textContainer">
                  <h5 className="whatsapp_nameText">{tailor.user.username}</h5>
                  <p className="whatsapp_numberText">+91 {tailor.user.phone}</p>
                </div>
              </div>
              <div className="product_image_container">
                <img src={tailor.product.image.url} alt="product" />
              </div>
              <div>
                <h5 className="panel_card_nameText">{tailor.product.title}</h5>
                <div className="panel_card_content">
                  <label className="panel_card_label">Size :</label>
                  <span className="panel_card_span">{tailor.product.size}</span>
                </div>
                <div className="panel_card_content">
                  <label className="panel_card_label">Chest :</label>
                  <span className="panel_card_span">{tailor.user.chest}</span>
                </div>
                <div className="panel_card_content">
                  <label className="panel_card_label">Shoulder :</label>
                  <span className="panel_card_span">
                    {tailor.user.chest / 2}
                  </span>
                </div>
                <div className="panel_card_content">
                  <label className="panel_card_label">Inseam :</label>
                  <span className="panel_card_span">{tailor.user.inseam}</span>
                </div>
                <div className="panel_card_content">
                  <label className="panel_card_label">Waist :</label>
                  <span className="panel_card_span">{tailor.user.waist}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tailorpanel;
