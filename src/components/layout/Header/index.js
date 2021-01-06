// baseado nesse:
// https://cartzilla.createx.studio/home-electronics-store.html

export const Header = () => {
  console.log('');
  return (
    // checar o scrol para adicionar a classe navbar-stuck
    <div className="navbar-sticky bg-light">
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a
            className="navbar-brand d-none d-sm-block mr-3 flex-shrink-0"
            href="index.html"
            style={{ minWidth: '7rem' }}
          >
            <img width={142} src="img/logo-dark.png" alt="Cartzilla" />
          </a>
          <a className="navbar-brand d-sm-none mr-2" href="index.html" style={{ minWidth: '4.625rem' }}>
            <img width={74} src="img/logo-icon.png" alt="Cartzilla" />
          </a>
          {/* Search */}
          <div className="input-group-overlay d-none d-lg-block mx-4">
            <div className="input-group-prepend-overlay">
              <span className="input-group-text">
                <i className="czi-search" />
              </span>
            </div>
            <input
              className="form-control prepended-form-control appended-form-control"
              type="text"
              placeholder="Search for products"
            />
            <div className="input-group-append-overlay">
              <select className="custom-select">
                <option>All categories</option>
                <option>Computers</option>
                <option>Data Storage</option>
              </select>
            </div>
          </div>
          {/* Toolbar */}
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
        </div>
      </div>
      <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
        <div className="container">
          <div className="navbar-collapse collapse" id="navbarCollapse" style={{}}>
            {/* Search */}
            <div className="input-group-overlay d-lg-none my-3">
              <div className="input-group-prepend-overlay">
                <span className="input-group-text">
                  <i className="czi-search" />
                </span>
              </div>
              <input className="form-control prepended-form-control" type="text" placeholder="Search for products" />
            </div>
            {/* Departments menu  */}
            <ul className="navbar-nav mega-nav pr-lg-2 mr-lg-2">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle pl-0" href="/" data-toggle="dropdown" aria-expanded="false">
                  <i className="czi-menu align-middle mt-n1 mr-2" />
                  Departments
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown mega-dropdown">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="/"
                      data-toggle="dropdown"
                      data-ol-has-click-handler
                    >
                      <i className="czi-laptop opacity-60 font-size-lg mt-n1 mr-2" />
                      Computers &amp; Accessories
                    </a>
                    <div className="dropdown-menu p-0 show">
                      <div className="d-flex flex-wrap flex-md-nowrap px-2">
                        <div className="mega-dropdown-column py-4 px-3">
                          <div className="widget widget-links">
                            <h6 className="font-size-base mb-3">Computers</h6>
                            <ul className="widget-list">
                              <li className="widget-list-item pb-1">
                                <a className="widget-list-link" href="/">
                                  Laptops &amp; Tablets
                                </a>
                              </li>
                              <li className="widget-list-item pb-1">
                                <a className="widget-list-link" href="/">
                                  Desktop Computers
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mega-dropdown-column py-4 px-3">
                          <div className="widget widget-links">
                            <h6 className="font-size-base mb-3">Accessories</h6>
                            <ul className="widget-list">
                              <li className="widget-list-item pb-1">
                                <a className="widget-list-link" href="/">
                                  Monitors
                                </a>
                              </li>
                              <li className="widget-list-item pb-1">
                                <a className="widget-list-link" href="/">
                                  Bags, Cases &amp; Sleeves
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mega-dropdown-column d-none d-lg-block py-4 text-center">
                          <a className="d-block mb-2" href="/">
                            <img src="img/shop/departments/07.jpg" alt="Computers & Accessories" />
                          </a>
                          <div className="font-size-sm mb-3">
                            Starting from{' '}
                            <span className="font-weight-medium">
                              $149.<small>80</small>
                            </span>
                          </div>
                          <a className="btn btn-primary btn-shadow btn-sm" href="/">
                            See offers
                            <i className="czi-arrow-right font-size-xs ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown mega-dropdown">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="/"
                      data-toggle="dropdown"
                      data-ol-has-click-handler
                    >
                      <i className="czi-server opacity-60 font-size-lg mt-n1 mr-2" />
                      HDD/SSD Data Storage
                    </a>
                    <div className="dropdown-menu p-0">
                      <div className="d-flex flex-wrap flex-md-nowrap px-2">
                        <div className="mega-dropdown-column py-4 px-3">
                          <div className="widget widget-links">
                            <h6 className="font-size-base mb-3">Data Storage</h6>
                            <ul className="widget-list">
                              <li className="widget-list-item pb-1">
                                <a className="widget-list-link" href="/">
                                  External Hard Drives
                                </a>
                              </li>
                              <li className="widget-list-item pb-1">
                                <a className="widget-list-link" href="/">
                                  External Solid State Drives
                                </a>
                              </li>
                              <li className="widget-list-item pb-1">
                                <a className="widget-list-link" href="/">
                                  Floppy &amp; Tape Drives
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mega-dropdown-column d-none d-lg-block py-4 text-center">
                          <a className="d-block mb-2" href="/">
                            <img src="img/shop/departments/15.jpg" alt="HDD/SSD Data Storage" />
                          </a>
                          <div className="font-size-sm mb-3">
                            Starting from{' '}
                            <span className="font-weight-medium">
                              $21.<small>60</small>
                            </span>
                          </div>
                          <a className="btn btn-primary btn-shadow btn-sm" href="/">
                            See offers
                            <i className="czi-arrow-right font-size-xs ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            {/* Primary menu */}
            <ul className="navbar-nav">
              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown" aria-expanded="false">
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown position-static mb-0">
                    <a className="dropdown-item py-2 border-bottom" href="home-fashion-store-v1.html">
                      <span className="d-block text-heading">Fashion Store v.1</span>
                      <small className="d-block text-muted">Classic shop layout</small>
                    </a>
                    <div className="dropdown-menu h-100 animation-0 mt-0 p-3">
                      <a className="d-block" href="home-fashion-store-v1.html" style={{ width: 250 }}>
                        <img src="img/home/preview/th01.jpg" alt="Fashion Store v.1" />
                      </a>
                    </div>
                  </li>
                  <li className="dropdown position-static mb-0">
                    <a className="dropdown-item py-2" href="home-single-store.html">
                      <span className="d-block text-heading">Single Product Store</span>
                      <small className="d-block text-muted">Single product / mono brand</small>
                    </a>
                    <div className="dropdown-menu h-100 animation-0 mt-0 p-3">
                      <a className="d-block" href="home-single-store.html" style={{ width: 250 }}>
                        <img src="img/home/preview/th05.jpg" alt="Single Product / Brand Store" />
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="/"
                      data-toggle="dropdown"
                      data-ol-has-click-handler
                    >
                      Navbar Variants
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="navbar-1-level-light.html">
                          1 Level Light
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="home-grocery-store.html">
                          Side Menu (Grocery)
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="home-single-store.html">
                          Transparent
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="about.html">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="contacts.html">
                      Contacts
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="/"
                      data-toggle="dropdown"
                      data-ol-has-click-handler
                    >
                      404 Not Found
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="404-simple.html">
                          404 - Simple Text
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="404-illustration.html">
                          404 - Illustration
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="/"
                      data-toggle="dropdown"
                      data-ol-has-click-handler
                    >
                      Blog List Layouts
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="blog-list-sidebar.html">
                          List with Sidebar
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-list.html">
                          List no Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="/"
                      data-toggle="dropdown"
                      data-ol-has-click-handler
                    >
                      Blog Grid Layouts
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="blog-grid-sidebar.html">
                          Grid with Sidebar
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-grid.html">
                          Grid no Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="/"
                      data-toggle="dropdown"
                      data-ol-has-click-handler
                    >
                      Single Post Layouts
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="blog-single-sidebar.html">
                          Article with Sidebar
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-single.html">
                          Article no Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
