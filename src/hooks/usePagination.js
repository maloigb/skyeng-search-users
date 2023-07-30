import { useState, useMemo } from 'react';

export default (data, pageSize) => {
  const [page, setPage] = useState(1);
  const paginatedData = useMemo(
    () => data?.slice((page * pageSize - pageSize), (page * pageSize)),
    [page, data],
  );
  return {
    paginatedData,
    page,
    setPage,
  };
};
