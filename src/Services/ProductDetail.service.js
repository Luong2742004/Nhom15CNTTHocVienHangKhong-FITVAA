import axios from "axios";

const API_URL = "http://localhost:5000/api/productDetails";

export const getProductDetail = async (productDetailId) => {
    try {
        const response = await axios.get(`${API_URL}/${productDetailId}`); 

        // Kiểm tra dữ liệu trả về có hợp lệ không
        if (!response.data || typeof response.data !== "object") {
            throw new Error("Dữ liệu trả về không hợp lệ");
        }

        return response.data; // Trả về dữ liệu chi tiết sản phẩm
    } catch (error) {
        // Xử lý lỗi: trả về thông báo lỗi chi tiết
        const message = error.response?.data?.message || "Không thể kết nối đến API";
        throw new Error(message);
    }
};
