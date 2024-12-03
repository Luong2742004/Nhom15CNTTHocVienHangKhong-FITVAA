import React, { useEffect, useState } from "react";
import { getProduct } from "../../Services/Listing.service"; // Lấy hàm getProduct
import HomeBanner from "../../Components/HomeBanner";
import HomeCat from "../../Components/HomeCat";
import ProductItem from "../../Components/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Gọi API để lấy toàn bộ sản phẩm
        const response = await getProduct(); 
        setProducts(response); // Cập nhật danh sách sản phẩm
      } catch (error) {
        setError("Không thể tải sản phẩm");
        console.error("Lỗi khi gọi API:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <HomeBanner />
      <HomeCat />

      {/* Danh mục sản phẩm */}
      <section className="homeCategories">
        <div className="container">
          <h3 className="mb-4">Danh mục</h3>
          <ul className="categoriesList">
            {/* Render categories nếu có */}
          </ul>
        </div>
      </section>

      {/* Sản phẩm */}
      <section className="homeProducts">
        <div className="container">
          <h3 className="mb-4">Sản phẩm</h3>
          {error ? (
            <p>{error}</p>
          ) : (
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              modules={[Navigation]}
              className="mySwiper"
            >
              {products.length > 0 ? (
                products.map((product) => (
                  <SwiperSlide key={product._id}>
                    <ProductItem product={product} />
                  </SwiperSlide>
                ))
              ) : (
                <p>Không có sản phẩm nào</p>
              )}
            </Swiper>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
