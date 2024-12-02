import axios from "axios";

export async function getCategory(){
    const result = await axios.get("https://localhost:5000/api/categories");
    return result.data; 
}