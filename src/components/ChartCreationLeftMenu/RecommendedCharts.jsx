import { Grid, ToggleButtonGroup } from "@mui/joy";
import * as Styled from "./ChartCreationLeftMenu.styles";
import { useEffect, useState } from "react";
import SelectChartsModal from "./SelectChartsModal";
import VisualsAccordions from "./VisualsAccordions";

const buttonLabels = [
  {
    icon: "/src/assets/icons/horizontalBar.svg",
    label: "Horizontal Bar",
  },
  {
    icon: "/src/assets/icons/line.svg",
    label: "Line",
  },
  {
    icon: "/src/assets/icons/vStacked.svg",
    label: "V. Stacked Line",
  },
  {
    icon: "/src/assets/icons/verticalBar.svg",
    label: "Vertical Bar",
  },
  {
    icon: "/src/assets/icons/pie.svg",
    label: "Pie",
  },
  {
    icon: "/src/assets/icons/verticalArea.svg",
    label: "Vertical Area",
  },
  {
    icon: "/src/assets/icons/hArea.svg",
    label: "H. Area Stacked",
  },
  {
    icon: "/src/assets/icons/bubble.svg",
    label: "Bubble",
  },
  {
    icon: "/src/assets/icons/angular.svg",
    label: "Angular Gauge",
  },
  {
    icon: "/src/assets/icons/verticalBoxed.svg",
    label: "Vertical Boxed",
  },
  {
    icon: "/src/assets/icons/vStacked.svg",
    label: "V. Stacked Line",
  },
  {
    icon: "/src/assets/icons/viewMore.svg",
    label: "View More",
  },
];

const RecommendedCharts = () => {
  const [selected, setSelected] = useState(null);
  const [openSelectChartModal, setOpenSelectChartModal] = useState(false);
  const [recoCharts, setRecoCharts] = useState(buttonLabels)
  const [isChartTypeSelected, setIsChartTypeSelected] = useState(false);


// !!!!!!!!!!!!!!! remove this use effect !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  useEffect(() => {
    const selectedType = {
      icon : "/src/assets/charts/chart-types/vBar.svg",
      label :  "Vertical Bar"
    }
    const viewMore = {
      icon: "/src/assets/icons/viewMore.svg",
      label: "View More",
    }
    setRecoCharts([selectedType, viewMore]);
    setIsChartTypeSelected(true);
  }, [])
  

  useEffect(() => {
    if(selected === 'View More') {
      setOpenSelectChartModal(true)
    }
  }, [selected])

  const handleSelectChartModalClose = (val) => {
    setOpenSelectChartModal(false);
    setSelected(null);
    if(val) {
      const selectedType = {
        icon : val?.type?.icon,
        label : val?.type?.name
      }
  
      const viewMore = {
        icon: "/src/assets/icons/viewMore.svg",
        label: "View More",
      }
  
      setRecoCharts([selectedType, viewMore]);
      setIsChartTypeSelected(true);
    }
    
  }

  const handleChange = (event, newSelected) => {
    setSelected(newSelected);
  };

  
  



  return (
    <Styled.RecommendedChartsWrapper>
      <span className="title">Recommended Charts</span>

      <ToggleButtonGroup
        value={selected}
        onChange={handleChange}
        sx={{ marginTop: "2.81rem" }}
      >
        <Grid
          container
          spacing={"2.38rem"}
          sx={{justifyContent: isChartTypeSelected && 'space-around'}}
        >
          {recoCharts.map((obj, index) => (
            <Grid key={index} xs={4}>
              <Styled.ButtonWrapper>
                <Styled.ChartButton value={obj.label}>
                  <img src={obj.icon} />
                </Styled.ChartButton>
                <span>{obj.label}</span>
              </Styled.ButtonWrapper>
            </Grid>
          ))}
        </Grid>
      </ToggleButtonGroup>
        
      {!isChartTypeSelected && <Styled.PreviewChartButton isactive={selected !== null && selected !== 'View More' ? 'true': 'false'}>
        Preview Chart
      </Styled.PreviewChartButton>}
      {isChartTypeSelected && <VisualsAccordions />}
      <SelectChartsModal open={openSelectChartModal} handleClose={handleSelectChartModalClose}/>
    </Styled.RecommendedChartsWrapper>
  );
};

export default RecommendedCharts;
