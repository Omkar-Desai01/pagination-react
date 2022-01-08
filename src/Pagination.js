import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="list">
        <div class="ui horizontal bulleted list">
          {pageNumbers.map((number) => (
            <a onClick={() => paginate(number)} href="!#" class="item">
              {number}{" "}
            </a>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
