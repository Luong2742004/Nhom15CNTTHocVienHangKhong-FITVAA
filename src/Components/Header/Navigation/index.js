import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
    
    const [isOpenSlidebarVal, setisopenSlidebarVal] = useState(false);

    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 navPart1'>
                        <div className='catWrapper'>
                            <Button className='allCatTab align-items-center' onClick={()=>setisopenSlidebarVal(!isOpenSlidebarVal)}> 
                                <span className='icon1' style={{ marginRight: '0.5rem' }}><IoIosMenu /></span>
                                <span className="text">PHÂN LOẠI</span>
                                <span className='icon2 ' style={{ marginLeft: '0.5rem' }}><FaAngleDown/></span>
                            </Button>

                            <div className={`slidebarNav ${isOpenSlidebarVal===true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to="/"><Button>Home</Button></Link></li>
                                    <li><Link to="/"><Button>Giới thiệu chung</Button></Link></li>
                                    <li><Link to="/listing"><Button>Sản phẩm</Button></Link></li>
                                    <li><Link to="/"><Button>Địa chỉ</Button></Link></li>
                                    <li><Link to="/"><Button>Liên hệ</Button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline 'style={{display: 'flex',listStyleType: 'none',padding: '0',margin: '0',width: '100%',}}>
                            <li><Link to="/"><Button>Home</Button></Link></li>
                            <li><Link to="/"><Button>Giới thiệu chung</Button></Link></li>
                            <li><Link to="/listing"><Button>Sản phẩm</Button></Link></li>
                            <li><Link to="/"><Button>Địa chỉ</Button></Link></li>
                            <li><Link to="/"><Button>Liên hệ</Button></Link></li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
