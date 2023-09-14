import React from 'react'
import './tailorPanel.css'

import avatar from '../../assets/avatar.svg'
import product from '../../assets/product.png';
import whatsapp from '../../assets/whatsapp.svg';
const Tailorpanel = () => {
  return (
    <div className='tailorPanerpage'>
      <header>
        <ul>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">SHOP</a>
          </li>
          <li>
            <a href="">BEAUTY</a>
          </li>
          <li>
            <a href="">SALE</a>
          </li>
          <li>
            <a href="">JOURNAL</a>
          </li>
        </ul>
        <img className="avatar-image" src={avatar} alt="" />
      </header>
      <section className="panel_section">
        <h1 className="panel_heding">TAILOR PANEL</h1>
        <div className="panel_card_container">
          <div className="panel_card">
            <div className="whatsapp_container">
              <img className="whatsapp_image" src={whatsapp} alt="whatsapp" />
              <div className="whatsapp_textContainer">
                <h5 className="whatsapp_nameText">Rosemary telesco</h5>
                <p className="whatsapp_numberText">+91 9456324437</p>
              </div>
            </div>
            <div className="product_image_container">
              <img src={product} alt="product" />
            </div>
            <div>
              <h5 className="panel_card_nameText">Blue denim cotton jean</h5>
              <div className="panel_card_content">
                <label className="panel_card_label" for="">
                  Size :
                </label>
                <span className="panel_card_span">M</span>
              </div>
              <div className="panel_card_content">
                <label className="panel_card_label" for="">
                  Chest :
                </label>
                <span className="panel_card_span">32</span>
              </div>
              <div className="panel_card_content">
                <label className="panel_card_label" for="">
                  Shoulder :
                </label>
                <span className="panel_card_span">17.5</span>
              </div>
              <div className="panel_card_content">
                <label className="panel_card_label" for="">
                  Length :
                </label>
                <span className="panel_card_span">27.5</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tailorpanel