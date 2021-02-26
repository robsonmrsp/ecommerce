const ToolbarFilter = () => {
  console.log('toolbarFilter');
  return (
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
                        <div className="noUi-connect" style={{ transform: 'translate(25%, 0px) scale(0.43, 1)' }} />
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
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '0%' }} />
                      <div
                        className="noUi-value noUi-value-horizontal noUi-value-large"
                        data-value={0}
                        style={{ left: '0%' }}
                      >
                        0
                      </div>
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '1%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '2%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '3%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '4%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '5%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '6%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '7%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '8%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '9%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '10%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '11%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '12%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '13%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '14%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '15%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '16%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '17%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '18%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '19%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '20%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '21%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '22%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '23%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '24%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '25%' }} />
                      <div
                        className="noUi-value noUi-value-horizontal noUi-value-large"
                        data-value={250}
                        style={{ left: '25%' }}
                      >
                        250
                      </div>
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '26%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '27%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '28%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '29%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '30%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '31%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '32%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '33%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '34%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '35%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '36%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '37%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '38%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '39%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '40%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '41%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '42%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '43%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '44%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '45%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '46%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '47%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '48%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '49%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '50%' }} />
                      <div
                        className="noUi-value noUi-value-horizontal noUi-value-large"
                        data-value={500}
                        style={{ left: '50%' }}
                      >
                        500
                      </div>
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '51%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '52%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '53%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '54%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '55%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '56%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '57%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '58%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '59%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '60%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '61%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '62%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '63%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '64%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '65%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '66%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '67%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '68%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '69%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '70%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '71%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '72%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '73%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '74%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '75%' }} />
                      <div
                        className="noUi-value noUi-value-horizontal noUi-value-large"
                        data-value={750}
                        style={{ left: '75%' }}
                      >
                        750
                      </div>
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '76%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '77%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '78%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '79%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '80%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '81%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '82%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '83%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '84%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '85%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '86%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '87%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '88%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '89%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '90%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '91%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '92%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '93%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '94%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '95%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '96%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '97%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '98%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '99%' }} />
                      <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '100%' }} />
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
                        <div className="simplebar-content-wrapper" style={{ height: 'auto', overflow: 'hidden' }}>
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
                                <label className="custom-control-label cz-filter-item-text" htmlFor="birkenstock">
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
                                <label className="custom-control-label cz-filter-item-text" htmlFor="newbalance">
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
                    <div className="simplebar-scrollbar simplebar-visible" style={{ width: 0, display: 'none' }} />
                  </div>
                  <div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}>
                    <div className="simplebar-scrollbar simplebar-visible" style={{ height: 0, display: 'none' }} />
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
                        <div className="simplebar-content-wrapper" style={{ height: 'auto', overflow: 'hidden' }}>
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
                    <div className="simplebar-scrollbar simplebar-visible" style={{ width: 0, display: 'none' }} />
                  </div>
                  <div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}>
                    <div className="simplebar-scrollbar simplebar-visible" style={{ height: 0, display: 'none' }} />
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
                      <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#b3c8db' }} />
                    </label>
                    <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-blue-gray">
                      Blue-gray
                    </label>
                  </div>
                  <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                    <input className="custom-control-input" type="checkbox" id="color-burgundy" />
                    <label className="custom-option-label rounded-circle" htmlFor="color-burgundy">
                      <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#ca7295' }} />
                    </label>
                    <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-burgundy">
                      Burgundy
                    </label>
                  </div>
                  <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                    <input className="custom-control-input" type="checkbox" id="color-teal" />
                    <label className="custom-option-label rounded-circle" htmlFor="color-teal">
                      <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#91c2c3' }} />
                    </label>
                    <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-teal">
                      Teal
                    </label>
                  </div>
                  <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                    <input className="custom-control-input" type="checkbox" id="color-brown" />
                    <label className="custom-option-label rounded-circle" htmlFor="color-brown">
                      <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#9a8480' }} />
                    </label>
                    <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-brown">
                      Brown
                    </label>
                  </div>
                  <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                    <input className="custom-control-input" type="checkbox" id="color-coral-red" />
                    <label className="custom-option-label rounded-circle" htmlFor="color-coral-red">
                      <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#ff7072' }} />
                    </label>
                    <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-coral-red">
                      Coral red
                    </label>
                  </div>
                  <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                    <input className="custom-control-input" type="checkbox" id="color-navy" />
                    <label className="custom-option-label rounded-circle" htmlFor="color-navy">
                      <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#696dc8' }} />
                    </label>
                    <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-navy">
                      Navy
                    </label>
                  </div>
                  <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                    <input className="custom-control-input" type="checkbox" id="color-charcoal" />
                    <label className="custom-option-label rounded-circle" htmlFor="color-charcoal">
                      <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#4e4d4d' }} />
                    </label>
                    <label className="d-block font-size-xs text-muted mt-n1" htmlFor="color-charcoal">
                      Charcoal
                    </label>
                  </div>
                  <div className="custom-control custom-option text-center mb-2 mx-1" style={{ width: '4rem' }}>
                    <input className="custom-control-input" type="checkbox" id="color-sky-blue" />
                    <label className="custom-option-label rounded-circle" htmlFor="color-sky-blue">
                      <span className="custom-option-color rounded-circle" style={{ backgroundColor: '#8bcdf5' }} />
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
  );
};

export default ToolbarFilter;
