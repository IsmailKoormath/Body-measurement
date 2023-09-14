import React from 'react'
import '../tailorAddPage/tailorAdd.css'

import avatar from '../../assets/avatar.svg'
import deleteimg from '../../assets/delete.svg'
import product from "../../assets/product.png";
const AddProduct = () => {
  return (
    <div className='pagebody'>
      <header>
        <ul>
          <li>
            <a href="/index.html">HOME</a>
          </li>
          <li className="active">
            <a href="">ADD PRODUCT</a>
          </li>
          <li>
            <a href="/tailor-add-page/tailorAdd.html">ADD TAILOR</a>
          </li>
        </ul>
        <img className="avatar-image" src={avatar} alt="" />
      </header>

      <section className="tailor_section">
        <div className="addTailor_container">
          <h1 className="addTailor_heading">ADD PRODUCT</h1>
          <form action="">
            <label className="addTailor_labelText" for="">
              Title
            </label>
            <input
              className="addTailor_textInput"
              type="text"
              placeholder="Enter the product title"
            />
            <label className="addTailor_labelText" for="">
              Size
            </label>
            <input
              className="addTailor_textInput"
              type="text"
              placeholder="Enter the size"
            />
            <label className="addTailor_labelText" for="">
              Price
            </label>
            <input
              className="addTailor_textInput"
              type="text"
              placeholder="Enter product price"
            />
            <label className="addTailor_labelText" for="">
              Add 4 Images of your product
            </label>
            <input
              className="addTailor_textInput"
              id="imagePicker"
              type="file"
              accept="image/*"
              multiple
            />
            <div id="selectedImages"></div>
            <button className="addTailor_addButton">Upload Product</button>
          </form>
        </div>
        <div className="divider_line"></div>
        <div className="removeTailer_container">
          <h1 className="addTailor_heading">REMOVE PRODUCTS</h1>
          <div className="removeTailer_card_container">
            <div className="removeTailer_card">
              <img className="delete_icon" src={deleteimg} alt="delete" />
              <div className="product_container">
                <div className="product_image_container">
                  <img src={product} alt="product" />
                </div>
                <div>
                  <h5 className="removeTailer_card_nameText">
                    Blue denim cotton jean
                  </h5>
                  <div className="removeTailer_card_content">
                    <label className="removeTailer_card_label" for="">
                      Size :
                    </label>
                    <span className="removeTailer_card_span">M</span>
                  </div>
                  <h5
                    className="removeTailer_card_nameText"
                    style={{marginTop : '10px',}}
                  >
                    $10.70
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddProduct