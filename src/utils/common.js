export const getColumnNames = (columns) => {
  return columns.map((col) => {
    return {
      header: col.columnDef.header,
      accessorKey: col.columnDef.accessorKey,
    };
  });
};

export const randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
