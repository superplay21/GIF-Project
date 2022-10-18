import React from "react";
import { Link } from "react-router-dom";
const Paginate = props => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination pagination-sm justify-content-center border-0 ">
        {pageNumbers.map(number => {
          let classes = "page-item ";
          if (number === props.currentPage) {
            classes += "active";
          }

          return (
            <li className={classes}>
            <Link to="/home"  className="page-link" onClick={() => props.pageSelected(number)}>
                {number}</Link>
              
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginate;