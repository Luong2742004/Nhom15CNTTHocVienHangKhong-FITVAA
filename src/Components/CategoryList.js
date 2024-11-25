import React, { useState } from 'react';  

const CategoryList = () => {  
    const [categories, setCategories] = useState([]);  

    const addCategory = (category) => {  
        setCategories([...categories, category]);  
    };  

    const removeCategory = (index) => {  
        const newCategories = categories.filter((_, i) => i !== index);  
        setCategories(newCategories);  
    };  

    return (  
        <div>  
            <h2>Danh sách loại sản phẩm</h2>  
            <ul>  
                {categories.map((category, index) => (  
                    <li key={index}>  
                        {category} <button onClick={() => removeCategory(index)}>Xóa</button>  
                    </li>  
                ))}  
            </ul>  
            <button onClick={() => addCategory(prompt('Nhập tên loại sản phẩm:'))}>Thêm loại sản phẩm</button>  
        </div>  
    );  
};  

export default CategoryList;