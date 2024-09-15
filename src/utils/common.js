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

export const allNotNullOrUndefined = (obj) => Object.values(obj).every(value => value !== null && value !== undefined);


export const startsWithH = (str) => {
  return str.toLowerCase().startsWith("h");
}

export const removeInitialLowercaseH = (str)=>{
  if (str.startsWith("h")) {
    return str.slice(1);
  }
  return str;
}

export const containsStackOrGroup = (str) => {
  return /stack|group/.test(str);
}