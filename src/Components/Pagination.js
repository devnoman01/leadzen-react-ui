import React from "react";

const Pagination = ({ itemPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  let activePageNumber = currentPage;
  let totalPage = Math.ceil(totalItems / itemPerPage);

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  // load previous page data
  const previousPage = () => {
    if (activePageNumber != 1) {
      activePageNumber--;
      paginate(activePageNumber);
    }
  };

  // load next page data
  const nextPage = () => {
    if (activePageNumber != totalPage) {
      activePageNumber++;
      paginate(activePageNumber);
    }
  };

  return (
    <>
      <div className="w-full flex flex-row justify-center">
        <ul className="flex gap-3 items-center">
          {/* previous page */}
          <a
            onClick={() => previousPage()}
            href="#"
            className={`${currentPage === 1 ? "hidden" : "block"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>

          {/* page number buttons */}
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                onClick={() => {
                  activePageNumber = number;
                  paginate(number);
                }}
                href="#"
                className={`${
                  currentPage == number ? "bg-[#FB3E3E] text-white" : ""
                } text-sm px-3 py-1 hover:bg-[#FB3E3E] hover:text-white`}
              >
                {number}
              </a>
            </li>
          ))}

          {/* next page */}
          <a
            onClick={() => nextPage()}
            href="#"
            className={`${
              pageNumbers.length === activePageNumber ? "hidden" : "block"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
