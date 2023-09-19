import React, { useEffect, useState } from "react";
import "./singleProduct.css";

// import product from "../../assets/singleproduct.png";
import Header from "../../Components/Header";
import { useParams } from "react-router-dom";
import { axiosApi } from "../../api/axios-method";

const SingleProduct = () => {
  const [singleProduct, setSingleproduct] = useState();
  const [tailors, setTailors] = useState([]);
  const [count, setCount] = useState(1);
  const [selectedTailor, setSelectedTailor] = useState("");

  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    fetchSingleProduct();
    getalltailors();
    console.log('====================================');
    console.log("tailor", selectedTailor);
    console.log("product", productId);
    console.log('====================================');
  }, []);

  async function fetchSingleProduct() {
    const response = await axiosApi.get(`/product/get/${productId}`);
    console.log(response.data);
    setSingleproduct(response.data);
  }
  async function getalltailors() {
    const response = await axiosApi.get("/user/tailor/get");
    console.log("tailors ", response.data.user);
    setTailors(response.data.user);
  }

  // couter
  let increaseCount = () => {
    setCount(count + 1);
  };
  let decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const sendOrderToTailor = async () => {
    const response = await axiosApi.post("/order/new", {
      product: productId,
       tailor:selectedTailor,
    });
    console.log(response.data);
  };

  const handleChange = async (e) => {
    setSelectedTailor( e.target.value );
    console.log('====================================');
    console.log(selectedTailor);
    console.log(productId)
    console.log('====================================');
  };
  return (
    <div className="singleViewPage">
      <Header />
      <section className="singleproduct-section">
        <div className="singleproductimg">
          <img src={singleProduct?.product?.images[0].url} alt="product" />
        </div>
        <div className="singleproducttext-section">
          <h3>{singleProduct?.product?.title}</h3>
          <div className="prise-size">
            <span>
              <h5>Price:</h5>
              <h4>₹{singleProduct?.product?.price}</h4>
            </span>
            <div className="product-size">{singleProduct?.product?.size}</div>
          </div>
          <div className="choose-buttons">
            <div className="counter">
              <div onClick={decreaseCount} className="operator">
                -
              </div>
              <div className="count">{count}</div>
              <div onClick={increaseCount} className="operator">
                +
              </div>
            </div>
            <div className="choose-tailer">
              <select
                className="choose-tailer-drop"
                name="tailer"
                id="tailer"
                onChange={handleChange}
                value={selectedTailor}
              >
                <option value="">choose tailor &nbsp;&nbsp;</option>{" "}
                {/* Default option */}
                {tailors.map((tailor) => (
                  <option key={tailor._id} value={tailor._id}>
                    {tailor.username}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={sendOrderToTailor} className="sendTailor">
              Sent to tailor
            </button>
          </div>
        </div>
      </section>
      .
    </div>
  );
};

export default SingleProduct;
