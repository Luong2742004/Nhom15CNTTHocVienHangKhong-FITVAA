import React, { useState} from "react";

const ProductDetails = () => {

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="product-image mb-4">
                        <img 
                            src="https://tse1.mm.bing.net/th?id=OIP.s5j-LFUHJm7b-wbqA0dSPwHaE8&pid=Api&P=0&h=180" 
                            alt="Máy lạnh Panasonic VSD 1 HP" 
                            className="img-fluid"
                        />
                    </div>

                    <h2 className="hd text-capitalize">Máy lạnh Panasonic VSD 1 HP</h2>
                    
                    <ul className="list list-inline">
                        <li className="list-inline-item">
                            <div className="d-flex align-items-center">
                                <span className="text mr-2">Thương hiệu:</span>
                                <span>Panasonic</span>
                            </div>
                        </li>
                    </ul>

                    <div className="product-description mt-3">
                        <p>
                            Máy lạnh Panasonic VSD 1 HP sử dụng công nghệ Inverter tiên tiến giúp tiết kiệm điện năng, 
                            làm lạnh nhanh và ổn định. Công nghệ Nanoe™ X giúp làm sạch không khí, kháng khuẩn, chống mùi hiệu quả.
                        </p>
                    </div>

                    <div className="product-features mt-3">
                        <h4 className="feature-title">Công nghệ nổi bật:</h4>
                        <ul>
                            <li>Inverter</li>
                            <li>Nanoe™ X</li>
                            <li>Làm lạnh nhanh</li>
                        </ul>
                    </div>

                    <div className="product-price mt-4">
                        <h3 className="price text-danger">Giá: 5,600,000đ</h3>
                    </div>

                    <section className="productDetails section">
                <div className="container">
                    {/* Các phần khác của sản phẩm */}
                    
                    {/* Điều khiển số lượng */}
                    <div className="quantity-control mt-4">
                        <button className="btn-quantity" onClick={handleDecrease}>-</button>
                        <span className="quantity-display">{quantity}</span>
                        <button className="btn-quantity" onClick={handleIncrease}>+</button>
                    </div>

                    {/* Nút Thêm vào giỏ hàng */}
                    <div className="add-to-cart mt-4">
                        <button className="btn btn-primary">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </section>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;
