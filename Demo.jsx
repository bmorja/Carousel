import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Demo = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    pauseOnHover: true ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="bg-gray-500 mt-3">
      <div className="slider-container">
      <Slider {...settings}>
        <div className="flex">
          <h3><img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg" className="Slider-inage" alt="" /></h3>
        </div>
        <div>
          <h3><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" className="Slider-inage" alt="" /></h3>
        </div>
        <div>
          <h3><img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg" className="Slider-inage" alt="" /></h3>
        </div>
        <div>
          <h3><img src="https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649" className="Slider-inage" alt="" /></h3>
        </div>
        <div>
          <h3><img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" className="Slider-inage" alt="" /></h3>
        </div>
        <div>
          <h3><img src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=" className="Slider-inage" alt="" /></h3>
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default Demo;
