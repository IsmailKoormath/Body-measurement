import React, { useState } from "react";
import "../authentication/style.css";
import { Link } from "react-router-dom";
const FindSize = () => {
  const [sizes, setSizes] = useState({});

  const submitSizes = (e) => {
    e.preventDefault();
  };
  return (
    <div className="authpages">
      <div className="formCard">
        <h2 className="form_headingText">Find Your Perfect Fit!</h2>
        <form onSubmit={submitSizes} action="">
          <label for="" className="form_labelText">
            Height
          </label>
          <input
            name="height"
            onChange={(e) => setSizes({ ...sizes, height: e.target.value })}
            className="form_textInput"
            type="text"
            placeholder="Enter your height"
          />
          <label for="" className="form_labelText">
            Weight
          </label>
          <input
            name="weight"
            onChange={(e) => setSizes({ ...sizes, weight: e.target.value })}
            className="form_textInput"
            type="text"
            placeholder="Enter your weight"
          />
          <Link to="/canvas">
            <button type="submit" className="form_button">
              Proceed
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default FindSize;
