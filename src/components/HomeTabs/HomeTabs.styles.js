import { styled, Tabs, TabPanel, Tab, Card, CardContent } from "@mui/joy";

export const TabsWrapper = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.palette.primary[50],
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  opacity: '0.5',
  "&:hover": {
    backgroundColor: "transparent !important",
  },
  "&.Mui-selected": {
    backgroundColor: "transparent",
    opacity: '1',
    "&::after": {
      background: theme.palette.primary[100],
    },
  },
}));

export const TabPanelWrapper = styled(TabPanel)(() => ({
  padding: 0,
}));

export const Wrapper = styled("div")(() => ({
  marginTop: "4rem",
  "& .slick-slide": {
    width: "auto !important",
    // marginRight: "2.5rem",
  },
}));

export const CardWrapper = styled(Card)(({ theme }) => ({
  width: "25rem",
  height: "15.625rem",
  borderRadius: "0.5rem",
  padding: 0,
  background: theme.palette.primary[50],
  gap: 0,
  margin: "0 2.5rem 0.63rem 0.25rem",
  // marginRight: "2.5rem",
  // marginBottom: '0.63rem',
  // marginLeft: '0.25rem',
  boxShadow: "0px 2px 8px 0px rgba(137, 147, 158, 0.40);",
}));

export const TitleBox = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  padding: "0.69rem 1.25rem",
  borderTopRightRadius: "0.5rem",
  borderTopLeftRadius: "0.5rem",
  alignItems: "center",
  color: theme.palette.primary[50],
  background: theme.palette.primary[100],
  minWidth: "fit-content",
  "& .left-icon": {
    fontSize: "1.5rem",
    color: theme.palette.primary[50],
  },
  "& .right-icon": {
    fontSize: "1.5rem",
    marginLeft: "auto",
    color: theme.palette.primary[50],
  },
}));

export const ColumnBox = styled("div")(() => ({
  display: "flex",
  gap: "0.12rem",
  flexDirection: "column",
  "& .title": {
    fontSize: "1rem",
    fontWeight: 600,
  },
  "& .subtitle": {
    fontSize: "0.875rem",
    fontWeight: 400,
  },
}));

export const ImageContainer = styled("div")(() => ({
  margin: "auto",
  paddingTop: "2.81rem",
  paddingBottom: "1.94rem",
  "& .img-icon": {
    fontSize: "3.75rem",
  },
}));

export const CardContentWrapper = styled(CardContent)(() => ({
  margin: "0 1.25rem 1.25rem 1.25rem",
  justifyContent: "space-between",
  fontSize: "0.75rem",
  color: "#212121",
  alignItems: 'center',
  "& .details": {
    display: "flex",
    alignItems: "center",
    gap: "0.12rem",
    "& .down-icon": {
      fontSize: "12px",
    },
    "& .more-icon": {
      fontSize: "1.5rem",
    },
  },
}));

export const MoreDetails = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.62rem",
  background: theme.palette.primary[50],
  color: theme.palette.primary[200],
  "& .title": {
    fontWeight: 600,
    marginRight: '0.25rem'
  },
}));

export const DetailItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
}));
