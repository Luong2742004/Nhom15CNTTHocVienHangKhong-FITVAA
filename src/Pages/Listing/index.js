import Sidebar from "../../Components/Sidebar";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import ProductItem from "../../Components/ProductItem";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import { getProduct } from "../../Services/Listing.service";

const Listing = () => {
  const [productView, setProductView] = useState("four");
  const [products, setProducts] = useState([]); // Danh sách sản phẩm
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [error, setError] = useState(null); // Trạng thái lỗi
  const [page, setPage] = useState(1); // Trang hiện tại
  const [totalPages, setTotalPages] = useState(1); // Tổng số trang

  // Gọi API để lấy danh sách sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null); // Reset lỗi trước khi gọi API
      try {
        const data = await getProduct(page, 9); // Sử dụng hàm getProduct để lấy dữ liệu
        setProducts(data.products); // Cập nhật danh sách sản phẩm
        setTotalPages(data.totalPages); // Cập nhật tổng số trang
      } catch (err) {
        setError("Lỗi khi tải sản phẩm. Vui lòng thử lại sau."); // Thông báo lỗi thân thiện hơn
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]); // Gọi lại API mỗi khi `page` thay đổi

  return (
    <section className="product_Listing_Page">
      <div className="container">
        <div className="productListing d-flex">
          <Sidebar />

          <div className="content_right">
            {/* Banner */}
            <img
              src="https://www.panasonic.com/content/dam/Panasonic/HVAC/category-browse/Single-split-Asia-06.jpg"
              className="w-100"
              style={{ borderRadius: "8px" }}
              alt="Banner"
            />

            {/* Chọn kiểu hiển thị sản phẩm */}
            <div className="showBy mt-3 mb-3 d-flex align-items-center">
              <div className="d-flex align-items-center btnWrapper">
                <Button
                  className={productView === "one" ? "act" : ""}
                  onClick={() => setProductView("one")}
                >
                  <IoIosMenu />
                </Button>
                <Button
                  className={productView === "two" ? "act" : ""}
                  onClick={() => setProductView("two")}
                >
                  <HiViewGrid />
                </Button>
                <Button
                  className={productView === "three" ? "act" : ""}
                  onClick={() => setProductView("three")}
                >
                  <CgMenuGridR />
                </Button>
                <Button
                  className={productView === "four" ? "act" : ""}
                  onClick={() => setProductView("four")}
                >
                  <TfiLayoutGrid4Alt />
                </Button>
              </div>
            </div>

            {/* Danh sách sản phẩm */}
            {loading ? (
              <p>Đang tải sản phẩm...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div className={`productListing ${productView}`}>
                {products.length > 0 ? (
                  products.map((product) => (
                    <ProductItem
                      key={product._id} // ID của sản phẩm
                      product={product} // Dữ liệu sản phẩm
                      itemView={productView} // Kiểu hiển thị
                    />
                  ))
                ) : (
                  <p>Không có sản phẩm nào được tìm thấy.</p>
                )}
              </div>
            )}

            {/* Phân trang */}
            <div className="d-flex align-items-center justify-content-center mt-5">
              <Pagination
                count={totalPages}
                page={page}
                onChange={(e, value) => setPage(value)} // Cập nhật trang
                color="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
