/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable react/react-in-jsx-scope */
import PaginationBootstrap from 'react-bootstrap/Pagination';

function Pagination({
  users, pageSize, page, setPage,
}) {
  const items = [];
  // eslint-disable-next-line no-unsafe-optional-chaining
  for (let number = 1; number <= users?.length / pageSize; number++) {
    items.push(
      // eslint-disable-next-line max-len
      <PaginationBootstrap.Item key={number} active={number === page} onClick={() => setPage(number)}>
        {number}
      </PaginationBootstrap.Item>,
    );
  }
  return (
    <div className="container">
      <PaginationBootstrap>{items}</PaginationBootstrap>
    </div>
  );
}

export default Pagination;
