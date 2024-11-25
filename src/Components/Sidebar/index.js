import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';


const Sidebar = ()=>{
    return(
        <>
            <div className="sidebar">
                    <div className="filterBox">
                        <h6>PRODUCT CATEGORIES</h6>
                        
                        <div className='scroll'>
                            <ul>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Daikin" />
                                </li>
                                
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Panasonic" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Samsung" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="LG" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Mitsubishi" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Electrolux" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Sanyo" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <br/>

                    <Link to="#">
                        <img src='https://www.maylanh24h.com.vn/hoanghung/5/files/nha-phan-phoi-LG.png' className='w-100'/> 
                    </Link>
                </div>
        </>
    )
}

export default Sidebar;