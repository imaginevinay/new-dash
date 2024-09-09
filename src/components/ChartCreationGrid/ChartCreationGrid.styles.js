import { styled } from "@mui/joy";
import BarChartPreviewImg from '../../assets/images/barchartPreview.svg'

export const CanvasGridWrapper = styled("div")(({theme}) => ({
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
    backgroundImage: `url(${BarChartPreviewImg})`,
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
    fontSize: '1.125rem',
    fontWeight: 600
  },
  "& .subtitle": {
    display : 'flex',
    justifyContent: 'space-between',
    marginLeft : '3.75rem',
    marginRight: '3rem',
    fontSize: '0.7875rem',
    fontWeight: 400,
    color: theme.palette.secondary[100]
  }
}));
