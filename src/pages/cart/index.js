import PageLayout from '@/components/layout/PageLayout';

const Cart = () => {
  console.log('cart');
  return (
    <PageLayout>
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          {/* List of items */}
          <section className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-2 pb-sm-5 mt-1">
              <h2 className="h6 text-light mb-0">Products</h2>
              <a className="btn btn-outline-primary btn-sm pl-2" href="shop-grid-ls.html">
                <i className="czi-arrow-left mr-2" />
                Continue shopping
              </a>
            </div>
            {/* Item */}
            <div className="d-sm-flex justify-content-between align-items-center my-4 pb-3 border-bottom">
              <div className="media media-ie-fix d-block d-sm-flex align-items-center text-center text-sm-left">
                <a className="d-inline-block mx-auto mr-sm-4" href="shop-single-v1.html" style={{ width: '10rem' }}>
                  <img src="img/shop/cart/01.jpg" alt="Product" />
                </a>
                <div className="media-body pt-2">
                  <h3 className="product-title font-size-base mb-2">
                    <a href="shop-single-v1.html">Women Colorblock Sneakers</a>
                  </h3>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Size:</span>8.5
                  </div>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Color:</span>White &amp; Blue
                  </div>
                  <div className="font-size-lg text-accent pt-2">
                    $154.<small>00</small>
                  </div>
                </div>
              </div>
              <div
                className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left"
                style={{ maxWidth: '9rem' }}
              >
                <div className="form-group mb-0">
                  <label className="font-weight-medium" htmlFor="quantity1">
                    Quantity
                  </label>
                  <input className="form-control" type="number" id="quantity1" defaultValue={1} />
                </div>
                <button className="btn btn-link px-0 text-danger" type="button">
                  <i className="czi-close-circle mr-2" />
                  <span className="font-size-sm">Remove</span>
                </button>
              </div>
            </div>
            {/* Item*/}
            <div className="d-sm-flex justify-content-between align-items-center my-4 pb-3 border-bottom">
              <div className="media media-ie-fix d-block d-sm-flex align-items-center text-center text-sm-left">
                <a className="d-inline-block mx-auto mr-sm-4" href="shop-single-v1.html" style={{ width: '10rem' }}>
                  <img src="img/shop/cart/02.jpg" alt="Product" />
                </a>
                <div className="media-body pt-2">
                  <h3 className="product-title font-size-base mb-2">
                    <a href="shop-single-v1.html">TH Jeans City Backpack</a>
                  </h3>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Brand:</span>Tommy Hilfiger
                  </div>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Color:</span>Khaki
                  </div>
                  <div className="font-size-lg text-accent pt-2">
                    $79.<small>50</small>
                  </div>
                </div>
              </div>
              <div
                className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left"
                style={{ maxWidth: '9rem' }}
              >
                <div className="form-group mb-0">
                  <label className="font-weight-medium" htmlFor="quantity2">
                    Quantity
                  </label>
                  <input className="form-control" type="number" id="quantity2" defaultValue={1} />
                </div>
                <button className="btn btn-link px-0 text-danger" type="button">
                  <i className="czi-close-circle mr-2" />
                  <span className="font-size-sm">Remove</span>
                </button>
              </div>
            </div>
            {/* Item */}
            <div className="d-sm-flex justify-content-between align-items-center my-4 pb-3 border-bottom">
              <div className="media media-ie-fix d-block d-sm-flex align-items-center text-center text-sm-left">
                <a className="d-inline-block mx-auto mr-sm-4" href="shop-single-v1.html" style={{ width: '10rem' }}>
                  <img src="img/shop/cart/03.jpg" alt="Product" />
                </a>
                <div className="media-body pt-2">
                  <h3 className="product-title font-size-base mb-2">
                    <a href="shop-single-v1.html">3-Color Sun Stash Hat</a>
                  </h3>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Brand:</span>The North Face
                  </div>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Color:</span>Pink / Beige / Dark blue
                  </div>
                  <div className="font-size-lg text-accent pt-2">
                    $22.<small>50</small>
                  </div>
                </div>
              </div>
              <div
                className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left"
                style={{ maxWidth: '9rem' }}
              >
                <div className="form-group mb-0">
                  <label className="font-weight-medium" htmlFor="quantity3">
                    Quantity
                  </label>
                  <input className="form-control" type="number" id="quantity3" defaultValue={1} />
                </div>
                <button className="btn btn-link px-0 text-danger" type="button">
                  <i className="czi-close-circle mr-2" />
                  <span className="font-size-sm">Remove</span>
                </button>
              </div>
            </div>
            {/* Item */}
            <div className="d-sm-flex justify-content-between align-items-center my-4 pb-3 border-bottom">
              <div className="media media-ie-fix d-block d-sm-flex align-items-center text-center text-sm-left">
                <a className="d-inline-block mx-auto mr-sm-4" href="shop-single-v1.html" style={{ width: '10rem' }}>
                  <img src="img/shop/cart/04.jpg" alt="Product" />
                </a>
                <div className="media-body pt-2">
                  <h3 className="product-title font-size-base mb-2">
                    <a href="shop-single-v1.html">Cotton Polo Regular Fit</a>
                  </h3>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Size:</span>42
                  </div>
                  <div className="font-size-sm">
                    <span className="text-muted mr-2">Color:</span>Light blue
                  </div>
                  <div className="font-size-lg text-accent pt-2">
                    $9.<small>00</small>
                  </div>
                </div>
              </div>
              <div
                className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left"
                style={{ maxWidth: '9rem' }}
              >
                <div className="form-group mb-0">
                  <label className="font-weight-medium" htmlFor="quantity4">
                    Quantity
                  </label>
                  <input className="form-control" type="number" id="quantity4" defaultValue={1} />
                </div>
                <button className="btn btn-link px-0 text-danger" type="button">
                  <i className="czi-close-circle mr-2" />
                  <span className="font-size-sm">Remove</span>
                </button>
              </div>
            </div>
            <button className="btn btn-outline-accent btn-block" type="button">
              <i className="czi-loading font-size-base mr-2" />
              Update cart
            </button>
          </section>
          {/* Sidebar */}
          <aside className="col-lg-4 pt-4 pt-lg-0">
            <div className="cz-sidebar-static rounded-lg box-shadow-lg ml-lg-auto">
              <div className="text-center mb-4 pb-3 border-bottom">
                <h2 className="h6 mb-3 pb-1">Subtotal</h2>
                <h3 className="font-weight-normal">
                  $265.<small>00</small>
                </h3>
              </div>
              <div className="form-group mb-4">
                <label className="mb-3" htmlFor="order-comments">
                  <span className="badge badge-info font-size-xs mr-2">Note</span>
                  <span className="font-weight-medium">Additional comments</span>
                </label>
                <textarea className="form-control" rows={6} id="order-comments" defaultValue={''} />
              </div>
              <div className="accordion" id="order-options">
                <div className="card">
                  <div className="card-header">
                    <h3 className="accordion-heading">
                      <a
                        href="#promo-code"
                        role="button"
                        data-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="promo-code"
                      >
                        Apply promo code
                        <span className="accordion-indicator" />
                      </a>
                    </h3>
                  </div>
                  <div className="collapse show" id="promo-code" data-parent="#order-options">
                    <form className="card-body needs-validation" method="post" noValidate>
                      <div className="form-group">
                        <input className="form-control" type="text" placeholder="Promo code" required />
                        <div className="invalid-feedback">Please provide promo code.</div>
                      </div>
                      <button className="btn btn-outline-primary btn-block" type="submit">
                        Apply promo code
                      </button>
                    </form>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3 className="accordion-heading">
                      <a
                        className="collapsed"
                        href="#shipping-estimates"
                        role="button"
                        data-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="shipping-estimates"
                      >
                        Shipping estimates
                        <span className="accordion-indicator" />
                      </a>
                    </h3>
                  </div>
                  <div className="collapse" id="shipping-estimates" data-parent="#order-options">
                    <div className="card-body">
                      <form className="needs-validation" noValidate>
                        <div className="form-group">
                          <select className="form-control custom-select" required>
                            <option value>Choose your country</option>
                            <option value="Australia">Australia</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Canada">Canada</option>
                            <option value="Finland">Finland</option>
                            <option value="Mexico">Mexico</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="United States">United States</option>
                          </select>
                          <div className="invalid-feedback">Please choose your country!</div>
                        </div>
                        <div className="form-group">
                          <select className="form-control custom-select" required>
                            <option value>Choose your city</option>
                            <option value="Bern">Bern</option>
                            <option value="Brussels">Brussels</option>
                            <option value="Canberra">Canberra</option>
                            <option value="Helsinki">Helsinki</option>
                            <option value="Mexico City">Mexico City</option>
                            <option value="Ottawa">Ottawa</option>
                            <option value="Washington D.C.">Washington D.C.</option>
                            <option value="Wellington">Wellington</option>
                          </select>
                          <div className="invalid-feedback">Please choose your city!</div>
                        </div>
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="ZIP / Postal code" required />
                          <div className="invalid-feedback">Please provide a valid zip!</div>
                        </div>
                        <button className="btn btn-outline-primary btn-block" type="submit">
                          Calculate shipping
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn btn-primary btn-shadow btn-block mt-4" href="checkout-details.html">
                <i className="czi-card font-size-lg mr-2" />
                Proceed to Checkout
              </a>
            </div>
          </aside>
        </div>
      </div>
    </PageLayout>
  );
};

export default Cart;

