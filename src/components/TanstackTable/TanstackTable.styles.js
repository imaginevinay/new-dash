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
  right: '45px',
  top: '-4rem',
  width: '29.1875rem'
}));

export const StyledTableContainer = styled(Sheet)(() => ({
  boxShadow: "none",
  background: "#FFF",
  overflow: 'auto',
}));

export const StyledTable = styled(Table)(() => ({
  '& thead': {
    position: 'sticky',
    top: 0,
    background: '#FFF',
    zIndex: 1,
  },
}));

export const MiniSearchWrapper = styled(Box)(() => ({
  // marginTop: "1rem",
}));

export const StyledTableHead = styled("thead")(({theme}) => ({
  "& tr": {
    fontSize: "1.125rem",
    fontWeight: 600,
    "th": {
      backgroundColor: theme.palette.primary[50],
      textAlign: 'center'
    },
    ".header-checkbox": {
      visibility: "hidden",
    },
    ".header-checkbox:checked": {
      visibility: 'visible'
    },
    "&:hover": {
      backgroundColor: "transparent",
      ".header-checkbox": {
      visibility: "visible",
    }
    },
  },
  "& tr:first-of-type": {
    // borderTop: '1px solid rgba(128, 128, 128, 0.25)',
    // borderCollapse: 'collapse',
    "th": {
      padding: '1.25rem',
      borderTop: '1px solid rgba(128, 128, 128, 0.25)',
      borderCollapse: 'collapse',
    },
    "th:first-of-type": {
      borderLeft: '1px solid rgba(128, 128, 128, 0.25)',
      borderTopLeftRadius: '0.5rem',
    },
    "th:nth-of-type(2)": {
    },
    "th:last-of-type": {
      borderRight: '1px solid rgba(128, 128, 128, 0.25)',
      borderTopRightRadius: '0.5rem',
    }
  },
  "& tr:nth-of-type(2)": {
    "th": {
      padding: '1.25rem',
      borderBottom: '1px solid rgba(217, 217, 217, 0.25)',
    },
    "th:first-of-type": {
      // borderLeft: "1px solid rgba(128, 128, 128, 0.25)",
    },
    "th:last-of-type": {
      // borderRight: "1px solid rgba(128, 128, 128, 0.25)",
    }
  },
  "& .selectedItemsWrapper": {
    "th": {
      fontWeight: 400,
      padding: '1.25rem 1.25rem 1.25rem 2rem',
      border: '1px solid #D9D9D9',
      borderTopLeftRadius: '0.5rem',
      borderTopRightRadius: '0.5rem',
      backgroundColor: theme.palette.primary[400],
      textAlign: 'left',
      "span": {
        marginRight: '2.5rem'
      },
      ".MuiButton-root": {
        // borderRadius: 0,
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        fontWeight: 500,
        "svg": {
          marginRight: '0.62rem'
        }
      }
    },
  }
}));

export const StyledTableBody = styled("tbody")(() => ({
  "& tr": {
    fontSize: '1.125rem',
    fontWeight: 400,
    ".row-checkbox": {
      visibility: "hidden",
    },
    ".row-checkbox:checked": {
      visibility: 'visible'
    },
    "&:hover": {
      ".row-checkbox": {
      visibility: "visible",
    }
    },
    "& td": {
      padding: "1.25rem 1.88rem",
      borderBottom: "1px solid rgba(128, 128, 128, 0.25)",
      textAlign: 'center'
    },
    "& td:first-of-type": {
      padding: "1.25rem",
      // borderLeft: "1px solid rgba(128, 128, 128, 0.25)",
    },
    "& td:last-of-type": {
      padding: "1.25rem",
      // borderRight: "1px solid rgba(128, 128, 128, 0.25)",
    }
  },
}));

export const StyledTableCell = styled("td")(() => ({
  // padding: "1.25rem 1.88rem",

}));

export const StyledTableRow = styled("tr")(() => ({
  cursor: "pointer",
  "&.selected-row": {
    background: "#F5F6FA"
  },
  "&:hover": { background: "#F5F6FA" },
  "& th": {
    textAlign: 'center',
  },
  "& th:first-of-type": {
    width: '50px'
  },  
}));

export const ActionButtonsWrapper = styled(Box)(() => ({
  display: "flex",
  gap: "1.25rem",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
  // padding: "1.25rem 1.25rem 1.25rem 0",
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
  padding: "1rem 5rem",
  // marginRight: '5%';
  // border: `1px solid ${theme.palette.secondary[300]}`,
  // borderTop: 0
}));

export const PaginationButton = styled(Button)(({ theme, disabled }) => ({
  // border: `0.5px solid ${theme.palette.secondary[100]}`,
  padding: "5px",
  width: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: disabled ? 0.6 : 1,
  minWidth: "auto",
  background: theme.palette.primary[400],
  cursor: disabled ? "not-allowed" : "pointer",
  boxShadow: theme.shadow.lg,
  "& svg": {
    width: "2rem",
    height: "1.2rem",
    color: theme.palette.primary[200],
  },
  "&:hover": {
    background: '#F0F4F8'
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
  background: theme.palette.secondary[50],
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

export const ArrowBtnWrapper = styled('div')({
  display: 'flex',
  gap: '0.5rem'
})