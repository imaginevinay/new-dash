// TanstackTable.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import Swal from "sweetalert2";
// import { AppContext } from "utils/AppContext";
// import { getColumnNames } from "../../utils/common";
// import MiniSearchBar from "components/ui/MiniSearchBar";
// import SearchBar from "components/ui/SearchBar";
// import ColumnVisDropDown from "components/DropDowns/ColumnVisDropDown";
// import ExportDropDown from "components/DropDowns/ExportDropDown";
// import ApproveRejectModal from "components/Modals/ApproveRejectModal";
// import ViewMoreModal from "components/Modals/ViewMoreModal";
// import InfoModal from "components/Modals/InfoModal";
// import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
// import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import TrashIcon from "@mui/icons-material/Delete";
// import CheckIcon from "@mui/icons-material/Check";
// import CrossIcon from "@mui/icons-material/Close";
// import EyeIcon from "@mui/icons-material/RemoveRedEye";
// import SwapVertIcon from "@mui/icons-material/SwapVert";
// import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
// import InfoIcon from "assets/icons/info.svg?react";
// import ViewDetailsIcon from "assets/icons/frame.svg?react";
// import UserProfileIcon from "assets/icons/userProfile.svg?react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import RowSelection from "./RowSelection";
import {
  MainWrapper,
  // SecondaryWrapper,
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
  // StyledButton,
  // PaginationWrapper,
  // PaginationButton,
  // MobileRowWrapper,
  // MobileRowContent,
  // UserProfileIconWrapper,
  // MobileDataWrapper,
  // MobileDataLabel,
  // MobileDataValue,
  // MobileBtnWrapper,
  // // SearchBarWrapper,
  // UserLabelTitleWrapper,
  // ViewDetailsWrapper,
  // PageTextWrapper
} from "./TanstackTable.styles";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import MiniSearchBar from "./MiniSearchBar";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const TanstackTable = ({
  tableData,
  columnData,
  reqType,
  showColumnSearch,
  showBulkSelect,
  deleteIcon, 
  exportIcon, 
  moreIcon
  // showColVisibilityDropDown,
  // showExportAsDropDown,
  // showApprove,
  // showReject,
  // showRevoke,
  // showRemoveRequest,
  // showViewMore,
  // showViewDetails,
  // showInfo,
}) => {
  const [globalFiltering, setGlobalFiltering] = useState("");
  const [columnFiltering, setColumnFiltering] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [enableBullkSelection, setEnableBullkSelection] = useState(false);
  // const [openBaseModal, setOpenBaseModal] = useState(false);
  // const [openViewMoreModal, setOpenViewMoreModal] = useState(false);
  // const [openInfoModal, setOpenInfoModal] = useState(false);
  // const [action, setAction] = useState("");
  // const [rowData, setRowData] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // const { isMdScreen, isMobileScreen } = useContext(AppContext);
  const navigateTo = useNavigate();

  // const handleOpenBaseModal = (action, rowData) => {
  //   setOpenBaseModal(true);
  //   setAction(action);
  //   setRowData(rowData);
  // };

  // const handleOpenViewDataModal = (action, rowData) => {
  //   setOpenViewMoreModal(true);
  //   setAction(action);
  //   setRowData(rowData);
  // };

  // const handleOpenInfoModal = (action, rowData) => {
  //   setOpenInfoModal(true);
  //   setAction(action);
  //   setRowData(rowData);
  // };

  // const handleCloseBaseModal = (submit = false) => {
  //   setOpenBaseModal(false);
  //   setAction("");
  //   setRowData({});
  //   if (action === "approve" && submit) {
  //     Swal.fire({
  //       title: "Approved!",
  //       text: "Other approver's are notified about it",
  //       icon: "success",
  //       confirmButtonText: "OK",
  //       confirmButtonColor: "#39B001",
  //     });
  //   }
  //   if (action === "reject" && submit) {
  //     Swal.fire({
  //       title: "Rejected!",
  //       text: "Request is rejected",
  //       icon: "error",
  //       confirmButtonText: "OK",
  //       confirmButtonColor: "#FF3131",
  //     });
  //   }
  // };

  // const handleCloseViewMoreModal = () => {
  //   setOpenViewMoreModal(false);
  //   setAction("");
  //   setRowData({});
  // };

  // const handleCloseInfoModal = () => {
  //   setOpenInfoModal(false);
  //   setAction("");
  //   setRowData({});
  // };

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

  // let definiteColumns = table.getAllLeafColumns();
  // let columnNames = getColumnNames(definiteColumns);

  // const actionButtons = (row) => (
  //   <>
  //     {showApprove && (
  //       <StyledButton
  //         variant={isMdScreen ? "contained" : "outlined"}
  //         color="success"
  //         onClick={() => handleOpenBaseModal("approve", row)}
  //       >
  //         <CheckIcon className="mr-2 z-10"/>
  //         <span>Approve</span>
  //       </StyledButton>
  //     )}
  //     {showReject && (
  //       <StyledButton
  //         variant={isMdScreen ? "contained" : "outlined"}
  //         color="error"
  //         onClick={() => handleOpenBaseModal("reject", row)}
  //       >
  //         <CrossIcon className="mr-2"/>
  //         <span>Reject</span>
  //       </StyledButton>
  //     )}
  //     {showRevoke && (
  //       <StyledButton
  //         variant={isMdScreen ? "contained" : "outlined"}
  //         color="error"
  //         onClick={() => handleOpenBaseModal("reject", row)}
  //       >
  //         <CrossIcon className="mr-2"/>
  //         <span>Revoke</span>
  //       </StyledButton>
  //     )}
  //     {showRemoveRequest && (
  //       <StyledButton
  //         variant={isMdScreen ? "contained" : "outlined"}
  //         color="error"
  //         onClick={() => handleOpenBaseModal("reject", row)}
  //       >
  //         <TrashIcon className="mr-2"/>
  //         <span>Remove Request</span>
  //       </StyledButton>
  //     )}
  //     {showViewMore && (
  //       <ViewDetailsIcon
  //        onClick={() => openDetailsHandler(row)}
  //       />
  //     )}
  //     {showViewDetails && (
  //       <StyledButton
  //         variant={isMdScreen ? "contained" : "outlined"}
  //         // onClick={() => handleOpenViewDataModal("viewMore", row)}
  //         onClick={() => openDetailsHandler(row)}
  //       >
  //         <EyeIcon className="mr-2"/>
  //         <span>View Details</span>
  //       </StyledButton>
  //     )}
  //     {showInfo && (
  //       <InfoIcon
  //         onClick={() => handleOpenInfoModal("info", row)}
  //       />
  //     )}
  //   </>
  // );

  const openDetailsHandler = (row) => {
    const { original } = row;
    navigateTo(`/view-details/${original.id}`, {
      state: { ...original, reqType: reqType },
    });
  };

  return (
    <MainWrapper className="main">
      {/* <SecondaryWrapper
        className="secondary"
        showColVisibilityDropDown={showColVisibilityDropDown}
        showExportAsDropDown={showExportAsDropDown}
      >
        {!isMdScreen && showColVisibilityDropDown && (
          <ColumnVisDropDown
            columns={table.getAllLeafColumns()}
            columnNames={columnNames}
          />
        )}
        {!isMdScreen && showExportAsDropDown && <ExportDropDown />}
        {isMdScreen && (
          <SearchBarWrapper>
            <SearchBar
              placeholder="Search"
              globalFiltering={globalFiltering}
              setGlobalFiltering={setGlobalFiltering}
            />
          </SearchBarWrapper>
        )}
      </SecondaryWrapper> */}

      <StyledTableContainer className="tableContainer">
        <StyledTable
          aria-label="simple table"
          stickyHeader
          className="table"
          borderAxis="xBetween"
        >
          {/* {!isMobileScreen && ( */}
          <StyledTableHead className="TableHead">
            <StyledTableRow className="StyledTableRow">
              {table.getHeaderGroups().map((headerGroups) =>
                headerGroups.headers.map((header, idx) => (
                  <StyledTableCell key={header.id} className="StyledTableCell">
                    {/* {!isMobileScreen && ( */}
                    {showColumnSearch && <MiniSearchWrapper>
                      <MiniSearchBar
                        filterByColumn={header?.column?.columnDef?.accessorKey}
                        columnFiltering={columnFiltering}
                        setColumnFiltering={setColumnFiltering}
                      />
                    </MiniSearchWrapper>}
                    {/* )} */}
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
                      {/* {header.column.getCanSort() && <SwapVertIcon />} */}
                    </HeaderColumn>
                  </StyledTableCell>
                ))
              )}
              <StyledTableCell className="StyledTableCell">
                {showBulkSelect && <StyledBulkSelect>
                  <StyledCheckBox className="checkbox" onChange={() => setEnableBullkSelection(!enableBullkSelection)}/>
                  <span>Bulk Select</span>
                </StyledBulkSelect>}
                Action
              </StyledTableCell>
            </StyledTableRow>
          </StyledTableHead>
          {/* )} */}
          {/* {!isMobileScreen ? ( */}
          <StyledTableBody className="StyledTableBody">
            {table.getRowModel().rows.map((row) => (
              <StyledTableRow className="StyledTableRow" key={row.id}>
                {row.getVisibleCells().map((cell, idx) => (
                  <StyledTableCell
                    key={cell.id}
                    className="StyledTableCell"
                    onClick={() => openDetailsHandler(row)}
                  >
                    
                    <BodyElement isFirstDataCell={idx === 0 && enableBullkSelection}>
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
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </BodyElement>
                  </StyledTableCell>
                ))}
                {/* {!isMdScreen && ( */}
                <StyledTableCell className="StyledTableCell">
                  <ActionButtonsWrapper className="ActionButtonsWrapper">
                    {/* {actionButtons(row)} */}
                    {deleteIcon && <DeleteOutlinedIcon />}
                    {exportIcon && <FileUploadOutlinedIcon />}
                    {moreIcon && <MoreVertOutlinedIcon />}
                  </ActionButtonsWrapper>
                </StyledTableCell>
                {/* )} */}
              </StyledTableRow>
            ))}
          </StyledTableBody>
          {/* ) : (
            table.getRowModel().rows.map((row) => (
              <MobileRowWrapper key={row.id}>
                <MobileRowContent className="MobileRowContent">
                  <UserLabelTitleWrapper>
                    <UserProfileIconWrapper className="UserProfileIconWrapper">
                      <UserProfileIcon />
                    </UserProfileIconWrapper>
                    <MobileDataWrapper>
                      <MobileDataLabel>
                        {row?.original?.application}
                      </MobileDataLabel>
                      <MobileDataValue>{row?.original?.screen}</MobileDataValue>
                    </MobileDataWrapper>
                  </UserLabelTitleWrapper>
                  <MobileBtnWrapper>
                    {showApprove && (
                      <StyledButton
                        variant="outlined"
                        color="success"
                        onClick={() => handleOpenBaseModal("approve", row)}
                      >
                        <span>Approve</span>
                      </StyledButton>
                    )}
                    {showReject && (
                      <StyledButton
                        variant="outlined"
                        color="error"
                        onClick={() => handleOpenBaseModal("reject", row)}
                      >
                        <span>Reject</span>
                      </StyledButton>
                    )}
                    {showRevoke && (
                      <StyledButton
                        variant="outlined"
                        color="error"
                        onClick={() => handleOpenBaseModal("reject", row)}
                      >
                        <span>Revoke</span>
                      </StyledButton>
                    )}
                  </MobileBtnWrapper>
                </MobileRowContent>
                <MobileRowContent>
                  <MobileDataWrapper>
                    <MobileDataLabel>Requested By</MobileDataLabel>
                    <MobileDataValue isDetail>
                      {row?.original?.requestedBy}
                    </MobileDataValue>
                  </MobileDataWrapper>
                  <MobileDataWrapper>
                    <MobileDataLabel>Requested On</MobileDataLabel>
                    <MobileDataValue isDetail>
                      {row?.original?.requestedOn}
                    </MobileDataValue>
                  </MobileDataWrapper>
                  <MobileDataWrapper>
                    <MobileDataLabel>Requested Time</MobileDataLabel>
                    <MobileDataValue isDetail>
                      {row?.original?.requestedTime}
                    </MobileDataValue>
                  </MobileDataWrapper>
                </MobileRowContent>
                <ViewDetailsWrapper onClick={() => openDetailsHandler(row)}>
                  <ChevronRightSharpIcon />
                </ViewDetailsWrapper>
              </MobileRowWrapper>
            ))
          )} */}
        </StyledTable>
      </StyledTableContainer>

      {/* <PaginationWrapper>
        <PageTextWrapper>Page {pagination.pageIndex + 1} of {table.getPageCount()}</PageTextWrapper>
        <PaginationButton
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <KeyboardDoubleArrowLeftIcon />
        </PaginationButton>
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
        <PaginationButton
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          <KeyboardDoubleArrowRightIcon />
        </PaginationButton>
      </PaginationWrapper> */}

      {/* <ApproveRejectModal
        open={openBaseModal}
        onClose={(data) => handleCloseBaseModal(data)}
        action={action}
        rowData={rowData}
      />
      <ViewMoreModal
        open={openViewMoreModal}
        onClose={handleCloseViewMoreModal}
        action={action}
        rowData={rowData}
      />
      <InfoModal
        open={openInfoModal}
        onClose={handleCloseInfoModal}
        action={action}
        rowData={rowData}
      /> */}
    </MainWrapper>
  );
};

export default TanstackTable;

// TanstackTable.propTypes = {
//   tableData: PropTypes.array,
//   columnData: PropTypes.array,
//   showColVisibilityDropDown: PropTypes.bool,
//   showExportAsDropDown: PropTypes.bool,
//   showApprove: PropTypes.bool,
//   showReject: PropTypes.bool,
//   showRevoke: PropTypes.bool,
//   showRemoveRequest: PropTypes.bool,
//   showViewMore: PropTypes.bool,
//   showViewDetails: PropTypes.bool,
//   showInfo: PropTypes.bool,
// };
