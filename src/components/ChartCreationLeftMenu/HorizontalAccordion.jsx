import { memo, useCallback, useState } from "react";
import {
  Dropdown,
  Menu,
  MenuButton,
  Option,
  Select,
  selectClasses,
  Slider,
} from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";
import { SketchPicker } from "react-color";

const HorizontalAccordion = memo(({ onValuesChange, data }) => {
  const [localData, setLocalData] = useState(data);

  const handleChange = useCallback(
    (type, value) => {
      const newData = { ...localData, [type]: value };
      setLocalData(newData);
      onValuesChange(newData);
    },
    [onValuesChange, localData]
  );

  const SelectProps = {
    // width: "35%",
    [`& .${selectClasses.indicator}`]: {
      transition: "0.2s",
      [`&.${selectClasses.expanded}`]: {
        transform: "rotate(-180deg)",
      },
    },
  };

  const slotProps = {
    listbox: {
      placement: "right",
    },
  };

  return (
    <div className="flexCol-lg">
      <div className="flexCol-md">
        <span className="title">Colors</span>
        <Dropdown>
          <MenuButton
            sx={{
              backgroundColor: localData.color,
              color: "white",
              "&:hover": {
                backgroundColor: localData.color,
              },
            }}
          >
            {localData.color}
          </MenuButton>
          <Menu sx={{ padding: 0 }} placement="right">
            <SketchPicker
              color={localData.color}
              onChangeComplete={(newColor) =>
                handleChange("color", newColor.hex)
              }
              disableAlpha={true}
            />
          </Menu>
        </Dropdown>
      </div>

      <div className="flexCol-md">
        <span className="title">Transparency</span>
        <div className="flexSpaceBetween">
          <Slider
            sx={{width: '50%'}}
            aria-label="Transparency"
            value={localData.transparency}
            min={0}
            max={100}
            step={5}
            onChange={(_, value) => handleChange("transparency", value)}
          />
          <Select
            slotProps={slotProps}
            value={localData.transparency}
            onChange={(_, value) => handleChange("transparency", value)}
          >
            {Array.from({ length: 21 }, (_, i) => i * 5).map((value) => (
              <Option key={value} value={value}>
                {value}%
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <div className="flexCol-md">
        <span className="title">Line Style</span>
        <Select
          indicator={<KeyboardArrowDown />}
          value={localData.lineStyle}
          slotProps={slotProps}
          sx={SelectProps}
          onChange={(_, value) => handleChange("lineStyle", value)}
        >
          {["Solid", "Dotted", "Dash"].map((item, idx) => (
            <Option key={idx} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
});

HorizontalAccordion.displayName = "HorizontalAccordion";
export default HorizontalAccordion;
