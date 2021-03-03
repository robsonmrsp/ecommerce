import { useEffect, useState } from 'react';

const ProductsBottonPagination = ({ pager, goToPage }) => {
  const { actualPage, totalRecords, pageSize = 15 } = pager;
  const [lastPage, setLastPage] = useState(parseInt(totalRecords / pageSize + 1, 10));
  useEffect(() => {
    const { totalRecords: total, pageSize: size = 15 } = pager;
    setLastPage(parseInt(total / size + 1, 10));
  }, [pager]);

  return (
    <nav className="d-flex justify-content-between pt-2" aria-label="Page navigation">
      <ul className="pagination">
        <li className="page-item">
          <button
            type="button"
            className="page-link btn-sm btn"
            onClick={() => {
              if (actualPage > 1) goToPage(actualPage - 1);
            }}
          >
            <i className="czi-arrow-left mr-2" />
            Anterior
          </button>
        </li>
      </ul>
      <ul className="pagination">
        <li className="page-item d-sm-none">
          <span className="page-link page-link-static">
            {actualPage} / {lastPage}
          </span>
        </li>
        {[...new Array(lastPage)].map((_, index) => (
          <li className={`page-item d-none d-sm-block ${actualPage === index + 1 ? 'active' : ''}`}>
            <button
              type="button"
              className="btn-sm btn page-link"
              onClick={() => {
                if (index < lastPage) goToPage(index + 1);
              }}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
      <ul className="pagination">
        <li className="page-item">
          <button
            type="button"
            className="page-link btn-sm btn"
            onClick={() => {
              if (actualPage < lastPage) goToPage(actualPage + 1);
            }}
          >
            Próximo
            <i className="czi-arrow-right ml-2" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ProductsBottonPagination;
