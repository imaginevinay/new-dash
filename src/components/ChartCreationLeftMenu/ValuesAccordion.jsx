import { memo, useCallback, useState } from "react";
import { 
  Select,
  Option,
  ToggleButtonGroup,
  Menu,
  MenuButton,
  Dropdown,
  Button,
} from "@mui/joy";
import { selectClasses } from "@mui/joy/Select";
import { SketchPicker } from "react-color";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

let fonts = ["Arial", "Balto", "Courier New", "Droid Sans", "Droid Serif", "Droid Sans Mono", "Gravitas One", "Old Standard TT", "Open Sans", "Overpass", "PT Sans Narrow", "Raleway", "Times New Roman"]
const ValuesAccordion = memo(({ onValuesChange, data }) => {

  const [localData, setLocalData] = useState(data);
  const handleChange = useCallback((type, value) => {
    const newData = { ...localData, [type]: value };
    setLocalData(newData);
    onValuesChange(newData);
  }, [onValuesChange, localData]);
  const slotProps = {
    listbox: {
      placement: 'right'
    },
  }

  return (
    <div className="flexCol-lg">
      <div className="flexCol-md">
        <span className="title">Font</span>
        <div className="flexRow">
          <Select
            className="font-selector"
            value={localData.font}
            onChange={(_, value) => handleChange("font", value)}
            indicator={<KeyboardArrowDown />}
            sx={{
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            {fonts.map((font, idx) => (
              <Option value={font} key={idx}>{font}</Option>
            ))}
          </Select>
          <Select
            value={localData.fontSize}
            onChange={(_, value) => handleChange("fontSize", value)}
          >
            {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((size) => (
              <Option key={size} value={size}>
                {size}
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <ToggleButtonGroup
        value={localData.textStyle}
        onChange={(_, value) => handleChange("textStyle", value)}
        spacing={"1rem"}
        className="toggleWrapper"
      >
        <Button
          sx={{ fontWeight: 700, borderRight: "1px solid #CDD7E1 !important" }}
          value="bold"
        >
          B
        </Button>
        <Button sx={{ fontStyle: "italic" }} value="italic">
          I
        </Button>
        <Button
          sx={{
            textDecoration: "underline",
            borderLeft: "1px solid #CDD7E1 !important",
          }}
          value="underlined"
        >
          U
        </Button>
      </ToggleButtonGroup>
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
        <span className="title">Display Units</span>
        <Select
          value={localData.displayUnit}
          onChange={(_, value) => handleChange("displayUnit", value)}
          indicator={<KeyboardArrowDown />}
          slotProps={slotProps}
          sx={{
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
        >
          <Option value="Auto">Auto</Option>
          <Option value="None">None</Option>
          <Option value="Thousand">Thousand</Option>
          <Option value="Millions">Millions</Option>
          <Option value="Billions">Billions</Option>
          <Option value="Trillions">Trillions</Option>          
        </Select>
      </div>
    </div>
  );
});

ValuesAccordion.displayName = "ValuesAccordion";

export default ValuesAccordion;
