import { memo, useCallback, useState } from "react";
import { Input, Switch } from "@mui/joy";


const DateRangeAccordion = memo(({ onValuesChange, data }) => {
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
        <Input
          type="date"
          onChange={(event) => handleChange('minRange', event.target.value)}
          slotProps={{
            input: {
              max: localData.maxRange,
            },
          }}
        />
      </div>

      <div className="flexCol-md">
        <span className="title">Maximum Range</span>
        <Input
          type="date"
          onChange={(event) => handleChange('maxRange', event.target.value)}
          slotProps={{
            input: {
              min: localData.minRange,
            },
          }}
        />
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
});

DateRangeAccordion.displayName = "DateRangeAccordion";
export default DateRangeAccordion;