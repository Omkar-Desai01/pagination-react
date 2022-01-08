import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="list">
        <div className="ui horizontal bulleted list">
          {pageNumbers.map((number) => (
            <a
              onClick={() => paginate(number)}
              href="#"
              className="item"
              key={number}
            >
              {number}{" "}
            </a>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
