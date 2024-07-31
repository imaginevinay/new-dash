import {
  Button,
  Modal,
  ModalClose,
  Radio,
  Sheet,
  styled,
  Typography,
} from "@mui/joy";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ModalContainer = styled(Modal)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SheetWrapper = styled(Sheet)(({ theme }) => ({
  boxShadow:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  borderRadius: "0.5rem",
  padding: "2.5rem",
  maxWidth: "43.75rem",
  width: "43.75rem",
  backgroundColor: theme.palette.primary[50],
}));

export const TopWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Headline = styled(Typography)(() => ({
  marginBottom: "3.75rem",
  fontSize: "1.5rem",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
}));

export const GoBackIcon = styled(ArrowBackIcon)(() => ({
  width: "1.25rem",
  height: "1.25rem",
  color: "#212121",
}));

export const ModalCloseBtn = styled(ModalClose)(() => ({}));

export const FormattedRadio = styled(Radio)(({ theme }) => ({
  gap: "1.25rem",
  marginBottom: "3.75rem",
  marginBlockStart: 0,
  alignItems: "center",
  "& label": {
    fontSize: "1rem",
    color: "#212121",
    fontWeight: 400,
  },
  "& .MuiRadio-radio": {
    backgroundColor: theme.palette.primary[50],
    borderColor: "#212121",

    "& .MuiRadio-icon": {
      backgroundColor: theme.palette.primary[100],
    },

    "&:hover": {
      backgroundColor: theme.palette.primary[50],
      borderColor: "#212121",
    },
  },
}));

export const RadioWithDropdown = styled(Radio)(({ theme }) => ({
  gap: "1.25rem",
  marginBottom: "1rem",
  marginBlockStart: 0,
  alignItems: "center",
  "& label": {
    fontSize: "1rem",
    color: "#212121",
    fontWeight: 400,
  },
  "& .MuiRadio-radio": {
    backgroundColor: theme.palette.primary[50],
    borderColor: "#212121",

    "& .MuiRadio-icon": {
      backgroundColor: theme.palette.primary[100],
    },

    "&:hover": {
      backgroundColor: theme.palette.primary[50],
      borderColor: "#212121",
    },
  },
}));

export const DropDownWrapper = styled("div")(() => ({
  marginLeft: "2.5rem",
  marginBottom: "3.75rem",
  width: "93%",
}));

export const LabelWithDropdown = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}));

export const NextButton = styled(Button)(({ theme }) => ({
  padding: "0.75rem 1rem",
  background: theme.palette.primary[100],
}));

export const ButtonWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));

export const ChooseWorkspaceBtn = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.62rem",
  padding: "0.75rem 1rem",
  backgroundColor: "#F5F5F5",
}));

export const ItemWrapper = styled("div")(() => ({
  marginBottom: '3.75rem'
}));
