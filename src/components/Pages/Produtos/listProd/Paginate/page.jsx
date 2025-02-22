import PropTypes from "prop-types";
import "./style.css";

const Paginate = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination-container">
      <div
        className={`pagination-numbers arrow ${
          currentPage === 1 ? "disabled" : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <i className="bx bx-chevron-left"></i>
        <span className="arrow-text">Anterior</span>
      </div>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <div
            key={page}
            className={`pagination-number ${
              currentPage === page ? "pagination-active" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </div>
        )
      )}

      <div
        className={`pagination-numbers arrow ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <span className="arrow-text">Próximo</span>
        <i className="bx bx-chevron-right"></i>
      </div>
    </div>
  );
};

// PropTypes validation
Paginate.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Paginate;
