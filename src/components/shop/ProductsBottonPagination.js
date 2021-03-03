const ProductsBottonPagination = ({ pager, onNextPage, onPreviousPage, goToPage }) => {
  const { actualPage, totalRecords, pageSize = 15 } = pager;

  return (
    <nav className="d-flex justify-content-between pt-2" aria-label="Page navigation">
      <ul className="pagination">
        <li className="page-item">
          <button type="button" className="page-link btn-sm btn" onClick={onPreviousPage}>
            <i className="czi-arrow-left mr-2" />
            Anterior
          </button>
        </li>
      </ul>
      <ul className="pagination">
        <li className="page-item d-sm-none">
          <span className="page-link page-link-static">
            {actualPage} / {parseInt(totalRecords / pageSize + 1, 10)}
          </span>
        </li>
        {[...new Array(parseInt(totalRecords / pageSize + 1, 10))].map((_, index) => (
          <li className={`page-item d-none d-sm-block ${actualPage === index + 1 ? 'active' : ''}`}>
            <button
              type="button"
              className="btn-sm btn page-link"
              onClick={() => {
                goToPage(index + 1);
              }}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
      <ul className="pagination">
        <li className="page-item">
          <button type="button" className="page-link btn-sm btn" onClick={onNextPage}>
            Próximo
            <i className="czi-arrow-right ml-2" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ProductsBottonPagination;
