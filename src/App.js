import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useState, useEffect } from "react";
import { CartProvider } from "./Context/CartContext";
import axios from "axios";
import Footer from "./Components/Footer";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Listing from "./Pages/Listing";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const MyContext = createContext();

function App() {
  const [provinceList, setProvinceList] = useState([]);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getProvince = async () => {
      const url = "https://provinces.open-api.vn/api/p/";
      try {
        const response = await axios.get(url);
        if (Array.isArray(response.data)) {
          setProvinceList(response.data);
          console.log(response.data);
        } else {
          console.error("Dữ liệu trả về không hợp lệ:", response.data);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách tỉnh thành:", error);
      }
    };
    getProvince();
  }, []);

  const values = {
    provinceList,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin,
    user,
    setUser,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route exact={true} path="/listing" element={<Listing />} />
            <Route
              exact={true}
              path="/product/:id"
              element={<ProductDetails />}
            />
            <Route exact={true} path="/cart" element={<Cart />} />
            <Route exact={true} path="/signIn" element={<SignIn />} />
            <Route exact={true} path="/signUp" element={<SignUp />} />
          </Routes>

          <Footer />
        </CartProvider>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
