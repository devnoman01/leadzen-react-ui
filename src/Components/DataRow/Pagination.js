import React from "react";

const Pagination = ({ itemPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="w-full flex flex-row justify-center">
        <ul className="flex gap-3">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                onClick={() => paginate(number)}
                href="#"
                className="border text-sm border-[#FB3E3E] px-2 hover:bg-[#FB3E3E] hover:text-white"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
