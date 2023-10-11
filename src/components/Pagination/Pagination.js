import "./Pagination.scss";
import ReactPaginate from "react-paginate";

function Pagination({pageCount, handlePageClick}) {
  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={8}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        breakClassName="break-class"
        containerClassName={"pagination"}
        activeClassName="active_pagination"
      />
    </div>
  );
}

export default Pagination;
