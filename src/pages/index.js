import { useContext, useEffect } from 'react';

import Banner from '@/components/home/Banner';
import TrendingProductsList from '@/components/home/products/TrendingProductsList';
import PageLayout from '@/components/layout/PageLayout';
import { EcommerceContext } from '@/shared/context';
import HttpRequest from '@/shared/http/HttpRequest';

const Home = ({ home, categories }) => {
  const { state, update } = useContext(EcommerceContext);

  useEffect(() => {
    update({ home });
  }, []);

  useEffect(() => {
    update({ categories });
  }, []);

  return (
    <PageLayout>
      <Banner images={home?.atachmentsDesktop} />
      <TrendingProductsList products={state.home?.products} />
      <section className="container mt-4 mb-grid-gutter">
        <div className="bg-faded-info rounded-lg py-4">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="px-4 pr-sm-0 pl-sm-5">
                <span className="badge badge-danger">Limited Offer</span>
                <h3 className="mt-4 mb-1 text-body font-weight-light">All new</h3>
                <h2 className="mb-1">Last Gen iPad Pro</h2>
                <p className="h5 text-body font-weight-light">at discounted price. Hurry up!</p>
                <div className="cz-countdown py-2 h4" data-countdown="07/01/2021 07:00:00 PM">
                  <div className="cz-countdown-days">
                    <span className="cz-countdown-value">137</span>
                    <span className="cz-countdown-label text-muted">d</span>
                  </div>
                  <div className="cz-countdown-hours">
                    <span className="cz-countdown-value">07</span>
                    <span className="cz-countdown-label text-muted">h</span>
                  </div>
                  <div className="cz-countdown-minutes">
                    <span className="cz-countdown-value">21</span>
                    <span className="cz-countdown-label text-muted">m</span>
                  </div>
                  <div className="cz-countdown-seconds">
                    <span className="cz-countdown-value">46</span>
                    <span className="cz-countdown-label text-muted">s</span>
                  </div>
                </div>
                <a className="btn btn-accent" href="#">
                  View offers
                  <i className="czi-arrow-right font-size-ms ml-1" />
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <img src="img/home/banners/offer.jpg" alt="iPad Pro Offer" />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-4 pb-md-5">
        <div className="row">
          {/* Bestsellers*/}
          <div className="col-lg-4 col-md-6 mb-2 py-3">
            <div className="widget">
              <h3 className="widget-title">Bestsellers</h3>
              <div className="media align-items-center pb-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v2.html">
                  <img width={64} src="img/shop/cart/widget/05.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v2.html">Wireless Bluetooth Headphones</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent">
                      $259.<small>00</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v2.html">
                  <img width={64} src="img/shop/cart/widget/06.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v2.html">Cloud Security Camera</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent">
                      $122.<small>00</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v2.html">
                  <img width={64} src="img/shop/cart/widget/07.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v2.html">Android Smartphone S10</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent">
                      $799.<small>00</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2">
                <a className="d-block mr-2" href="shop-single-v2.html">
                  <img width={64} src="img/shop/cart/widget/08.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v2.html">Android Smart TV Box</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent">
                      $67.<small>00</small>
                    </span>
                    <del className="text-muted font-size-xs">
                      $90.<small>43</small>
                    </del>
                  </div>
                </div>
              </div>
              <p className="mb-0">...</p>
              <a className="font-size-sm" href="shop-grid-ls.html">
                View more
                <i className="czi-arrow-right font-size-xs ml-1" />
              </a>
            </div>
          </div>
          {/* New arrivals*/}
          <div className="col-lg-4 col-md-6 mb-2 py-3">
            <div className="widget">
              <h3 className="widget-title">New arrivals</h3>
              <div className="media align-items-center pb-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v2.html">
                  <img width={64} src="img/shop/widget/06.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v2.html">Monoblock Desktop PC</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent">
                      $1,949.<small>00</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v2.html">
                  <img width={64} src="img/shop/widget/07.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v2.html">Laserjet Printer All-in-One</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent">
                      $428.<small>60</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v2.html">
                  <img width={64} src="img/shop/widget/08.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v2.html">Console Controller Charger</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent">
                      $14.<small>97</small>
                    </span>
                    <del className="text-muted font-size-xs">
                      $16.<small>47</small>
                    </del>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2">
                <a className="d-block mr-2" href="shop-single-v2.html">
                  <img width={64} src="img/shop/widget/09.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v2.html">Smart Watch Series 5, Aluminium</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent">
                      $349.<small>99</small>
                    </span>
                  </div>
                </div>
              </div>
              <p className="mb-0">...</p>
              <a className="font-size-sm" href="shop-grid-ls.html">
                View more
                <i className="czi-arrow-right font-size-xs ml-1" />
              </a>
            </div>
          </div>
          {/* Top rated*/}
          <div className="col-lg-4 col-md-6 mb-2 py-3">
            <div className="widget">
              <h3 className="widget-title">Top rated</h3>
              <div className="media align-items-center pb-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v2.html">
                  <img width={64} src="img/shop/widget/10.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v2.html">Android Smartphone S9</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent">
                      $749.<small>99</small>
                    </span>
                    <del className="text-muted font-size-xs">
                      $859.<small>99</small>
                    </del>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v2.html">
                  <img width={64} src="img/shop/widget/11.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v2.html">Wireless Bluetooth Headphones</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent">
                      $428.<small>60</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v2.html">
                  <img width={64} src="img/shop/widget/12.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v2.html">360 Degrees Camera</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent">
                      $98.<small>75</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2">
                <a className="d-block mr-2" href="shop-single-v2.html">
                  <img width={64} src="img/shop/widget/13.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v2.html">Digital Camera 40MP</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent">
                      $210.<small>00</small>
                    </span>
                    <del className="text-muted font-size-xs">
                      $249.<small>00</small>
                    </del>
                  </div>
                </div>
              </div>
              <p className="mb-0">...</p>
              <a className="font-size-sm" href="shop-grid-ls.html">
                View more
                <i className="czi-arrow-right font-size-xs ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="container pb-5 mb-md-3">
        <div className="border rounded-lg p-3">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="bg-secondary p-5 text-center">
                <img className="d-block mb-4 mx-auto" src="img/home/yt-logo.png" width={120} alt="YouTube" />
                <div className="media justify-content-center align-items-center mb-4">
                  <img className="mr-2" src="img/home/yt-subscribers.png" width={126} alt="YouTube Subscribers" />
                  <span className="font-size-sm">250k+</span>
                </div>
                <a className="btn btn-primary border-0 btn-sm mb-3" href="#" style={{ backgroundColor: '#ff0000' }}>
                  <i className="czi-add-user mr-2" />
                  Subscribe*
                </a>
                <p className="font-size-sm mb-0">*View latest gadgets reviews available for purchase in our store.</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="d-flex flex-wrap justify-content-between align-items-center pt-3 pb-2">
                <h2 className="h4 mb-3">Latest videos from Cartzilla channel</h2>
                <a className="btn btn-outline-accent btn-sm mb-3" href="#">
                  More videos
                  <i className="czi-arrow-right font-size-xs ml-1 mr-n1" />
                </a>
              </div>
              <div className="row no-gutters">
                <div className="col-lg-4 col-6 mb-3">
                  <a
                    className="video-cover video-popup-btn d-block text-decoration-0 px-2"
                    href="https://www.youtube.com/embed/vS93u75NnPo"
                    lg-uid="lg0"
                    data-ol-has-click-handler
                  >
                    <div className="video-cover-thumb mb-2">
                      <span className="badge badge-dark">6:16</span>
                      <img className="w-100" src="img/home/video/cover01.jpg" alt="Video cover" />
                    </div>
                    <h6 className="font-size-sm pt-1">5 New Cool Gadgets You Must See on Cartzilla - Cheap Budget</h6>
                  </a>
                </div>
                <div className="col-lg-4 col-6 mb-3">
                  <a
                    className="video-cover video-popup-btn d-block text-decoration-0 px-2"
                    href="https://www.youtube.com/embed/B6LaYgGogf0"
                    lg-uid="lg1"
                    data-ol-has-click-handler
                  >
                    <div className="video-cover-thumb mb-2">
                      <span className="badge badge-dark">7:27</span>
                      <img className="w-100" src="img/home/video/cover02.jpg" alt="Video cover" />
                    </div>
                    <h6 className="font-size-sm pt-1">5 Super Useful Gadgets on Cartzilla You Must Have in 2020</h6>
                  </a>
                </div>
                <div className="col-lg-4 col-6 mb-3">
                  <a
                    className="video-cover video-popup-btn d-block text-decoration-0 px-2"
                    href="https://www.youtube.com/embed/kB-ROfRS9V4"
                    lg-uid="lg2"
                    data-ol-has-click-handler
                  >
                    <div className="video-cover-thumb mb-2">
                      <span className="badge badge-dark">6:20</span>
                      <img className="w-100" src="img/home/video/cover03.jpg" alt="Video cover" />
                    </div>
                    <h6 className="font-size-sm pt-1">Top 5 New Amazing Gadgets on Cartzilla You Must See</h6>
                  </a>
                </div>
                <div className="col-lg-4 col-6 mb-3 d-lg-none">
                  <a
                    className="video-cover video-popup-btn d-block text-decoration-0 px-2"
                    href="https://www.youtube.com/embed/sJK67XXE_Rg"
                    lg-uid="lg3"
                    data-ol-has-click-handler
                  >
                    <div className="video-cover-thumb mb-2">
                      <span className="badge badge-dark">6:11</span>
                      <img className="w-100" src="img/home/video/cover04.jpg" alt="Video cover" />
                    </div>
                    <h6 className="font-size-sm font-weight-bold pt-1">
                      5 Amazing Construction Inventions and Working Tools Available...
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

/**
 * Do not confuse with getSytaticProps. The getServerSideProps is used to SSR.
 * The last one is used with static generation. Runs at build time in production
 */
export const getServerSideProps = async () => {
  const httpRequest = new HttpRequest();
  const home = await httpRequest.get('rs/crud/homes/configuration');
  const categories = await httpRequest.get('rs/crud/productCategorys/basic');

  return {
    props: {
      home,
      categories,
    },
  };
};

export default Home;
