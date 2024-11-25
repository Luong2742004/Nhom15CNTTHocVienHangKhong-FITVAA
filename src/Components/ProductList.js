import React, { useState } from 'react';  

const ProductList = () => {  
    const [products, setProducts] = useState([]);  

    const addProduct = (product) => {  
        setProducts([...products, product]);  
    };  

    const removeProduct = (index) => {  
        const newProducts = products.filter((_, i) => i !== index);  
        setProducts(newProducts);  
    };  

    return (  
        <div>  
            <h2>Danh sách sản phẩm</h2>  
            <ul>  
                {products.map((product, index) => (  
                    <li key={index}>  
                        {product} <button onClick={() => removeProduct(index)}>Xóa</button>  
                    </li>  
                ))}  
            </ul>  
            <button onClick={() => addProduct(prompt('Nhập tên sản phẩm:'))}>Thêm sản phẩm</button>  
        </div>  
    );  
};  

export default ProductList;