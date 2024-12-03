import { useEffect, useState } from "react";
import { getProduct } from "../../Services/Listing.service"; // Sử dụng getProduct thay cho getCategory

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productData = await getProduct(); // Lấy dữ liệu sản phẩm
        console.log(productData); // Log dữ liệu để kiểm tra
        setProducts(productData); // Cập nhật state với dữ liệu sản phẩm
      } catch (error) {
        console.error("Error fetching products:", error); // Xử lý lỗi nếu có
      }
    }
    fetchData();
  }, []); // Chạy khi component được render lần đầu

  return (
    <div>
      <h3>Sản phẩm</h3>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product._id}>
              <h4>{product.name}</h4>
              <img src={product.img} alt={product.name} />
              <p>Giá: {product.price.toLocaleString()} VND</p>
            </li>
          ))
        ) : (
          <li>Không có sản phẩm để hiển thị</li>
        )}
      </ul>
    </div>
  );
}

export default Home;
