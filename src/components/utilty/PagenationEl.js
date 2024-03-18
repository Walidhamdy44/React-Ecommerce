import React from "react";
import ReactPaginate from "react-paginate";

const PagenationEl = ({ pageCount, onPress }) => {
  const handlePageClick = (data) => {
    onPress(data.selected + 1);
  };
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        breakClassName={"page-item"}
        containerClassName={
          "pagination justify-content-center p-3 gap-2 flex-wrap"
        }
        pageLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
      />
    </div>
  );
};

export default PagenationEl;
