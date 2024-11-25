import { TbAirConditioningDisabled } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaFacebookF  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () =>{
    return(
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><TbAirConditioningDisabled/></span>
                        <span className="ml-2">Sản phẩm chính hãng</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery/></span>
                        <span className="ml-2">Miễn phí vận chuyển</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbRosetteDiscountCheck/></span>
                        <span className="ml-2">Dịch vụ bảo hành đáng tin cậy</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><AiOutlineDollarCircle/></span>
                        <span className="me-2">Giá cả ưu đãi</span>
                    </div>
                </div>

                <div className="row mt-5 linksWrap">
                    <div className="col">
                        <h5>SẢN PHẨM & DỊCH VỤ</h5>
                        <ul>
                            <li><Link to="#">Sản phẩm</Link></li>
                            <li><Link to="#">Dịch vụ</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>LIÊN HỆ</h5>
                        <ul>
                            <li>Hotline: 0123456789</li>
                            <li>Email: contactcenter@nhom15.com.vn</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>CHÍNH SÁCH</h5>
                        <ul>
                            <li><Link to="#">Điều kiện & điều khoản sử dụng</Link></li>
                            <li><Link to="#">Vận chuyển & lắp đặt</Link></li>
                            <li><Link to="#">Chính sách bảo mật thông tin</Link></li>
                            <li><Link to="#">Chính sách bảo hành</Link></li>   
                        </ul>
                    </div>
                    <div className="col">
                        <h5>SẢN PHẨM & DỊCH VỤ</h5>
                        <ul>
                            <li><Link to="#">Sản phẩm</Link></li>
                            <li><Link to="#">Dịch vụ</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright mt-3 pt-3 pb-3 d-flex justify-content-between">
                        <p className="mb-0">Copyright 2024. All rights reserved</p>
                        <ul className="list list-inline ml-auto mb">
                            <li className="list-inline-item">
                                <Link to="#"><FaFacebookF/></Link>
                            </li>

                            <li className="list-inline-item">
                                <Link to="#"><FaTwitter/></Link>
                            </li>

                            <li className="list-inline-item">
                                <Link to="#"><FaInstagram/></Link>
                            </li>
                        </ul>
                </div>



            </div>
        </footer>
    )
}

export default Footer;