import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import '../../../Styles/Slider.css'

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    Infinity: true,
    speed: 1000,
    autoplaySpeed: 2000,
    swipeToSlice: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam eaque iusto, quis soluta iure esse rem itaque perferendis neque
          excepturi quam fugit laudantium eius ipsa quos mollitia, nisi eum!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3">
            <img src={ava01} alt="avatar" className=" rounded" />
            <h6>Huy</h6>
        </div>
      </div>
      <div>
      <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam eaque iusto, quis soluta iure esse rem itaque perferendis neque
          excepturi quam fugit laudantium eius ipsa quos mollitia, nisi eum!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3">
            <img src={ava02} alt="avatar" className=" rounded" />
            <h6>Lan</h6>
        </div>
      </div>
      <div>
      <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam eaque iusto, quis soluta iure esse rem itaque perferendis neque
          excepturi quam fugit laudantium eius ipsa quos mollitia, nisi eum!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3">
            <img src={ava03} alt="avatar" className=" rounded" />
            <h6>Phúc</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
