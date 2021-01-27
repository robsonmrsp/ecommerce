import React from 'react';

export const TolbarCartItem = ({ item }) => (
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
          <a href="shop-single-v2.html">{item.product.name}</a>
        </h6>
        <div className="widget-product-meta">
          <span className="text-accent mr-2">
            {`R$${item.product.salePrice}`}.<small>00</small>
          </span>
          <span className="text-muted">x {item.amount}</span>
        </div>
      </div>
    </div>
  </div>
);

export const ToolbarCart = ({ cart }) => {
  const { itemOrders } = cart;
  return (
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
                    {itemOrders.map((item) => (
                      <TolbarCartItem key={item.product.id} item={item} />
                    ))}
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
  );
};
