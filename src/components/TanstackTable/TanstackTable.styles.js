// StyledComponents.js
import { Input, styled } from "@mui/joy";
import { Box, Button, Sheet, Table, Typography, Checkbox } from "@mui/joy";

export const MainWrapper = styled(Box)(() => ({}));

export const SecondaryWrapper = styled(Box)(
  ({ theme, showColVisibilityDropDown, showExportAsDropDown }) => ({
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    marginBottom:
      showColVisibilityDropDown || showExportAsDropDown
        ? theme.spacing(1.5)
        : "",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      background: "#F5F7FA",
    },
  })
);
export const SearchBarWrapper = styled(Box)(() => ({
  padding: "1rem 1.25rem",
  width: "100%",
}));
export const StyledTableContainer = styled(Sheet)(() => ({
  boxShadow: "none",
  background: "#FFF",
  height: '35vh',
  overflow: 'auto',
  position: 'relative',
  // width: '100%',
  // overflowX: 'hidden',
  // [theme.breakpoints.down('md')]: {
  //   height: '62vh',
  //   border: 'none',
  // },
  // [theme.breakpoints.down('xs')]: {
  //   height: '51.6vh',
  //   overflowX: 'hidden',
  // },
}));

export const StyledTable = styled(Table)(() => ({
  '& thead': {
    position: 'sticky',
    top: 0,
    background: '#FFF',
    zIndex: 1,
    "& td": {
      padding: '1.25rem',
      borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
    }
  },

  "& tbody": {
    "& td" : {
      padding : 0
    }
  }

  
}));

export const MiniSearchWrapper = styled(Box)(() => ({
  marginBottom: "2rem",
}));

export const StyledTableHead = styled("thead")(() => ({
  // "& .MuiTableCell-head": {
  //   backgroundColor: theme.palette.background.paper
  // }
  
  "& tr": {
    fontSize: '1.125rem',
    fontWeight: 600,
  }
}));

export const StyledTableBody = styled("tbody")(() => ({
  // "& .MuiTableCell-head": {
  //   backgroundColor: theme.palette.background.paper
  // }
  "& tr": {
    fontSize: '1.125rem',
    fontWeight: 400
  },
}));

export const StyledTableCell = styled("td")(() => ({
  textAlign: "center",
  // '&.MuiTableCell-body': {
  //   paddingTop : 0,
  //   paddingBottom: 0,
  //   overflow: 'hidden',
  //   [theme.breakpoints.down('md')]: {
  //     paddingTop : '1rem',
  //     paddingBottom: '1rem',
  //     overflow: 'hidden',
  //   },
  // }
}));

export const StyledTableRow = styled("tr")(() => ({
  cursor: "pointer",
  "&:hover": { background: "#F5F6FA" },
}));

export const ActionButtonsWrapper = styled(Box)(() => ({
  display: "flex",
  gap: "1.25rem",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
  padding: "1.25rem 1.25rem 1.25rem 0",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "auto",
  },
}));

export const PaginationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "1.5rem",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "1rem",
  border: "1px solid #dcdcdc",
  borderTop: 0,
  boxShadow: "0px 0px 6px 0px rgba(185, 187, 190, 0.25)",
  [theme.breakpoints.down("xs")]: {
    gap: "0.5rem",
    padding: "1.4rem",
    marginTop: 0,
    justifyContent: "center",
  },
}));

export const PaginationButton = styled(Button)(({ theme, disabled }) => ({
  border: "0.5px solid #212121",
  padding: "5px",
  width: "2rem",
  borderRadius: "2.75rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: disabled ? 0.6 : 1,
  minWidth: "auto",
  background: "#F5F6FA",
  cursor: disabled ? "not-allowed" : "pointer",
  "& svg": {
    width: "2rem",
    height: "1.2rem",
    color: theme.palette.text.primary,
  },
  [theme.breakpoints.down("xs")]: {
    padding: "4px",
    width: "2rem",
    "& svg": {
      width: "2rem",
      height: "1rem",
    },
  },
}));

export const MobileRowWrapper = styled(Box)(({ theme }) => ({
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  marginBottom: theme.spacing(1.5),
  background: theme.palette.common.white,
}));

export const MobileRowContent = styled(Box)(() => ({
  display: "flex",
  padding: "1.25rem",
  justifyContent: "space-between",
}));

export const UserProfileIconWrapper = styled(Box)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  padding: "8.96px",
  borderRadius: "6.25rem",
  background: theme.palette.common.white,
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  "& > svg": {
    width: "0.875rem",
    height: "0.875rem",
  },
}));

export const UserLabelTitleWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "0.75rem",
}));

export const MobileDataWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  fontSize: "0.75rem",
}));

export const MobileDataLabel = styled("span")(({ theme }) => ({
  fontSize: "0.75rem",
  color: theme.palette.text.primary,
  fontWeight: "500",
}));

export const MobileDataValue = styled("span")(({ isDetail }) => ({
  fontSize: isDetail ? "0.75rem" : "0.625rem",
  color: "#808080",
  fontWeight: "normal",
  minWidth: "fit-content",
}));

export const MobileBtnWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
}));

export const ViewDetailsWrapper = styled(Box)(({ theme }) => ({
  borderTop: "1px solid rgba(171, 190, 209, 0.30)",
  marginLeft: "1.25rem",
  marginRight: "1.25rem",
  display: "flex",
  justifyContent: "flex-end",
  padding: "0.5rem 0",
  cursor: "pointer",
  color: theme.palette.secondary.main,
}));

export const PageTextWrapper = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.75rem",
    marginRight: "auto",
  },
}));


export const StyledInput = styled(Input)(({theme}) => ({
  height: '3rem',
  border: 'none',
  background: theme.palette.primary[50],
  boxShadow: '0px 4px 12px 0px rgba(13, 10, 44, 0.06)',
  fontSize: '0.875rem',
  fontWeight: 400,
  color: '#ABB7C2',
  borderRadius: '0.625rem'
}));

export const StyledBulkSelect = styled('div')(() => ({
  border: 'none',
  padding: '0.75rem 1.5rem',
  background: '#F5F5F5',
  boxShadow: '0px 4px 12px 0px rgba(13, 10, 44, 0.06)',
  fontSize: '1.125rem',
  fontWeight: 500,
  color: '#212121',
  borderRadius: '0.25rem',
  marginBottom: '2rem',
  display: 'flex',
  gap: '0.62rem',
  alignItems: 'center',
  justifyContent:'center',
  "& span": {
    minWidth: 'fit-content'
  }
  
}));

export const StyledCheckBox = styled(Checkbox)(()=> ({
  width: '1.5rem',
  height: '1.5rem'
}))
