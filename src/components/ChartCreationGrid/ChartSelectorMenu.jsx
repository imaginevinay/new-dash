import { Option, Select, selectClasses } from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { startsWithH } from "../../utils/common";

export default function ChartSelectorMenu() {
  const { selectedChart, selectedChartType, setSelectedChartType, setSelectedChartData, selectedChartData } = useContext(AppContext);
  const types = selectedChart?.types || [];

  const selectStyle = {
    width: "16.25rem",
    [`& .${selectClasses.indicator}`]: {
      transition: "0.2s",
      [`&.${selectClasses.expanded}`]: {
        transform: "rotate(-180deg)",
      },
    },
  }

  useEffect(() => {
    if (selectedChartData) {
    setSelectedChartData((prevData) => {
      const newData = JSON.parse(JSON.stringify(prevData));
      const axisKeys = Object.keys(selectedChartType.axisData);
      if (axisKeys.length === 2) {
        newData.data = [newData.data[0]];
        delete newData.data["line"];
      }

      newData?.data.forEach((elem) => {
        if(selectedChartType.parent === 'bar') {
          if (startsWithH(selectedChartType?.id)) {
            elem["orientation"] = selectedChartType?.orientation;
          } else {
            delete elem["orientation"];
          }
        }
        if(selectedChartType.parent === 'line') {
          if(selectedChartType?.id === 'steppedLine') {
            elem["line"] = selectedChartType?.line;
          } else {
            delete elem["line"];
          }
          if(selectedChartType?.id === 'vStackedLine') {
            [elem.x, elem.y] = [elem.y, elem.x];
          }          
        }                    
      });
      return newData;
    });
  }
  }, [selectedChartType])

  
  const handleChange = (newValue) => {
    const foundObject = types.find((chart) => chart.id === newValue);
    setSelectedChartType(foundObject);
    // if (selectedChartData) {
      
    // }
  };

  return (
    <Select
      placeholder="Select a chart"
      value={selectedChartType?.id || null}
      indicator={<KeyboardArrowDown />}
      onChange={(event, newValue) => handleChange(newValue)}
      sx={selectStyle}
    >
      {types.map((item) => (
        <Option key={item.id} value={item.id}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
}
