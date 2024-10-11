import { memo, useCallback, useState } from "react";
import { Option, Select, Switch } from "@mui/joy";

const MinMaxRange = memo(({ onValuesChange, data }) => {
    const [localData, setLocalData] = useState(data);
    const handleChange = useCallback((type, value) => {
      const newData = { ...localData, [type]: value };
      setLocalData(newData);
      onValuesChange(newData);
    }, [onValuesChange, localData]);
  
  
    return (
      <div className="flexCol-lg">
        <div className="flexCol-md">
          <span className="title">Minimum Range</span>
          <Select
            value={localData.minRange}
            onChange={(_, value) => handleChange("minRange", value)}
          >
            {["2014", "2015", "2016", "2017", "2018"].map((size) => (
              <Option key={size} value={size}>
                {size}
              </Option>
            ))}
          </Select>
        </div>
  
        <div className="flexCol-md">
          <span className="title">Maximum Range</span>
          <Select
            value={localData.maxRange}
            onChange={(_, value) => handleChange("maxRange", value)}
          >
            {["2014", "2015", "2016", "2017", "2018"].map((size) => (
              <Option key={size} value={size}>
                {size}
              </Option>
            ))}
          </Select>
        </div>
  
        <div className="flexSpaceBetween">
          <span className="title">Invert Range</span>
          <Switch
            checked={localData.invertRange}
            onChange={(event) =>
              handleChange("invertRange", event.target.checked)
            }
          />
        </div>
      </div>
    );
})


MinMaxRange.displayName = "MinMaxRange";
export default MinMaxRange;