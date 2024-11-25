import React, { useContext, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button'; 
import { Dialog } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProvinceDropdown = () => {
    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setselectedTab] = useState(null);

    const [provinceList, setProvinceList] = useState([]);
    const [filteredProvinces, setFilteredProvinces] = useState([]);

    const context = useContext(MyContext);

    const selectProvince = (index) => {
        setselectedTab(index);
        alert(`Selected province: ${filteredProvinces[index]?.name}`);
        setisOpenModal(false);
    };

    useEffect(() => {
        setProvinceList(context.provinceList);
        setFilteredProvinces(context.provinceList);
    }, [context.provinceList]);

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        
        const list = provinceList.filter((item) => 
            item.name.toLowerCase().includes(keyword)
        );

        setFilteredProvinces(list);
    };

    return (
        <>
            <Button className='provinceDrop' onClick={() => setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your location</span>
                    <span className="name">
                        {selectedTab !== null 
                            ? context.provinceList[selectedTab]?.name.length > 17 
                                ? context.provinceList[selectedTab]?.name.substr(0, 17) + '...' 
                                : context.provinceList[selectedTab]?.name 
                            : "Nơi ở của bạn là ..."
                        }
                    </span>
                </div>
                <span className="ms-auto" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                    <FaAngleDown />
                </span>
            </Button>

            <Dialog open={isOpenModal} onClose={() => setisOpenModal(false)}
                    className="locationModal" TransitionComponent={Transition}>
                <h4 className="mb-3">Chọn thành phố</h4>
                <Button className="close_" onClick={() => setisOpenModal(false)}>
                    <MdClose />
                </Button>
                <div className="headerSearch w-100">
                    <input type='text' placeholder='Tìm thành phố...' onChange={filterList} />
                    <Button><IoIosSearch /></Button>
                </div>

                <ul className="countryList mt-3">
                    {filteredProvinces.length !== 0 && filteredProvinces.map((item, index) => (
                        <li key={index}>
                            <Button onClick={() => selectProvince(index)}
                                    className={`${selectedTab === index ? 'active' : ''}`}>
                                {item.name}
                            </Button>
                        </li>
                    ))}
                </ul>
            </Dialog>
        </>
    );
}

export default ProvinceDropdown;
