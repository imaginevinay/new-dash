// StyledComponents.js
import { Input, styled } from "@mui/joy";
import { Box, Button, Sheet, Table, Typography, Checkbox } from "@mui/joy";

export const MainWrapper = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  // height: '100%',
}));

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
  position: 'absolute',
  zIndex: 2,
  right: '45px', // Changed from left: '73.5%' to right: '0' for better responsiveness
  top: '-4rem', // Adjusted from top: '-7%' to a fixed value
  width: '29.1875rem'
}));

export const StyledTableContainer = styled(Sheet)(() => ({
  boxShadow: "none",
  background: "#FFF",
  overflow: 'auto',
  // position: 'relative',
  // height: '100%',
  // border: `1px solid ${theme.palette.secondary['dividerColor']}`,
  // borderTop: 0
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
  marginTop: "1rem",
}));

export const StyledTableHead = styled("thead")(() => ({  
  "& tr": {
    fontSize: '1.125rem',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}));

export const StyledTableBody = styled("tbody")(() => ({
  "& tr": {
    fontSize: '1.125rem',
    fontWeight: 400
  },
}));

export const StyledTableCell = styled("td")(() => ({
  textAlign: "center",
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

export const PaginationWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "1.5rem",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "1rem",
  // border: `1px solid ${theme.palette.secondary['dividerColor']}`,
  // borderTop: 0
}));

export const PaginationButton = styled(Button)(({ theme, disabled }) => ({
  border: `0.5px solid ${theme.palette.secondary['disabledText']}`,
  padding: "5px",
  width: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: disabled ? 0.6 : 1,
  minWidth: "auto",
  background: theme.palette.primary[400],
  cursor: disabled ? "not-allowed" : "pointer",
  "& svg": {
    width: "2rem",
    height: "1.2rem",
    color: theme.palette.primary[200],
  },
  "&:hover": {
    background: theme.palette.primary[400]
  }
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
  borderRadius: '0.625rem',
  "& ::placeholder": {
      textAlign: "center"
    }
}));

export const StyledBulkSelect = styled('div')(({theme}) => ({
  border: 'none',
  padding: '0.75rem 1.5rem',
  background: theme.palette.secondary['lightYellow'],
  fontSize: '1.125rem',
  fontWeight: 500,
  borderRadius: '0.25rem',
  marginTop: '1rem',
  display: 'flex',
  gap: '0.62rem',
  alignItems: 'center',
  justifyContent:'center',
  "& .MuiTypography-root": {
    color: theme.palette.primary[100]
  }
}));

export const StyledCheckBox = styled(Checkbox)(()=> ({
  width: '1.5rem',
  height: '1.5rem'
}))



export const HeaderColumn = styled('span')(({isFirstColumn})=> ({
  display: isFirstColumn ? 'flex' : 'block',
  gap: '2rem'
}))

export const BodyElement = styled('span')(({isFirstDataCell, index, isWorkspaceTable})=> ({
  display: isFirstDataCell ? 'flex' : 'block',
  marginLeft: isFirstDataCell ? '1rem' : '0',
  gap: '2rem',
  textAlign: index === 0 ? 'left': 'center',
  width: index === 0 ? 'fit-content': 'auto',
  paddingLeft: (() => {
    if (index === 0) {
      return isWorkspaceTable ? '3rem' : '1rem';
    }
    return '0';
  })()
}))


export const ArrowBtnWrapper = styled('div')({
  display: 'flex',
  gap: '0.5rem'
})