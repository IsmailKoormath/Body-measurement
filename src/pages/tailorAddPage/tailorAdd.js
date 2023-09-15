import React, { useEffect, useState } from "react";
import "./tailorAdd.css";

import avatar from "../../assets/avatar.svg";
import deleteIcon from "../../assets/delete.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import { axiosApi } from "../../api/axios-method";

const TailorAdd = () => {
  const [addtailorDetails, setAddTailorDetails] = useState({});
  const [tailors, setTailors] = useState([]);

  // Add tailor
  const AddTailor = async (e) => {
    e.preventDefault();
    const result = await axios.post("", addtailorDetails);
    console.log(result);
  };

  useEffect(() => {
    // get all tailors
    async function fetchData() {
      const response = await axiosApi.get("");
      setTailors(response.data);
    }
    fetchData();
  }, [tailors]);

  // delete tailor

  const deletTailor= ()=>{
    axiosApi.delete("",)
  }
  return (
    <div className="pagebody">
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

      <section className="tailor_section">
        <div className="addTailor_container">
          <h1 className="addTailor_heading">ADD TAILOR</h1>
          <form onSubmit={AddTailor} action="">
            <label className="addTailor_labelText" for="">
              Name
            </label>
            <input
              name="name"
              onChange={(e) =>
                setAddTailorDetails({
                  ...addtailorDetails,
                  name: e.target.name,
                })
              }
              className="addTailor_textInput"
              type="text"
              placeholder="Enter tailor’s phone number"
            />

            <label className="addTailor_labelText" for="">
              phone
            </label>
            <input
              name="phone"
              onChange={(e) =>
                setAddTailorDetails({
                  ...addtailorDetails,
                  phone: e.target.name,
                })
              }
              className="addTailor_textInput"
              type="text"
              placeholder="Enter tailor's phone number"
            />

            <label className="addTailor_labelText" for="">
              Username
            </label>
            <input
              name="username"
              onChange={(e) =>
                setAddTailorDetails({
                  ...addtailorDetails,
                  username: e.target.name,
                })
              }
              className="addTailor_textInput"
              type="text"
              placeholder="Set tailor’s username"
            />
            <label className="addTailor_labelText" for="">
              Password
            </label>
            <input
              name="password"
              onChange={(e) =>
                setAddTailorDetails({
                  ...addtailorDetails,
                  password: e.target.name,
                })
              }
              className="addTailor_textInput"
              type="text"
              placeholder="Set tailor’s password"
            />
            <button type="submit" className="addTailor_addButton">
              Add Tailor
            </button>
          </form>
        </div>
        <div className="divider_line"></div>
        <div className="removeTailer_container">
          <h1 className="addTailor_heading">REMOVE TAILOR</h1>
          <div className="removeTailer_card_container">
            {tailors.map((tailor) => (
              <div className="removeTailer_card">
                <img
                  onClick={deletTailor}
                  className="delete_icon"
                  src={deleteIcon}
                  alt="delete"
                />
                <h5 className="removeTailer_card_nameText">name</h5>
                <div className="removeTailer_card_content">
                  <label className="removeTailer_card_label" for="">
                    Phone :
                  </label>
                  <span className="removeTailer_card_span">
                    +91 9876 34 5678
                  </span>
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TailorAdd;
