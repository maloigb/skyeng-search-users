import { useState, useMemo } from 'react';
import useSort from './useSort';

export default (data, pageSize) => {
  const [page, setPage] = useState(1);
  const paginatedData = useMemo(
    () => data?.slice((page * pageSize - pageSize), (page * pageSize)),
    [page, data],
  );
  const { sort } = useSort();
  return {
    paginatedData,
    page,
    setPage,
  };
};
