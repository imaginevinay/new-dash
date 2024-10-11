import { memo, useCallback, useState } from "react";
import { Menu, MenuButton, Dropdown } from "@mui/joy";
import { SketchPicker } from "react-color";
// import { AppContext } from "../../context/AppContext";
// import { containsStackOrGroup } from "../../utils/common";

const SlicesColors = memo(({ onValuesChange, data }) => {
  const [localData, setLocalData] = useState(data);
  //   const { selectedChartType } = useContext(AppContext);
  // const showColors2 = containsStackOrGroup(selectedChartType);
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
      <div className="flexCol-md">
        <span className="title">Change Color Settings</span>
        <div className="flexRow">
          <Dropdown>
            <MenuButton
              sx={{
                backgroundColor: localData.color1,
                color: "white",
                "&:hover": {
                  backgroundColor: localData.color1,
                },
              }}
            ></MenuButton>
            <Menu sx={{ padding: 0 }} placement="right">
              <SketchPicker
                color={localData.color1}
                onChangeComplete={(newColor) =>
                  handleChange("color1", newColor.hex)
                }
                disableAlpha={true}
              />
            </Menu>
          </Dropdown>
          <Dropdown>
            <MenuButton
              sx={{
                backgroundColor: localData.color2,
                color: "white",
                "&:hover": {
                  backgroundColor: localData.color2,
                },
              }}
            ></MenuButton>
            <Menu sx={{ padding: 0 }} placement="right">
              <SketchPicker
                color={localData.color2}
                onChangeComplete={(newColor) =>
                  handleChange("color2", newColor.hex)
                }
                disableAlpha={true}
              />
            </Menu>
          </Dropdown>
          <Dropdown>
            <MenuButton
              sx={{
                backgroundColor: localData.color3,
                color: "white",
                "&:hover": {
                  backgroundColor: localData.color3,
                },
              }}
            ></MenuButton>
            <Menu sx={{ padding: 0 }} placement="right">
              <SketchPicker
                color={localData.color3}
                onChangeComplete={(newColor) =>
                  handleChange("color3", newColor.hex)
                }
                disableAlpha={true}
              />
            </Menu>
          </Dropdown>
          <Dropdown>
            <MenuButton
              sx={{
                backgroundColor: localData.color4,
                color: "white",
                "&:hover": {
                  backgroundColor: localData.color4,
                },
              }}
            ></MenuButton>
            <Menu sx={{ padding: 0 }} placement="right">
              <SketchPicker
                color={localData.color4}
                onChangeComplete={(newColor) =>
                  handleChange("color4", newColor.hex)
                }
                disableAlpha={true}
              />
            </Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
});

SlicesColors.displayName = "SlicesColors";
export default SlicesColors;
