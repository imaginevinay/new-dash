import {
  memo,
  useCallback,
  // useContext,
  // useEffect,
  // useMemo,
  useState,
} from "react";
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
// import { AppContext } from "../../context/AppContext";

let fonts = [
  "Arial",
  "Balto",
  "Courier New",
  "Droid Sans",
  "Droid Serif",
  "Droid Sans Mono",
  "Gravitas One",
  "Old Standard TT",
  "Open Sans",
  "Overpass",
  "PT Sans Narrow",
  "Raleway",
  "Times New Roman",
];

const TitlesAccordion = memo(({ onValuesChange, data }) => {
  const [localData, setLocalData] = useState(data);
  // const { selectedChart, selectedChartType, chartConfig } =
  //   useContext(AppContext);

  // const plotDataObj = useMemo(() => {
  //   const selectedChartData = chartConfig.find(
  //     (item) => item.id === selectedChart?.id
  //   );
  //   const selectedChartItem = selectedChartData?.types.find(
  //     (item) => item.id === selectedChartType?.id
  //   );
  //   return selectedChartItem?.plotData
  //     ? selectedChartItem?.plotData?.layout
  //     : {};
  // }, [chartConfig, selectedChart?.id, selectedChartType?.id]);

  // useEffect(() => {
  //   setLocalData((prevData) => ({
  //     ...prevData,
  //     titleText: plotDataObj[titleCheck]?.title?.text || "",
  //   }));
  // }, [plotDataObj, titleCheck]);


  // useEffect(() => {
  //   console.log('updating localdata', localData)
  // }, [localData])
  

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
      {localData.titleText && (
        <div className="flexCol-md">
          <span className="title">Title Text</span>
          <Input
            value={localData.titleText}
            onChange={(event) => handleChange("titleText", event.target.value)}
          />
        </div>
      )}
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
              <Option value={font} key={idx}>
                {font}
              </Option>
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
    </div>
  );
});

TitlesAccordion.displayName = "TitlesAccordion";
export default TitlesAccordion;
