import { styled, Tab, TabPanel, Tabs } from "@mui/joy";



export const TableContainer = styled('div')(()=> ({
    marginTop: '3rem',
    marginLeft: '2.5rem',
    marginRight: '2.5rem',
}));

export const TabsWrapper = styled(Tabs)(({ theme }) => ({
    backgroundColor: theme.palette.primary[50],
    margin: '3.5rem 2.5rem 2.5rem 2.5rem'
  }));


export const StyledTab = styled(Tab)(({ theme }) => ({
    opacity: '0.5',
    marginRight: '1.25rem',
    borderRadius: '2.5rem',
    "&:hover": {
      backgroundColor: "inherit",
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary[100],
      border: 'none',
      color: theme.palette.primary[50],
      opacity: '1',
      "&::after": {
        background: 'transparent',
      },
    },
    "&:not(.Mui-selected, [aria-selected='true'])": {
      color: theme.palette.primary[100],
      backgroundColor: theme.palette.primary[50],
      border: `1px solid ${theme.palette.primary[100]}`,
      opacity: 1,
      "& .MuiSvgIcon-root": {
        color: theme.palette.primary[100],
      },
    },
    "&:not(.Mui-selected, [aria-selected='true']):hover": {
      backgroundColor: theme.palette.primary[100],
      color: theme.palette.primary[50],
      "& .MuiSvgIcon-root": {
        color: theme.palette.primary[50],
      },
    }
  }));


  export const TabPanelWrapper = styled(TabPanel)(() => ({
    padding: 0,
  }));