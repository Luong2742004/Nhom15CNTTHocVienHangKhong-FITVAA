import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { FaUser } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import Button from "@mui/material/Button";
import ProvinceDropdown from "../ProvinceDropdown";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";
import CartContext from "../../Context/CartContext";

const Header = () => {
  const context = useContext(MyContext);
  const { cart } = useContext(CartContext);

  console.log(context);
  console.log(context.isLogin);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              <b>Nhóm 15</b> Thương mại điện tử
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                {context.provinceList.length !== 0 && <ProvinceDropdown />}

                <SearchBox />

                <div className="part3 d-flex align-items-center ms-auto">
                  {context.isLogin !== true ? (
                    <Link to="/signIn">
                      <Button className="btn-blue btn-round me-3">
                        Sign In
                      </Button>
                    </Link>
                  ) : (
                    <div className="d-flex align-items-center">
                      <span className="me-3">
                        Xin chào, {context.user.name}
                      </span>
                      <Button className="circle me-3">
                        <FaUser />
                      </Button>
                    </div>
                  )}

                  <div className="ms-auto cartTab d-flex align-items-center">
                    <span className="price">
                      {cart.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )}{" "}
                      VNĐ
                    </span>
                    <div className="position-relative ms-2">
                      <Link to="/cart">
                        <Button className="circle">
                          <IoBag />
                        </Button>
                      </Link>

                      <span className="count d-flex align-items-center justify-content-center">
                        {cart.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </>
  );
};

export default Header;
