import { useEffect, useState } from 'react';

const ProductsTopPagination = ({ pager, goToPage }) => {
  const { actualPage, totalRecords, pageSize = 15 } = pager;
  const [lastPage, setLastPage] = useState(parseInt(totalRecords / pageSize + 1, 10));
  useEffect(() => {
    const { totalRecords: total, pageSize: size = 15 } = pager;
    setLastPage(parseInt(total / size + 1, 10));
  }, [pager]);
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="dropdown mr-2">
        <a className="btn btn-outline-secondary dropdown-toggle" href="#shop-filters" data-toggle="collapse">
          <i className="czi-filter mr-2" />
          Filtros
        </a>
      </div>
      <div className="d-flex">
        <button
          type="button"
          className="nav-link-style  btn-sm btn"
          onClick={() => {
            if (actualPage > 1) goToPage(actualPage - 1);
          }}
        >
          <i className="czi-arrow-left" />
        </button>
        <span className="font-size-md" style={{ paddingTop: '6px' }}>
          {actualPage} / {lastPage}
        </span>
        <button
          type="button"
          className="nav-link-style  btn-sm btn"
          onClick={() => {
            if (actualPage < lastPage) goToPage(actualPage + 1);
          }}
        >
          <i className="czi-arrow-right" />
        </button>
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
  );
};

export default ProductsTopPagination;
