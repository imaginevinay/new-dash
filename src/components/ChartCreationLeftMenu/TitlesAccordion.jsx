import { memo, useCallback, useState } from "react";
import {
  Select,
  Option,
  ToggleButtonGroup,
  Menu,
  MenuButton,
  Dropdown,
  Button,
  Input,
} from "@mui/joy";
import { selectClasses } from "@mui/joy/Select";
import { SketchPicker } from "react-color";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const TitlesAccordion = memo(({ onValuesChange, data }) => {
  const [localData, setLocalData] = useState(data);

  const handleChange = useCallback(
    (type, value) => {
      const newData = { ...localData, [type]: value };
      setLocalData(newData);
      onValuesChange(newData);
    },
    [onValuesChange, localData]
  );

  return (
    <div className="flexCol-lg">
      {localData.titleText && <div className="flexCol-md">
        <span className="title">Title Text</span>
        <Input
          value={localData.titleText}
          onChange={(event) => handleChange("titleText", event.target.value)}
        />
      </div>}
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
            <Option value="Inter UI">Inter UI</Option>
            <Option value="Arial">Arial</Option>
            <Option value="Helvetica">Helvetica</Option>
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
    </div>
  );
});

TitlesAccordion.displayName = "TitlesAccordion";
export default TitlesAccordion;
