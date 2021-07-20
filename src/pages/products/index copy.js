import React, { useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout/PageLayout';
import Link from 'next/link';
import HttpRequest from '@/shared/http/HttpRequest';
import ToolbarFilter from '@/components/shop/ToolbarFilter';
import ProductCard from '@/components/shop/ProductCard';

const Home = ({ pageProducts }) => {
  useEffect(() => {
    console.log(pageProducts);
  }, []);

  return (
    <PageLayout>
      <>
        <div className="bg-dark pt-4 pb-5">
          <div className="container pt-2 pb-3 pt-lg-3 pb-lg-4">
            <div className="d-lg-flex justify-content-between pb-3">
              <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                    <li className="breadcrumb-item">
                      <a className="text-nowrap" href="/">
                        <i className="czi-home" />
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item text-nowrap">
                      <Link href="/shop">Shop</Link>
                    </li>
                    <li className="breadcrumb-item text-nowrap active" aria-current="page">
                      Grid filters on top
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
                <h1 className="h3 text-light mb-0">Shop grid filters on top</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-5 mb-2 mb-md-4">
          {/* Toolbar*/}
          <div className="bg-light box-shadow-lg rounded-lg p-4 mt-n5 mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="dropdown mr-2">
                <a className="btn btn-outline-secondary dropdown-toggle" href="#shop-filters" data-toggle="collapse">
                  <i className="czi-filter mr-2" />
                  Filters
                </a>
              </div>
              <div className="d-flex">
                <a className="nav-link-style mr-3" href="#">
                  <i className="czi-arrow-left" />
                </a>
                <span className="font-size-md">1 / 5</span>
                <a className="nav-link-style ml-3" href="#">
                  <i className="czi-arrow-right" />
                </a>
              </div>
              <div className="d-none d-sm-flex">
                <a className="btn btn-icon nav-link-style bg-primary text-light disabled opacity-100 mr-2" href="#">
                  <i className="czi-view-grid" />
                </a>
                <a className="btn btn-icon nav-link-style" href="shop-list-ft.html">
                  <i className="czi-view-list" />
                </a>
              </div>
            </div>
            {/* Toolbar with expandable filters*/}
            <ToolbarFilter />
          </div>
          {/* Products grid*/}
          <div className="row pt-3 mx-n2">
            {(pageProducts.itens || []).map((product) => {
              console.log('prod');
              return <ProductCard product={product} />;
            })}
          </div>
          {/* Banners*/}
          <div className="row py-sm-2">
            <div className="col-md-8 mb-4">
              <div className="d-sm-flex justify-content-between align-items-center bg-secondary overflow-hidden rounded-lg">
                <div className="py-4 my-2 my-md-0 py-md-5 px-4 ml-md-3 text-center text-sm-left">
                  <h4 className="font-size-lg font-weight-light mb-2">Converse All Star</h4>
                  <h3 className="mb-4">Make Your Day Comfortable</h3>
                  <a className="btn btn-primary btn-shadow btn-sm" href="#">
                    Shop Now
                  </a>
                </div>
                <img className="d-block ml-auto" src="img/shop/catalog/banner.jpg" alt="Shop Converse" />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="d-flex flex-column h-100 bg-size-cover bg-position-center rounded-lg py-4"
                style={{ backgroundImage: 'url(img/blog/banner-bg.jpg)' }}
              >
                <div className="py-4 my-2 px-4 text-center">
                  <h5 className="mb-2">Your Add Banner Here</h5>
                  <p className="font-size-sm text-muted">Hurry up to reserve your spot</p>
                  <a className="btn btn-primary btn-shadow btn-sm" href="#">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Products grid*/}
          <div className="row mx-n2">
            {/* Product*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
              <div className="card product-card">
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title
                  data-original-title="Add to wishlist"
                >
                  <i className="czi-heart" />
                </button>
                <a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html">
                  <img src="img/shop/catalog/09.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Cosmetics
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Metallic Lipstick (Crimson)</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $12.<small>99</small>
                      </span>
                    </div>
                    <div className="star-rating">
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star" />
                    </div>
                  </div>
                </div>
                <div className="card-body card-body-hidden">
                  <div className="text-center pb-2">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color2" id="crimson" defaultChecked />
                      <label className="custom-option-label rounded-circle" htmlFor="crimson">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#bd3c82' }} />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color2" id="creamy" />
                      <label className="custom-option-label rounded-circle" htmlFor="creamy">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#ebae81' }} />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color2" id="palm" />
                      <label className="custom-option-label rounded-circle" htmlFor="palm">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#ca8799' }} />
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-sm btn-block mb-2"
                    type="button"
                    data-toggle="toast"
                    data-target="#cart-toast"
                    data-ol-has-click-handler
                  >
                    <i className="czi-cart font-size-sm mr-1" />
                    Add to Cart
                  </button>
                  <div className="text-center">
                    <a className="nav-link-style font-size-ms" href="#quick-view" data-toggle="modal">
                      <i className="czi-eye align-middle mr-1" />
                      Quick view
                    </a>
                  </div>
                </div>
              </div>
              <hr className="d-sm-none" />
            </div>
            {/* Product*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
              <div className="card product-card">
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title
                  data-original-title="Add to wishlist"
                >
                  <i className="czi-heart" />
                </button>
                <a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html">
                  <img src="img/shop/catalog/10.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s Accessories
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">5-Pack Multicolor Bracelets</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $7.<small>99</small>
                      </span>
                    </div>
                    <div className="star-rating">
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                    </div>
                  </div>
                </div>
                <div className="card-body card-body-hidden">
                  <button
                    className="btn btn-primary btn-sm btn-block mb-2"
                    type="button"
                    data-toggle="toast"
                    data-target="#cart-toast"
                    data-ol-has-click-handler
                  >
                    <i className="czi-cart font-size-sm mr-1" />
                    Add to Cart
                  </button>
                  <div className="text-center">
                    <a className="nav-link-style font-size-ms" href="#quick-view" data-toggle="modal">
                      <i className="czi-eye align-middle mr-1" />
                      Quick view
                    </a>
                  </div>
                </div>
              </div>
              <hr className="d-sm-none" />
            </div>
            {/* Product*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
              <div className="card product-card">
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title
                  data-original-title="Add to wishlist"
                >
                  <i className="czi-heart" />
                </button>
                <a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html">
                  <img src="img/shop/catalog/11.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s Sandals
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Soft Footbed Sandals</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $99.<small>50</small>
                      </span>
                    </div>
                    <div className="star-rating">
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star" />
                    </div>
                  </div>
                </div>
                <div className="card-body card-body-hidden">
                  <div className="text-center pb-2">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color1" id="blue2" defaultChecked />
                      <label className="custom-option-label rounded-circle" htmlFor="blue2">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#879fb3' }} />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color1" id="brown" />
                      <label className="custom-option-label rounded-circle" htmlFor="brown">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#9c6d4a' }} />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color1" id="black" />
                      <label className="custom-option-label rounded-circle" htmlFor="black">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#333333' }} />
                      </label>
                    </div>
                  </div>
                  <div className="d-flex mb-2">
                    <select className="custom-select custom-select-sm mr-2">
                      <option>9.5</option>
                      <option>10</option>
                      <option>10.5</option>
                      <option>11</option>
                      <option>11.5</option>
                    </select>
                    <button
                      className="btn btn-primary btn-sm"
                      type="button"
                      data-toggle="toast"
                      data-target="#cart-toast"
                      data-ol-has-click-handler
                    >
                      <i className="czi-cart font-size-sm mr-1" />
                      Add to Cart
                    </button>
                  </div>
                  <div className="text-center">
                    <a className="nav-link-style font-size-ms" href="#quick-view" data-toggle="modal">
                      <i className="czi-eye align-middle mr-1" />
                      Quick view
                    </a>
                  </div>
                </div>
              </div>
              <hr className="d-sm-none" />
            </div>
            {/* Product*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
              <div className="card product-card">
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title
                  data-original-title="Add to wishlist"
                >
                  <i className="czi-heart" />
                </button>
                <a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html">
                  <img src="img/shop/catalog/12.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s Hats
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">3-Color Sun Stash Hat</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $25.<small>99</small>
                      </span>
                    </div>
                    <div className="star-rating">
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                    </div>
                  </div>
                </div>
                <div className="card-body card-body-hidden">
                  <div className="text-center pb-2">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size5" id="s4" defaultChecked />
                      <label className="custom-option-label" htmlFor="s4">
                        S
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size5" id="m4" />
                      <label className="custom-option-label" htmlFor="m4">
                        M
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size5" id="l4" />
                      <label className="custom-option-label" htmlFor="l4">
                        L
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-sm btn-block mb-2"
                    type="button"
                    data-toggle="toast"
                    data-target="#cart-toast"
                    data-ol-has-click-handler
                  >
                    <i className="czi-cart font-size-sm mr-1" />
                    Add to Cart
                  </button>
                  <div className="text-center">
                    <a className="nav-link-style font-size-ms" href="#quick-view" data-toggle="modal">
                      <i className="czi-eye align-middle mr-1" />
                      Quick view
                    </a>
                  </div>
                </div>
              </div>
              <hr className="d-sm-none" />
            </div>
            {/* Product*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
              <div className="card product-card">
                <span className="badge badge-danger badge-shadow">Sale</span>
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title
                  data-original-title="Add to wishlist"
                >
                  <i className="czi-heart" />
                </button>
                <a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html">
                  <img src="img/shop/catalog/13.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s T-shirts
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Cotton Polo Regular Fit</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $11.<small>50</small>
                      </span>
                      <del className="font-size-sm text-muted">
                        $13.<small>50</small>
                      </del>
                    </div>
                    <div className="star-rating">
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star" />
                      <i className="sr-star czi-star" />
                    </div>
                  </div>
                </div>
                <div className="card-body card-body-hidden">
                  <div className="text-center pb-2">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size6" id="s5" />
                      <label className="custom-option-label" htmlFor="s5">
                        S
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size6" id="m5" />
                      <label className="custom-option-label" htmlFor="m5">
                        M
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size6" id="l5" defaultChecked />
                      <label className="custom-option-label" htmlFor="l5">
                        L
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size6" id="xl5" />
                      <label className="custom-option-label" htmlFor="xl5">
                        XL
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-sm btn-block mb-2"
                    type="button"
                    data-toggle="toast"
                    data-target="#cart-toast"
                    data-ol-has-click-handler
                  >
                    <i className="czi-cart font-size-sm mr-1" />
                    Add to Cart
                  </button>
                  <div className="text-center">
                    <a className="nav-link-style font-size-ms" href="#quick-view" data-toggle="modal">
                      <i className="czi-eye align-middle mr-1" />
                      Quick view
                    </a>
                  </div>
                </div>
              </div>
              <hr className="d-sm-none" />
            </div>
            {/* Product*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
              <div className="card product-card">
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title
                  data-original-title="Add to wishlist"
                >
                  <i className="czi-heart" />
                </button>
                <a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html">
                  <img src="img/shop/catalog/14.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s Jeans
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Slim Taper Fit Jeans</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $58.<small>99</small>
                      </span>
                    </div>
                    <div className="star-rating">
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star" />
                    </div>
                  </div>
                </div>
                <div className="card-body card-body-hidden">
                  <div className="text-center pb-2">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size7" id="s6" />
                      <label className="custom-option-label" htmlFor="s6">
                        S
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size7" id="m6" />
                      <label className="custom-option-label" htmlFor="m6">
                        M
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size7" id="l6" defaultChecked />
                      <label className="custom-option-label" htmlFor="l6">
                        L
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size7" id="xl6" />
                      <label className="custom-option-label" htmlFor="xl6">
                        XL
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-sm btn-block mb-2"
                    type="button"
                    data-toggle="toast"
                    data-target="#cart-toast"
                    data-ol-has-click-handler
                  >
                    <i className="czi-cart font-size-sm mr-1" />
                    Add to Cart
                  </button>
                  <div className="text-center">
                    <a className="nav-link-style font-size-ms" href="#quick-view" data-toggle="modal">
                      <i className="czi-eye align-middle mr-1" />
                      Quick view
                    </a>
                  </div>
                </div>
              </div>
              <hr className="d-sm-none" />
            </div>
            {/* Product*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
              <div className="card product-card">
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title
                  data-original-title="Add to wishlist"
                >
                  <i className="czi-heart" />
                </button>
                <a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html">
                  <img src="img/shop/catalog/15.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s Waistcoats
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Single-breasted Trenchcoat</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $79.<small>99</small>
                      </span>
                    </div>
                    <div className="star-rating">
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star" />
                    </div>
                  </div>
                </div>
                <div className="card-body card-body-hidden">
                  <div className="text-center pb-2">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size8" id="m7" />
                      <label className="custom-option-label" htmlFor="m7">
                        M
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size8" id="l7" defaultChecked />
                      <label className="custom-option-label" htmlFor="l7">
                        L
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size8" id="xl7" />
                      <label className="custom-option-label" htmlFor="xl7">
                        XL
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-sm btn-block mb-2"
                    type="button"
                    data-toggle="toast"
                    data-target="#cart-toast"
                    data-ol-has-click-handler
                  >
                    <i className="czi-cart font-size-sm mr-1" />
                    Add to Cart
                  </button>
                  <div className="text-center">
                    <a className="nav-link-style font-size-ms" href="#quick-view" data-toggle="modal">
                      <i className="czi-eye align-middle mr-1" />
                      Quick view
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Product*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
              <div className="card product-card">
                <button
                  className="btn-wishlist btn-sm"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title
                  data-original-title="Add to wishlist"
                >
                  <i className="czi-heart" />
                </button>
                <a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html">
                  <img src="img/shop/catalog/16.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s Hoodie
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Sports Hooded Sweatshirt</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $25.<small>00</small>
                      </span>
                    </div>
                    <div className="star-rating">
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                    </div>
                  </div>
                </div>
                <div className="card-body card-body-hidden">
                  <div className="text-center pb-2">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size9" id="s8" />
                      <label className="custom-option-label" htmlFor="s8">
                        S
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size9" id="m8" defaultChecked />
                      <label className="custom-option-label" htmlFor="m8">
                        M
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size9" id="l8" />
                      <label className="custom-option-label" htmlFor="l8">
                        L
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size9" id="xl8" />
                      <label className="custom-option-label" htmlFor="xl8">
                        XL
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-sm btn-block mb-2"
                    type="button"
                    data-toggle="toast"
                    data-target="#cart-toast"
                    data-ol-has-click-handler
                  >
                    <i className="czi-cart font-size-sm mr-1" />
                    Add to Cart
                  </button>
                  <div className="text-center">
                    <a className="nav-link-style font-size-ms" href="#quick-view" data-toggle="modal">
                      <i className="czi-eye align-middle mr-1" />
                      Quick view
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-3" />
          {/* Pagination*/}
          <nav className="d-flex justify-content-between pt-2" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="czi-arrow-left mr-2" />
                  Prev
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item d-sm-none">
                <span className="page-link page-link-static">1 / 5</span>
              </li>
              <li className="page-item active d-none d-sm-block" aria-current="page">
                <span className="page-link">
                  1<span className="sr-only">(current)</span>
                </span>
              </li>
              <li className="page-item d-none d-sm-block">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item d-none d-sm-block">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item d-none d-sm-block">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item d-none d-sm-block">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  Next
                  <i className="czi-arrow-right ml-2" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    </PageLayout>
  );
};
export const getServerSideProps = async (ctx) => {
  const { query } = ctx;
  const httpRequest = new HttpRequest();
  const pageProducts = await httpRequest.get('rs/crud/products', query);
  return {
    props: {
      product: {},
      pageProducts,
    },
  };
};

export default Home;
