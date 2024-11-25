import React, { useContext, useState } from "react";
import CartContext from "../../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { Button } from "@mui/material";
import { IoCart } from "react-icons/io5";
import { toast } from "react-toastify";
import image from "../../assets/image.png";
import Modal from "react-modal";

const customModalStyles = {
  content: {
    width: "600px", // Set the width you desire
    height: "600px", // Optional: Set a custom height
    margin: "auto", // Center the modal
    borderRadius: "10px", // Optional: Add rounded corners
    padding: "20px", // Adjust padding for better content spacing
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
};

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
    toast.success("Thanh toán thành công");
    dispatch({ type: "CLEAR_CART" });

    // Tự động đóng modal sau 2 phút và chuyển về trang chủ
    setTimeout(() => {
      setIsModalOpen(false);
      navigate("/");
    }, 120000); // 2 phút = 120000 ms
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <h2 className="hd mb-1">Giỏ hàng</h2>
          <p>
            Có <b className="text-red">{cart.length}</b> sản phẩm trong giỏ hàng
          </p>

          <div className="row">
            <div className="col-md-8">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th width="40%">Sản phẩm</th>
                      <th width="20%">Giá tiền</th>
                      <th width="20%">Số lượng</th>
                      <th width="20%">Bỏ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td width="40%">
                          <Link to={`/product/${item.id}`}>
                            <div className="d-flex align-items-center cartItemimgWrapper">
                              <div className="imgWrapper">
                                <img src={item.image} className="w-100" />
                              </div>
                              <div className="info px-3">
                                <h6>{item.name}</h6>
                              </div>
                            </div>
                          </Link>
                        </td>
                        <td width="20%">{item.price.toLocaleString()}đ</td>
                        <td width="20%">{item.quantity}</td>
                        <td width="20%">
                          <span
                            className="remove"
                            onClick={() => handleRemove(item.id)}
                          >
                            <IoIosClose />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border p-3 cartDetails">
                <h4>GIỎ HÀNG</h4>
                <div className="d-flex align-items-center mb-3">
                  <span>Số lượng</span>
                  <span className="ms-auto text-red">{cart.length}</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span>Tổng số tiền</span>
                  <span className="ms-auto text-red">
                    {cart
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toLocaleString()}
                    đ
                  </span>
                </div>
                <Button
                  variant="outlined"
                  style={{ fontWeight: "bold" }}
                  onClick={handleCheckout}
                >
                  <IoCart />
                  Thanh toán
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Thanh toán thành công"
        ariaHideApp={false}
        style={customModalStyles}
      >
        <div className="modal-content">
          <img src={image} alt="Thanh toán thành công" className="w-100" />
          <Button onClick={closeModal}>Close</Button>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
