import React from 'react'
import './tailorAdd.css'

import avatar from '../../assets/avatar.svg'
import deleteIcon from "../../assets/delete.svg";

const TailorAdd = () => {
  return (
    <div className="pagebody">
      <header>
        <ul>
          <li>
            <a href="/index.html">HOME</a>
          </li>
          <li>
            <a href="/add-product-page/addProduct.html">ADD PRODUCT</a>
          </li>
          <li className="active">
            <a href="">ADD TAILOR</a>
          </li>
        </ul>
        <img className="avatar-image" src={avatar} alt="" />
      </header>

      <section className="tailor_section">
        <div className="addTailor_container">
          <h1 className="addTailor_heading">ADD TAILOR</h1>
          <form action="">
            <label className="addTailor_labelText" for="">
              Name
            </label>
            <input
              className="addTailor_textInput"
              type="text"
              placeholder="Enter tailor’s phone number"
            />
            <label className="addTailor_labelText" for="">
              Username
            </label>
            <input
              className="addTailor_textInput"
              type="text"
              placeholder="Set tailor’s username"
            />
            <label className="addTailor_labelText" for="">
              Password
            </label>
            <input
              className="addTailor_textInput"
              type="text"
              placeholder="Set tailor’s password"
            />
            <button className="addTailor_addButton">Add Tailor</button>
          </form>
        </div>
        <div className="divider_line"></div>
        <div className="removeTailer_container">
          <h1 className="addTailor_heading">REMOVE TAILOR</h1>
          <div className="removeTailer_card_container">
            <div className="removeTailer_card">
              <img className="delete_icon" src={deleteIcon} alt="delete" />
              <h5 className="removeTailer_card_nameText">Blue denim cotton jean</h5>
              <div className="removeTailer_card_content">
                <label className="removeTailer_card_label" for="">
                  Phone :
                </label>
                <span className="removeTailer_card_span">+91 9876 34 5678</span>
              </div>
              <div className="removeTailer_card_content">
                <label className="removeTailer_card_label" for="">
                  Username :
                </label>
                <span className="removeTailer_card_span">hardik</span>
              </div>
              <div className="removeTailer_card_content">
                <label className="removeTailer_card_label" for="">
                  Password :
                </label>
                <span className="removeTailer_card_span">hardik</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TailorAdd;