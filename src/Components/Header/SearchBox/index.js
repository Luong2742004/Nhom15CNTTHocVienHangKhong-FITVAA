import Button from '@mui/material/Button';
import { IoSearchSharp } from "react-icons/io5";

const SearchBox = () => {
    return (
        <div className='headerSearch d-flex align-items-center ms-auto'>
            <input type='text' placeholder='Tìm kiếm sản phẩm ...' />
            <Button> <IoSearchSharp/></Button>
        </div>
    );
}

export default SearchBox;
