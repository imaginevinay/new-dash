import { useCallback, useContext, useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Checkbox,
  FormControl,
  Input,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/joy";
import * as Styled from "./ChartCreationLeftMenu.styles";
import TableIcon from "../../assets/icons/table.svg";
import CalendarIcon from "../../assets/icons/calendar.svg";
import QueueIcon from "../../assets/icons/queue.svg";
import CloseIcon from "@mui/icons-material/Close";
import ValuesAccordion from "./ValuesAccordion";
import TitlesAccordion from "./TitlesAccordion";
import DateRangeAccordion from "./DateRangeAccordion";
import OptionsAccordion from "./OptionsAccordion";
import HorizontalAccordion from "./HorizontalAccordion";
import { allNotNullOrUndefined, containsStackOrGroup } from "../../utils/common";
import { AppContext } from "../../context/AppContext";
import CustomEyeCheckbox from "./CustomEyeCheckbox";
import ColumnColorsAccordion from "./ColumnColorsAccordion";

const sqlData = [
  {
    id: 1,
    tableName: "Orders Table",
    tableColumns: [
      {
        id: 2,
        label: "Order Date",
        icon: CalendarIcon,
        isChecked: false,
        data: ["2014", "2015", "2016", "2017", "2018"],
        monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        daily: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
      },
      {
        id: 3,
        label: "Order Sales",
        icon: QueueIcon,
        isChecked: false,
        data: [150, 200, 300, 400, 500],
        monthly: [237, 412, 189, 325, 476, 201, 358, 294, 453, 167, 380, 506],
        daily: [183, 276, 342, 159, 405, 231, 298, 367, 195, 412, 287, 354, 201, 439, 176, 315, 389, 245, 302, 456, 218, 327, 384, 153, 421, 279, 361, 197, 408, 263, 335]
      },
      {
        id: 4,
        label: "Order Region",
        icon: QueueIcon,
        isChecked: false,
        data: [200, 300, 400, 500, 600],
        monthly : [315, 468, 203, 387, 529, 176, 423, 281, 492, 154, 346, 571],
        daily: [201, 315, 197, 327, 263, 439, 279, 245, 354, 408, 384, 421, 195, 231, 153, 456, 367, 389, 361, 335, 405, 342, 218, 302, 176, 183, 412, 276, 159, 287, 298]
      },
    ],
  },
  {
    id: 5,
    tableName: "Shipping Orders Table",
    tableColumns: [
      {
        id: 6,
        label: "Shipped Date",
        icon: CalendarIcon,
        isChecked: false,
      },
      {
        id: 7,
        label: "Shipped Sales",
        icon: QueueIcon,
        isChecked: false,
      },
      {
        id: 8,
        label: "Shipped Region",
        icon: QueueIcon,
        isChecked: false,
      },
    ],
  },
];

const formatVObj = [
  {
    id: 1,
    label: "X - Axis",
    subAccordions: [
      {
        id: "x-values",
        label: "Values",
        data: {
          isChecked: true,
          font: "Arial",
          fontSize: 12,
          textStyle: [],
          color: "#000000",
          displayUnit: "Auto",
        },
      },
      {
        id: "x-titles",
        label: "Titles",
        data: {
          isChecked: true,
          titleText: "Order Date",
          font: "Arial",
          fontSize: 18,
          textStyle: [],
          color: "#000000",
        },
      },
    ],
  },
  {
    id: 2,
    label: "Y - Axis",
    subAccordions: [
      {
        id: "y-range",
        label: "Range",
        data: {
          minRange: "",
          maxRange: "",
          invertRange: true,
        },
      },
      {
        id: "y-values",
        label: "Values",
        data: {
          isChecked: true,
          font: "Arial",
          fontSize: 12,
          textStyle: [],
          color: "#000000",
          displayUnit: "Auto",
        },
      },
      {
        id: "y-titles",
        label: "Titles",
        data: {
          isChecked: true,
          titleText: "Order Sales",
          font: "Arial",
          fontSize: 18,
          textStyle: [],
          color: "#000000",
        },
      },
    ],
  },
  {
    id: 3,
    label: "Legend",
    subAccordions: [
      {
        id: "leg-options",
        label: "Options",
        data: {
          positions: "Bottom Center",
          style: "Circular Marker",
        },
      },
      {
        id: "leg-text",
        label: "Text",
        data: {
          isChecked: true,
          titleText: "Auto",
          font: "Inter UI",
          fontSize: 9,
          textStyle: [],
          color: "#000000",
        },
      },
      // add column colors accordion
      {
        id: "col-colors",
        label: "Column Colours",
        data: {
          color1: "#255FD1",
          color2: "#FF7F0E",
        },
      },
    ],
  },
  {
    id: 4,
    label: "Gridlines",
    subAccordions: [
      {
        id: "grid-horizontal",
        label: "Horizontal",
        data: {
          color: "#000000",
          transparency: 25,
          lineStyle: "solid",
        },
      },
      {
        id: "grid-vertical",
        label: "Vertical",
        data: {
          color: "#000000",
          transparency: 25,
          lineStyle: "solid",
        },
      },
    ],
  },
];

const VisualsAccordions = ({ setIsVisualizeActive, setLeftMenuData }) => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeAxis, setActiveAxis] = useState(null);
  const [axisMenuData, setAxisMenuData] = useState(sqlData);
  const [isFormatVisualsActive, setIsFormatVisualsActive] = useState(false);
  const [formatVisualsData, setFormatVisualsData] = useState(formatVObj);
  const [selectedItems, setSelectedItems] = useState({
    xAxis: null,
    yAxis: null,
    legend: null
  });
  const { selectedChartType, setSelectedChartData , selectedChartData} = useContext(AppContext);
  const [showYearlyMenu, setShowYearlyMenu] = useState(false);

  useEffect(() => {
    // console.log("selected chart type", selectedChartType);
    if (containsStackOrGroup(selectedChartType)) {
      setSelectedItems((prevState) => ({
        ...prevState,
        legend: prevState.legend,
      }));
    } else {
      setSelectedItems(prevState => ({
        xAxis: prevState.xAxis,
        yAxis: prevState.yAxis,
      }));
    }
  }, [selectedChartType]);


  const createAxisData = (val) => {
    const obj = {
      axisData: selectedItems,
      visualsData: formatVisualsData,
    };
    if (val) {
      setLeftMenuData(obj);
    } else {
      setLeftMenuData(null);
    }
  };

  useEffect(() => {
    // console.log("selected items", selectedItems);
    if (allNotNullOrUndefined(selectedItems)) {
      setIsVisualizeActive(true);
      setIsFormatVisualsActive(true);
      createAxisData(true);
    } else {
      setIsVisualizeActive(false);
      setIsFormatVisualsActive(false);
    }
  }, [selectedItems, setIsVisualizeActive]);

  const [expandedSubAccordion, setExpandedSubAccordion] = useState(null);
  const handleAccordionChange = (subAccordion, isExpanded) => {
    setExpandedSubAccordion(isExpanded ? subAccordion : null);
  };

  // Handler for opening the menu
  const handleOpenMenu = (event, axis) => {
    setMenuAnchor(event.currentTarget);
    setActiveAxis(axis);
  };

  // Handler for closing the menu
  const handleCloseMenu = () => {
    setMenuAnchor(null);
    setActiveAxis(null);
  };

  // Handler for selecting an item from the menu
  const handleSelectItem = (item, tableID, columnId) => {
    handleCheckboxChange(tableID, columnId);
    setSelectedItems((prev) => ({ ...prev, [activeAxis]: item }));
    handleCloseMenu();
  };

  const handleRemoveSelectedColumn = (axis) => {
    setSelectedItems((prev) => ({ ...prev, [axis]: null }));
    if(selectedItems[axis].label.toLowerCase().includes('date')){
      setShowYearlyMenu(false)
    }
    handleCheckboxChangeByLabel(selectedItems[axis]?.label);
  };

  const handleCheckboxChangeByLabel = (labelToToggle) => {
    setAxisMenuData((prevData) =>
      prevData.map((table) => ({
        ...table,
        tableColumns: table.tableColumns.map((column) => {
          if (column.label === labelToToggle) {
            return { ...column, isChecked: !column.isChecked };
          }
          return column;
        }),
      }))
    );
  };

  const handleCheckboxChange = (tableId, columnId) => {
    setAxisMenuData((prevData) =>
      prevData.map((table) => {
        if (table.id === tableId) {
          return {
            ...table,
            tableColumns: table.tableColumns.map((column) => {
              if (column.id === columnId) {
                return { ...column, isChecked: !column.isChecked };
              }
              return column;
            }),
          };
        }
        return table;
      })
    );
  };

  function containsDate(str) {
    return str.toLowerCase().includes("date");
  }

  const axisButtonLabel = (axis) => (
    <Styled.SMFlexRow>
      <span>{selectedItems[axis]?.label}</span>
      <CloseIcon
        onClick={() => handleRemoveSelectedColumn(axis)}
        sx={{ cursor: "pointer" }}
      />
    </Styled.SMFlexRow>
  );

  const handleDateCheckboxSelection = (selection) => {
    const { yearVisible, quarterVisible } = selection;

  if (yearVisible && quarterVisible) {
    setSelectedChartData(prevItem => {
      const newData = JSON.parse(JSON.stringify(prevItem));
      if(selectedItems['xAxis']?.label.toLowerCase().includes('date')){
        newData.data[0].x && (newData.data[0].x = selectedItems['xAxis']?.monthly);
        newData.data[1].x && (newData.data[1].x = selectedItems['xAxis']?.monthly)
        newData.data[0].y && (newData.data[0].y = selectedItems['yAxis']?.monthly)
        newData.data[1].y && (newData.data[1].y = selectedItems['legend']?.monthly)
      }
      newData.layout = {
        ...prevItem.layout,
        annotations: null
      }
      return newData 
    })
  } else if (yearVisible && !quarterVisible) {
    setSelectedChartData(prevItem => {
      const newData = JSON.parse(JSON.stringify(prevItem));
      if(selectedItems['xAxis']?.label.toLowerCase().includes('date')){
        newData.data[0].x && (newData.data[0].x = selectedItems['xAxis']?.monthly);
        newData.data[1].x && (newData.data[1].x = selectedItems['xAxis']?.monthly)
        newData.data[0].y && (newData.data[0].y = selectedItems['yAxis']?.monthly)
        newData.data[1].y && (newData.data[1].y = selectedItems['legend']?.monthly)
      }
      newData.layout = {
        ...prevItem.layout,
        annotations: null
      }
      return newData 
    })
  } else if (!yearVisible && quarterVisible) {
    console.log("Only quarter is visible");
    const annotations = [
      {
        x: 0.25,
        y: -0.15,
        xref: 'paper',
        yref: 'paper',
        text: 'Quarter 1',
        showarrow: false,
        font: {
          size: 14,
          color: 'black'
        }
      },
      {
        x: 0.75,
        y: -0.15,
        xref: 'paper',
        yref: 'paper',
        text: 'Quarter 2',
        showarrow: false,
        font: {
          size: 14,
          color: 'black'
        }
      }
    ]
    setSelectedChartData(prevItem => ({
      ...prevItem,
      layout: {
        ...prevItem.layout,
        xaxis: {
          ...prevItem.layout.xaxis,
          standoff: 100
        },
        annotations: annotations
      }
    }))
  } else {
    console.log("Neither year nor quarter is visible");
    setSelectedChartData(prevItem => {
      const newData = JSON.parse(JSON.stringify(prevItem));
      if(selectedItems['xAxis']?.label.toLowerCase().includes('date')){
        newData.data[0].x && (newData.data[0].x = selectedItems['xAxis']?.daily);
        newData.data[1].x && (newData.data[1].x = selectedItems['xAxis']?.daily)
        newData.data[0].y && (newData.data[0].y = selectedItems['yAxis']?.daily)
        newData.data[1].y && (newData.data[1].y = selectedItems['legend']?.daily)
      }

      newData.layout = {
        ...prevItem.layout,
        annotations: null
      }
      return newData;
    })
  }
  }

  const handleToggleYearlyMenu = (axis) => {
    selectedItems[axis] && setShowYearlyMenu(true);
    setSelectedChartData(prevItem => {
      const newData = JSON.parse(JSON.stringify(prevItem));
      if(axis === 'xAxis' && selectedItems[axis]?.label.toLowerCase().includes('date')){
        newData.data[0].x && (newData.data[0].x = selectedItems[axis]?.monthly);
        newData.data[1].x && (newData.data[1].x = selectedItems[axis]?.monthly)
        newData.data[0].y && (newData.data[0].y = selectedItems['yAxis']?.monthly)
        newData.data[1].y && (newData.data[1].y = selectedItems['legend']?.monthly)
      }
      return newData 
    })
  };
  

  const yearAccordion = (axis) => (
    <AccordionGroup disableDivider sx={{ padding: "1.25rem" }}>
      <Accordion>
        <Styled.SelectedAccordionSummaryBtn
          yearBtn={true}
          className="yearAccordion"
        >
          <Styled.SelectedAxisText>Year</Styled.SelectedAxisText>
        </Styled.SelectedAccordionSummaryBtn>
        <AccordionDetails sx={{ backgroundColor: "white" }}>
          {!showYearlyMenu && (
            <FormControl>
              <RadioGroup
                sx={{ mt: "0.75rem", p: "0 2.5rem" }}
                onChange={() => handleToggleYearlyMenu(axis)}
              >
                <Radio
                  value="2015"
                  label="2015"
                  className="helloradio"
                  sx={{
                    flexGrow: 1,
                    flexDirection: "row-reverse",
                    fontSize: "0.875rem",
                    "& .MuiRadio-radio": { width: "1rem", height: "1rem" },
                  }}
                />
                <Radio
                  value="2016"
                  label="2016"
                  sx={{
                    flexGrow: 1,
                    flexDirection: "row-reverse",
                    fontSize: "0.875rem",
                    "& .MuiRadio-radio": { width: "1rem", height: "1rem" },
                  }}
                />
                <Radio
                  value="2017"
                  label="2017"
                  sx={{
                    flexGrow: 1,
                    flexDirection: "row-reverse",
                    fontSize: "0.875rem",
                    "& .MuiRadio-radio": { width: "1rem", height: "1rem" },
                  }}
                />
              </RadioGroup>
            </FormControl>
          )}

          {showYearlyMenu && (
            <CustomEyeCheckbox
              onSelectionChange={(selection) => handleDateCheckboxSelection(selection)}
              initialYearVisible={true}
              initialQuarterVisible={true}
              initialSelectedMonths={["Jan"]}
            />
          )}
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );

  // Helper function to render axis button or accordion
  const renderAxisControl = (axis) => {
    if (selectedItems[axis] && containsDate(selectedItems[axis]?.label)) {
      return (
        <AccordionGroup disableDivider>
          <Accordion>
            <Styled.SelectedAccordionSummaryBtn className="axisbuttonAccordion">
              <Styled.SelectedAxisText>
                <span>{selectedItems[axis]?.label}</span>
                <CloseIcon
                  onClick={() => handleRemoveSelectedColumn(axis)}
                  sx={{ cursor: "pointer" }}
                />
              </Styled.SelectedAxisText>
            </Styled.SelectedAccordionSummaryBtn>
            <AccordionDetails sx={{ backgroundColor: "#F5F7FA" }}>
              {yearAccordion(axis)}
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      );
    } else {
      return (
        <Styled.AxisButton
          onClick={(e) => handleOpenMenu(e, axis)}
          className="axisbutton"
          sx={{
            justifyContent: selectedItems[axis] ? "flex-start" : "center",
            color: selectedItems[axis] ? "#212121" : "",
          }}
        >
          {selectedItems[axis]
            ? axisButtonLabel(axis)
            : " Select your data for Axis"}
        </Styled.AxisButton>
      );
    }
  };

  const handleFormatVisualsChange = useCallback((subAccordionId, newValues) => {
    setFormatVisualsData((prevData) =>
      prevData.map((item) => ({
        ...item,
        subAccordions: item.subAccordions.map((sub) =>
          sub.id === subAccordionId
            ? { ...sub, data: { ...sub.data, ...newValues } }
            : sub
        ),
      }))
    );
  }, []);

  useEffect(()=> {
    console.log('formatVisualsData', formatVisualsData)
    const xValuesObj = formatVisualsData[0].subAccordions[0].data;
    const xTitlesObj = formatVisualsData[0].subAccordions[1].data;
    const yRangeObj = formatVisualsData[1].subAccordions[0].data;
    const yValuesObj = formatVisualsData[1].subAccordions[1].data;
    const yTitlesObj = formatVisualsData[1].subAccordions[2].data;
    const legendOptionsObj = formatVisualsData[2].subAccordions[0].data;
    const legendColorsObj = formatVisualsData[2].subAccordions[2].data;
    const gridXcolorObj = formatVisualsData[3].subAccordions[0].data;
    const gridYcolorObj = formatVisualsData[3].subAccordions[1].data;

    selectedChartData && setSelectedChartData(prevItem => ({
      data: [
        {
          ...prevItem.data[0],
          marker: {
            ...prevItem.data[0].marker,
            color: legendColorsObj.color1
          }
        },
        {
          ...prevItem.data[1],
          marker: {
            ...prevItem.data[1].marker,
            color: legendColorsObj.color2
          }
        },
      ],
      
      layout: {
        ...prevItem.layout,
        xaxis: {
          ...prevItem.layout.xaxis,
          title: {
            ...prevItem.layout.xaxis.title,
            text: xTitlesObj.textStyle.includes('underlined') ? `<u>${xTitlesObj.titleText}</u>` : xTitlesObj.titleText,
            font: {
              family: xTitlesObj.font,
              size: xTitlesObj.fontSize,
              color: xTitlesObj.color,
              weight: xTitlesObj.textStyle.includes('bold') ? 600 : 500,
              style: xTitlesObj.textStyle.includes('italic') ? 'italic' : 'normal'
            }
          },
          tickfont: {
            family: xValuesObj.font,
            size:  xValuesObj.fontSize,
            color: xValuesObj.color,
            weight: xValuesObj.textStyle.includes('bold') ? 600 : 500,
            style: xValuesObj.textStyle.includes('italic') ? 'italic' : 'normal'
          },
          gridcolor: gridXcolorObj.color,
          griddash: gridYcolorObj.lineStyle,     
        },
        yaxis: {
          ...prevItem.layout.yaxis,
          title: {
            ...prevItem.layout.yaxis.title,
            text: yTitlesObj.textStyle.includes('underlined') ? `<u>${yTitlesObj.titleText}</u>` : yTitlesObj.titleText,
            font: {
              family: yTitlesObj.font,
              size: yTitlesObj.fontSize,
              color: yTitlesObj.color,
              weight: yTitlesObj.textStyle.includes('bold') ? 600 : 500,
              style: yTitlesObj.textStyle.includes('italic') ? 'italic' : 'normal'
            }
          },
          tickfont: {
            family: yValuesObj.font,
            size:  yValuesObj.fontSize,
            color: yValuesObj.color,
            weight: yValuesObj.textStyle.includes('bold') ? 600 : 500,
            style: yValuesObj.textStyle.includes('italic') ? 'italic' : 'normal'
          },
          gridcolor: gridYcolorObj.color,
          griddash: gridXcolorObj.lineStyle,
        },
        legend: {
          ...getLegendPosition(legendOptionsObj.positions),  // Here you call your getLegendPosition function
        }
      }
    }))
  },[formatVisualsData])

  const getLegendPosition = (position) => {
    switch (position) {
      case "Top Right":
        return { x: 1, y: 1.1, xanchor: 'right', yanchor: 'top', orientation: "h", };
      case "Top Center":
        return { x: 0.5, y: 1.1, xanchor: 'center', yanchor: 'top', orientation: "h" };
      case "Top Left":
        return { x: 0, y: 1.1, xanchor: 'left', yanchor: 'top', orientation: "h" };
      case "Bottom Right":
        return { x: 1, y: -0.3, xanchor: 'right', yanchor: 'bottom', orientation: "h"  };
      case "Bottom Center":
        return { x: 0.5, y: -0.3, xanchor: 'center', yanchor: 'bottom', orientation: "h"  };
      case "Bottom Left":
        return { x: 0, y: -0.3, xanchor: 'left', yanchor: 'bottom', orientation: "h"  };
      case "Top Left Stacked": 
      return { x: -0.1, y: 1, xanchor: 'left', yanchor: 'bottom', orientation: "v"  };
      case "Top Right Stacked":
        return { x: 1.1, y: 1, xanchor: 'left', yanchor: 'bottom', orientation: "v"  };
      default:
        return { x: 0.5, y: -0.3, xanchor: 'center', yanchor: 'bottom', orientation: "h", };  // Default position
    }
  };

  const xValuesAccordionDisplay = useCallback(
    (data, subAccordionId) => (
      <Styled.ValuesWrapper>
        <ValuesAccordion
          data={data}
          onValuesChange={(values) =>
            handleFormatVisualsChange(subAccordionId, values)
          }
        />
      </Styled.ValuesWrapper>
    ),
    [handleFormatVisualsChange]
  );

  const xTitlesAccordionDisplay = useCallback(
    (data, subAccordionId) => (
      <Styled.ValuesWrapper>
        <TitlesAccordion
          data={data}
          onValuesChange={(values) =>
            handleFormatVisualsChange(subAccordionId, values)
          }
        />
      </Styled.ValuesWrapper>
    ),
    [handleFormatVisualsChange]
  );

  const yRangeAccordionDisplay = useCallback(
    (data, subAccordionId) => (
      <Styled.ValuesWrapper>
        <DateRangeAccordion
          data={data}
          onValuesChange={(values) =>
            handleFormatVisualsChange(subAccordionId, values)
          }
        />
      </Styled.ValuesWrapper>
    ),
    [handleFormatVisualsChange]
  );

  const yValuesAccordionDisplay = useCallback(
    (data, subAccordionId) => (
      <Styled.ValuesWrapper>
        <ValuesAccordion
          data={data}
          onValuesChange={(values) =>
            handleFormatVisualsChange(subAccordionId, values)
          }
        />
      </Styled.ValuesWrapper>
    ),
    [handleFormatVisualsChange]
  );

  const yTitlesAccordionDisplay = useCallback(
    (data, subAccordionId) => (
      <Styled.ValuesWrapper>
        <TitlesAccordion
          data={data}
          onValuesChange={(values) =>
            handleFormatVisualsChange(subAccordionId, values)
          }
        />
      </Styled.ValuesWrapper>
    ),
    [handleFormatVisualsChange]
  );

  const legOptionsAccordionDisplay = useCallback(
    (data, subAccordionId) => (
      <Styled.ValuesWrapper>
        <OptionsAccordion
          data={data}
          onValuesChange={(values) =>
            handleFormatVisualsChange(subAccordionId, values)
          }
        />
      </Styled.ValuesWrapper>
    ),
    [handleFormatVisualsChange]
  );

  const legTextAccordionDisplay = useCallback(
    (data, subAccordionId) => (
      <Styled.ValuesWrapper>
        <TitlesAccordion
          data={data}
          onValuesChange={(values) =>
            handleFormatVisualsChange(subAccordionId, values)
          }
        />
      </Styled.ValuesWrapper>
    ),
    [handleFormatVisualsChange]
  );

  const columnColorsAccordionDisplay = useCallback(
    (data, subAccordionId) => (
      <Styled.ValuesWrapper>
        <ColumnColorsAccordion
          data={data}
          onValuesChange={(values) =>
            handleFormatVisualsChange(subAccordionId, values)
          }/>
      </Styled.ValuesWrapper>
    ),
    [handleFormatVisualsChange]
  );

  const gridHorizAccordionDisplay = useCallback(
    (data, subAccordionId) => (
      <Styled.ValuesWrapper>
        <HorizontalAccordion
          data={data}
          onValuesChange={(values) =>
            handleFormatVisualsChange(subAccordionId, values)
          }
        />
      </Styled.ValuesWrapper>
    ),
    [handleFormatVisualsChange]
  );

  const gridVertAccordionDisplay = useCallback(
    (data, subAccordionId) => (
      <Styled.ValuesWrapper>
        <HorizontalAccordion
          data={data}
          onValuesChange={(values) =>
            handleFormatVisualsChange(subAccordionId, values)
          }
        />
      </Styled.ValuesWrapper>
    ),
    [handleFormatVisualsChange]
  );

  return (
    <Styled.WrapperBox>
      <AccordionGroup disableDivider>
        <Accordion>
          <Styled.AccordionSummaryBtn className="buildVisuals">
            <Typography>Build Visuals</Typography>
          </Styled.AccordionSummaryBtn>
          <Styled.AccordionDetailsWrapper className="hello">
            <Styled.SMFlexCol>
              <span>X - axis</span>
              {renderAxisControl("xAxis")}
            </Styled.SMFlexCol>
            <Styled.SMFlexCol>
              <span>Y - axis</span>
              {renderAxisControl("yAxis")}
            </Styled.SMFlexCol>
            {(selectedChartType.includes("stack") ||
              selectedChartType.includes("group")) && (
              <Styled.SMFlexCol>
                <span>Legend</span>
                {renderAxisControl("legend")}
              </Styled.SMFlexCol>
            )}
          </Styled.AccordionDetailsWrapper>
        </Accordion>
        <Accordion disabled={!isFormatVisualsActive}>
          <Styled.AccordionSummaryBtn className="formatVisuals">
            <Typography>Format Visuals</Typography>
          </Styled.AccordionSummaryBtn>
          <Styled.AccordionDetailsWrapper className="hello">
            <AccordionGroup disableDivider sx={{ gap: "0.75rem" }}>
              {formatVisualsData.map((item) => (
                <Accordion key={item.id}>
                  <Styled.VisualsTitle>{item.label}</Styled.VisualsTitle>
                  <Styled.VisualsAccordionDetails>
                    <AccordionGroup disableDivider>
                      {item.subAccordions.map((sub) => (
                        <Accordion
                          key={sub.id}
                          value={sub.label}
                          onChange={(event, expanded) =>
                            handleAccordionChange(sub.id, expanded)
                          }
                        >
                          <AccordionSummary>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "cneter",
                                justifyContent: "space-between",
                                width: "100%",
                              }}
                            >
                              {sub.label}
                              {/* {expandedSubAccordion === sub.id && (
                                <Switch
                                  checked={true}
                                  // onChange={() => console.log("toggle change")}
                                />
                              )} */}
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            {sub.id === "x-values" &&
                              xValuesAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "x-titles" &&
                              xTitlesAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "y-range" &&
                              yRangeAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "y-values" &&
                              yValuesAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "y-titles" &&
                              yTitlesAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "leg-options" &&
                              legOptionsAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "leg-text" &&
                              legTextAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "col-colors" &&
                              columnColorsAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "grid-horizontal" &&
                              gridHorizAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "grid-vertical" &&
                              gridVertAccordionDisplay(sub.data, sub.id)}
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </AccordionGroup>
                  </Styled.VisualsAccordionDetails>
                </Accordion>
              ))}
            </AccordionGroup>
          </Styled.AccordionDetailsWrapper>
        </Accordion>
      </AccordionGroup>

      {/* Menu component */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleCloseMenu}
        placement="right"
      >
        <MenuItem>
          <Input placeholder="Search" />
        </MenuItem>
        {axisMenuData.map((item) => (
          <Accordion key={item.id}>
            <AccordionSummary>
              <Styled.SMFlexRow>
                <img src={TableIcon} />
                <Typography level="body-sm">{item.tableName}</Typography>
              </Styled.SMFlexRow>
            </AccordionSummary>
            <AccordionDetails>
              {item.tableColumns.map((col) => (
                <MenuItem
                  key={col.id}
                  onClick={() => handleSelectItem(col, item.id, col.id)}
                >
                  <Checkbox checked={col.isChecked} /> <img src={col.icon} />{" "}
                  <Typography level="body-sm">{col.label}</Typography>
                </MenuItem>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Menu>
    </Styled.WrapperBox>
  );
};

export default VisualsAccordions;
