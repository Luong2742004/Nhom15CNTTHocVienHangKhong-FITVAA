import { Link } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { Button } from '@mui/material';
import { IoCart } from "react-icons/io5";


const Cart =()=> {
    return(
        <>
            <section className="section cartPage">
                <div className="container">
                    <h2 className="hd mb-1">Giỏ hàng</h2>
                    <p>Có <b className='text-red'>3</b> sản phẩm trong giỏ hàng</p>
                    
                    <div className="row">
                        <div className="col-md-8">

                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th width="40%">Sản phẩm</th>
                                            <th width="20%">Giá tiền</th>
                                            <th width="20%">Số lượng</th>
                                            <th width="20%">Bỏ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td width="40%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://tse1.mm.bing.net/th?id=OIP.s5j-LFUHJm7b-wbqA0dSPwHaE8&pid=Api&P=0&h=180" 
                                                            className="w-100"/>
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>
                                                                Máy lạnh Panasonic VSD 1 HP
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="20%">5,600,000đ</td>
                                            <td width="20%">3</td>
                                            <td width="20%"><span className="remove"><IoIosClose/></span></td>
                                        </tr>
                                        <tr>
                                            <td width="40%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://tse1.mm.bing.net/th?id=OIP.s5j-LFUHJm7b-wbqA0dSPwHaE8&pid=Api&P=0&h=180" 
                                                            className="w-100"/>
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>
                                                                Máy lạnh Panasonic VSD 1 HP
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="20%">5,600,000đ</td>
                                            <td width="20%">3</td>
                                            <td width="20%"><span className="remove"><IoIosClose/></span></td>
                                        </tr>
                                        <tr>
                                            <td width="40%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://tse1.mm.bing.net/th?id=OIP.s5j-LFUHJm7b-wbqA0dSPwHaE8&pid=Api&P=0&h=180" 
                                                            className="w-100"/>
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>
                                                                Máy lạnh Panasonic VSD 1 HP
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="20%">5,600,000đ</td>
                                            <td width="20%">3</td>
                                            <td width="20%"><span className="remove"><IoIosClose/></span></td>
                                        </tr>
                                        <tr>
                                            <td width="40%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://tse1.mm.bing.net/th?id=OIP.s5j-LFUHJm7b-wbqA0dSPwHaE8&pid=Api&P=0&h=180" 
                                                            className="w-100"/>
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>
                                                                Máy lạnh Panasonic VSD 1 HP
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="20%">5,600,000đ</td>
                                            <td width="20%">3</td>
                                            <td width="20%"><span className="remove"><IoIosClose/></span></td>
                                        </tr>                
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border p-3 cartDetails">
                                <h4>GIỎ HÀNG</h4>

                                <div className="d-flex align-items-center mb-3">
                                    <span>Số lượng</span>   
                                    <span className="ms-auto text-red">3</span> 
                                </div>    

                                <div className="d-flex align-items-center mb-3">
                                    <span>Khu vực</span>   
                                    <span className="ms-auto"><b>Đồng Nai</b></span> 
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <span>Shipping</span>   
                                    <span className="ms-auto"><b>Free</b></span> 
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <span>Tổng số tiền</span>   
                                    <span className="ms-auto text-red">300,000,000đ</span> 
                                </div>
                                
                                <Button variant="outlined" style={{ fontWeight: 'bold' }}><IoCart/>Thanh toán</Button>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart