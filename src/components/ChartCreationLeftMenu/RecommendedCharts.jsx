import { Grid, ToggleButtonGroup } from "@mui/joy";
import * as Styled from "./ChartCreationLeftMenu.styles";
import { useEffect, useState } from "react";
import HBarIcon from "../../assets/icons/horizontalBar.svg";
import LineIcon from "../../assets/icons/line.svg";
import VStackedIcon from "../../assets/icons/vStacked.svg";
import VerticalBarIcon from "../../assets/icons/verticalBar.svg";
import PieIcon from "../../assets/icons/pie.svg";
import VerticalAreaIcon from "../../assets/icons/verticalArea.svg";
import HAreaIcon from "../../assets/icons/hArea.svg";
import BubbleIcon from "../../assets/icons/bubble.svg";
import AngularIcon from "../../assets/icons/angular.svg";
import VBoxedIcon from "../../assets/icons/verticalBoxed.svg";
import ViewMoreIconIcon from "../../assets/icons/viewMore.svg";
import SelectChartsModal from "./SelectChartsModal";

const RecommendedCharts = () => {
  const [selected, setSelected] = useState(null);
  const [openSelectChartModal, setOpenSelectChartModal] = useState(false);

  useEffect(() => {
    if(selected === 'View More') {
      setOpenSelectChartModal(true)
    }
  }, [selected])

  const handleSelectChartModalClose = () => {
    setOpenSelectChartModal(false);
    setSelected(null);
  }

  const handleChange = (event, newSelected) => {
    setSelected(newSelected);
  };

  
  

  const buttonLabels = [
    {
      icon: HBarIcon,
      label: "Horizontal Bar",
    },
    {
      icon: LineIcon,
      label: "Line",
    },
    {
      icon: VStackedIcon,
      label: "V. Stacked Line",
    },
    {
      icon: VerticalBarIcon,
      label: "Vertical Bar",
    },
    {
      icon: PieIcon,
      label: "Pie",
    },
    {
      icon: VerticalAreaIcon,
      label: "Vertical Area",
    },
    {
      icon: HAreaIcon,
      label: "H. Area Stacked",
    },
    {
      icon: BubbleIcon,
      label: "Bubble",
    },
    {
      icon: AngularIcon,
      label: "Angular Gauge",
    },
    {
      icon: VBoxedIcon,
      label: "Vertical Boxed",
    },
    {
      icon: VStackedIcon,
      label: "V. Stacked Line",
    },
    {
      icon: ViewMoreIconIcon,
      label: "View More",
    },
  ];

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
        >
          {buttonLabels.map((obj, index) => (
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

      <Styled.PreviewChartButton isActive={selected !== null && selected !== 'View More'}>
        Preview Chart
      </Styled.PreviewChartButton>
      <SelectChartsModal open={openSelectChartModal} handleClose={handleSelectChartModalClose}/>
    </Styled.RecommendedChartsWrapper>
  );
};

export default RecommendedCharts;
