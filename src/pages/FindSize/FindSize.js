import React, { useState } from "react";
import "../authentication/style.css";
import { useNavigate } from "react-router-dom";
import { axiosApi } from "../../api/axios-method";
const FindSize = () => {
  const [sizes, setSizes] = useState({});
  const navigate = useNavigate();


  const submitSizes =async (e) => {
    e.preventDefault();
    const response = await axiosApi.post("/user/size/add", sizes);
    console.log('====================================');
    console.log(response);
    console.log('====================================');
    if(response.status === 200){
    navigate("/canvas");
    }
  };
  
  return (
    <div className="authpages">
      <div className="formCard">
        <h2 className="form_headingText">Find Your Perfect Fit!</h2>
        <form onSubmit={submitSizes} action="">
          <label  className="form_labelText">
            Height
          </label>
          <input
            name="height"
            onChange={(e) => setSizes({ ...sizes, height: e.target.value })}
            className="form_textInput"
            type="text"
            placeholder="Enter your height"
          />
          <label  className="form_labelText">
            Weight
          </label>
          <input
            name="weight"
            onChange={(e) => setSizes({ ...sizes, weight: e.target.value })}
            className="form_textInput"
            type="text"
            placeholder="Enter your weight"
          />
            <button type="submit" className="form_button">
              Proceed
            </button>
        </form>
      </div>
    </div>
  );
};

export default FindSize;
