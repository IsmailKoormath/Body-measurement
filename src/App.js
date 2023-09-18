import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import FindSize from "./pages/FindSize/FindSize";
import AddProduct from "./pages/addProductPage/AddProduct";
import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";
import Collections from "./pages/collections/Collections";
import Home from "./pages/homePage/home";
import Tailorpanel from "./pages/tailor-panel/tailor-panel";
import TailorAdd from "./pages/tailorAddPage/tailorAdd";
import SingleProduct from "./pages/singleProduct/singleProduct";
import Webcam from "./pages/skelton/webcam";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/collection/:intervalId/:size/:shoulderWidth"
            element={<Collections />}
          />
          <Route path="/findsize" element={<FindSize />} />
          <Route path="/canvas" element={<Webcam />} />
          <Route path="/tailerpanel" element={<Tailorpanel />} />
          <Route path="/addproduct" element={<AddProduct />} />a
          <Route path="/taileradd" element={<TailorAdd />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
