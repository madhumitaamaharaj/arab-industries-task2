import React, { useState } from 'react';
import 'swiper/swiper-bundle.css';
import Swiper from 'react-id-swiper';
import './ImageSlider.css';
import image1 from '../Images/pic1.jpg';
import image2 from '../Images/pic2.jpg';
import image3 from '../Images/pic3.jpg';
import image4 from '../Images/pic4.jpeg';

const sliderConfig = {
  containerClass: 'swiper-container hero-slider',
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 500,
  spaceBetween: 0,
  effect: 'slide',
};

const ImageSlider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;

  return (
    <Swiper {...sliderConfig} getSwiper={setParallaxSwiper}>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image1} alt="image1" />
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
          
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image2} alt="image2" />
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">Slide 2</h1>
    
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image3} alt="image3" />
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">Slide 3</h1>
        
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image4} alt="image4" />
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">Slide 4</h1>
        
        </div>
      </div>
    </Swiper>
  );
};

export default ImageSlider;
