import { Option, Select, selectClasses } from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useContext } from "react";
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

  // useEffect(() => {

  // }, [selectedChartType])

  
  const handleChange = (newValue) => {
    const foundObject = types.find((chart) => chart.id === newValue);
    setSelectedChartType(foundObject);
    if (selectedChartData) {
      setSelectedChartData((prevData) => {
        console.log('prev data', prevData)
        const newData = JSON.parse(JSON.stringify(prevData));
        const axisKeys = Object.keys(foundObject.axisData);
        if (axisKeys.length === 2) {
          newData.data = [newData.data[0]];
          delete newData.data["line"];
        }

        const wasVStackedLine = newData.data.some(elem => elem.isVStackedLine);

  
        newData?.data.forEach((elem) => {
          if(foundObject.parent === 'bar') {
            if (startsWithH(foundObject?.id)) {
              elem["orientation"] = foundObject?.orientation;
            } else {
              delete elem["orientation"];
            }
          }
          if(foundObject.parent === 'line') {
            if(foundObject?.id === 'steppedLine') {
              elem["line"] = foundObject?.line;
            } else {
              delete elem["line"];
            }
            if(foundObject?.id === 'vStackedLine') {
              [elem.x, elem.y] = [elem.y, elem.x];
              elem.isVStackedLine = true;
            } else if (wasVStackedLine) {
              // Switch back from vStackedLine to any other chart
              [elem.x, elem.y] = [elem.y, elem.x];
              delete elem.isVStackedLine;
            }      
          }                    
        });
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
      {types.map((item) => (
        <Option key={item.id} value={item.id}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
}
