import { Grid, ToggleButtonGroup } from "@mui/joy";
import * as Styled from "./ChartCreationLeftMenu.styles";
import { useContext, useEffect, useState } from "react";
import SelectChartsModal from "./SelectChartsModal";
import VisualsAccordions from "./VisualsAccordions";
import { AppContext } from "../../context/AppContext";
import { removeInitialLowercaseH } from "../../utils/common";

const buttonLabels = [
  {
    icon: "/src/assets/icons/horizontalBar.svg",
    label: "Horizontal Bar",
    types: [],
  },
  {
    icon: "/src/assets/icons/line.svg",
    label: "Line",
    types: [],
  },
  {
    icon: "/src/assets/icons/vStacked.svg",
    label: "V. Stacked Line",
    types: [],
  },
  {
    icon: "/src/assets/icons/verticalBar.svg",
    label: "Vertical Bar",
    types: [],
  },
  {
    icon: "/src/assets/icons/pie.svg",
    label: "Pie",
    types: [],
  },
  {
    icon: "/src/assets/icons/verticalArea.svg",
    label: "Vertical Area",
    types: [],
  },
  {
    icon: "/src/assets/icons/hArea.svg",
    label: "H. Area Stacked",
    types: [],
  },
  {
    icon: "/src/assets/icons/bubble.svg",
    label: "Bubble",
    types: [],
  },
  {
    icon: "/src/assets/icons/angular.svg",
    label: "Angular Gauge",
    types: [],
  },
  {
    icon: "/src/assets/icons/verticalBoxed.svg",
    label: "Vertical Boxed",
    types: [],
  },
  {
    icon: "/src/assets/icons/vStacked.svg",
    label: "V. Stacked Line",
    types: [],
  },
  {
    icon: "/src/assets/icons/viewMore.svg",
    label: "View More",
    types: [],
  },
];


const RecommendedCharts = () => {
  const [selected, setSelected] = useState(null);
  const [openSelectChartModal, setOpenSelectChartModal] = useState(false);
  const [recoCharts, setRecoCharts] = useState(buttonLabels);
  const [isChartTypeSelected, setIsChartTypeSelected] = useState(false);
  const [isVisualizeActive, setIsVisualizeActive] = useState(false);
  const [leftMenuData, setLeftMenuData] = useState(null);

  const { setSelectedChartData, setSelectedChart, selectedChartType, setSelectedChartType, selectedChart} = useContext(AppContext);

  // !!!!!!!!!!!!!!! remove this use effect !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // useEffect(() => {
  //   const selectedType = {
  //     icon: "/src/assets/charts/chart-types/vBar.svg",
  //     label: "Vertical Bar",
  //     types: colmnTypes,
  //   };
  //   const viewMore = {
  //     icon: "/src/assets/icons/viewMore.svg",
  //     label: "View More",
  //     types: [],
  //   };
  //   setSelectedChart(selectedType);
  //   setSelected(selectedType.label);
  //   setRecoCharts([selectedType, viewMore]);
  //   setIsChartTypeSelected(true);
  // }, []);

  // useEffect(() => {
  //   setSelectedChartData(leftMenuData)
  // }, [leftMenuData, setSelectedChartData])

  useEffect(() => {
    if (selected === "View More") {
      setOpenSelectChartModal(true);
    }
  }, [selected]);

  const handleSelectChartModalClose = (val) => {
    setOpenSelectChartModal(false);
    setSelected(null);
    if (val) {
      const selectedType = val;

      const viewMore = {
        icon: "/src/assets/icons/viewMore.svg",
        label: "View More",
      };
      setSelectedChart(selectedType);
      setSelectedChartType(selectedType?.types[0]);
      setSelected(selectedType.label);
      setRecoCharts([selectedType, viewMore]);
      setIsChartTypeSelected(true);
    }
  };

  const handleChange = (event, newSelected) => {
    setSelected(newSelected);
  };

  const handleVisualiseClick = () => {
    console.log('leftMenuData', leftMenuData, selectedChartType)
    let data1,data2 = {};
    let axisItems = Object.keys(leftMenuData?.axisData);
    if (axisItems.length === 2) {
      data1 = {
        x: leftMenuData?.axisData.xAxis.data,
        y: leftMenuData?.axisData.yAxis.data,
        type: selectedChart?.id,
        name: leftMenuData?.axisData.xAxis.label,
        orientation: selectedChartType.orientation,
        marker: {
          color: leftMenuData?.visualsData[2]?.subAccordions?.[2]?.data?.color1,
        },
      };
    }
    if (axisItems.length === 3) {
      data1 = {
        x: leftMenuData?.axisData.xAxis.data,
        y: leftMenuData?.axisData.yAxis.data,
        type: selectedChart?.id,
        name: leftMenuData?.axisData.xAxis.label,
        orientation: selectedChartType.orientation,
        marker: {
          color: leftMenuData?.visualsData[2]?.subAccordions?.[2]?.data?.color1,
        },
      };
       
      data2 = {
        x: leftMenuData?.axisData.xAxis.data,
        y: leftMenuData?.axisData[axisItems[2]].data,
        type: selectedChart?.id,
        name: leftMenuData?.axisData[axisItems[2]].label,
        orientation: selectedChartType.orientation,
        marker: {
          color: leftMenuData?.visualsData[2]?.subAccordions?.[2]?.data?.color2,
        },
      };
      if(selectedChartType?.line){
        data1['line']= selectedChartType?.line;
        data2['line']= selectedChartType?.line;
      }
    }
    const dataCreator = {
      data: [data1, data2],
      layout: {
        xaxis: {
          title: {
            text: leftMenuData?.axisData.xAxis.label,
            standoff: 50,
            font: {
              family: "Arial",
              size: 18,
              color: "#000000",
              weight: 500,
              style: "normal",
            },
          },
          type: "category",
          tickfont: {
            family: "Arial",
            size: 12,
            color: "#000000",
            weight: 500,
            style: "normal",
          },
          gridcolor: leftMenuData?.visualsData[3]?.subAccordions?.[0]?.data?.color,
          griddash: leftMenuData?.visualsData[3]?.subAccordions?.[0]?.data?.lineStyle
        },
        yaxis: {
          title: {
            text: leftMenuData?.axisData.yAxis.label,
            standoff: 200,
            font: {
              family: "Arial",
              size: 18,
              color: "#000000",
              weight: 500,
              style: "normal",
            },
          },
          tickfont: {
            family: "Arial",
            size: 12,
            color: "#000000",
            weight: 500,
            style: "normal",
          },
          gridcolor: leftMenuData?.visualsData[3]?.subAccordions?.[1]?.data?.color,
          griddash: leftMenuData?.visualsData[3]?.subAccordions?.[1]?.data?.lineStyle
        },
        barmode: removeInitialLowercaseH(selectedChartType?.id),        
      },
    };
    console.log("datacreated", dataCreator);
    setSelectedChartData(dataCreator);
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
          sx={{ justifyContent: isChartTypeSelected && "space-around" }}
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

      {!isChartTypeSelected && (
        <Styled.PreviewChartButton
          isactive={
            selected !== null && selected !== "View More" ? "true" : "false"
          }
        >
          Preview Chart
        </Styled.PreviewChartButton>
      )}
      {isChartTypeSelected && (
        <VisualsAccordions
          setIsVisualizeActive={setIsVisualizeActive}
          setLeftMenuData={setLeftMenuData}
        />
      )}
      {isChartTypeSelected && (
        <Styled.VisualiseButton
          isactive={isVisualizeActive ? "true" : "false"}
          onClick={() => handleVisualiseClick()}
        >
          Visualize
        </Styled.VisualiseButton>
      )}
      <SelectChartsModal
        open={openSelectChartModal}
        handleClose={handleSelectChartModalClose}
      />
    </Styled.RecommendedChartsWrapper>
  );
};

export default RecommendedCharts;
