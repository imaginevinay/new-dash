import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Sheet,
  styled,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Typography,
} from "@mui/joy";

export const LeftMenuWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "25%",
  background: theme.palette.primary[50],
  overflowY: "auto",
  borderRight: "1px solid rgba(137, 147, 158, 0.10)",
  padding: "2.5rem",
  gap: "2.5rem",
}));

export const MenuTitle = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  fontSize: "1.125rem",
  color: theme.palette.primary[200],
  fontWeight: 600,
}));

export const TabsWrapper = styled(Tabs)(({ theme }) => ({
  background: theme.palette.primary[50],
  height: "100%",
}));

export const TabListWrapper = styled(TabList)(() => ({
  fontSize: "1rem",
}));

export const TabButton = styled(Tab)(() => ({
  padding: "0.5rem 1.25rem",
  width: "12.5rem",
  borderRadius: "0.25rem",
  "&.Mui-selected": {
    background: "#D4AF37",
    color: "#FFFFFF",
    "&:hover": {
      background: "#D4AF37",
    },
  },
  "&:not(.Mui-selected)": {
    background: "#FFF",
    "&:hover": {
      background: "#FFF",
    },
  },
}));

export const TabPanelBox = styled(TabPanel)(() => ({
  padding: 0,
  // height: '100%'
}));

export const RecommendedChartsWrapper = styled("div")(() => ({
  marginTop: "2.5rem",
  display: "flex",
  height: "100%",
  flexDirection: "column",
  "& .title": {
    fontSize: "1rem",
    fontWeight: 600,
  },
}));

export const PreviewChartButton = styled(Button)(({ theme }) => ({
  width: "100%",
  borderRadius: "2.0625rem",
  backgroundColor: theme.palette.primary[400],
  color: theme.palette.primary[500],
  fontSize: "1rem",
  fontWeight: 400,
  marginTop: "6.5rem",
  "&:hover": {
    background: theme.palette.primary[400],
  },
  "&.isActive": {
    backgroundColor : theme.palette.primary[100],
    "&:hover": {
      background: theme.palette.primary[100],
    },
  }
}));


export const VisualiseButton = styled(Button)(({ theme, isactive }) => ({
  width: "100%",
  borderRadius: "2.0625rem",
  background: isactive==='true' ? theme.palette.primary[100] : theme.palette.primary[400],
  color: isactive==='true' ? theme.palette.primary[50]:theme.palette.secondary[100],
  fontSize: "1rem",
  fontWeight: 400,
  marginTop: 'auto',
  marginBottom: '2.56rem',
  "&:hover": {
    background: isactive==='true' ? theme.palette.primary[100] : theme.palette.primary[400],
  },
}));

export const ButtonWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.88rem",
  "& span": {
    fontSize: "0.875rem",
    minWidth: "max-content",
  },
}));

export const ChartButton = styled(Button)(({ theme }) => ({
  borderRadius: "2.5rem",
  padding: "1.125rem",
  width: "3.75rem",
  height: "3.75rem",
  "& > img": {
    width: "1.5rem",
    height: "1.5rem",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary[100],
    "& > img": {
      filter: "brightness(0) invert(1)",
    },
  },
  "&[aria-pressed='true']": {
    backgroundColor: theme.palette.primary[100],
    "& > img": {
      filter: "brightness(0) invert(1)",
    },
  },
}));

export const SheetWrapper = styled(Sheet)(({ theme }) => ({
  width: "95rem",
  height: "48.75rem",
  borderRadius: theme.vars.radius.md,
  padding: "3.75rem 3.75rem 2.5rem 3.75rem",
  boxShadow: theme.shadow.lg,
  backgroundColor: theme.vars.palette.primary[50],
  overflow: "hidden",
  // Added display: 'flex' and flexDirection: 'column' to use flexbox for vertical layout
  display: "flex",
  flexDirection: "column",
}));

export const Header = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "2rem",
  fontWeight: 500,
}));

export const Container = styled("div")({
  display: "flex",
  width: "100%",
  flex: 1,
  gap: "2.5rem",
  marginTop: "3.75rem",
  overflow: "hidden",
});

export const Section = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
});

export const CategoriesSection = styled(Section)({
  width: "20%",
});

export const FlexCol = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const CategoriesBox = styled(FlexCol)(({ theme }) => ({
  width: "100%",
  padding: "1.25rem",
  gap: "0.75rem",
  flex: 1,
  background: theme.palette.primary[400],
  overflowY: "auto",
}));

export const ChartTypesSection = styled(Section)({
  width: "20%",
});

export const ChartTypeBox = styled(FlexCol)(({ theme }) => ({
  width: "100%",
  flex: 1,
  gap: '2rem',
  background: theme.palette.primary[400],
  overflowY: "auto",
  overflowX: 'hidden',
  padding : '1.25rem 2.5rem'
}));



export const SectionTitle = styled(Typography)({
  fontWeight: 400,
  fontSize: "1.125rem",
});

export const CategoryItem = styled("div")(({ theme, isSelected }) => ({
  padding: "0.75rem 1.25rem",
  cursor: "pointer",
  fontSize: "1rem",
  color: isSelected ? theme.palette.primary[50] : theme.palette.primary[200],
  backgroundColor: isSelected ? theme.palette.primary[100] : "transparent",
  borderRadius: "0.5rem",
  display: "flex",
  gap: "1.25rem",
  alignItems: "center",
  "& > img": {
      filter: isSelected && "brightness(0) invert(1)",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary[100],
    color: theme.palette.primary[50],
    "& > img": {
      filter: "brightness(0) invert(1)",
    },
  },
}));

export const ChartTypeItem = styled(FlexCol)(({ theme, isSelected }) => ({
  width: '12.5rem',
  padding: '0.9375rem 0 0.875rem 0',
  cursor: "pointer",
  alignItems: 'center',
  gap: '1rem',
  fontSize: '0.75rem',
  borderRadius: "0.5rem",
  boxShadow: '0px 6px 12px 0px rgba(171, 190, 209, 0.25)',
  color: isSelected ? theme.palette.primary[50] : theme.palette.primary[200],
  backgroundColor: isSelected ? theme.palette.primary[100] : theme.palette.primary[50],
  "& > img": {
    width: '2.5rem',
    filter: isSelected && "brightness(0) invert(1)",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary[100],
    color: theme.palette.primary[50],
    "& > img": {
      width: '2.5rem',
      filter: "brightness(0) invert(1)",
    },
  },
}));

export const PreviewSection = styled(Section)({
  flex: 1,
});

export const PreviewBox = styled("div")(({ theme }) => ({
  width: "100%",
  padding: '2.5rem 2.5rem 3.58rem 2.5rem',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  fontSize: '1rem',
  background: theme.palette.primary[400],
  "& > .nothing" : {
    margin: 'auto'
  }
}));

export const PreviewHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 600,
  alignItems: 'center',
  marginBottom: '3.5rem'
})

export const ApplyChart = styled(Button)(({theme})=>({
  background: theme.palette.primary[100],
  color: theme.palette.primary[50],
  borderRadius: '1rem',
  "&:hover": {
    background: theme.palette.primary[100],
    color: theme.palette.primary[50],
  }
}))

export const Image = styled('img')({
  width: '31.25rem',
  height: '21.72331rem',
  margin: 'auto'
})


export const WrapperBox = styled('div')({
  marginTop: '3.75rem',
  fontSize: '0.875rem', 
})

export const AccordionSummaryBtn = styled(AccordionSummary)(({ theme }) => ({
  // padding: '0.75rem',
  "&:hover": {
    backgroundColor: theme.palette.secondary[50],
    "& p": {
      color: theme.palette.primary[100],
    },
    "& span svg": {
      color: theme.palette.primary[100],
    },
  },
  "& .MuiAccordionSummary-button:not(.Mui-selected, [aria-selected='true']):hover":
    {
      backgroundColor: theme.palette.secondary[50],
    },
  "& .MuiAccordionSummary-button": {
    padding: "0.75rem",
  },
}));

export const SelectedAccordionSummaryBtn = styled(AccordionSummary)(({theme, yearBtn})=>({
  backgroundColor: yearBtn ? theme.palette.primary[50] : theme.palette.primary[400],
  borderRadius: '0.25rem',
  "& .MuiAccordionSummary-button:hover" : {
    backgroundColor: yearBtn ? theme.palette.primary[50] : theme.palette.primary[400],
  },
  "& .MuiAccordionSummary-button" : {
    padding: yearBtn ? '0.75rem 2.5rem' : '0.75rem 1.25rem 0.75rem 2.5rem',
  },
  "& .Mui-expanded:not(.MuiAccordionSummary-indicator)" : {
    borderBottom: yearBtn ? 'none':'1px solid rgba(128, 128, 128, 0.25)'
  }
}))

export const AccordionDetailsWrapper = styled(AccordionDetails)({
  "& .MuiAccordionDetails-content": {
    // gap: '1rem',
    // marginTop: '1.5rem'
  }
})

export const AxisButton = styled(Button)(({theme})=>({
  backgroundColor:theme.palette.primary[400],
  padding: '0.75rem 1.25rem 0.75rem 2.5rem',
  color: theme.palette.primary[300],
  borderRadius: '0.25rem',
  fontWeight: 400,
  "&:hover": {
    background: theme.palette.secondary[50],
    color: theme.palette.primary[100],
  }
}))


export const SelectedAxisText = styled(Typography)({
  fontSize: '0.875rem',
  fontWeight: 400,
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
})

export const SMFlexRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem' 
})

export const SMFlexCol = styled(FlexCol)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '1.5rem'
})

export const YearAccordionDetails = styled(AccordionDetails)({
  padding: '1.25rem'
})


export const VisualsTitle = styled(AccordionSummary)(({theme})=>({
  backgroundColor: theme.palette.primary[50],
  borderRadius: '0.25rem',
  "& .MuiAccordionSummary-button:hover" : {
    backgroundColor: theme.palette.primary[50],
  },
  "& .MuiAccordionSummary-button" : {
    fontWeight: 400
  }
}))


export const VisualsAccordionDetails = styled(AccordionDetails)(({theme})=>({
  "& .MuiAccordionDetails-content.Mui-expanded": {
    backgroundColor: theme.palette.primary[400],
  }
}))

export const ValuesWrapper = styled(FlexCol)(({theme})=>({
  padding: '1.25rem',
  gap: '1.25rem',
  backgroundColor: theme.palette.primary[50],
  fontSize: '0.875rem',
  fontWeight: 400,

  "& .flexCol-lg": {
    display: "flex",
    flexDirection: "column",
    gap: '2.5rem'
  },

  "& .flexCol-md": {
    display: "flex",
    flexDirection: "column",
    gap: '1rem',

    '& .title': {
      fontSize: '0.875rem',
      fontWeight: 400
    },
  },
  
  "& .flexRow": {
    display: "flex",
    flexDirection: "row",
    gap: '1rem',
    
    "& .font-selector": {
      width: '70%',
      fontSize: '0.875rem',
      fontWeight: 400,
    }
  },
  "& .flexSpaceBetween": {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  }


}))

