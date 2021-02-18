const TrendingProducts = () => {
  console.log('tending products');
  return (
    <section className="container pt-5">
      {/* Heading*/}
      <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
        <h2 className="h3 mb-0 pt-3 mr-2">Trending products</h2>
        <div className="pt-3">
          <a className="btn btn-outline-accent btn-sm" href="shop-grid-ls.html">
            More products
            <i className="czi-arrow-right ml-1 mr-n1" />
          </a>
        </div>
      </div>
      {/* Grid*/}
      <div className="row pt-2 mx-n2">
        {/* Product*/}
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
            <a className="card-img-top d-block overflow-hidden" href="shop-single-v2.html">
              <img src="img/shop/catalog/58.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Headphones
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v2.html">Wireless Bluetooth Headphones</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $198.<small>00</small>
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
        {/* Product*/}
        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <span className="badge badge-danger badge-shadow">Sale</span>
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
              <img src="img/shop/catalog/59.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Computers
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v2.html">AirPort Extreme Base Station</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $98.<small>50</small>
                  </span>
                  <del className="font-size-sm text-muted">
                    $149.<small>99</small>
                  </del>
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
        {/* Product*/}
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
            <a className="card-img-top d-block overflow-hidden" href="shop-single-v2.html">
              <img src="img/shop/catalog/60.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                TV, Video &amp; Audio
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v2.html">Smart TV LED 49’’ Ultra HD</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-muted font-size-sm">Out of stock</span>
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <a className="btn btn-secondary btn-sm btn-block mb-2" href="shop-single-v2.html">
                View details
              </a>
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
        {/* Product*/}
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
            <a className="card-img-top d-block overflow-hidden" href="shop-single-v2.html">
              <img src="img/shop/catalog/61.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Smart Home
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v2.html">Smart Speaker with Voice Control</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $49.<small>99</small>
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
        {/* Product*/}
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
            <a className="card-img-top d-block overflow-hidden" href="shop-single-v2.html">
              <img src="img/shop/catalog/62.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Wearable Electronics
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v2.html">Fitness GPS Smart Watch</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $317.<small>40</small>
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
        {/* Product*/}
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
            <a className="card-img-top d-block overflow-hidden" href="shop-single-v2.html">
              <img src="img/shop/catalog/63.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Smartphones
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v2.html">Popular Smartphone 128GB</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $965.<small>00</small>
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
        {/* Product*/}
        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <span className="badge badge-info badge-shadow">New</span>
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
              <img src="img/shop/catalog/64.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Wearable Electronics
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v2.html">Smart Watch Series 5, Aluminium</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $349.<small>99</small>
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
      </div>
    </section>
  );
};

export default TrendingProducts;
