import Sidebar from "../../Components/Sidebar";
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import ProductItem from "../../Components/ProductItem";
import { useState } from "react";
import Pagination from '@mui/material/Pagination';

const Listing = () =>{

    const [productView, setProductView] = useState('four')

    return(
        <>
            <section className="product_Listing_Page">
                <div className="container">
                    <div className="container">
                        <div className="productListing d-flex">
                            <Sidebar/>

                            <div className="content_right">
                                <img src="https://www.panasonic.com/content/dam/Panasonic/HVAC/category-browse/Single-split-Asia-06.jpg"
                                className="w-100" style={{borderRadius:'8px'}}/>

                                <div className="showBy mt-3 mb-3 d-flex align-items-center">
                                    <div className="d-flex align-items-center btnWrapper">
                                        <Button className={productView==='one' && 'act'} onClick={()=>setProductView('one')}><IoIosMenu/></Button>
                                        <Button className={productView==='two' && 'act'} onClick={()=>setProductView('two')}><HiViewGrid/></Button>
                                        <Button className={productView==='three' && 'act'} onClick={()=>setProductView('three')}><CgMenuGridR/></Button>
                                        <Button className={productView==='four' && 'act'} onClick={()=>setProductView('four')}><TfiLayoutGrid4Alt/></Button>
                                    </div>
                                </div>

                                <div className="productListing">
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                    <ProductItem itemView={productView}/>
                                </div>

                                <div className="d-flex align-items-center justify-content-center mt-5">
                                    <Pagination count={10} color="primary"/>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;