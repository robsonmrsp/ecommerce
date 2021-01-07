import React from 'react';

export const Image = ({ alt, ...props }) => <img alt={alt} {...props} />;
export const Link = ({ children, ...props }) => <a {...props}> {children} </a>;

// TODO criar a funcao de busca
export const SearchInput = ({ className, appendInput, placeholder, filterBy = [] }) => (
  <div className={`input-group-overlay ${className} `}>
    <div className="input-group-prepend-overlay">
      <span className="input-group-text">
        <i className="czi-search" />
      </span>
    </div>
    <input
      className={`form-control prepended-form-control ${appendInput ? 'appended-form-control' : ''}`}
      type="text"
      placeholder={placeholder}
    />
    {filterBy.length > 0 && (
      <div className="input-group-append-overlay">
        <select className="custom-select">
          {filterBy.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
    )}
  </div>
);

export const Toolbar = ({ ...props }) => (
  <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
    <button
      className="navbar-toggler collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-expanded="true"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <a className="navbar-tool navbar-stuck-toggler" href="/" data-ol-has-click-handler>
      <span className="navbar-tool-tooltip">Expand menu</span>
      <div className="navbar-tool-icon-box">
        <i className="navbar-tool-icon czi-menu" />
      </div>
    </a>
    <a className="navbar-tool ml-1 ml-lg-0 mr-n1 mr-lg-2" href="#signin-modal" data-toggle="modal">
      <div className="navbar-tool-icon-box">
        <i className="navbar-tool-icon czi-user" />
      </div>
      <div className="navbar-tool-text ml-n3">
        <small>Hello, Sign in</small>My Account
      </div>
    </a>
    <div className="navbar-tool dropdown ml-3">
      <a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="shop-cart.html">
        <span className="navbar-tool-label">4</span>
        <i className="navbar-tool-icon czi-cart" />
      </a>
      <a className="navbar-tool-text" href="shop-cart.html">
        <small>My Cart</small>$1,247.00
      </a>
      {/* Cart dropdown */}
      <div className="dropdown-menu dropdown-menu-right" style={{ width: '20rem' }}>
        <div className="widget widget-cart px-3 pt-2 pb-3">
          <div
            style={{ height: '15rem' }}
            data-simplebar="init"
            data-simplebar-auto-hide="false"
            data-ol-has-click-handler
          >
            <div className="simplebar-wrapper" style={{ margin: '0px -16px 0px 0px' }}>
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer" />
              </div>
              <div className="simplebar-mask">
                <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                  <div className="simplebar-content-wrapper" style={{ height: 'auto', overflow: 'hidden' }}>
                    <div className="simplebar-content" style={{ padding: '0px 16px 0px 0px' }}>
                      <div className="widget-cart-item pb-2 border-bottom">
                        <button className="close text-danger" type="button" aria-label="Remove">
                          <span aria-hidden="true">×</span>
                        </button>
                        <div className="media align-items-center">
                          <a className="d-block mr-2" href="shop-single-v2.html">
                            <img width={64} src="img/shop/cart/widget/05.jpg" alt="Product" />
                          </a>
                          <div className="media-body">
                            <h6 className="widget-product-title">
                              <a href="shop-single-v2.html">Bluetooth Headphones</a>
                            </h6>
                            <div className="widget-product-meta">
                              <span className="text-accent mr-2">
                                $259.<small>00</small>
                              </span>
                              <span className="text-muted">x 1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-cart-item py-2 border-bottom">
                        <button className="close text-danger" type="button" aria-label="Remove">
                          <span aria-hidden="true">×</span>
                        </button>
                        <div className="media align-items-center">
                          <a className="d-block mr-2" href="shop-single-v2.html">
                            <img width={64} src="img/shop/cart/widget/06.jpg" alt="Product" />
                          </a>
                          <div className="media-body">
                            <h6 className="widget-product-title">
                              <a href="shop-single-v2.html">Cloud Security Camera</a>
                            </h6>
                            <div className="widget-product-meta">
                              <span className="text-accent mr-2">
                                $122.<small>00</small>
                              </span>
                              <span className="text-muted">x 1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-cart-item py-2 border-bottom">
                        <button className="close text-danger" type="button" aria-label="Remove">
                          <span aria-hidden="true">×</span>
                        </button>
                        <div className="media align-items-center">
                          <a className="d-block mr-2" href="shop-single-v2.html">
                            <img width={64} src="img/shop/cart/widget/07.jpg" alt="Product" />
                          </a>
                          <div className="media-body">
                            <h6 className="widget-product-title">
                              <a href="shop-single-v2.html">Android Smartphone S10</a>
                            </h6>
                            <div className="widget-product-meta">
                              <span className="text-accent mr-2">
                                $799.<small>00</small>
                              </span>
                              <span className="text-muted">x 1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-cart-item py-2 border-bottom">
                        <button className="close text-danger" type="button" aria-label="Remove">
                          <span aria-hidden="true">×</span>
                        </button>
                        <div className="media align-items-center">
                          <a className="d-block mr-2" href="shop-single-v2.html">
                            <img width={64} src="img/shop/cart/widget/08.jpg" alt="Product" />
                          </a>
                          <div className="media-body">
                            <h6 className="widget-product-title">
                              <a href="shop-single-v2.html">Android Smart TV Box</a>
                            </h6>
                            <div className="widget-product-meta">
                              <span className="text-accent mr-2">
                                $67.<small>00</small>
                              </span>
                              <span className="text-muted">x 1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="simplebar-placeholder" style={{ width: 0, height: 0 }} />
            </div>
            <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
              <div className="simplebar-scrollbar simplebar-visible" style={{ width: 0, display: 'none' }} />
            </div>
            <div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}>
              <div
                className="simplebar-scrollbar simplebar-visible"
                style={{ height: 0, display: 'none', transform: 'translate3d(0px, 0px, 0px)' }}
              />
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
            <div className="font-size-sm mr-2 py-2">
              <span className="text-muted">Subtotal:</span>
              <span className="text-accent font-size-base ml-1">
                $1,247.<small>00</small>
              </span>
            </div>
            <a className="btn btn-outline-secondary btn-sm" href="shop-cart.html">
              Expand cart
              <i className="czi-arrow-right ml-1 mr-n1" />
            </a>
          </div>
          <a className="btn btn-primary btn-sm btn-block" href="checkout-details.html">
            <i className="czi-card mr-2 font-size-base align-middle" />
            Checkout
          </a>
        </div>
      </div>
    </div>
  </div>
);
