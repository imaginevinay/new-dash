import { memo, useCallback, useState } from "react";
import { Button, Option, Select, Slider, Switch, ToggleButtonGroup } from "@mui/joy";

const LabelOptions = memo(({ onValuesChange, data }) => {
    const [localData, setLocalData] = useState(data);
    const handleChange = useCallback((type, value) => {
      const newData = { ...localData, [type]: value };
      setLocalData(newData);
      onValuesChange(newData);
    }, [onValuesChange, localData]);
  

    const slotProps = {
      listbox: {
        placement: "right",
      },
    };
  
    return (
      <div className="flexCol-lg">
        <div className="flexSpaceBetween">
          <span className="title">Label</span>
          <ToggleButtonGroup
            value={localData?.label}
            onChange={(event, newValue) => {
              handleChange("label", newValue);
            }}
            color="secondary"
          >
            <Button value="outside">Outside</Button>
            <Button value="inside">Inside</Button>
          </ToggleButtonGroup>
        </div>

        <div className="flexSpaceBetween">
          <span className="title">Percentage</span>
          <Switch
            checked={localData.percentage}
            onChange={(event) =>
              handleChange("percentage", event.target.checked)
            }
          />
        </div>

        <div className="flexSpaceBetween">
          <span className="title">Sorting</span>
          <ToggleButtonGroup
            value={localData?.sorting}
            onChange={(event, newValue) => {
              handleChange("sorting", newValue);
            }}
            color="secondary"
          >
            <Button value="clockwise">Ascend</Button>
            <Button value="counterclockwise">Descend</Button>
          </ToggleButtonGroup>
        </div>

        <div className="flexCol-md">
          <span className="title">Radius</span>
          <div className="flexSpaceBetween">
            <Slider
              sx={{ width: "50%" }}
              aria-label="Radius"
              value={localData.radius}
              min={100}
              max={500}
              step={100}
              onChange={(_, value) => handleChange("radius", value)}
            />
            <Select
              slotProps={slotProps}
              value={localData.radius}
              onChange={(_, value) => handleChange("radius", value)}
            >
              {[100, 200, 300, 400, 500].map((value) => (
                <Option key={value} value={value}>
                  {value} px
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
    );
})


LabelOptions.displayName = "LabelOptions";
export default LabelOptions;