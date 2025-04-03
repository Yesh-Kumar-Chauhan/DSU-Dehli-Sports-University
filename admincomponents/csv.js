export const generateCsvData = (data, columns) => {
    const csvData = [];
    const headers = columns.map(column => column.Header);
    csvData.push(headers);
    data.forEach(item => {
      const row = columns.map(column => item[column.accessor]);
      csvData.push(row);
    });
  
    return csvData;
  };