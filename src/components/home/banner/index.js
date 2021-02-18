import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Banner = () => {
  const settings = {
    // arrows: true,
    // dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 300000,
    // cssEase: 'linear',
    centerPadding: '4px',
    // adaptiveHeight: true,
    touchMove: true,
  };

  return (
    <Slider {...settings}>
      <section className="bg-darker bg-size-cover bg-position-center">
        <div
          className="container pt-5 pb-10 bg-size-cover bg-position-center"
          style={{ backgroundImage: 'url(img/food-delivery/hero-bg.jpg)' }}
        >
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
              <h5 className="text-light font-weight-light">#1 Food Delivery Service since 2010</h5>
              <div className="h1 text-light mb-3 pb-4">
                We deliver your favorite food fresh &amp; fast in
                <div className="dropdown d-inline-block ml-1">
                  <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                    New York
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item font-size-base" href="#">
                      Los Angeles
                    </a>
                    <a className="dropdown-item font-size-base" href="#">
                      Chicago
                    </a>
                    <a className="dropdown-item font-size-base" href="#">
                      Houston
                    </a>
                    <a className="dropdown-item font-size-base" href="#">
                      Philadelphia
                    </a>
                    <a className="dropdown-item font-size-base" href="#">
                      San Diego
                    </a>
                    <a className="dropdown-item font-size-base" href="#">
                      Miami
                    </a>
                  </div>
                </div>
              </div>
              <a className="btn btn-primary" href="#cuisine" data-scroll>
                What do you want to eat?
              </a>
            </div>
          </div>
        </div>
      </section>
    </Slider>
  );
};

export default Banner;
