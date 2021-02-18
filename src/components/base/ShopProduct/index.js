import React from 'react';
import NextLink from 'next/link';

export const Image = ({ alt, ...props }) => <img alt={alt} {...props} />;

export const ShopProduct = () => {
  console.log('ShopProduct');
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 px-2">
      <div className="card product-card">
        <div className="product-card-actions d-flex align-items-center">
          <a className="btn-action nav-link-style mr-2" href="#">
            <i className="czi-compare mr-1" />
            Compare
          </a>
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
        </div>
        <a className="card-img-top d-block overflow-hidden" href="shop-single-v2.html">
          <img src="img/shop/catalog/65.jpg" alt="Product" />
        </a>
        <div className="card-body py-2">
          <a className="product-meta d-block font-size-xs pb-1" href="#">
            Computers
          </a>
          <h3 className="product-title font-size-sm">
            <a href="shop-single-v2.html">Convertible 2-in-1 HD Laptop</a>
          </h3>
          <div className="d-flex justify-content-between">
            <div className="product-price">
              <span className="text-accent">
                $412.<small>00</small>
              </span>
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
            <a className="nav-link-style font-size-ms" href="#quick-view-electro" data-toggle="modal">
              <i className="czi-eye align-middle mr-1" />
              Quick view
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
