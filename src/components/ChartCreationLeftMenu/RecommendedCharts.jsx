import { Grid, ToggleButtonGroup } from "@mui/joy";
import * as Styled from "./ChartCreationLeftMenu.styles";
import { useContext, useEffect, useState } from "react";
import SelectChartsModal from "./SelectChartsModal";
import VisualsAccordions from "./VisualsAccordions";
import { AppContext } from "../../context/AppContext";
// import { removeInitialLowercaseH } from "../../utils/common";

const buttonLabels = [
  {
    icon: "/src/assets/icons/horizontalBar.svg",
    name: "Horizontal Bar",
    types: [],
  },
  {
    icon: "/src/assets/icons/line.svg",
    name: "Line",
    types: [],
  },
  {
    icon: "/src/assets/icons/vStacked.svg",
    name: "V. Stacked Line",
    types: [],
  },
  {
    icon: "/src/assets/icons/verticalBar.svg",
    name: "Vertical Bar",
    types: [],
  },
  {
    icon: "/src/assets/icons/pie.svg",
    name: "Pie",
    types: [],
  },
  {
    icon: "/src/assets/icons/verticalArea.svg",
    name: "Vertical Area",
    types: [],
  },
  {
    icon: "/src/assets/icons/hArea.svg",
    name: "H. Area Stacked",
    types: [],
  },
  {
    icon: "/src/assets/icons/bubble.svg",
    name: "Bubble",
    types: [],
  },
  {
    icon: "/src/assets/icons/angular.svg",
    name: "Angular Gauge",
    types: [],
  },
  {
    icon: "/src/assets/icons/verticalBoxed.svg",
    name: "Vertical Boxed",
    types: [],
  },
  {
    icon: "/src/assets/icons/vStacked.svg",
    name: "V. Stacked Line",
    types: [],
  },
  {
    icon: "/src/assets/icons/viewMore.svg",
    name: "View More",
    types: [],
  },
];


const RecommendedCharts = () => {
  const [selected, setSelected] = useState(null);
  const [openSelectChartModal, setOpenSelectChartModal] = useState(false);
  const [recoCharts, setRecoCharts] = useState(buttonLabels);
  const [isChartTypeSelected, setIsChartTypeSelected] = useState(false);
  const [isVisualizeActive, setIsVisualizeActive] = useState(false);
  // const [leftMenuDatas, setLeftMenuData] = useState(null);

  const { setSelectedChartData, setSelectedChart, selectedChartType, setSelectedChartType, selectedChart, chartConfig, setChartConfig} = useContext(AppContext);

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
        name: "View More",
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
    const parentChartObj = chartConfig.find((item) => item.id === selectedChart?.id);
    const childChartObj = parentChartObj?.types.find((item) => item.id === selectedChartType?.id);
    const parentChartName = parentChartObj?.id;
    const axisData = childChartObj.axisData;
    const axisItems = Object.keys(axisData);
    const primaryData = axisData[axisItems[0]];
    const secondaryData = axisData[axisItems[1]];
    const isArraySecData = Array.isArray(secondaryData);
    let layout = {};
    let traces = [];
    // creating data for line and bar
    if(parentChartName === 'bar' || parentChartName === 'line') {
      if (!isArraySecData) {
        let data = {
          x: primaryData.data,
          y: secondaryData.data,
          name: primaryData.label,
          type: childChartObj.type,
        }
        if(parentChartName === 'bar') {
          data['orientation'] = childChartObj.orientation
        }
        traces.push(data);
      }
      if (isArraySecData) {
        secondaryData.forEach((yAxisItem) => {
          let data = {
            x: primaryData.data,
            y: yAxisItem.data,
            name: primaryData.label,
            type: childChartObj.type,
          }

          if(parentChartName === 'bar') {
            data['orientation'] = childChartObj.orientation
          }
          if(childChartObj?.id === 'vStackedLine') {
            [data.x, data.y] = [data.y, data.x];
            data.isVStackedLine = true
          }
          if(parentChartName === 'line' && childChartObj?.id === 'steppedLine') {
            data['line'] = childChartObj.line
          }

          traces.push(data);
        });
      }
      layout = {
        xaxis: {
          title: {
            text: primaryData.label,
            standoff: 50,
            font: {
              family: parentChartObj.formatVisuals[0].subAccordions[1].data.font,
              size: parentChartObj.formatVisuals[0].subAccordions[1].data.fontSize,
              color: parentChartObj.formatVisuals[0].subAccordions[1].data.color,
              weight: 500,
              style: "normal",
            },
          },
          type: "category",
          tickfont: {
            family: parentChartObj.formatVisuals[0].subAccordions[0].data.font,
            size: parentChartObj.formatVisuals[0].subAccordions[0].data.fontSize,
            color: parentChartObj.formatVisuals[0].subAccordions[0].data.color,
            weight: 500,
            style: "normal",
          },
          gridcolor: parentChartObj.formatVisuals[3]?.subAccordions?.[0]?.data?.color,
          griddash: parentChartObj.formatVisuals[3]?.subAccordions?.[0]?.data?.lineStyle
        },
        yaxis: {
          title: {
            text: isArraySecData ? secondaryData[0].label : secondaryData.label,
            standoff: 200,
            font: {
              family: parentChartObj.formatVisuals[1].subAccordions[2].data.font,
              size: parentChartObj.formatVisuals[1].subAccordions[2].data.fontSize,
              color: parentChartObj.formatVisuals[1].subAccordions[2].data.color,
              weight: 500,
              style: "normal",
            },
          },
          tickfont: {
            family: parentChartObj.formatVisuals[1].subAccordions[1].data.font,
            size: parentChartObj.formatVisuals[1].subAccordions[1].data.fontSize,
            color: parentChartObj.formatVisuals[1].subAccordions[1].data.color,
            weight: 500,
            style: "normal",
          },
          gridcolor: parentChartObj.formatVisuals[3]?.subAccordions?.[1]?.data?.color,
          griddash: parentChartObj.formatVisuals[3]?.subAccordions?.[1]?.data?.lineStyle
        },
        barmode: childChartObj?.barmode
      }
    }

    if(parentChartName === 'pie') {
      if (!isArraySecData) {
        let data = {
          values: [19, 26, 55],
          labels: ['Residential', 'Non-Residential', 'Utility'],
          name: primaryData.label,
          type: childChartObj.type,
        }
        traces.push(data);
        layout = {
          height: 400,
          width: 500,
        };
      }
      if (isArraySecData) {
        let data1 = {
          values: [19, 26, 55],
          labels: ['Residential', 'Non-Residential', 'Utility'],
          name: primaryData.label,
          type: childChartObj.type,
          domain: {column: 0},
          hoverinfo: 'label+percent+name',
          hole: .4,
        }
        let data2 = {
          values: [18, 25, 57],
          labels: ['Residential', 'Non-Residential', 'Utility'],
          name: secondaryData.label,
          type: childChartObj.type,
          domain: {column: 1},
          hoverinfo: 'label+percent+name',
          hole: .4,
        }

        traces.push(data1, data2);
        layout = {
          height: 400,
          width: 500,
          grid: {rows: 1, columns: 2}
        };
      }
    }

    const dataCreator = {
      data: traces,
      layout: layout,
    };
    console.log("datacreated", dataCreator);
    setSelectedChartData(dataCreator);
    setChartConfig(prevConfig => {
      return prevConfig.map(item => {
        // If this is not the parent chart we're looking for, return unchanged
        if (item.id !== selectedChart?.id) return item;
    
        // If we found the parent chart, map through its types
        return {
          ...item,
          types: item.types.map(typeItem => {
            // If this is not the child chart we're looking for, return unchanged
            if (typeItem.id !== selectedChartType?.id) return typeItem;
    
            // If we found the child chart, add the new key-value
            return {
              ...typeItem,
              plotData: dataCreator
            };
          })
        };
      });
    });
  }

  useEffect(() => {
    console.log('setting new chart config', chartConfig)
  }, [chartConfig])
  


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
                <Styled.ChartButton value={obj.name}>
                  <img src={obj.icon} />
                </Styled.ChartButton>
                <span>{obj.name}</span>
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
          // setLeftMenuData={setLeftMenuData}
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
