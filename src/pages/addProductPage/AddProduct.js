import React, { useEffect, useState } from "react";
import "../tailorAddPage/tailorAdd.css";

import avatar from "../../assets/avatar.svg";
import deleteimg from "../../assets/delete.svg";

import { axiosApi } from "../../api/axios-method";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: "",
    size: "",
    price: "",
    images: null,
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axiosApi.get("/product/get/all");
      setProducts(response.data.product);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  const productSubmission = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("size", productData.size);
    formData.append("price", productData.price);

    if (productData.product) {
      formData.append("product", productData.images);
    }

    try {
      const response = await axiosApi.post("/product/new", formData);
      console.log(response);
      // Clear form fields and update product list if needed
      setProductData({
        title: "",
        size: "",
        price: "",
        images: null,
      });
      fetchData();
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  const deleteProduct = async(productId)=>{
    const response = await axiosApi.post(`/product/delete/${productId}`);
    console.log(response);
    fetchData();
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
          <h1 className="addTailor_heading">ADD PRODUCT</h1>
          <form onSubmit={productSubmission} action="">
            <label className="addTailor_labelText">Title</label>
            <input
              name="title"
              onChange={(e) =>
                setProductData({
                  ...productData,
                  title: e.target.value,
                })
              }
              value={productData.title}
              className="addTailor_textInput"
              type="text"
              placeholder="Enter the product title"
            />
            <label className="addTailor_labelText">Size</label>
            <input
              name="size"
              onChange={(e) =>
                setProductData({
                  ...productData,
                  size: e.target.value,
                })
              }
              value={productData.size}
              className="addTailor_textInput"
              type="text"
              placeholder="Enter the size"
            />
            <label className="addTailor_labelText">Price</label>
            <input
              name="price"
              onChange={(e) =>
                setProductData({
                  ...productData,
                  price: e.target.value,
                })
              }
              value={productData.price}
              className="addTailor_textInput"
              type="text"
              placeholder="Enter product price"
            />
            <label className="addTailor_labelText">
              Add 4 Images of your product
            </label>
            <input
              name="product"
              type="file"
              onChange={(e) =>
                setProductData({
                  ...productData,
                  images: e.target.files[0],
                })
              }
              className="addTailor_textInput"
              id="imagePicker"
              accept="image/*"
            />
            <div id="selectedImages"></div>
            <button type="submit" className="addTailor_addButton">
              Upload Product
            </button>
          </form>
        </div>
        <div className="divider_line"></div>
        <div className="removeTailer_container">
          <h1 className="addTailor_heading">REMOVE PRODUCTS</h1>
          <div className="removeTailer_card_container">
            {products.map((prod) => (
              <div
                onClick={() => deleteProduct(prod._id)}
                className="removeTailer_card"
                key={prod.id}
              >
                <img className="delete_icon" src={deleteimg} alt="delete" />
                <div className="product_container">
                  <div className="product_image_container">
                    <img src={prod?.images[0]?.url} alt="product" />
                  </div>
                  <div>
                    <h5 className="removeTailer_card_nameText">{prod.title}</h5>
                    <div className="removeTailer_card_content">
                      <label className="removeTailer_card_label">Size :</label>
                      <span className="removeTailer_card_span">
                        {" "}
                        {prod.size}
                      </span>
                    </div>
                    <h5
                      className="removeTailer_card_nameText"
                      style={{ marginTop: "10px" }}
                    >
                      ${prod.price}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
