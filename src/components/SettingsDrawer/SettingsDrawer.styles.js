import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Drawer,
  Input,
  Menu,
  MenuButton,
  styled,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Typography,
} from "@mui/joy";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


export const RightDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-content": {
    width: "50rem",
    height: "calc(100vh - 5.25rem)",
    marginTop: "4.5rem",
    background: theme.palette.primary[50],
    boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.25)",
  },
}));

export const Container = styled("div")(() => ({
  padding: "2.5rem 0",
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));

export const FlexSpace = styled(Box)(() => ({
  display: "flex",
  padding: "0 2.5rem",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2.5rem",
  "& span": {
    fontSize: "1.125rem",
  },
  "& img": {
    width: "1.25rem",
    height: "1.25rem",
    cursor: "pointer",
  },
}));

export const SettingTabs = styled(Tabs)(({ theme }) => ({
  padding: "0 2.94rem 0 1.19rem",
  width: "100%",
  height: "100%",
  background: theme.palette.primary[50],
}));

export const TabItem = styled(Tab)(({ theme }) => ({
  gap: "1rem !important",
  "&.Mui-selected": {
    background: theme.palette.primary[50],
    "&::after": {
      background: theme.palette.primary[100],
      width: "0.3125rem",
      borderRadius: "0 0.5rem 0.5rem 0",
    },
  },
  "&:hover": {
    backgroundColor: `${theme.palette.primary[50]} !important`,
  },
}));

export const TabItemWrapper = styled(TabList)(() => ({
  gap: "1rem !important",
}));

export const TabPannnel = styled(TabPanel)(() => ({
  padding: "0 0 0 2.94rem",
}));

export const FlexColumn = styled(Box)(
  ({ theme, gap = "1.75rem", noMarginBottom = false }) => ({
    display: "flex",
    flexDirection: "column",
    gap: gap,
    marginBottom: !noMarginBottom ? "2rem" : 0,
    "& .MuiFormLabel-root": {
      fontSize: "1rem",
    },
    "& .MuiInput-root,.MuiTextarea-root,.MuiAutocomplete-root": {
        backgroundColor: theme.palette.primary[50],
        border:  `1px solid ${theme.palette.secondary['secondary-hover']}`
    }
  })
);

export const FlexGap = styled(Box)(({ gap = "0.75rem" }) => ({
  display: "flex",
  gap: gap,
  alignItems: "center",
}));

export const FlexEnd = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  gap: "1.25rem",
  alignItems: "center",
  marginTop: "auto",
}));

export const AspectBox = styled(AspectRatio)(() => ({
  width: "6.25rem",
  height: "6.25rem",
  borderRadius: "2rem",
  "& .MuiAspectRatio-content": {
    height: "100%",
  },
  "& img": {
    width: "2.5rem !important",
    height: "2.5rem !important",
  },
}));

export const ActionBtns = styled(Button)(({ theme }) => ({
  background: theme.palette.primary[50],
  display: "flex",
  color: theme.palette.primary[200],
  justifyContent: "flex-start",
  gap: "0.62rem",
  "&:hover": {
    background: theme.palette.primary[50],
  },
  "&.Mui-disabled": {
    background: theme.palette.primary[50],
  },
}));

export const CreateWorkspaceBtn = styled(Button)(
  ({ theme, width = "100%" , cancelBtn=false}) => ({
    background: cancelBtn ? theme.palette.secondary['secondaryBtnColor']:theme.palette.primary[100],
    color: cancelBtn ? theme.palette.primary[200] : theme.palette.primary[50],
    width: width,
    marginTop: "auto",
    fontSize: "1.125rem",
    display: "flex",
    padding: "0.75rem",
    gap: "0.62rem",
    fontWeight: 500,
    "&:hover": {
      background: theme.palette.primary[100],
    },
  })
);

export const MenuButtonStyled = styled(MenuButton)(({ theme, isActive }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.62rem",
  color: theme.palette.primary[200],
  textDecorationLine: isActive ? "underline" : "none",
  fontSize: theme.vars.fontSize.md,
  fontWeight: theme.vars.fontSize.md,
  ":hover": {
    background: "transparent",
  },
}));

export const SearchBox = styled(Input)(({ theme }) => ({
  width: "100%",
  padding: "0.63rem 1.25rem",
  fontSize: "1rem",
  backgroundColor: theme.palette.primary[50],
  border: `1px solid ${theme.palette.secondary["secondary-hover"]}`,
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.primary[300],
}));

export const AvatarIcon = styled(Avatar)(() => ({}));

export const WorkspaceName = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontSize: "1rem",
  fontWeight: 500,
  gap: "0.25rem",
  color: theme.palette.primary[200],
  "& .sub": {
    fontSize: "0.875rem",
    fontWeight: 400,
  },
}));

export const Wrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: 'column',
  marginBottom: "2.5rem",
  "& span": {
    fontSize: "1.125rem",
  },
  "& img": {
    width: "1.25rem",
    height: "1.25rem",
    cursor: "pointer",
  },
}));
export const AddPeopleButton = styled(Button)(({theme}) => ({
  gap: '1rem',
  alignItems: 'center',
  background: theme.palette.primary[100],
  color: theme.palette.primary[50],
  "&:hover": {
    background: theme.palette.primary[100],
    color: theme.palette.primary[50],
  }
}))
export const div = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "90%",
}));


export const SettingsIcon = styled(SettingsOutlinedIcon)(() => ({
    width: '1.5rem',
    height: '1.5rem'
}));


export const MenuStyled = styled(Menu)(() => ({
    zIndex: 10000,

}));

export const AddPeopleTitle = styled("div")({
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
  cursor: 'pointer'
})


export const AddBtn = styled(Button)(({ theme }) => ({
  background: theme.palette.primary[100],
  color: theme.palette.primary[50],
  padding: '0 1.5rem',
  fontSize: '1rem',
  lineHeight: 'normal',
  "&:hover": {
    background: theme.palette.primary[100],
    color: theme.palette.primary[50],
  }
}));