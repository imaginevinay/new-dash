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
    (type, value, idx) => {
      const newData = { ...localData };
      newData.color[idx] = value;
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
        {localData.color.map((item, idx) => (
            <Dropdown key={idx}>
            <MenuButton
              sx={{
                backgroundColor: item,
                color: "white",
                "&:hover": {
                  backgroundColor: item,
                },
              }}
            >
            </MenuButton>
            <Menu sx={{ padding: 0 }} placement="right">
              <SketchPicker
                color={item}
                onChangeComplete={(newColor) =>
                  handleChange("color", newColor.hex, idx)
                }
                disableAlpha={true}
              />
            </Menu>
          </Dropdown>
          ))}
        </div>
      </div>
    </div>
  );
});

SlicesColors.displayName = "SlicesColors";
export default SlicesColors;
