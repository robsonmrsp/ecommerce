import React, { useContext } from 'react';
import { ToolbarCart } from '../cart';
import Router from 'next/router';
import NextLink from 'next/link';

import { EcommerceContext } from '@/shared/context';

export const Image = ({ alt, ...props }) => <img alt={alt} {...props} />;
export const Link = ({ children, href, ...props }) => (
  <NextLink href={href}>
    <a {...props}> {children} </a>
  </NextLink>
);

// TODO criar a funcao de busca
export const SearchInput = ({ className, appendInput, placeholder, filterBy = [] }) => {
  const onSearch = (search) => {
    Router.push({
      pathname: '/products/',
      query: { description: search },
    });
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.currentTarget.value);
    }
  };

  return (
    <div className={`input-group-overlay ${className} `}>
      <div className="input-group-prepend-overlay">
        <span className="input-group-text">
          <i className="czi-search" />
        </span>
      </div>
      <input
        className={`form-control prepended-form-control ${appendInput ? 'appended-form-control' : ''}`}
        type="text"
        onKeyDown={handleKeyDown}
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
};

export const Menu = ({ cart }) => {
  console.log('');
  const { state } = useContext(EcommerceContext);
  return (
    <div
      className={`navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2 ${state.layout?.showMegaMenu}`}
    >
      <div className="container">
        <div className="navbar-collapse collapse" id="navbarCollapse" style={{}}>
          {/* Search */}
          <SearchInput className="d-lg-none my-3" placeholder="Pesquisa de Produtos" />
          {/* Departments menu  */}
          <ul className="navbar-nav mega-nav pr-lg-2 mr-lg-2">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle pl-0" href="/" data-toggle="dropdown" aria-expanded="false">
                <i className="czi-menu align-middle mt-n1 mr-2" />
                Departamentos
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
  );
};
export const Toolbar = ({ cart }) => {
  const { state, update } = useContext(EcommerceContext);

  const toggleMegaMenu = () => {
    const newValue = state.layout?.showMegaMenu === 'show' ? '' : 'show';
    update({ layout: { showMegaMenu: newValue } });
  };

  return (
    <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center name_toolbar_button">
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-expanded="true"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <button
        type="button"
        className="navbar-tool navbar-stuck-toggler btn-sm btn p-0 "
        onClick={() => {
          toggleMegaMenu();
        }}
      >
        <span className="navbar-tool-tooltip">Mostra menu</span>
        <div className="navbar-tool-icon-box">
          <i className="navbar-tool-icon czi-menu" />
        </div>
      </button>
      <button type="button" className="navbar-tool nvbar-stuck-toggler btn-sm btn p-0 " onClick={() => {}}>
        <span className="navbar-tool-tooltip">Lista de desejos</span>
        <div className="navbar-tool-icon-box">
          <i className="navbar-tool-icon czi-heart" />
        </div>
      </button>
      <button type="button" className="navbar-tool ml-1 ml-lg-0 mr-n1 mr-lg-2 btn-sm btn " onClick={() => {}}>
        <div className="navbar-tool-icon-box">
          <i className="navbar-tool-icon czi-user" />
        </div>
        <div className="navbar-tool-text ml-n3">
          <small style={{ textAlign: 'left' }}>Olá, Entre</small>Minha conta
        </div>
      </button>
      <div className="navbar-tool dropdown ml-3">
        <Link className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="/cart">
          <span className="navbar-tool-label">{cart.itemOrders.length}</span>
          <i className="navbar-tool-icon czi-cart" />
        </Link>
        <Link className="navbar-tool-text" href="/cart">
          <small>Meu carrinho</small>$1,247.00
        </Link>
        {/* Cart dropdown */}
        <ToolbarCart cart={cart} />
      </div>
    </div>
  );
};
