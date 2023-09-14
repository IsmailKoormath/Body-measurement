import React from 'react'
import '../authentication/style.css'
import { Link } from 'react-router-dom';
const FindSize = () => {
  return (
    <div className="authpages">
      <div className="formCard">
        <h2 className="form_headingText">Find Your Perfect Fit!</h2>
        <form action="">
          <label for="" className="form_labelText">
            Height
          </label>
          <input
            className="form_textInput"
            type="text"
            placeholder="Enter your height"
          />
          <label for="" className="form_labelText">
            Weight
          </label>
          <input
            className="form_textInput"
            type="text"
            placeholder="Enter your weight"
          />
          <Link to="/canvas">
            <button className="form_button">Proceed</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default FindSize