import { Option, Select, selectClasses } from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

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

  const selectStyle = {
    width: "16.25rem",
    [`& .${selectClasses.indicator}`]: {
      transition: "0.2s",
      [`&.${selectClasses.expanded}`]: {
        transform: "rotate(-180deg)",
      },
    },
  };


  useEffect(() => {
    const data = chartConfig.find((item) => item.id === selectedChart?.id) 
    setParentChartObj(data)
  }, [chartConfig])

  const handleChange = (newValue) => {
    const foundObject = parentChartObj?.types.find((chart) => chart.id === newValue);
    setSelectedChartType(foundObject);
    if (selectedChartData) {
      setSelectedChartData((prevData) => {
        const newData = JSON.parse(JSON.stringify(prevData));
        if(foundObject?.plotData) {
          newData.data = foundObject?.plotData.data;
          newData.layout = foundObject?.plotData.layout;
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
