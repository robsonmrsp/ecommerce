import React from 'react';
import NextLink from 'next/link';
import { fixImageUrl } from '@/shared/data';
import { BASE_URL } from '@/shared/config';

// export const Image = ({ alt, ...props }) => <img alt={alt} {...props} />;

export const ShopProduct = ({ product }) => {
  const {
    id,
    slug,
    name,
    description,
    salePrice,
    attachments: [attachment],
  } = product;
  console.log('ShopProduct');
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
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
        <NextLink href={`/product/${slug}/${id}`}>
          <a className="card-img-top d-block overflow-hidden">
            <img src={`${BASE_URL}${fixImageUrl(attachment.path)}`} alt={attachment.name} />
          </a>
        </NextLink>
        <div className="card-body py-2">
          <a className="product-meta d-block font-size-xs pb-1" href="#">
            {name}
          </a>
          <h3 className="product-title font-size-sm">
            <a href="shop-single-v2.html">{description}</a>
          </h3>
          <div className="d-flex justify-content-between">
            <div className="product-price">
              <span className="text-accent">
                R${salePrice}
                <small>00</small>
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
            <a className="nav-link-style font-size-ms" href="#quick-view-electro" data-toggle="modal">
              <i className="czi-eye align-middle mr-1" />
              Quick view
            </a>
          </div>
        </div>
      </div>
      <hr className="d-sm-none" />
    </div>
  );
};
