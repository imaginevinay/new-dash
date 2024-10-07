import { Option, Select, selectClasses } from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
// import { startsWithH } from "../../utils/common";

export default function ChartSelectorMenu() {
  const {
    selectedChart,
    selectedChartType,
    setSelectedChartType,
    setSelectedChartData,
    selectedChartData,
    chartConfig
  } = useContext(AppContext);

const [parentChartObj, setParentChartObj] = useState(null);


  // const foundObject = parentChartObj?.types.find((item) => item.id === selectedChartType?.id);
  // const types = selectedChart?.types || [];

  const selectStyle = {
    width: "16.25rem",
    [`& .${selectClasses.indicator}`]: {
      transition: "0.2s",
      [`&.${selectClasses.expanded}`]: {
        transform: "rotate(-180deg)",
      },
    },
  };

  // useEffect(() => {
  //   console.log("setSelectedChartData changed", selectedChartData);
  // }, [selectedChartData])

  useEffect(() => {
    const data = chartConfig.find((item) => item.id === selectedChart?.id) 
    setParentChartObj(data)
  }, [chartConfig])

  const handleChange = (newValue) => {
    const foundObject = parentChartObj?.types.find((chart) => chart.id === newValue);
    setSelectedChartType(foundObject);
    if (selectedChartData) {
      console.log("selectedCHartData", selectedChartData, foundObject);
      setSelectedChartData((prevData) => {
        console.log("prev data", prevData);
        const newData = JSON.parse(JSON.stringify(prevData));
        if(foundObject?.plotData) {
          newData.data = foundObject?.plotData.data;
          newData.layout = foundObject?.plotData.layout;
        } else {
          if (foundObject.parent === "bar") {
            newData.data.forEach(
              (item) => (item.orientation = foundObject.orientation)
            );
            newData.layout.barmode = foundObject.barmode;
          }
          if (foundObject.parent === "line") {
            const wasVStackedLine = newData.data.some((elem) => elem.isVStackedLine);
            newData.data.forEach((elem) => {
              if (foundObject?.id === "steppedLine") {
                elem["line"] = foundObject?.line;
              } else {
                delete elem["line"];
              }
              if (foundObject?.id === "vStackedLine" && prevData?.data.length > 1) {
                [elem.x, elem.y] = [elem.y, elem.x];
                elem.isVStackedLine = true;
              } else if (wasVStackedLine) {
                // Switch back from vStackedLine to any other chart
                [elem.x, elem.y] = [elem.y, elem.x];
                delete elem.isVStackedLine;
              }
            });
          }
        }
        return newData;
      });
    }
  };

  return (
    <Select
      placeholder="Select a chart"
      value={selectedChartType?.id || null}
      indicator={<KeyboardArrowDown />}
      onChange={(event, newValue) => handleChange(newValue)}
      sx={selectStyle}
    >
      {parentChartObj?.types.map((item) => (
        <Option key={item.id} value={item.id}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
}
