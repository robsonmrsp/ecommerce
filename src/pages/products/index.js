import React, { useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import HttpRequest from '@/shared/http/HttpRequest';

const Home = ({ pageProducts }) => {
  useEffect(() => {
    console.log(pageProducts);
  }, []);

  return (
    <PageLayout>
      <>
        <div className="bg-dark pt-4 pb-5">
          <div className="container pt-2 pb-3 pt-lg-3 pb-lg-4">
            <div className="d-lg-flex justify-content-between pb-3">
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
                      <Link href="/shop">Shop</Link>
                    </li>
                    <li className="breadcrumb-item text-nowrap active" aria-current="page">
                      Grid filters on top
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
                <h1 className="h3 text-light mb-0">Shop grid filters on top</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-5 mb-2 mb-md-4">
          {/* Toolbar*/}
          <div className="bg-light box-shadow-lg rounded-lg p-4 mt-n5 mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="dropdown mr-2">
                <a className="btn btn-outline-secondary dropdown-toggle" href="#shop-filters" data-toggle="collapse">
                  <i className="czi-filter mr-2" />
                  Filters
                </a>
              </div>
              <div className="d-flex">
                <a className="nav-link-style mr-3" href="#">
                  <i className="czi-arrow-left" />
                </a>
                <span className="font-size-md">1 / 5</span>
                <a className="nav-link-style ml-3" href="#">
                  <i className="czi-arrow-right" />
                </a>
              </div>
              <div className="d-none d-sm-flex">
                <a className="btn btn-icon nav-link-style bg-primary text-light disabled opacity-100 mr-2" href="#">
                  <i className="czi-view-grid" />
                </a>
                <a className="btn btn-icon nav-link-style" href="shop-list-ft.html">
                  <i className="czi-view-list" />
                </a>
              </div>
            </div>
            {/* Toolbar with expandable filters*/}
            <div className="collapse" id="shop-filters">
              <div className="row pt-4">
                <div className="col-lg-4 col-sm-6">
                  {/* Categories*/}
                  <div className="card mb-grid-gutter">
                    <div className="card-body px-4">
                      <div className="widget widget-categories">
                        <h3 className="widget-title">Categories</h3>
                        <div className="accordion mt-n1" id="shop-categories">
                          {/* Shoes*/}
                          <div className="card">
                            <div className="card-header">
                              <h3 className="accordion-heading">
                                <a
                                  className="collapsed"
                                  href="#shoes"
                                  role="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="shoes"
                                >
                                  Shoes
                                  <span className="accordion-indicator" />
                                </a>
                              </h3>
                            </div>
                            <div className="collapse" id="shoes" data-parent="#shop-categories">
                              <div className="card-body">
                                <div className="widget widget-links cz-filter">
                                  <div className="input-group-overlay input-group-sm mb-2">
                                    <input
                                      className="cz-filter-search form-control form-control-sm appended-form-control"
                                      type="text"
                                      placeholder="Search"
                                    />
                                    <div className="input-group-append-overlay">
                                      <span className="input-group-text">
                                        <i className="czi-search" />
                                      </span>
                                    </div>
                                  </div>
                                  <ul
                                    className="widget-list cz-filter-list pt-1"
                                    style={{ height: '12rem' }}
                                    data-simplebar="init"
                                    data-simplebar-auto-hide="false"
                                    data-ol-has-click-handler
                                  >
                                    <div className="simplebar-wrapper" style={{ margin: '-4px -16px 0px 0px' }}>
                                      <div className="simplebar-height-auto-observer-wrapper">
                                        <div className="simplebar-height-auto-observer" />
                                      </div>
                                      <div className="simplebar-mask">
                                        <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                                          <div
                                            className="simplebar-content-wrapper"
                                            style={{ height: 'auto', overflow: 'hidden' }}
                                          >
                                            <div className="simplebar-content" style={{ padding: '4px 16px 0px 0px' }}>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">View all</span>
                                                  <span className="font-size-xs text-muted ml-3">1,953</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Pumps &amp; High Heels</span>
                                                  <span className="font-size-xs text-muted ml-3">247</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Ballerinas &amp; Flats</span>
                                                  <span className="font-size-xs text-muted ml-3">156</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Sandals</span>
                                                  <span className="font-size-xs text-muted ml-3">310</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Sneakers</span>
                                                  <span className="font-size-xs text-muted ml-3">402</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Boots</span>
                                                  <span className="font-size-xs text-muted ml-3">393</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Ankle Boots</span>
                                                  <span className="font-size-xs text-muted ml-3">50</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Loafers</span>
                                                  <span className="font-size-xs text-muted ml-3">93</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Slip-on</span>
                                                  <span className="font-size-xs text-muted ml-3">122</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Flip Flops</span>
                                                  <span className="font-size-xs text-muted ml-3">116</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Clogs &amp; Mules</span>
                                                  <span className="font-size-xs text-muted ml-3">24</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Athletic Shoes</span>
                                                  <span className="font-size-xs text-muted ml-3">31</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Oxfords</span>
                                                  <span className="font-size-xs text-muted ml-3">9</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Smart Shoes</span>
                                                  <span className="font-size-xs text-muted ml-3">18</span>
                                                </a>
                                              </li>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="simplebar-placeholder" style={{ width: 0, height: 0 }} />
                                    </div>
                                    <div
                                      className="simplebar-track simplebar-horizontal"
                                      style={{ visibility: 'hidden' }}
                                    >
                                      <div
                                        className="simplebar-scrollbar simplebar-visible"
                                        style={{ width: 0, display: 'none' }}
                                      />
                                    </div>
                                    <div
                                      className="simplebar-track simplebar-vertical"
                                      style={{ visibility: 'hidden' }}
                                    >
                                      <div
                                        className="simplebar-scrollbar simplebar-visible"
                                        style={{ height: 0, display: 'none' }}
                                      />
                                    </div>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Clothing*/}
                          <div className="card">
                            <div className="card-header">
                              <h3 className="accordion-heading">
                                <a
                                  href="#clothing"
                                  role="button"
                                  data-toggle="collapse"
                                  aria-expanded="true"
                                  aria-controls="clothing"
                                >
                                  Clothing
                                  <span className="accordion-indicator" />
                                </a>
                              </h3>
                            </div>
                            <div className="collapse show" id="clothing" data-parent="#shop-categories">
                              <div className="card-body">
                                <div className="widget widget-links cz-filter">
                                  <div className="input-group-overlay input-group-sm mb-2">
                                    <input
                                      className="cz-filter-search form-control form-control-sm appended-form-control"
                                      type="text"
                                      placeholder="Search"
                                    />
                                    <div className="input-group-append-overlay">
                                      <span className="input-group-text">
                                        <i className="czi-search" />
                                      </span>
                                    </div>
                                  </div>
                                  <ul
                                    className="widget-list cz-filter-list pt-1"
                                    style={{ height: '12rem' }}
                                    data-simplebar="init"
                                    data-simplebar-auto-hide="false"
                                    data-ol-has-click-handler
                                  >
                                    <div className="simplebar-wrapper" style={{ margin: '-4px -16px 0px 0px' }}>
                                      <div className="simplebar-height-auto-observer-wrapper">
                                        <div className="simplebar-height-auto-observer" />
                                      </div>
                                      <div className="simplebar-mask">
                                        <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                                          <div
                                            className="simplebar-content-wrapper"
                                            style={{ height: 'auto', overflow: 'hidden' }}
                                          >
                                            <div className="simplebar-content" style={{ padding: '4px 16px 0px 0px' }}>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">View all</span>
                                                  <span className="font-size-xs text-muted ml-3">2,548</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Blazers &amp; Suits</span>
                                                  <span className="font-size-xs text-muted ml-3">235</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Blouses</span>
                                                  <span className="font-size-xs text-muted ml-3">410</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Cardigans &amp; Jumpers</span>
                                                  <span className="font-size-xs text-muted ml-3">107</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Dresses</span>
                                                  <span className="font-size-xs text-muted ml-3">93</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Hoodie &amp; Sweatshirts</span>
                                                  <span className="font-size-xs text-muted ml-3">122</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Jackets &amp; Coats</span>
                                                  <span className="font-size-xs text-muted ml-3">116</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Jeans</span>
                                                  <span className="font-size-xs text-muted ml-3">215</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Lingerie</span>
                                                  <span className="font-size-xs text-muted ml-3">150</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Maternity Wear</span>
                                                  <span className="font-size-xs text-muted ml-3">8</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Nightwear</span>
                                                  <span className="font-size-xs text-muted ml-3">26</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Shirts</span>
                                                  <span className="font-size-xs text-muted ml-3">164</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Shorts</span>
                                                  <span className="font-size-xs text-muted ml-3">147</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Socks &amp; Tights</span>
                                                  <span className="font-size-xs text-muted ml-3">139</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Sportswear</span>
                                                  <span className="font-size-xs text-muted ml-3">65</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Swimwear</span>
                                                  <span className="font-size-xs text-muted ml-3">18</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">T-shirts &amp; Vests</span>
                                                  <span className="font-size-xs text-muted ml-3">209</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Tops</span>
                                                  <span className="font-size-xs text-muted ml-3">132</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Trousers</span>
                                                  <span className="font-size-xs text-muted ml-3">105</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Underwear</span>
                                                  <span className="font-size-xs text-muted ml-3">87</span>
                                                </a>
                                              </li>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="simplebar-placeholder" style={{ width: 0, height: 0 }} />
                                    </div>
                                    <div
                                      className="simplebar-track simplebar-horizontal"
                                      style={{ visibility: 'hidden' }}
                                    >
                                      <div
                                        className="simplebar-scrollbar simplebar-visible"
                                        style={{ width: 0, display: 'none' }}
                                      />
                                    </div>
                                    <div
                                      className="simplebar-track simplebar-vertical"
                                      style={{ visibility: 'hidden' }}
                                    >
                                      <div
                                        className="simplebar-scrollbar simplebar-visible"
                                        style={{ height: 0, display: 'none' }}
                                      />
                                    </div>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Bags*/}
                          <div className="card">
                            <div className="card-header">
                              <h3 className="accordion-heading">
                                <a
                                  className="collapsed"
                                  href="#bags"
                                  role="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="bags"
                                >
                                  Bags
                                  <span className="accordion-indicator" />
                                </a>
                              </h3>
                            </div>
                            <div className="collapse" id="bags" data-parent="#shop-categories">
                              <div className="card-body">
                                <div className="widget widget-links cz-filter">
                                  <div className="input-group-overlay input-group-sm mb-2">
                                    <input
                                      className="cz-filter-search form-control form-control-sm appended-form-control"
                                      type="text"
                                      placeholder="Search"
                                    />
                                    <div className="input-group-append-overlay">
                                      <span className="input-group-text">
                                        <i className="czi-search" />
                                      </span>
                                    </div>
                                  </div>
                                  <ul
                                    className="widget-list cz-filter-list pt-1"
                                    style={{ height: '12rem' }}
                                    data-simplebar="init"
                                    data-simplebar-auto-hide="false"
                                    data-ol-has-click-handler
                                  >
                                    <div className="simplebar-wrapper" style={{ margin: '-4px -16px 0px 0px' }}>
                                      <div className="simplebar-height-auto-observer-wrapper">
                                        <div className="simplebar-height-auto-observer" />
                                      </div>
                                      <div className="simplebar-mask">
                                        <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                                          <div
                                            className="simplebar-content-wrapper"
                                            style={{ height: 'auto', overflow: 'hidden' }}
                                          >
                                            <div className="simplebar-content" style={{ padding: '4px 16px 0px 0px' }}>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">View all</span>
                                                  <span className="font-size-xs text-muted ml-3">801</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Handbags</span>
                                                  <span className="font-size-xs text-muted ml-3">238</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Backpacks</span>
                                                  <span className="font-size-xs text-muted ml-3">116</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Wallets</span>
                                                  <span className="font-size-xs text-muted ml-3">104</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Luggage</span>
                                                  <span className="font-size-xs text-muted ml-3">115</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Lumbar Packs</span>
                                                  <span className="font-size-xs text-muted ml-3">17</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Duffle Bags</span>
                                                  <span className="font-size-xs text-muted ml-3">9</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Bag / Travel Accessories</span>
                                                  <span className="font-size-xs text-muted ml-3">93</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Diaper Bags</span>
                                                  <span className="font-size-xs text-muted ml-3">5</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Lunch Bags</span>
                                                  <span className="font-size-xs text-muted ml-3">8</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Messenger Bags</span>
                                                  <span className="font-size-xs text-muted ml-3">2</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Laptop Bags</span>
                                                  <span className="font-size-xs text-muted ml-3">31</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Briefcases</span>
                                                  <span className="font-size-xs text-muted ml-3">45</span>
                                                </a>
                                              </li>
                                              <li className="widget-list-item cz-filter-item">
                                                <a
                                                  className="widget-list-link d-flex justify-content-between align-items-center"
                                                  href="#"
                                                >
                                                  <span className="cz-filter-item-text">Sport Bags</span>
                                                  <span className="font-size-xs text-muted ml-3">18</span>
                                                </a>
                                              </li>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="simplebar-placeholder" style={{ width: 0, height: 0 }} />
                                    </div>
                                    <div
                                      className="simplebar-track simplebar-horizontal"
                                      style={{ visibility: 'hidden' }}
                                    >
                                      <div
                                        className="simplebar-scrollbar simplebar-visible"
                                        style={{ width: 0, display: 'none' }}
                                      />
                                    </div>
                                    <div
                                      className="simplebar-track simplebar-vertical"
                                      style={{ visibility: 'hidden' }}
                                    >
                                      <div
                                        className="simplebar-scrollbar simplebar-visible"
                                        style={{ height: 0, display: 'none' }}
                                      />
                                    </div>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Sunglasses*/}
                          <div className="card">
                            <div className="card-header">
                              <h3 className="accordion-heading">
                                <a
                                  className="collapsed"
                                  href="#sunglasses"
                                  role="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="sunglasses"
                                >
                                  Sunglasses
                                  <span className="accordion-indicator" />
                                </a>
                              </h3>
                            </div>
                            <div className="collapse" id="sunglasses" data-parent="#shop-categories">
                              <div className="card-body">
                                <div className="widget widget-links">
                                  <ul className="widget-list">
                                    <li className="widget-list-item">
                                      <a
                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                        href="#"
                                      >
                                        <span>View all</span>
                                        <span className="font-size-xs text-muted ml-3">1,842</span>
                                      </a>
                                    </li>
                                    <li className="widget-list-item">
                                      <a
                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                        href="#"
                                      >
                                        <span>Fashion Sunglasses</span>
                                        <span className="font-size-xs text-muted ml-3">953</span>
                                      </a>
                                    </li>
                                    <li className="widget-list-item">
                                      <a
                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                        href="#"
                                      >
                                        <span>Sport Sunglasses</span>
                                        <span className="font-size-xs text-muted ml-3">589</span>
                                      </a>
                                    </li>
                                    <li className="widget-list-item">
                                      <a
                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                        href="#"
                                      >
                                        <span>Classic Sunglasses</span>
                                        <span className="font-size-xs text-muted ml-3">300</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Watches*/}
                          <div className="card">
                            <div className="card-header">
                              <h3 className="accordion-heading">
                                <a
                                  className="collapsed"
                                  href="#watches"
                                  role="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="watches"
                                >
                                  Watches
                                  <span className="accordion-indicator" />
                                </a>
                              </h3>
                            </div>
                            <div className="collapse" id="watches" data-parent="#shop-categories">
                              <div className="card-body">
                                <div className="widget widget-links">
                                  <ul className="widget-list">
                                    <li className="widget-list-item">
                                      <a
                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                        href="#"
                                      >
                                        <span>View all</span>
                                        <span className="font-size-xs text-muted ml-3">734</span>
                                      </a>
                                    </li>
                                    <li className="widget-list-item">
                                      <a
                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                        href="#"
                                      >
                                        <span>Fashion Watches</span>
                                        <span className="font-size-xs text-muted ml-3">572</span>
                                      </a>
                                    </li>
                                    <li className="widget-list-item">
                                      <a
                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                        href="#"
                                      >
                                        <span>Casual Watches</span>
                                        <span className="font-size-xs text-muted ml-3">110</span>
                                      </a>
                                    </li>
                                    <li className="widget-list-item">
                                      <a
                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                        href="#"
                                      >
                                        <span>Luxury Watches</span>
                                        <span className="font-size-xs text-muted ml-3">34</span>
                                      </a>
                                    </li>
                                    <li className="widget-list-item">
                                      <a
                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                        href="#"
                                      >
                                        <span>Sport Watches</span>
                                        <span className="font-size-xs text-muted ml-3">18</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Accessories*/}
                          <div className="card">
                            <div className="card-header">
                              <h3 className="accordion-heading">
                                <a
                                  className="collapsed"
                                  href="#accessories"
                                  role="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="accessories"
                                >
                                  Accessories
                                  <span className="accordion-indicator" />
                                </a>
                              </h3>
                            </div>
                            <div className="collapse" id="accessories" data-parent="#shop-categories">
                              <div className="card-body">
                                <div className="widget widget-links">
                                  <ul className="widget-list">
                                    <li className="widget-list-item">
                                      <a
                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                        href="#"
                                      >
                                        <span>View all</span>
                                        <span className="font-size-xs text-muted ml-3">920</span>
                                      </a>
                                    </li>
                                    <li className="widget-list-item">
                                      <a
                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                        href="#"
                                      >
                                        <span>Belts</span>
                                        <span className="font-size-xs text-muted ml-3">364</span>
                                      </a>
                                    </li>
                                    <li className="widget-list-item">
                                      <a
                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                        href="#"
                                      >
                                        <span>Hats</span>
                                        <span className="font-size-xs text-muted ml-3">405</span>
                                      </a>
                                    </li>
                                    <li className="widget-list-item">
                                      <a
                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                        href="#"
                                      >
                                        <span>Jewelry</span>
                                        <span className="font-size-xs text-muted ml-3">131</span>
                                      </a>
                                    </li>
                                    <li className="widget-list-item">
                                      <a
                                        className="widget-list-link d-flex justify-content-between align-items-center"
                                        href="#"
                                      >
                                        <span>Cosmetics</span>
                                        <span className="font-size-xs text-muted ml-3">20</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  {/* Price range*/}
                  <div className="card mb-grid-gutter">
                    <div className="card-body px-4">
                      <div className="widget">
                        <h3 className="widget-title">Price range</h3>
                        <div
                          className="cz-range-slider"
                          data-start-min={250}
                          data-start-max={680}
                          data-min={0}
                          data-max={1000}
                          data-step={1}
                        >
                          <div className="cz-range-slider-ui noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                            <div className="noUi-base">
                              <div className="noUi-connects">
                                <div
                                  className="noUi-connect"
                                  style={{ transform: 'translate(25%, 0px) scale(0.43, 1)' }}
                                />
                              </div>
                              <div className="noUi-origin" style={{ transform: 'translate(-750%, 0px)', zIndex: 5 }}>
                                <div
                                  className="noUi-handle noUi-handle-lower"
                                  data-handle={0}
                                  tabIndex={0}
                                  role="slider"
                                  aria-orientation="horizontal"
                                  aria-valuemin={0.0}
                                  aria-valuemax={680.0}
                                  aria-valuenow={250.0}
                                  aria-valuetext="$250"
                                >
                                  <div className="noUi-touch-area" />
                                  <div className="noUi-tooltip">$250</div>
                                </div>
                              </div>
                              <div className="noUi-origin" style={{ transform: 'translate(-320%, 0px)', zIndex: 4 }}>
                                <div
                                  className="noUi-handle noUi-handle-upper"
                                  data-handle={1}
                                  tabIndex={0}
                                  role="slider"
                                  aria-orientation="horizontal"
                                  aria-valuemin={250.0}
                                  aria-valuemax={1000.0}
                                  aria-valuenow={680.0}
                                  aria-valuetext="$680"
                                >
                                  <div className="noUi-touch-area" />
                                  <div className="noUi-tooltip">$680</div>
                                </div>
                              </div>
                            </div>
                            <div className="noUi-pips noUi-pips-horizontal">
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-large"
                                style={{ left: '0%' }}
                              />
                              <div
                                className="noUi-value noUi-value-horizontal noUi-value-large"
                                data-value={0}
                                style={{ left: '0%' }}
                              >
                                0
                              </div>
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '1%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '2%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '3%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '4%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '5%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '6%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '7%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '8%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '9%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '10%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '11%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '12%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '13%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '14%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '15%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '16%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '17%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '18%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '19%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '20%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '21%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '22%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '23%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '24%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-large"
                                style={{ left: '25%' }}
                              />
                              <div
                                className="noUi-value noUi-value-horizontal noUi-value-large"
                                data-value={250}
                                style={{ left: '25%' }}
                              >
                                250
                              </div>
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '26%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '27%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '28%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '29%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '30%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '31%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '32%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '33%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '34%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '35%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '36%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '37%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '38%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '39%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '40%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '41%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '42%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '43%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '44%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '45%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '46%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '47%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '48%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '49%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-large"
                                style={{ left: '50%' }}
                              />
                              <div
                                className="noUi-value noUi-value-horizontal noUi-value-large"
                                data-value={500}
                                style={{ left: '50%' }}
                              >
                                500
                              </div>
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '51%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '52%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '53%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '54%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '55%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '56%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '57%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '58%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '59%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '60%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '61%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '62%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '63%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '64%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '65%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '66%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '67%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '68%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '69%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '70%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '71%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '72%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '73%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '74%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-large"
                                style={{ left: '75%' }}
                              />
                              <div
                                className="noUi-value noUi-value-horizontal noUi-value-large"
                                data-value={750}
                                style={{ left: '75%' }}
                              >
                                750
                              </div>
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '76%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '77%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '78%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '79%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '80%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '81%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '82%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '83%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '84%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '85%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '86%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '87%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '88%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '89%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '90%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '91%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '92%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '93%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '94%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '95%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '96%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '97%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '98%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-normal"
                                style={{ left: '99%' }}
                              />
                              <div
                                className="noUi-marker noUi-marker-horizontal noUi-marker-large"
                                style={{ left: '100%' }}
                              />
                              <div
                                className="noUi-value noUi-value-horizontal noUi-value-large"
                                data-value={1000}
                                style={{ left: '100%' }}
                              >
                                1000
                              </div>
                            </div>
                          </div>
                          <div className="d-flex pb-1">
                            <div className="w-50 pr-2 mr-2">
                              <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">$</span>
                                </div>
                                <input className="form-control cz-range-slider-value-min" type="text" />
                              </div>
                            </div>
                            <div className="w-50 pl-2">
                              <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">$</span>
                                </div>
                                <input className="form-control cz-range-slider-value-max" type="text" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Filter by Brand*/}
                  <div className="card mb-grid-gutter">
                    <div className="card-body px-4">
                      <div className="widget cz-filter">
                        <h3 className="widget-title">Brand</h3>
                        <div className="input-group-overlay input-group-sm mb-2">
                          <input
                            className="cz-filter-search form-control form-control-sm appended-form-control"
                            type="text"
                            placeholder="Search"
                          />
                          <div className="input-group-append-overlay">
                            <span className="input-group-text">
                              <i className="czi-search" />
                            </span>
                          </div>
                        </div>
                        <ul
                          className="widget-list cz-filter-list list-unstyled pt-1"
                          style={{ maxHeight: '12rem' }}
                          data-simplebar="init"
                          data-simplebar-auto-hide="false"
                          data-ol-has-click-handler
                        >
                          <div className="simplebar-wrapper" style={{ margin: '-4px -16px 0px 0px' }}>
                            <div className="simplebar-height-auto-observer-wrapper">
                              <div className="simplebar-height-auto-observer" />
                            </div>
                            <div className="simplebar-mask">
                              <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                                <div
                                  className="simplebar-content-wrapper"
                                  style={{ height: 'auto', overflow: 'hidden' }}
                                >
                                  <div className="simplebar-content" style={{ padding: '4px 16px 0px 0px' }}>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="adidas" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="adidas">
                                          Adidas
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">425</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="ataylor" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="ataylor">
                                          Ann Taylor
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">15</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="armani" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="armani">
                                          Armani
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">18</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="banana" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="banana">
                                          Banana Republic
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">103</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="bilabong" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="bilabong">
                                          Bilabong
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">27</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="birkenstock" />
                                        <label
                                          className="custom-control-label cz-filter-item-text"
                                          htmlFor="birkenstock"
                                        >
                                          Birkenstock
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">10</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="klein" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="klein">
                                          Calvin Klein
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">365</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="columbia" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="columbia">
                                          Columbia
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">508</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="converse" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="converse">
                                          Converse
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">176</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="dockers" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="dockers">
                                          Dockers
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">54</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="fruit" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="fruit">
                                          Fruit of the Loom
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">739</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="hanes" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="hanes">
                                          Hanes
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">92</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="choo" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="choo">
                                          Jimmy Choo
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">17</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="levis" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="levis">
                                          Levi&apos;s
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">361</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="lee" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="lee">
                                          Lee
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">264</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="wearhouse" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="wearhouse">
                                          Men&apos;s Wearhouse
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">75</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="newbalance" />
                                        <label
                                          className="custom-control-label cz-filter-item-text"
                                          htmlFor="newbalance"
                                        >
                                          New Balance
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">218</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="nike" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="nike">
                                          Nike
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">810</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="navy" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="navy">
                                          Old Navy
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">147</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="polo" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="polo">
                                          Polo Ralph Lauren
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">64</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="puma" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="puma">
                                          Puma
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">370</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="reebok" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="reebok">
                                          Reebok
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">506</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="skechers" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="skechers">
                                          Skechers
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">209</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="hilfiger" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="hilfiger">
                                          Tommy Hilfiger
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">487</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="armour" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="armour">
                                          Under Armour
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">90</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="urban" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="urban">
                                          Urban Outfitters
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">152</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="vsecret" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="vsecret">
                                          Victoria&apos;s Secret
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">238</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="wolverine" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="wolverine">
                                          Wolverine
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">29</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="wrangler" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="wrangler">
                                          Wrangler
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">115</span>
                                    </li>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="simplebar-placeholder" style={{ width: 0, height: 0 }} />
                          </div>
                          <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
                            <div
                              className="simplebar-scrollbar simplebar-visible"
                              style={{ width: 0, display: 'none' }}
                            />
                          </div>
                          <div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}>
                            <div
                              className="simplebar-scrollbar simplebar-visible"
                              style={{ height: 0, display: 'none' }}
                            />
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  {/* Filter by Size*/}
                  <div className="card mb-grid-gutter">
                    <div className="card-body px-4">
                      <div className="widget cz-filter">
                        <h3 className="widget-title">Size</h3>
                        <div className="input-group-overlay input-group-sm mb-2">
                          <input
                            className="cz-filter-search form-control form-control-sm appended-form-control"
                            type="text"
                            placeholder="Search"
                          />
                          <div className="input-group-append-overlay">
                            <span className="input-group-text">
                              <i className="czi-search" />
                            </span>
                          </div>
                        </div>
                        <ul
                          className="widget-list cz-filter-list list-unstyled pt-1"
                          style={{ maxHeight: '12rem' }}
                          data-simplebar="init"
                          data-simplebar-auto-hide="false"
                          data-ol-has-click-handler
                        >
                          <div className="simplebar-wrapper" style={{ margin: '-4px -16px 0px 0px' }}>
                            <div className="simplebar-height-auto-observer-wrapper">
                              <div className="simplebar-height-auto-observer" />
                            </div>
                            <div className="simplebar-mask">
                              <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                                <div
                                  className="simplebar-content-wrapper"
                                  style={{ height: 'auto', overflow: 'hidden' }}
                                >
                                  <div className="simplebar-content" style={{ padding: '4px 16px 0px 0px' }}>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-xs" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-xs">
                                          XS
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">34</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-s" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-s">
                                          S
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">57</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-m" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-m">
                                          M
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">198</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-l" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-l">
                                          L
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">72</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-xl" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-xl">
                                          XL
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">46</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-39" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-39">
                                          39
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">112</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-40" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-40">
                                          40
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">85</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-41" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-40">
                                          41
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">210</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-42" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-42">
                                          42
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">57</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-43" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-43">
                                          43
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">30</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-44" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-44">
                                          44
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">61</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-45" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-45">
                                          45
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">23</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-46" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-46">
                                          46
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">19</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-47" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-47">
                                          47
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">15</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-48" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-48">
                                          48
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">12</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-49" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-49">
                                          49
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">8</span>
                                    </li>
                                    <li className="cz-filter-item d-flex justify-content-between align-items-center">
                                      <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" type="checkbox" id="size-50" />
                                        <label className="custom-control-label cz-filter-item-text" htmlFor="size-50">
                                          50
                                        </label>
                                      </div>
                                      <span className="font-size-xs text-muted">6</span>
                                    </li>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="simplebar-placeholder" style={{ width: 0, height: 0 }} />
                          </div>
                          <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
                            <div
                              className="simplebar-scrollbar simplebar-visible"
                              style={{ width: 0, display: 'none' }}
                            />
                          </div>
                          <div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}>
                            <div
                              className="simplebar-scrollbar simplebar-visible"
                              style={{ height: 0, display: 'none' }}
                            />
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Filter by Color*/}
                  <div className="card mb-grid-gutter">
                    <div className="card-body px-4">
                      <div className="widget">
                        <h3 className="widget-title">Color</h3>
                        <div className="d-flex flex-wrap">
                          <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                            <input className="custom-control-input" type="checkbox" id="color-blue-gray" />
                            <label className="custom-option-label rounded-circle" htmlFor="color-blue-gray">
                              <span
                                className="custom-option-color rounded-circle"
                                style={{ backgroundColor: '#b3c8db' }}
                              />
                            </label>
                            <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-blue-gray">
                              Blue-gray
                            </label>
                          </div>
                          <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                            <input className="custom-control-input" type="checkbox" id="color-burgundy" />
                            <label className="custom-option-label rounded-circle" htmlFor="color-burgundy">
                              <span
                                className="custom-option-color rounded-circle"
                                style={{ backgroundColor: '#ca7295' }}
                              />
                            </label>
                            <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-burgundy">
                              Burgundy
                            </label>
                          </div>
                          <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                            <input className="custom-control-input" type="checkbox" id="color-teal" />
                            <label className="custom-option-label rounded-circle" htmlFor="color-teal">
                              <span
                                className="custom-option-color rounded-circle"
                                style={{ backgroundColor: '#91c2c3' }}
                              />
                            </label>
                            <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-teal">
                              Teal
                            </label>
                          </div>
                          <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                            <input className="custom-control-input" type="checkbox" id="color-brown" />
                            <label className="custom-option-label rounded-circle" htmlFor="color-brown">
                              <span
                                className="custom-option-color rounded-circle"
                                style={{ backgroundColor: '#9a8480' }}
                              />
                            </label>
                            <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-brown">
                              Brown
                            </label>
                          </div>
                          <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                            <input className="custom-control-input" type="checkbox" id="color-coral-red" />
                            <label className="custom-option-label rounded-circle" htmlFor="color-coral-red">
                              <span
                                className="custom-option-color rounded-circle"
                                style={{ backgroundColor: '#ff7072' }}
                              />
                            </label>
                            <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-coral-red">
                              Coral red
                            </label>
                          </div>
                          <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                            <input className="custom-control-input" type="checkbox" id="color-navy" />
                            <label className="custom-option-label rounded-circle" htmlFor="color-navy">
                              <span
                                className="custom-option-color rounded-circle"
                                style={{ backgroundColor: '#696dc8' }}
                              />
                            </label>
                            <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-navy">
                              Navy
                            </label>
                          </div>
                          <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                            <input className="custom-control-input" type="checkbox" id="color-charcoal" />
                            <label className="custom-option-label rounded-circle" htmlFor="color-charcoal">
                              <span
                                className="custom-option-color rounded-circle"
                                style={{ backgroundColor: '#4e4d4d' }}
                              />
                            </label>
                            <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-charcoal">
                              Charcoal
                            </label>
                          </div>
                          <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                            <input className="custom-control-input" type="checkbox" id="color-sky-blue" />
                            <label className="custom-option-label rounded-circle" htmlFor="color-sky-blue">
                              <span
                                className="custom-option-color rounded-circle"
                                style={{ backgroundColor: '#8bcdf5' }}
                              />
                            </label>
                            <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-sky-blue">
                              Sky blue
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Products grid*/}
          <div className="row pt-3 mx-n2">
            {/* Product*/}
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
            {/* Product*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
              <div className="card product-card">
                <span className="badge badge-danger badge-shadow">Sale</span>
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
                  <img src="img/shop/catalog/02.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Women’s T-shirt
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Cotton Lace Blouse</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $28.<small>50</small>
                      </span>
                      <del className="font-size-sm text-muted">
                        38.<small>50</small>
                      </del>
                    </div>
                    <div className="star-rating">
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star" />
                      <i className="sr-star czi-star" />
                    </div>
                  </div>
                </div>
                <div className="card-body card-body-hidden">
                  <div className="text-center pb-2">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color1" id="white" defaultChecked />
                      <label className="custom-option-label rounded-circle" htmlFor="white">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#eaeaeb' }} />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color1" id="blue" />
                      <label className="custom-option-label rounded-circle" htmlFor="blue">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#d1dceb' }} />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color1" id="yellow" />
                      <label className="custom-option-label rounded-circle" htmlFor="yellow">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#f4e6a2' }} />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color1" id="pink" />
                      <label className="custom-option-label rounded-circle" htmlFor="pink">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#f3dcff' }} />
                      </label>
                    </div>
                  </div>
                  <div className="d-flex mb-2">
                    <select className="custom-select custom-select-sm mr-2">
                      <option>XS</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <button
                      className="btn btn-primary btn-sm"
                      type="button"
                      data-toggle="toast"
                      data-target="#cart-toast"
                      data-ol-has-click-handler
                    >
                      <i className="czi-cart font-size-sm mr-1" />
                      Add to Cart
                    </button>
                  </div>
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
            {/* Product*/}
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
                  <img src="img/shop/catalog/03.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Women’s Shorts
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Mom High Waist Shorts</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $39.<small>50</small>
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
                  <div className="text-center pb-2">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size2" id="xs" />
                      <label className="custom-option-label" htmlFor="xs">
                        XS
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size2" id="s" defaultChecked />
                      <label className="custom-option-label" htmlFor="s">
                        S
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size2" id="m" />
                      <label className="custom-option-label" htmlFor="m">
                        M
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size2" id="l" />
                      <label className="custom-option-label" htmlFor="l">
                        L
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
            {/* Product*/}
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
                  <img src="img/shop/catalog/04.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Sportswear
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Women Sports Jacket</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $68.<small>40</small>
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
                      <input className="custom-control-input" type="radio" name="size3" id="xs2" defaultChecked />
                      <label className="custom-option-label" htmlFor="xs2">
                        XS
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size3" id="s2" />
                      <label className="custom-option-label" htmlFor="s2">
                        S
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size3" id="m2" />
                      <label className="custom-option-label" htmlFor="m2">
                        M
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size3" id="l2" />
                      <label className="custom-option-label" htmlFor="l2">
                        L
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
            {/* Product*/}
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
                  <img src="img/shop/catalog/05.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s Sunglasses
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Polarized Sunglasses</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-muted font-size-sm">Out of stock</span>
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
                  <a className="btn btn-secondary btn-sm btn-block mb-2" href="shop-single-v1.html">
                    View details
                  </a>
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
            {/* Product*/}
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
                  <img src="img/shop/catalog/06.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Backpacks
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">TH Jeans City Backpack</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $79.<small>50</small>
                      </span>
                    </div>
                    <div className="star-rating">
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star" />
                      <i className="sr-star czi-star" />
                    </div>
                  </div>
                </div>
                <div className="card-body card-body-hidden">
                  <div className="text-center pb-2">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color2" id="khaki" defaultChecked />
                      <label className="custom-option-label rounded-circle" htmlFor="khaki">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#97947c' }} />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color2" id="jeans" />
                      <label className="custom-option-label rounded-circle" htmlFor="jeans">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#99a8be' }} />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color2" id="white2" />
                      <label className="custom-option-label rounded-circle" htmlFor="white2">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#eaeaeb' }} />
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
            </div>
            {/* Product*/}
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
                  <img src="img/shop/catalog/07.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Women&apos;s Swimwear
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Two-Piece Bikini in Print</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $18.<small>99</small>
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
                      <input className="custom-control-input" type="radio" name="size4" id="xs3" defaultChecked />
                      <label className="custom-option-label" htmlFor="xs3">
                        XS
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size4" id="s3" />
                      <label className="custom-option-label" htmlFor="s3">
                        S
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size4" id="m3" />
                      <label className="custom-option-label" htmlFor="m3">
                        M
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
            {/* Product*/}
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
                  <img src="img/shop/catalog/08.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Kid&apos;s Toys
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Soft Panda Teddy Bear</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $14.<small>99</small>
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
                    <a className="nav-link-style font-size-ms" href="#quick-view" data-toggle="modal">
                      <i className="czi-eye align-middle mr-1" />
                      Quick view
                    </a>
                  </div>
                </div>
              </div>
              <hr className="d-sm-none" />
            </div>
          </div>
          {/* Banners*/}
          <div className="row py-sm-2">
            <div className="col-md-8 mb-4">
              <div className="d-sm-flex justify-content-between align-items-center bg-secondary overflow-hidden rounded-lg">
                <div className="py-4 my-2 my-md-0 py-md-5 px-4 ml-md-3 text-center text-sm-left">
                  <h4 className="font-size-lg font-weight-light mb-2">Converse All Star</h4>
                  <h3 className="mb-4">Make Your Day Comfortable</h3>
                  <a className="btn btn-primary btn-shadow btn-sm" href="#">
                    Shop Now
                  </a>
                </div>
                <img className="d-block ml-auto" src="img/shop/catalog/banner.jpg" alt="Shop Converse" />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="d-flex flex-column h-100 bg-size-cover bg-position-center rounded-lg py-4"
                style={{ backgroundImage: 'url(img/blog/banner-bg.jpg)' }}
              >
                <div className="py-4 my-2 px-4 text-center">
                  <h5 className="mb-2">Your Add Banner Here</h5>
                  <p className="font-size-sm text-muted">Hurry up to reserve your spot</p>
                  <a className="btn btn-primary btn-shadow btn-sm" href="#">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Products grid*/}
          <div className="row mx-n2">
            {/* Product*/}
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
                  <img src="img/shop/catalog/09.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Cosmetics
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Metallic Lipstick (Crimson)</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $12.<small>99</small>
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
                      <input className="custom-control-input" type="radio" name="color2" id="crimson" defaultChecked />
                      <label className="custom-option-label rounded-circle" htmlFor="crimson">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#bd3c82' }} />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color2" id="creamy" />
                      <label className="custom-option-label rounded-circle" htmlFor="creamy">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#ebae81' }} />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color2" id="palm" />
                      <label className="custom-option-label rounded-circle" htmlFor="palm">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#ca8799' }} />
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
            {/* Product*/}
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
                  <img src="img/shop/catalog/10.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s Accessories
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">5-Pack Multicolor Bracelets</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $7.<small>99</small>
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
                    <a className="nav-link-style font-size-ms" href="#quick-view" data-toggle="modal">
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
                  <img src="img/shop/catalog/11.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s Sandals
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Soft Footbed Sandals</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $99.<small>50</small>
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
                      <input className="custom-control-input" type="radio" name="color1" id="blue2" defaultChecked />
                      <label className="custom-option-label rounded-circle" htmlFor="blue2">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#879fb3' }} />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color1" id="brown" />
                      <label className="custom-option-label rounded-circle" htmlFor="brown">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#9c6d4a' }} />
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="color1" id="black" />
                      <label className="custom-option-label rounded-circle" htmlFor="black">
                        <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#333333' }} />
                      </label>
                    </div>
                  </div>
                  <div className="d-flex mb-2">
                    <select className="custom-select custom-select-sm mr-2">
                      <option>9.5</option>
                      <option>10</option>
                      <option>10.5</option>
                      <option>11</option>
                      <option>11.5</option>
                    </select>
                    <button
                      className="btn btn-primary btn-sm"
                      type="button"
                      data-toggle="toast"
                      data-target="#cart-toast"
                      data-ol-has-click-handler
                    >
                      <i className="czi-cart font-size-sm mr-1" />
                      Add to Cart
                    </button>
                  </div>
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
            {/* Product*/}
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
                  <img src="img/shop/catalog/12.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s Hats
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">3-Color Sun Stash Hat</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $25.<small>99</small>
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
                  <div className="text-center pb-2">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size5" id="s4" defaultChecked />
                      <label className="custom-option-label" htmlFor="s4">
                        S
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size5" id="m4" />
                      <label className="custom-option-label" htmlFor="m4">
                        M
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size5" id="l4" />
                      <label className="custom-option-label" htmlFor="l4">
                        L
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
            {/* Product*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
              <div className="card product-card">
                <span className="badge badge-danger badge-shadow">Sale</span>
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
                  <img src="img/shop/catalog/13.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s T-shirts
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Cotton Polo Regular Fit</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $11.<small>50</small>
                      </span>
                      <del className="font-size-sm text-muted">
                        $13.<small>50</small>
                      </del>
                    </div>
                    <div className="star-rating">
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star-filled active" />
                      <i className="sr-star czi-star" />
                      <i className="sr-star czi-star" />
                    </div>
                  </div>
                </div>
                <div className="card-body card-body-hidden">
                  <div className="text-center pb-2">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size6" id="s5" />
                      <label className="custom-option-label" htmlFor="s5">
                        S
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size6" id="m5" />
                      <label className="custom-option-label" htmlFor="m5">
                        M
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size6" id="l5" defaultChecked />
                      <label className="custom-option-label" htmlFor="l5">
                        L
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size6" id="xl5" />
                      <label className="custom-option-label" htmlFor="xl5">
                        XL
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
            {/* Product*/}
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
                  <img src="img/shop/catalog/14.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s Jeans
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Slim Taper Fit Jeans</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $58.<small>99</small>
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
                      <input className="custom-control-input" type="radio" name="size7" id="s6" />
                      <label className="custom-option-label" htmlFor="s6">
                        S
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size7" id="m6" />
                      <label className="custom-option-label" htmlFor="m6">
                        M
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size7" id="l6" defaultChecked />
                      <label className="custom-option-label" htmlFor="l6">
                        L
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size7" id="xl6" />
                      <label className="custom-option-label" htmlFor="xl6">
                        XL
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
            {/* Product*/}
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
                  <img src="img/shop/catalog/15.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s Waistcoats
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Single-breasted Trenchcoat</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $79.<small>99</small>
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
                      <input className="custom-control-input" type="radio" name="size8" id="m7" />
                      <label className="custom-option-label" htmlFor="m7">
                        M
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size8" id="l7" defaultChecked />
                      <label className="custom-option-label" htmlFor="l7">
                        L
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size8" id="xl7" />
                      <label className="custom-option-label" htmlFor="xl7">
                        XL
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
            </div>
            {/* Product*/}
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
                  <img src="img/shop/catalog/16.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block font-size-xs pb-1" href="#">
                    Men’s Hoodie
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="shop-single-v1.html">Sports Hooded Sweatshirt</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $25.<small>00</small>
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
                  <div className="text-center pb-2">
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size9" id="s8" />
                      <label className="custom-option-label" htmlFor="s8">
                        S
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size9" id="m8" defaultChecked />
                      <label className="custom-option-label" htmlFor="m8">
                        M
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size9" id="l8" />
                      <label className="custom-option-label" htmlFor="l8">
                        L
                      </label>
                    </div>
                    <div className="custom-control custom-option custom-control-inline mb-2">
                      <input className="custom-control-input" type="radio" name="size9" id="xl8" />
                      <label className="custom-option-label" htmlFor="xl8">
                        XL
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
            </div>
          </div>
          <hr className="my-3" />
          {/* Pagination*/}
          <nav className="d-flex justify-content-between pt-2" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="czi-arrow-left mr-2" />
                  Prev
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item d-sm-none">
                <span className="page-link page-link-static">1 / 5</span>
              </li>
              <li className="page-item active d-none d-sm-block" aria-current="page">
                <span className="page-link">
                  1<span className="sr-only">(current)</span>
                </span>
              </li>
              <li className="page-item d-none d-sm-block">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item d-none d-sm-block">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item d-none d-sm-block">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item d-none d-sm-block">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  Next
                  <i className="czi-arrow-right ml-2" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    </PageLayout>
  );
};
export const getServerSideProps = async (ctx) => {
  const { query } = ctx;
  console.log(query);
  const httpRequest = new HttpRequest();
  // // pesquisar pelo slud pode trazer varios registros... pensar na possibilidade de o slug ir com o id do produto
  const pageProducts = await httpRequest.get('rs/crud/products', query);
  console.log(pageProducts);
  return {
    props: {
      product: {},
      pageProducts,
    },
  };
};

export default Home;
