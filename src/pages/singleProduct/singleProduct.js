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
  const [message, setMessage] = useState("");
  const [successmessage, setSuccessMessage] = useState("");

  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    fetchSingleProduct();
    getalltailors();

  }, []);

  async function fetchSingleProduct() {
    const response = await axiosApi.get(`/product/get/${productId}`);
    console.log(response.data);
    setSingleproduct(response.data);
  }
  async function getalltailors() {
    try {
        const response = await axiosApi.get("/user/tailor/get");
        console.log("tailors ", response.data.user);
        setTailors(response.data.user);
    } catch (error) {
      if (error.response.status === 403) {
        setMessage("your not a user");
      } else {
        console.log(error);
      }
    }
  
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
    try {
      const response = await axiosApi.post("/order/new", {
        product: productId,
        tailor: selectedTailor,
      });
      setSuccessMessage("send to tailor success");
      console.log(response.data);
    } catch (error) {
      if (error.response.status === 403) {
        setMessage("your not a user");
      } else {
        console.log(error);
      }
    }
  };

  const handleChange = async (e) => {
    setSelectedTailor(e.target.value);
  };

  return (
    <div className="singleViewPage">
      <Header />
      <section className="singleproduct-section">
        <div className="singleproductimg">
          <img src={singleProduct?.product?.image.url} alt="product" />
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
            <h5 style={{ color: "red" }}>{message}</h5>
          </div>
          <h4 style={{ color: "green" }}>{successmessage}</h4>
        </div>
      </section>
      .
    </div>
  );
};

export default SingleProduct;
