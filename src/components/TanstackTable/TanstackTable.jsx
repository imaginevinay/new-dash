import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import FavoriteIcon from '../../assets/icons/star.svg';
import PinnedDarkIcon from "../../assets/icons/pin-dark.svg";
import RowSelection from "./RowSelection";
import MiniSearchBar from "./MiniSearchBar";
import SearchBar from "./SearchBar";
import { Select, Typography, Option, Dropdown, MenuButton, IconButton, Menu, MenuItem } from "@mui/joy";
import { Tooltip } from "@mui/joy";
import {
  MainWrapper,
  ArrowBtnWrapper,
  StyledTableContainer,
  StyledTable,
  StyledTableHead,
  MiniSearchWrapper,
  StyledTableCell,
  StyledTableRow,
  ActionButtonsWrapper,
  StyledTableBody,
  StyledBulkSelect,
  StyledCheckBox,
  HeaderColumn,
  BodyElement,
  PaginationWrapper,
  PaginationButton,
  SearchBarWrapper,
  PageTextWrapper,
} from "./TanstackTable.styles";




const TanstackTable = ({
  tableData,
  columnData,
  showColumnSearch,
  showMainSearch,
  showBulkSelect,
  deleteIcon,
  exportIcon,
  moreIcon,
}) => {
  const [globalFiltering, setGlobalFiltering] = useState("");
  const [columnFiltering, setColumnFiltering] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [enableBullkSelection, setEnableBullkSelection] = useState(false);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: tableData,
    columns: columnData,
    state: {
      globalFilter: globalFiltering,
      columnFilters: columnFiltering,
      columnVisibility: columnVisibility,
      rowSelection: rowSelection,
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFiltering,
    onColumnFiltersChange: setColumnFiltering,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
  });

  return (
    <MainWrapper className="main" isSearchBarVisible={true}>
      {showMainSearch && (
        <SearchBarWrapper>
          <SearchBar
            placeholder="Search"
            globalFiltering={globalFiltering}
            setGlobalFiltering={setGlobalFiltering}
          />
        </SearchBarWrapper>
      )}
      <StyledTableContainer className="tableContainer">
        <StyledTable
          aria-label="simple table"
          stickyHeader
          className="table"
          borderAxis="xBetween"
        >
          <StyledTableHead className="TableHead">
            <StyledTableRow className="StyledTableRow">
              {table.getHeaderGroups().map((headerGroups) =>
                headerGroups.headers.map((header, idx) => (
                  <StyledTableCell key={header.id} className="StyledTableCell">
                    <HeaderColumn
                      onClick={header.column.getToggleSortingHandler()}
                      isFirstColumn={idx === 0 && enableBullkSelection}
                    >
                      {idx === 0 && enableBullkSelection && (
                        <RowSelection
                          {...{
                            checked: table.getIsAllRowsSelected(),
                            indeterminate: table.getIsSomeRowsSelected(),
                            onChange: table.getToggleAllRowsSelectedHandler(),
                          }}
                        />
                      )}
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </HeaderColumn>
                    {showColumnSearch && (
                      <MiniSearchWrapper>
                        <MiniSearchBar
                          filterByColumn={
                            header?.column?.columnDef?.accessorKey
                          }
                          columnFiltering={columnFiltering}
                          setColumnFiltering={setColumnFiltering}
                        />
                      </MiniSearchWrapper>
                    )}
                  </StyledTableCell>
                ))
              )}
              <StyledTableCell className="StyledTableCell">
                Action
                {showBulkSelect && (
                  <StyledBulkSelect>
                    <StyledCheckBox
                      className="checkbox"
                      onChange={() =>
                        setEnableBullkSelection(!enableBullkSelection)
                      }
                    />
                    <Typography
                      level="body-lg"
                      fontWeight="md"
                      textColor="var(--joy-palette-primary-100)"
                    >
                      Bulk Select
                    </Typography>
                  </StyledBulkSelect>
                )}
              </StyledTableCell>
            </StyledTableRow>
          </StyledTableHead>
          <StyledTableBody className="StyledTableBody">
            {table.getRowModel().rows.map((row) => (
              <StyledTableRow className="StyledTableRow" key={row.id}>
                {row.getVisibleCells().map((cell, idx) => (
                  <StyledTableCell key={cell.id} className="StyledTableCell">
                    <BodyElement
                      index={idx}
                      isFirstDataCell={idx === 0 && enableBullkSelection}
                    >
                      {idx === 0 && enableBullkSelection && (
                        <RowSelection
                          {...{
                            checked: row.getIsSelected(),
                            disabled: !row.getCanSelect(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler(),
                          }}
                        />
                      )}
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </BodyElement>
                  </StyledTableCell>
                ))}
                <StyledTableCell className="StyledTableCell">
                  <ActionButtonsWrapper className="ActionButtonsWrapper">
                    {deleteIcon && (
                      <Tooltip
                        placement="bottom"
                        variant="outlined"
                        arrow
                        title="Delete"
                      >
                        <DeleteOutlinedIcon />
                      </Tooltip>
                    )}
                    {exportIcon && (
                      <Tooltip
                        placement="bottom"
                        variant="outlined"
                        arrow
                        title="Export"
                      >
                        <FileUploadOutlinedIcon />
                      </Tooltip>
                    )}
                    {moreIcon && MoreDropdown()}
                  </ActionButtonsWrapper>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </StyledTableBody>
        </StyledTable>
      </StyledTableContainer>

      <PaginationWrapper>
        <PageTextWrapper>Rows per page:</PageTextWrapper>
        <Select
          defaultValue={table.getState().pagination.pageSize}
          onChange={(e, val) => {
            table.setPageSize(val);
          }}
        >
          {[10, 20, 50, 100].map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </Select>
        <PageTextWrapper>
          Page {pagination.pageIndex + 1} of {table.getPageCount()}
        </PageTextWrapper>
        <ArrowBtnWrapper>
          <PaginationButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <KeyboardArrowLeftIcon />
          </PaginationButton>
          <PaginationButton
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <KeyboardArrowRightIcon />
          </PaginationButton>
        </ArrowBtnWrapper>
      </PaginationWrapper>
    </MainWrapper>
  );
};

export default TanstackTable;


const MoreDropdown = () => (
  <Dropdown>
            <MenuButton
              slots={{ root: IconButton }}
              slotProps={{ root: { variant: "plain", color: "neutral" } }}
              sx={{padding: 0, minWidth: '1.25rem'}}
            >
              <MoreVertOutlinedIcon className="more-icon" />
            </MenuButton>
            <Menu>
              <MenuItem>
                <img src={FavoriteIcon} />
                <Typography level="body-md">Add to Favorites</Typography>
              </MenuItem>
              <MenuItem>
                <img src={PinnedDarkIcon} />
                <Typography level="body-md">Pin Report</Typography>
              </MenuItem>
            </Menu>
          </Dropdown>
)
