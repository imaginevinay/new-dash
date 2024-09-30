import { MenuButton, styled } from "@mui/joy";
// import BarChartPreviewImg from '../../assets/images/barchartPreview.svg'

export const CanvasGridWrapper = styled("div")(({previewImage}) => ({
  display: "flex",
  flexDirection: "column",
  width: "75%",
  overflowY: "auto",
  
  "&.showGridLines": {
    backgroundColor: "#f5f5f5", // Light gray background
    backgroundImage: `linear-gradient(to right, #e0e0e0 1px, transparent 1px),linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)`,
    backgroundSize: "120px 60px",
  },
  "&.showBasicPreview": {
    backgroundImage: `url(${previewImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "auto",
    height: "100%",
  },

  "&.hidePreview": {
    backgroundImage: "none",
  },

  "& .header": {
    display : 'flex',
    justifyContent: 'space-between',
    marginLeft : '3.75rem',
    marginRight: '3rem',
    marginTop: '2.5rem',
    // marginBottom: '1rem',
  },
  "& .js-plotly-plot": {
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}));


export const MenuBtn = styled(MenuButton)(({ theme }) => ({
  fontSize: theme.vars.fontSize.md,
  width: "11.625rem",
  justifyContent: "space-between",
  backgroundColor: theme.palette.primary[400],
  // color: theme.palette.primary[100],
  border: 0,
  "& .MuiSvgIcon-root": {
    // color: theme.palette.primary[100],
  },
  "&:hover": {
    backgroundColor: theme.palette.primary[400],
  }
}));
