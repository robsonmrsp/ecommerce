import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Home = () => {
  const settings = {
    // arrows: true,
    // dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    // cssEase: 'linear',
    centerPadding: '4px',
    // adaptiveHeight: true,
    touchMove: true,
  };

  return (
    <PageLayout>
      <Slider {...settings}>
        <div className="bg-darker bg-size-cover bg-position-center " style={{ minHeight: '15rem' }}>
          <img src="img/food-delivery/hero-bg.jpg" alt="Single Product / Brand Store" />
        </div>

        <div className="bg-darker bg-size-cover bg-position-center " style={{ minHeight: '15rem' }}>
          <img src="img/food-delivery/hero-bg.jpg" alt="Single Product / Brand Store" />
        </div>
      </Slider>
    </PageLayout>
  );
};

export default Home;
