import PageLayout from '@/components/layout/PageLayout';
import { EcommerceContext } from '@/shared/context';
import { useContext } from 'react';
import CartPageItem from './CartPageItem';

const Cart = () => {
  const { state } = useContext(EcommerceContext);

  const { itemOrders = [] } = state.cart;
  const emptyCard = !itemOrders?.length;
  return (
    <PageLayout>
      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <a className="text-nowrap" href="index.html">
                    <i className="czi-home" />
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <a href="shop-grid-ls.html">Shop</a>
                </li>
                <li className="breadcrumb-item text-nowrap active" aria-current="page">
                  Cart
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
            <h1 className="h3 text-light mb-0">Your cart</h1>
          </div>
        </div>
      </div>

      {emptyCard ? (
        <div className="card border-0 box-shadow">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text font-size-sm text-muted">
              Voce ainda não tem nenhum produto no seu carrinho
            </p>
            <a href="#" className="btn btn-sm btn-primary">
              Inicie suas compras
            </a>
          </div>
        </div>
      ) : (
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
              {(itemOrders || []).map((item) => (
                <CartPageItem itemOrder={item} />
              ))}
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
                  <textarea className="form-control" rows={6} id="order-comments" defaultValue="" />
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
      )}
    </PageLayout>
  );
};

export default Cart;
