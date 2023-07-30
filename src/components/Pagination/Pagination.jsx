/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import PaginationBootstrap from 'react-bootstrap/Pagination';
import './Pagination.css';

function Pagination({
  users, pageSize, page, setPage,
}) {
  const pagess = useMemo(
    () => {
      const pages = [];
      for (let number = 1; number <= users.length / pageSize; number++) {
        pages.push(
          <PaginationBootstrap.Item
            key={number}
            active={number === page}
            onClick={() => setPage(number)}
          >
            {number}
          </PaginationBootstrap.Item>,
        );
      }
      return pages;
    },
    [users, page],
  );
  return (
    <div className="container">
      <PaginationBootstrap>{pagess}</PaginationBootstrap>
    </div>
  );
}

export default Pagination;
