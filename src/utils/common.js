export const getColumnNames = (columns) => {
    return columns.map(col => {
      return {
        header : col.columnDef.header, 
        accessorKey: col.columnDef.accessorKey
      }
    })
  }