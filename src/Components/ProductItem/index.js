import React from "react";
import { Link } from "react-router-dom"; // Import Link để điều hướng

const ProductItem = (props) => {
  const { product } = props;

  // Kiểm tra nếu product không tồn tại hoặc bị undefined
  if (!product || typeof product !== "object") {
    return <div className="productItem">Dữ liệu sản phẩm không hợp lệ</div>;
  }

  const { _id, img, name, price } = product;

  // Định dạng giá sản phẩm (VND)
  const priceFormatted = price ? price.toLocaleString("vi-VN") + "đ" : "Liên hệ";

  return (
    <div className={`productItem ${props.itemView || ""}`}>
      <Link to={`/product/${_id}`} className="productLink"> {/* Liên kết tới trang ProductDetail */}
        <div className="imgWrapper">
          <img
            src={img || "https://via.placeholder.com/150"}
            className="w-100"
            alt={name || "Tên sản phẩm"}
          />
        </div>

        <div className="info">
          <h4>{name || "Tên sản phẩm"}</h4>
          <div className="d-flex">
            <span className="Price text-danger">{priceFormatted}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
