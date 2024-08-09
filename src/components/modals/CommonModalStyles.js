import {
  styled,
  Button,
  Box,
  FormControl,
  FormLabel,
  MenuButton,
  Radio,
  RadioGroup,
} from "@mui/joy";

export const FormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "2.5rem",
  margin: "3.75rem 0",
}));

export const Title = styled("span")(() => ({
  fontSize: "1.5rem",
  fontWeight: 600,
}));

export const FormController = styled(FormControl)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  fontSize: "1rem",
}));

export const FlexSpace = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const FormLabelText = styled(FormLabel)(() => ({
  fontSize: "1rem",
  fontWeight: 500,
}));

export const FlexEnd = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1.5rem",
}));

export const SaveBtn = styled(Button)(({ theme }) => ({
  background: theme.palette.primary[100],
  "&:hover": {
    background: theme.palette.primary[100],
  },
}));

export const CancelBtn = styled(Button)(({ theme }) => ({
  background: theme.palette.primary[400],
  color: theme.palette.primary[200],
  "&:hover": {
    background: theme.palette.primary[400],
  },
}));

export const MenuButtonItm = styled(MenuButton)(() => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "1rem",
  fontWeight: 400,
}));

export const RadioGroupContainer = styled(RadioGroup)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "3.75rem",
    fontSize: "1rem",
    margin: '3.75rem 0'
  }));

export const FormattedRadio = styled(Radio)(() => ({
  gap: "1.25rem",
  marginBlockStart: 0,
  alignItems: "center",
  "& label": {
    fontSize: "1rem",
    color: "#212121",
    fontWeight: 400,
  },
}));
