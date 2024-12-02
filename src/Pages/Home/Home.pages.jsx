import { useEffect, useState } from "react";
import { getCategory } from "../../Services/Listing.service";

function Home(){
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const cate = await getCategory
            setCategories(cate);

        }
        fetchData();
    }, []);

    return (
        <div>
            <ul>
                {categories && categories.map((category) => {
                    return (
                        <li key={index}>
                            {category.name}
                            <img src={category.img} alt="" />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Home;