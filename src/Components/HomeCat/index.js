import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeCat = ()=>{
    return(
        <section className="homeCat">
                <div className="container">
                <h3 class="mb-3 hd">Thương hiệu</h3>
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={50}
                        navigation={true}
                        slidesPerGroup={1}
                        modules={[Navigation]}
                        className="mySwipper"
                    >
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://seeklogo.com/images/D/Daikin-logo-9D531D40BA-seeklogo.com.png"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://seeklogo.com/images/P/panasonic-logo-7AA4838951-seeklogo.com.png"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://images.seeklogo.com/logo-png/12/1/samsung-logo-png_seeklogo-122023.png?v=638653750940000000"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://images.seeklogo.com/logo-png/8/1/lg-electronics-logo-png_seeklogo-83711.png?v=638653840210000000"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://images.seeklogo.com/logo-png/9/1/mitsubishi-logo-png_seeklogo-93525.png?v=638653761110000000"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://logos-world.net/wp-content/uploads/2020/12/Electrolux-Logo-700x394.png"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://seeklogo.com/images/S/Sanyo-logo-C1192B385D-seeklogo.com.png"/>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
        </section>
    )
}

export default HomeCat;