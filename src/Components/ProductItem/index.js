import Rating from '@mui/material/Rating';

const ProductItem =(props)=>{
    return(
        <div className={`productItem ${props.itemView}`}>
            <div className="imgWrapper">
                <img src="https://tse1.mm.bing.net/th?id=OIP.s5j-LFUHJm7b-wbqA0dSPwHaE8&pid=Api&P=0&h=180"
                className="w-100"/> 
            </div>

            <div className="info">
                <h4>Điều hoà Panasonic Inverter 1 HP VSD-C12K</h4>
                <span className="text-sussess d-block">Còn hàng</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />

                <div className="d-flex">
                <span className="Price text-danger">5,600,000đ</span>
                </div>
            </div>

        </div>

    )
}

export default ProductItem