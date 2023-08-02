export default (arr, field, direction) => {
  const sortedData = [...arr];
  sortedData.sort((a, b) => {
    if (direction) {
      return String(a[field]).localeCompare(String(b[field]));
    }
    return String(b[field]).localeCompare(String(a[field]));
  });
  return sortedData;
};

// sortArrayByField
