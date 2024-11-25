import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img
            src="https://daikin.vn/images/slideshow/2021/06/10/compress/ftka_1903x808_1623318403.jpg"
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="https://daikin.vn/images/slideshow/2021/06/10/compress/ftkc_1903x808_1623318834.jpg"
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="https://daikin.vn/images/slideshow/2021/06/01/compress/dieu-hoa-sky-air-daikin_1622530897.jpg"
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src="https://daikin.vn/images/slideshow/2021/06/10/compress/ftkz_1903x808_1623318747.jpg"
            className="w-100"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
