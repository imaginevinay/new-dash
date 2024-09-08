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
import FavoriteIcon from "../../assets/icons/star.svg";
import PinnedDarkIcon from "../../assets/icons/pin-dark.svg";
import PinnedOutlinedIcon from '../../assets/icons/pin-outlined.svg?react';
import TrashOutlinedIcon from '../../assets/icons/trash.svg?react';
import StarOutlinedIcon from '../../assets/icons/star.svg?react';
import FavoriteFilledIcon from '../../assets/icons/favorite-filled.svg?react';
import PinnedFilledIcon from '../../assets/icons/pinned-filled.svg?react';
import MiniSearchBar from "./MiniSearchBar";
import SearchBar from "./SearchBar";
import {
  Select,
  Typography,
  Option,
  Dropdown,
  MenuButton,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/joy";
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
  // StyledBulkSelect,
  // StyledCheckBox,
  // HeaderColumn,
  // BodyElement,
  PaginationWrapper,
  PaginationButton,
  SearchBarWrapper,
  PageTextWrapper,
} from "./TanstackTable.styles";
// import IndeterminateCheckbox from "./IndeterminateCheckbox";

const TanstackTable = ({
  tableData,
  columnData,
  showColumnSearch,
  showMainSearch,
  // showBulkSelect,
  deleteIcon,
  exportIcon,
  moreIcon,
  onToggleFavorite,
  onTogglePinned,
}) => {
  const [globalFiltering, setGlobalFiltering] = useState("");
  const [columnFiltering, setColumnFiltering] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  // const [enableBullkSelection, setEnableBullkSelection] = useState(false);
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

  const MoreDropdown = (val) => (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "plain", color: "neutral" } }}
        sx={{ padding: 0, minWidth: "1.25rem" }}
      >
        <MoreVertOutlinedIcon className="more-icon" />
      </MenuButton>
      <Menu>
        <MenuItem onClick={() => onToggleFavorite(val)}>
          <img src={FavoriteIcon} />
          <Typography level="body-md">Add to Favorites</Typography>
        </MenuItem>
        <MenuItem onClick={() => onTogglePinned(val)}>
          <img src={PinnedDarkIcon} />
          <Typography level="body-md">Pin Report</Typography>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
  
  const selectedRows = table.getSelectedRowModel().flatRows;

  return (
    <MainWrapper className="main">
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
        <StyledTable stickyHeader>
          <StyledTableHead className="TableHead">
            <StyledTableRow>
              {table.getHeaderGroups().map((headerGroups) =>
                headerGroups.headers.map(header => (
                  <th key={header.id}>{flexRender(header.column.columnDef.header,header.getContext())}</th>
                ))
              )}
              <th >Action</th>
            </StyledTableRow>
            {showColumnSearch && <StyledTableRow className="StyledTableRow-withminisearch">
              {table.getHeaderGroups().map((headerGroups) =>
                headerGroups.headers.map(header => (
                  <th key={header.id}  colSpan={1}>
                    { header.id !== 'select' && (
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
                  </th>
                ))
              )}
              <th colSpan={1}></th>
            </StyledTableRow>}
            {selectedRows.length > 0 && <StyledTableRow className="selectedItemsWrapper">
              <th colSpan={8}>
                <span>{selectedRows.length} selected</span>
                  <Button sx={{mr: '1rem'}}><StarOutlinedIcon style={{filter: 'brightness(0) invert(1)', width: '1rem', height: '1rem'}}/>Favorite</Button>
                  <Button sx={{mr: '1rem'}}><PinnedOutlinedIcon style={{filter: 'brightness(0) invert(1)', width: '1rem', height: '1rem'}}/>Pin</Button>
                  <Button sx={{mr: '1rem'}}><TrashOutlinedIcon style={{filter: 'brightness(0) invert(1)', width: '1rem', height: '1rem'}}/>Delete</Button>                
              </th> 
            </StyledTableRow>}
          </StyledTableHead>
          <StyledTableBody className="StyledTableBody">
            {table.getRowModel().rows.map((row) => (
              <StyledTableRow className={`${row.getIsSelected() ? "selected-row" : ""}`} key={row.id}>
                {row.getVisibleCells().map((cell, idx) => (
                  <StyledTableCell key={cell.id} className="StyledTableCell">
                    <div>
                      {flexRender(cell.column.columnDef.cell,cell.getContext())}
                      {idx === 0 && row.original.isFavorite && <FavoriteFilledIcon/>}
                      {idx === 0 && row.original.isPinned && <PinnedFilledIcon/>}
                    </div>
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
                    {moreIcon && MoreDropdown(Number(row.id)+1)}
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

