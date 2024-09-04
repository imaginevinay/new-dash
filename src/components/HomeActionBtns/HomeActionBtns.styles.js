import { Button } from "@mui/joy";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { styled } from "@mui/joy";
import AddIcon from "@mui/icons-material/Add";

export const ButtonWrapper = styled(ButtonGroup)(() => ({
  marginTop: "2.56rem",
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "3rem",
  gap: "1.25rem",
}));

export const ChartButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary["lightYellow"],
  borderRadius: "0.25rem",
  color: theme.palette.primary[100],
  border: "none",
  borderLeft: "none !important",
  borderRight: "none !important",
  display: "flex",
  gap: "0.62rem",
  "& p": {
    color: theme.palette.primary[100],
  },
  ":hover": {
    backgroundColor: theme.palette.primary[100],
    color: theme.palette.primary[50],
    "& p": {
      color: theme.palette.primary[50],
    },
  },
}));

export const AddIconWhite = styled(AddIcon)(() => ({
  width: "1.25rem",
  height: "1.25rem",
}));
