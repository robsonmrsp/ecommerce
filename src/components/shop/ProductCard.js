const ProductCard = ({ product }) => {
  console.log(product);
  return (
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
          <img src="img/shop/catalog/01.jpg" alt="Product" />
        </a>
        <div className="card-body py-2">
          <a className="product-meta d-block font-size-xs pb-1" href="#">
            Sneakers &amp; Keds
          </a>
          <h3 className="product-title font-size-sm">
            <a href="shop-single-v1.html">Women Colorblock Sneakers</a>
          </h3>
          <div className="d-flex justify-content-between">
            <div className="product-price">
              <span className="text-accent">
                $154.<small>00</small>
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
              <input className="custom-control-input" type="radio" name="size1" id="s-75" />
              <label className="custom-option-label" htmlFor="s-75">
                7.5
              </label>
            </div>
            <div className="custom-control custom-option custom-control-inline mb-2">
              <input className="custom-control-input" type="radio" name="size1" id="s-80" defaultChecked />
              <label className="custom-option-label" htmlFor="s-80">
                8
              </label>
            </div>
            <div className="custom-control custom-option custom-control-inline mb-2">
              <input className="custom-control-input" type="radio" name="size1" id="s-85" />
              <label className="custom-option-label" htmlFor="s-85">
                8.5
              </label>
            </div>
            <div className="custom-control custom-option custom-control-inline mb-2">
              <input className="custom-control-input" type="radio" name="size1" id="s-90" />
              <label className="custom-option-label" htmlFor="s-90">
                9
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
  );
};
export default ProductCard;
