import { AspectRatio, Avatar, Box, Button, Drawer, Input, Sheet, styled, Typography } from "@mui/joy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const SheetMenu = styled(Sheet)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  left: "1.25rem",
  right: 0,
  height: "3.75rem",
  width: "28.125rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 16px",
  borderRadius: "1rem 1rem 0rem 0rem",
  border: "1px solid #B9BBBE",
  background: theme.palette.primary[50],
  cursor: "pointer",
}));

export const MenuTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary[200],
  fontSize: "1.125rem",
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem'
}));

export const MoreIcon = styled(ExpandLessIcon)(({ theme }) => ({
  color: theme.palette.primary[200],
  fontSize: "1.5rem",
}));

export const LessIcon = styled(ExpandMoreIcon)(({ theme }) => ({
    color: theme.palette.primary[200],
    fontSize: "1.5rem",
}));

export const BottomDrawer = styled(Drawer)(({ theme }) => ({
    "& .MuiDrawer-content": {
        width: "28.125rem",
        height: "calc(100vh - 5.25rem)",
        maxHeight: "100vh",
        marginLeft: '1.25rem',
        background: theme.palette.primary[50],
        boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.25)",
    },
}));

export const Container = styled('div')(() => ({
    padding: '2.5rem 1.25rem 1.25rem 1.25rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
}))

export const FlexSpace = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2.5rem'
}));

export const SearchBox = styled(Input)(() => ({
   width: '100%',
   padding: '0.62rem 1.25rem',
   fontSize: '1rem'
}));

export const FlexColumn = styled(Box)(({gap = '1.75rem', noMarginBottom = false}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: gap,
    marginBottom: !noMarginBottom ? '2rem' : 0,
    "& .MuiFormLabel-root": {
        fontSize: '1rem'
    }
}));


export const Title = styled(Typography)(({theme}) => ({
    fontSize: '1rem',
    color: theme.palette.primary[300]
 }));


 export const FlexGap = styled(Box)(({gap = '0.75rem'}) => ({
    display: 'flex',
    gap: gap,
    alignItems: 'center'
}));

 export const WorkspaceName = styled(Typography)(({theme}) => ({
    fontSize: '1rem',
    color: theme.palette.primary[200]
 }));

 export const AvatarIcon = styled(Avatar)(() => ({
    
 }));

 export const CreateWorkspaceBtn = styled(Button)(({theme, width="100%"}) => ({
    background: theme.palette.primary[100],
    width: width,
    marginTop: 'auto',
    fontSize: '1.125rem',
    display: 'flex',
    padding: '0.75rem',
    gap: '0.62rem',
    fontWeight: 500,
    "&:hover": {
        background: theme.palette.primary[100],
    }
 }));


 export const FlexEnd = styled('div') (() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    gap:'1.25rem',
    alignItems: 'center',
    marginTop: 'auto',
 }))

 export const AspectBox = styled(AspectRatio)(()=> ({
    width: '6.25rem',
    height: '6.25rem',
    borderRadius: '2rem',
    "& .MuiAspectRatio-content": {
        height: '100%'
    },
    "& img": {
        width: '2.5rem !important',
        height: '2.5rem !important'
    }
 }))

 
export const ActionBtns = styled(Button)(({theme})=> ({
    background: theme.palette.primary[50],
    display: 'flex',
    color: theme.palette.primary[200],
    justifyContent: 'flex-start',
    gap: '0.62rem',
    "&:hover": {
        background: theme.palette.primary[50], 
    },
    "&.Mui-disabled": {
        background: theme.palette.primary[50], 
    }
}));

