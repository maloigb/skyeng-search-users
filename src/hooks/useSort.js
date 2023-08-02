import { useState } from 'react';

export default () => {
  // const [sortConfig, setSortConfig] = useState({
  //   fieldSort: '',
  //   directionSort: true,
  // });
  // const changeSort = (field) => {
  //   if (field === sortConfig.fieldSort) {
  //     setSortConfig({ ...sortConfig, directionSort: !sortConfig.directionSort });
  //   } else {
  //     setSortConfig({ ...sortConfig, fieldSort: field, directionSort: true });
  //   }
  // };
  const sort = (field, data) => {
    // changeSort(field);
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (field === 'more') {
        return String(a?.repos?.length).localeCompare(String(b?.repos?.length));
      }
      return String(b?.repos?.length).localeCompare(String(a?.repos?.length));
    });
    return sortedData;
  };
  return {
    sort,
  };
};
