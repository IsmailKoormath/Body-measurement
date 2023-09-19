import React, { useEffect, useState } from "react";
import "./tailorAdd.css";

import avatar from "../../assets/avatar.svg";
import deleteIcon from "../../assets/delete.svg";
import { Link } from "react-router-dom";
import { axiosApi } from "../../api/axios-method";

const TailorAdd = () => {
  const [addtailorDetails, setAddTailorDetails] = useState({
    name: "",
    phone: "",
    username: "",
    password: "",
  });
  const [tailors, setTailors] = useState([]);
  const [message, setMessage] = useState();

  // Add tailor
  const AddTailor = async (e) => {
    e.preventDefault();
    try {
      const result = await axiosApi.post(
        "/auth/signup/tailor",
        addtailorDetails
      );
      if (result.status === 200) {
        console.log(result.data);
        fetchData(); // Refresh the list of tailors after successfully adding one
        setMessage("");
        setAddTailorDetails({
          name: "",
          phone: "",
          username: "",
          password: "",
        }); // Clear any previous error messages
      }
    } catch (error) {
      if (error.response) {
        // The server responded with an error status code
        if (error.response.status === 400) {
          setMessage("User with the same username already exists.");
        } else {
          console.error(
            "Server responded with status code:",
            error.response.status
          );
          console.error("Error response data:", error.response.data);
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error(
          "Request was made, but no response was received:",
          error.request
        );
      } else {
        // Something else went wrong
        console.error("An error occurred:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // get all tailors
  async function fetchData() {
    // try {
    const response = await axiosApi.get("/user/tailor/get");

    setTailors(response.data.user);

    setMessage(response.data.message);

    console.log(response.data);
    // } catch (error) {
    //   console.error("An error occurred:", error);
    // }
  }
  // delete tailor

  const deletTailor = async (id) => {
    await axiosApi.delete(`/user/delete/tailor/${id}`);
    fetchData();
  };
  return (
    <div className="pagebody">
      <header>
        <ul>
          <li>
            <Link to="/home">HOME</Link>
          </li>
          <li>
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
            <label className="addTailor_labelText">Name</label>
            <input
              name="name"
              onChange={(e) =>
                setAddTailorDetails({
                  ...addtailorDetails,
                  name: e.target.value,
                })
              }
              value={addtailorDetails.name}
              className="addTailor_textInput"
              type="text"
              placeholder="Enter tailor’s phone number"
            />

            <label className="addTailor_labelText">phone</label>
            <input
              name="phone"
              onChange={(e) =>
                setAddTailorDetails({
                  ...addtailorDetails,
                  phone: e.target.value,
                })
              }
              value={addtailorDetails.phone}
              className="addTailor_textInput"
              type="text"
              placeholder="Enter tailor's phone number"
            />

            <label className="addTailor_labelText">Username</label>
            <input
              name="username"
              onChange={(e) =>
                setAddTailorDetails({
                  ...addtailorDetails,
                  username: e.target.value,
                })
              }
              value={addtailorDetails.username}
              className="addTailor_textInput"
              type="text"
              placeholder="Set tailor’s username"
            />
            <label className="addTailor_labelText">Password</label>
            <input
              name="password"
              onChange={(e) =>
                setAddTailorDetails({
                  ...addtailorDetails,
                  password: e.target.value,
                })
              }
              value={addtailorDetails.password}
              className="addTailor_textInput"
              type="text"
              placeholder="Set tailor’s password"
            />
            <h6 style={{ color: "red" }}>{message}</h6>
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
                  onClick={() => deletTailor(tailor._id)}
                  className="delete_icon"
                  src={deleteIcon}
                  alt="delete"
                />
                <h5 className="removeTailer_card_nameText">{tailor.name}</h5>
                <div className="removeTailer_card_content">
                  <label className="removeTailer_card_label">Phone :</label>
                  <span className="removeTailer_card_span">
                    +91 {tailor.phone}
                  </span>
                </div>
                <div className="removeTailer_card_content">
                  <label className="removeTailer_card_label">Username :</label>
                  <span className="removeTailer_card_span">
                    {tailor.username}
                  </span>
                </div>
                <div className="removeTailer_card_content">
                  <label className="removeTailer_card_label">Password :</label>
                  <span className="removeTailer_card_span">
                    {tailor.password}
                  </span>
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
