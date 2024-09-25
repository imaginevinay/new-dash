import { Option, Select, selectClasses } from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { removeInitialLowercaseH, startsWithH } from "../../utils/common";

export default function ChartSelectorMenu() {
  const { selectedChart, selectedChartType, setSelectedChartType, setSelectedChartData, selectedChartData } = useContext(AppContext);
  const types = selectedChart?.types || [];

  const handleChange = (newValue) => {
    const foundObject = types.find(chart => chart.id === newValue);
    setSelectedChartType(foundObject);
    console.log('hello', selectedChartData)
    if(selectedChartData) {
      setSelectedChartData((prevData) => {
        const newData = JSON.parse(JSON.stringify(prevData));
        if (foundObject.axisData) {
          const axisKeys = Object.keys(foundObject.axisData);
          if (axisKeys.length === 2) { // For charts with only x and y axes
            newData.data = [newData.data[0]]; // Keep only the first dataset
          }
        }
        if (startsWithH(newValue)) {
          newData?.data.forEach((elem) => {
            elem["orientation"] = "h";
          });
  
          newData.layout.barmode = removeInitialLowercaseH(newValue);
        } else {
          newData?.data.forEach((elem) => {
            elem["orientation"] = null;
          });
          newData.layout.barmode = newValue;
        }
        return newData;
      });
    }    
  };

  return (
    <Select
      placeholder="Select a chart"
      value={selectedChartType?.id}
      indicator={<KeyboardArrowDown />}
      onChange={(event, newValue) => handleChange(newValue)}
      sx={{
        width: "16.25rem",
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      {types.map((item) => (
        <Option key={item.id} value={item.id}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
}
