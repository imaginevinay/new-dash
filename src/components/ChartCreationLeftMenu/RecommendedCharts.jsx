import { Grid, ToggleButtonGroup } from "@mui/joy";
import * as Styled from "./ChartCreationLeftMenu.styles";
import { useContext, useEffect, useState } from "react";
import SelectChartsModal from "./SelectChartsModal";
import VisualsAccordions from "./VisualsAccordions";
import { AppContext } from "../../context/AppContext";
// import { removeInitialLowercaseH } from "../../utils/common";
import {defaultColors} from '../../utils/common'

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
      setSelected(selectedType.name);
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
          origX: primaryData.data,
          origY: secondaryData.data,
          marker: {
            color: defaultColors[0]
          }
        }
        if(parentChartName === 'bar' && childChartObj.orientation) {
          data['orientation'] = childChartObj.orientation
        }
        traces.push(data);
      }
      if (isArraySecData) {
        secondaryData.forEach((yAxisItem,idx) => {
          let data = {
            x: primaryData.data,
            y: yAxisItem.data,
            name: primaryData.label,
            type: childChartObj.type,
            origX: primaryData.data,
            origY: yAxisItem.data,
            marker: {
              color: defaultColors[idx]
            }
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
          values: [19, 26, 30, 25],
          labels: ['Central', 'South', 'East', 'West'],
          name: primaryData.label,
          type: childChartObj.type,
          hole: childChartObj.hole
        }
        data = {
          ...data,
          marker: {
            colors: defaultColors.slice(0, data.values.length)
          }
        };

        traces.push(data);
        layout = {
          height: 400,
          width: 500,
        };
      }
    }

    if(parentChartName === 'area') {
      if (!isArraySecData) {
        let data = {
          x: primaryData.data,
          y: secondaryData.data,
          origX: primaryData.data,
          origY: secondaryData.data,
          type: childChartObj.type,
          fill: 'tozeroy',
          fillcolor: defaultColors[0]
        }
        traces.push(data);
      }
      if (isArraySecData) {
        secondaryData.forEach((yAxisItem, idx) => {
          let data = {
            x: primaryData.data,
            y: yAxisItem.data,
            origX: primaryData.data,
            origY: secondaryData.data,
            type: childChartObj.type,
            fill: idx == 0 ? 'tozeroy' : 'tonexty',
            fillcolor: defaultColors[idx]
          }
          traces.push(data);
        })
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
    if(parentChartName === 'funnel') {
      if (!isArraySecData) {
        let data = {}
        data = {
          type: childChartObj.type, 
          y: primaryData.data, 
          x: secondaryData.data, 
          marker: {color: defaultColors[0]}
          // origX: secondaryData.data,
          // origY: primaryData.data
        }

        if(childChartObj.type === 'funnelarea') {
          data = {
            type: childChartObj.type, 
            text: primaryData.data, 
            values: secondaryData.data, 
            marker: {color: defaultColors[0]}
            // origX: secondaryData.data,
            // origY: primaryData.data
          }
        }

        layout = {
          margin: {l: 150},
          width:600, 
          height: 500
        }

        // if(childChartObj?.id === 'vArea') {
        //   [data.x, data.y] = [data.y, data.x];
        //   data.isVArea = true
        // }

        traces.push(data);
      }
      if (isArraySecData) {
        secondaryData.forEach((yAxisItem) => {
          let data = {
            y: primaryData.data,
            x: yAxisItem.data,
            type: childChartObj.type,
            marker: {color: defaultColors.slice(0, primaryData.data.length)}
          }
          traces.push(data);
        })
        layout = {
          margin: {l: 150},
          width:600, 
          height: 500
        }
      }
    }
    if(parentChartName === 'waterfall'){
      if (!isArraySecData) {
        let data = {
          x: primaryData.data,
          y: secondaryData.data,
          type: childChartObj.type,
          orientation: childChartObj.orientation,
          decreasing : {"marker":{"color":defaultColors[0]}},
          increasing : {"marker":{"color":defaultColors[0]}},
        }
        traces.push(data);
      }
      if (isArraySecData) {
        secondaryData.forEach((yAxisItem) => {
          let data = {
            x: primaryData.data,
            y: yAxisItem.data,
            type: childChartObj.type,
            orientation: childChartObj.orientation,
            decreasing : {"marker":{"color":defaultColors[0]}},
            increasing : {"marker":{"color":defaultColors[0]}},
          };
          traces.push(data);
        })
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
          griddash: parentChartObj.formatVisuals[3]?.subAccordions?.[0]?.data?.lineStyle,
        },
        yaxis: {
          title: {
            text: isArraySecData ? secondaryData[0].label : secondaryData.label,
            standoff: 200,
            font: {
              family: parentChartObj.formatVisuals[1].subAccordions[1].data.font,
              size: parentChartObj.formatVisuals[1].subAccordions[1].data.fontSize,
              color: parentChartObj.formatVisuals[1].subAccordions[1].data.color,
              weight: 500,
              style: "normal",
            },
          },
          tickfont: {
            family: parentChartObj.formatVisuals[1].subAccordions[0].data.font,
            size: parentChartObj.formatVisuals[1].subAccordions[0].data.fontSize,
            color: parentChartObj.formatVisuals[1].subAccordions[0].data.color,
            weight: 500,
            style: "normal",
          },
          gridcolor: parentChartObj.formatVisuals[3]?.subAccordions?.[1]?.data?.color,
          griddash: parentChartObj.formatVisuals[3]?.subAccordions?.[1]?.data?.lineStyle,
          type: "linear"
        },
         legend: {
          x: 1.1,
          y: 1,
          xanchor: "left",
          yanchor: "bottom",
          orientation: "v",
        },
        autosize: true,
        showlegend: true
    };
    }

    const dataCreator = {
      data: traces,
      layout: layout,
    };
    console.log("datacreated", dataCreator);
    setSelectedChartData(JSON.parse(JSON.stringify(dataCreator)));
    setChartConfig(prevConfig => {
      return prevConfig.map(item => {
        if (item.id !== selectedChart?.id) return item;
        return {
          ...item,
          types: item.types.map(typeItem => {            
            if (typeItem.inputType === selectedChartType?.inputType) {
              if (typeItem.parent === 'bar') {
                const modifiedData = dataCreator.data.map(dataItem => ({...dataItem,orientation: typeItem.orientation}));   
                return {
                  ...typeItem,
                  plotData: {
                    ...dataCreator,
                    data: modifiedData,
                    layout: {
                      ...dataCreator.layout,
                      barmode:typeItem.barmode 
                    }
                  },
                };
              }
              if (typeItem.parent === 'line') {
                if(typeItem.id === 'vStackedLine') {
                  const modifiedData = dataCreator.data.map(dataItem => {
                    const { origX, origY, ...rest } = dataItem;
                    return {
                      ...rest,
                      x: origY,
                      y: origX,
                      isVStackedLine: true
                    };
                  });

                  return {
                    ...typeItem,
                    plotData: {
                      ...dataCreator,
                      data: modifiedData
                    },
                  };
                } 
                else {
                  // For other line types, restore original values if they exist
                  const restoredData = dataCreator.data.map(dataItem => {
                    const { origX, origY, ...rest } = dataItem;
                    const modDataItem = {
                      ...rest,
                      x: origX,
                      y: origY,
                      isVStackedLine: false,
                    }
                    if(typeItem.id === 'steppedLine') {
                      modDataItem.line = typeItem.line
                    }
                    return modDataItem;
                  });
              
                  return {
                    ...typeItem,
                    plotData: {
                      ...dataCreator,
                      data: restoredData
                    },
                  }; 
                }
              }
              if(typeItem.parent === 'pie') {
                const modifiedData = dataCreator.data.map(dataItem => ({...dataItem,hole: typeItem.hole}));
                return {
                  ...typeItem,
                  plotData: {
                    ...dataCreator,
                    data: modifiedData,
                  },
                };
              } 
              if(typeItem.parent === 'funnel'){
                if(typeItem?.id === 'funnelArea') {
                  const modifiedData = dataCreator.data.map(dataItem => {
                    const newData = {
                      ...dataItem,
                      type: typeItem?.type,
                      values: dataItem.x,
                      text: dataItem.y,
                    }
                    return newData
                  }
                );
                return {
                  ...typeItem,
                  plotData: {
                    ...dataCreator,
                    data: modifiedData,
                  },
                };
                } else {
                  return {
                    ...typeItem,
                    plotData: dataCreator,
                  };
                }
              }
              if(typeItem.parent === 'waterfall'){
                const modifiedData = dataCreator.data.map(dataItem => ({...dataItem,orientation: typeItem.orientation}));
                return {
                  ...typeItem,
                  plotData: {
                    ...dataCreator,
                    data: modifiedData,
                  },
                };
              }

              
              else {
                return {
                  ...typeItem,
                  plotData: dataCreator,
                };
              }              
            }
            return typeItem;
          }),
          formatVisuals: item.formatVisuals.map(visualsItem => {
            if((item.id=== 'bar' || item.id=== 'line' || item.id==='area' ||item.id === 'funnel') && visualsItem.id === 3){
              visualsItem.subAccordions.map(subAcc => {
                if(subAcc.id === 'leg-colors'){
                  subAcc.data.color = defaultColors.slice(0, dataCreator.data.length)
                }
              })
            }
            if(item.id==='waterfall' || item.id=== 'bar' || item.id=== 'line' || item.id === 'area' && (visualsItem.id === 1 || visualsItem.id === 2)){
                 visualsItem.subAccordions.map(subAcc => {
                if(subAcc.id === 'x-titles'){
                  subAcc.data.titleText = dataCreator.layout.xaxis.title.text
                }
                if(subAcc.id === 'y-titles'){
                  subAcc.data.titleText = dataCreator.layout.yaxis.title.text
                }
              })
            }
            if(item.id==='pie'  && (visualsItem.id === 3)){
              visualsItem.subAccordions.map(subAcc => {
                if(subAcc.id === 'slices-colors'){
                  subAcc.data.color = defaultColors.slice(0, dataCreator.data[0].values.length)
                }
              })
            }
            if(item.id==='waterfall'  && (visualsItem.id === 3)){
              visualsItem.subAccordions.map(subAcc => {
                if(subAcc.id === 'leg-colors'){
                  subAcc.data.color = [defaultColors[0]]
                }
              })
            }
            return visualsItem

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
        color="secondary"
      >
        <Grid
          container
          spacing={"2.38rem"}
          sx={{ justifyContent: isChartTypeSelected && "space-around" }}
        >
          {recoCharts.map((obj, index) => (
            <Grid key={index} xs={4}>
              <Styled.ButtonWrapper>
                <Styled.ChartButton value={obj.name} className="chartBtnToggles">
                  <img src={obj.icon} />
                </Styled.ChartButton>
                <span>{obj.name}</span>
              </Styled.ButtonWrapper>
            </Grid>
          ))}
        </Grid>
      </ToggleButtonGroup>

      {!isChartTypeSelected && (
        <Styled.PreviewChartButton className={selected !== null && selected !== "View More" ? "isActive" : ""}>
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
