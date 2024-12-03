export const getAllProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products"); // API trả về toàn bộ sản phẩm
      const data = await response.json();
  
      if (!data.products) {
        throw new Error("API không trả về danh sách sản phẩm");
      }
  
      return data.products; // Trả về danh sách sản phẩm
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      throw error;
    }
  };
  