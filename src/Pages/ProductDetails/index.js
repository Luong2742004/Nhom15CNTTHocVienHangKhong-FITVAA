import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../Services/ProductDetail.service"; // Import hàm từ service

const ProductDetails = () => {
    const { productDetailId } = useParams(); // Lấy productDetailId từ URL params
    const [productDetail, setProductDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const product = await getProductDetail(productDetailId); // Gọi API với productDetailId
                setProductDetail(product);
            } catch (error) {
                setError(error.message); // Xử lý lỗi nếu có
            } finally {
                setLoading(false); // Đánh dấu quá trình tải đã hoàn thành
            }
        };

        if (productDetailId) {
            fetchDetail(); // Gọi hàm lấy dữ liệu khi có productDetailId
        }
    }, [productDetailId]); // Lắng nghe thay đổi của productDetailId

    if (loading) return <p>Loading...</p>; // Hiển thị Loading khi đang tải dữ liệu
    if (error) return <p>Lỗi: {error}</p>; // Hiển thị thông báo lỗi nếu có lỗi

    return (
        <div>
            <h1>{productDetail.name}</h1>
            <img src={productDetail.img} alt={productDetail.name} />
            <p>Giá: {productDetail.price}đ</p>
            <p>Mô tả: {productDetail.description}</p>
            <h3>Tính năng:</h3>
            <ul>
                {productDetail.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductDetails;
