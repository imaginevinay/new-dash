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
    marginRight: '2.5rem',
    borderRadius: '2.5rem',
    border: '1px solid #89939E',
    "&:hover": {
      backgroundColor: "transparent !important",
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
  }));


  export const TabPanelWrapper = styled(TabPanel)(() => ({
    padding: 0,
  }));