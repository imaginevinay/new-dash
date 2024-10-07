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

export const areItemsFilled = (selectedItems) => {
  const axisItemsArray = Object.keys(selectedItems);
  const key1 = axisItemsArray[0];
  const key2 = axisItemsArray[1];
  // Check if key1 has any properties
  const isKey1Filled = Object.keys(selectedItems[key1]).length > 0;
  
  // Check yAxis based on its type
  let isKey2Filled = false;
  if (Array.isArray(selectedItems[key2])) {
      // If key2 is an array, check if first object has properties
      isKey2Filled = selectedItems[key2].length > 0 && Object.keys(selectedItems[key2][0]).length > 0;
  } else {
      // If key2 is an object, check if it has properties
      isKey2Filled = Object.keys(selectedItems[key2]).length > 0;
  }
  
  return isKey1Filled && isKey2Filled;
}