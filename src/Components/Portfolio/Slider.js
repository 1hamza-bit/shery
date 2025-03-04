import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.module.scss'
import Image from 'next/image';

const ProductSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0%', // Adjust the padding to control the visibility of side items
    // autoplay: true,
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: '0',
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} className='slider !flex !justify-center'>
          <Image src={product.image} alt={product.title}   className="w-full h-full object-contain"
          />
          {/* <h3>{product.title}</h3>
          <p>{product.description}</p> */}
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
