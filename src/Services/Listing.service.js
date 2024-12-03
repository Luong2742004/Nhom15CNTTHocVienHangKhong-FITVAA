import axios from "axios";

export async function getProduct(page = 1, limit = 9) {
  const response = await axios.get("http://localhost:5000/api/products", {
    params: { page, limit }, // Truyền page và limit qua query
  });
  return response.data;
}

