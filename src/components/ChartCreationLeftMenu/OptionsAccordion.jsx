import { memo, useCallback, useState } from "react";
import { Option, Select, selectClasses } from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";


const OptionsAccordion = memo(({ onValuesChange, data }) => {
  const [localData, setLocalData] = useState(data);

  const handleChange = useCallback((type, value) => {
    const newData = { ...localData, [type]: value };
    setLocalData(newData);
    onValuesChange(newData);
  }, [onValuesChange, localData]);

  const SelectProps = {
    width: 240,
    [`& .${selectClasses.indicator}`]: {
      transition: "0.2s",
      [`&.${selectClasses.expanded}`]: {
        transform: "rotate(-180deg)",
      },
    },
  }

  const slotProps = {
    listbox: {
      placement: 'right'
    },
  }


  return (
    <div className="flexCol-lg">
      <div className="flexCol-md">
        <span className="title">Positions</span>
        <Select
          indicator={<KeyboardArrowDown />}
          defaultValue={localData.positions}
          slotProps={slotProps}
          sx={SelectProps}
          onChange={(_, value) => handleChange("positions", value)}
        >
          <Option value="Top Left">Top Left</Option>
          <Option value="Top Right">Top Right</Option>
          <Option value="Top Center">Top Center</Option>
          <Option value="Top Left Stacked">Top Left Stacked</Option>
          <Option value="Top Right Stacked">Top Right Stacked</Option>
          <Option value="Center Left">Center Left</Option>
          <Option value="Center Right">Center Right</Option>
          <Option value="Bottom Left">Bottom Left</Option>
          <Option value="Bottom Center">Bottom Center</Option>
          <Option value="Bottom Right">Bottom Right</Option>
        </Select>
      </div>

      <div className="flexCol-md">
        <span className="title">Style</span>
        <Select
          indicator={<KeyboardArrowDown />}
          defaultValue={localData.style}
          slotProps={slotProps}
          sx={SelectProps}
          onChange={(_, value) => handleChange("style", value)}
        >
          <Option value="circle">Circle</Option>
          <Option value="square">Square</Option>
          <Option value="diamond">Diamond</Option>
          <Option value="cross">Cross</Option>
        </Select>
      </div>
    </div>
  );
});

OptionsAccordion.displayName = "OptionsAccordion";
export default OptionsAccordion;