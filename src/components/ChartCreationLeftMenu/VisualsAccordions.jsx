import { useCallback, useContext, useEffect, useMemo, useState } from "react";
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
// import DateRangeAccordion from "./DateRangeAccordion";
import MinMaxRange from "./MinMaxRange";
import OptionsAccordion from "./OptionsAccordion";
import HorizontalAccordion from "./HorizontalAccordion";
import { areItemsFilled } from "../../utils/common";
import { AppContext } from "../../context/AppContext";
import CustomEyeCheckbox from "./CustomEyeCheckbox";
import ColumnColorsAccordion from "./ColumnColorsAccordion";
import LabelOptions from "./LabelOptions";
import SlicesColors from "./SlicesColors";

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
        monthly: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        daily: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ],
      },
      {
        id: 3,
        label: "Order Sales",
        icon: QueueIcon,
        isChecked: false,
        data: [150, 200, 300, 400, 500],
        monthly: [237, 412, 189, 325, 476, 201, 358, 294, 453, 167, 380, 506],
        daily: [
          183, 276, 342, 159, 405, 231, 298, 367, 195, 412, 287, 354, 201, 439,
          176, 315, 389, 245, 302, 456, 218, 327, 384, 153, 421, 279, 361, 197,
          408, 263, 335,
        ],
      },
      {
        id: 4,
        label: "Order Region",
        icon: QueueIcon,
        isChecked: false,
        data: [200, 300, 400, 500, 600],
        monthly: [315, 468, 203, 387, 529, 176, 423, 281, 492, 154, 346, 571],
        daily: [
          201, 315, 197, 327, 263, 439, 279, 245, 354, 408, 384, 421, 195, 231,
          153, 456, 367, 389, 361, 335, 405, 342, 218, 302, 176, 183, 412, 276,
          159, 287, 298,
        ],
      },
      {
        id: 5,
        label: "Product Category",
        icon: QueueIcon,
        isChecked: false,
        data: ['Office Supplies', 'Furniture', 'Technology'],
      },
      {
        id: 6,
        label: "Profit",
        icon: QueueIcon,
        isChecked: false,
        data: [178000, 158000, 105000],
      },
      {
        id: 7,
        label: "Sales",
        icon: QueueIcon,
        isChecked: false,
        data: [16000, 19000, 21000],
      },
      // {
      //   id: 8,
      //   label: "Categories",
      //   icon: QueueIcon,
      //   isChecked: false,
      //   data: ['Office Supplies', 'Infrastructure', 'Technology', 'Furniture', 'Total'],
      // }
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

const VisualsAccordions = ({ setIsVisualizeActive }) => {
  const {
    selectedChartType,
    setSelectedChartData,
    selectedChartData,
    selectedChart,
    setChartConfig,
    chartConfig,
  } = useContext(AppContext);

  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeAxis, setActiveAxis] = useState(null);
  const [axisMenuData, setAxisMenuData] = useState(sqlData);
  const [formatVisualsData, setFormatVisualsData] = useState(selectedChart?.formatVisuals)
  const [isFormatVisualsActive, setIsFormatVisualsActive] = useState(true);
  // const [selectedItems, setSelectedItems] = useState(selectedChartType?.axisData || {});
  const [showYearlyMenu, setShowYearlyMenu] = useState(false);

  // useEffect(()=> {
  //   const selectedChartData = chartConfig.find(
  //     (item) => item.id === selectedChart?.id
  //   );
  //   setFormatVisualsData(selectedChartData?.formatVisuals)
  // }, [])

  // const formatVisualsData = useMemo(() => {
  //   const selectedChartData = chartConfig.find(
  //     (item) => item.id === selectedChart?.id
  //   );
  //   return selectedChartData?.formatVisuals || [];
  // }, [chartConfig, selectedChart.id]);

  const selectedItems = useMemo(() => {
    const selectedChartData = chartConfig.find((item) => item.id === selectedChart?.id);
    const selectedChartItem = selectedChartData?.types.find((item) => item.id === selectedChartType?.id);
    return selectedChartItem?.axisData || {};
  }, [chartConfig, selectedChart?.id, selectedChartType?.id]);


  useEffect(() => {
    if (areItemsFilled(selectedItems)) {
      setIsVisualizeActive(true);
      setIsFormatVisualsActive(true);
      // createAxisData(true);
    } else {
      setIsVisualizeActive(false);
      setIsFormatVisualsActive(false);
    }
  }, [chartConfig]);

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

  const isEmpty = (obj) => Object.keys(obj).length === 0;


  // Handler for selecting an item from the menu
  const handleSelectItem = (item, tableID, columnId) => {
    handleCheckboxChange(tableID, columnId);
    // setSelectedItems((prev) => ({ ...prev, [activeAxis]: item }));
    const newChartConfig = [...chartConfig];
    const chartToUpdate = newChartConfig.find(
      (config) => config.id === selectedChart.id
    );
    chartToUpdate.types.forEach((type) => {
      if (Array.isArray(type.axisData[activeAxis])) {
        const emptyIndex = type.axisData[activeAxis].findIndex(isEmpty);
        if (emptyIndex !== -1) {
          type.axisData[activeAxis][emptyIndex] = { ...item, isChecked: true };
        } else {
          type.axisData[activeAxis].push({ ...item, isChecked: true });
        }
      } else if (typeof type.axisData[activeAxis] !== "undefined") {
        type.axisData[activeAxis] = { ...item, isChecked: true };
      }
    });
    console.log(newChartConfig, "config");
    setChartConfig(newChartConfig);
    handleCloseMenu();
  };

  const handleRemoveSelectedColumn = (e, axis, indexToDelete = null) => {
    e.stopPropagation();
    const itemToDelete = indexToDelete === null ? selectedItems[axis] : selectedItems[axis][indexToDelete];
    if (itemToDelete.label.toLowerCase().includes("date")) {
      setShowYearlyMenu(false);
    }
    handleCheckboxChangeByLabel(itemToDelete?.label);
    const newChartConfig = [...chartConfig];
    const chartToUpdate = newChartConfig.find(
      (config) => config.id === selectedChart.id
    );

    chartToUpdate.types.forEach((type) => {
      if (indexToDelete !== null && Array.isArray(type.axisData[axis])) {
        type.axisData[axis] && (type.axisData[axis].splice(indexToDelete, 1));
      } else {
        type.axisData[axis] && (type.axisData[axis] = {});
      }
    });
    setChartConfig(newChartConfig);
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

  const axisButtonLabel = (axis, index = null) => (
    <Styled.SMFlexRow>
      <span>{(index !== null ? selectedItems[axis][index] : selectedItems[axis])?.label}</span>
      <CloseIcon
        onClick={(e) => handleRemoveSelectedColumn(e, axis, index)}
        sx={{ cursor: "pointer" }}
      />
    </Styled.SMFlexRow>
  );

  const handleDateCheckboxSelection = (selection) => {
    const { yearVisible, quarterVisible } = selection;

    if (yearVisible && quarterVisible) {
      setSelectedChartData((prevItem) => {
        const newData = JSON.parse(JSON.stringify(prevItem));
        if (selectedItems["xAxis"]?.label.toLowerCase().includes("date")) {
          newData.data[0].x &&
            (newData.data[0].x = selectedItems["xAxis"]?.monthly);
          newData.data[1].x &&
            (newData.data[1].x = selectedItems["xAxis"]?.monthly);
          newData.data[0].y &&
            (newData.data[0].y = selectedItems["yAxis"]?.monthly);
          newData.data[1].y &&
            (newData.data[1].y = selectedItems["legend"]?.monthly);
        }
        newData.layout = {
          ...prevItem.layout,
          annotations: null,
        };
        return newData;
      });
    } else if (yearVisible && !quarterVisible) {
      setSelectedChartData((prevItem) => {
        const newData = JSON.parse(JSON.stringify(prevItem));
        if (selectedItems["xAxis"]?.label.toLowerCase().includes("date")) {
          newData.data[0].x &&
            (newData.data[0].x = selectedItems["xAxis"]?.monthly);
          newData.data[1].x &&
            (newData.data[1].x = selectedItems["xAxis"]?.monthly);
          newData.data[0].y &&
            (newData.data[0].y = selectedItems["yAxis"]?.monthly);
          newData.data[1].y &&
            (newData.data[1].y = selectedItems["legend"]?.monthly);
        }
        newData.layout = {
          ...prevItem.layout,
          annotations: null,
        };
        return newData;
      });
    } else if (!yearVisible && quarterVisible) {
      // console.log("Only quarter is visible");
      const annotations = [
        {
          x: 0.25,
          y: -0.15,
          xref: "paper",
          yref: "paper",
          text: "Quarter 1",
          showarrow: false,
          font: {
            size: 14,
            color: "black",
          },
        },
        {
          x: 0.75,
          y: -0.15,
          xref: "paper",
          yref: "paper",
          text: "Quarter 2",
          showarrow: false,
          font: {
            size: 14,
            color: "black",
          },
        },
      ];
      setSelectedChartData((prevItem) => ({
        ...prevItem,
        layout: {
          ...prevItem.layout,
          xaxis: {
            ...prevItem.layout.xaxis,
            standoff: 100,
          },
          annotations: annotations,
        },
      }));
    } else {
      // console.log("Neither year nor quarter is visible");
      setSelectedChartData((prevItem) => {
        const newData = JSON.parse(JSON.stringify(prevItem));
        if (selectedItems["xAxis"]?.label.toLowerCase().includes("date")) {
          newData.data[0].x &&
            (newData.data[0].x = selectedItems["xAxis"]?.daily);
          newData.data[1].x &&
            (newData.data[1].x = selectedItems["xAxis"]?.daily);
          newData.data[0].y &&
            (newData.data[0].y = selectedItems["yAxis"]?.daily);
          newData.data[1].y &&
            (newData.data[1].y = selectedItems["legend"]?.daily);
        }

        newData.layout = {
          ...prevItem.layout,
          annotations: null,
        };
        return newData;
      });
    }
  };

  const handleToggleYearlyMenu = (axis) => {
    selectedItems[axis] && setShowYearlyMenu(true);
    setSelectedChartData((prevItem) => {
      const newData = JSON.parse(JSON.stringify(prevItem));
      if (
        axis === "xAxis" &&
        selectedItems[axis]?.label.toLowerCase().includes("date")
      ) {
        newData.data[0].x && (newData.data[0].x = selectedItems[axis]?.monthly);
        newData.data[1].x && (newData.data[1].x = selectedItems[axis]?.monthly);
        newData.data[0].y &&
          (newData.data[0].y = selectedItems["yAxis"]?.monthly);
        newData.data[1].y &&
          (newData.data[1].y = selectedItems["legend"]?.monthly);
      }
      return newData;
    });
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
              onSelectionChange={(selection) =>
                handleDateCheckboxSelection(selection)
              }
              initialYearVisible={true}
              initialQuarterVisible={true}
              initialSelectedMonths={["Jan"]}
            />
          )}
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );

  const handleAddNewData = (axisItem) => {
    const newChartConfig = [...chartConfig];
    const chartToUpdate = newChartConfig.find(
      (config) => config.id === selectedChart.id
    );

    chartToUpdate.types.forEach((type) => {
      if (Array.isArray(type.axisData[axisItem])) {
        type.axisData[axisItem].push({});
      }
    });
    setChartConfig(newChartConfig);
  }

  // Helper function to render axis button or accordion
  const renderAxisControl = (axis) => {
    const isArray = Array.isArray(selectedItems[axis])
    const isAxisEmpty = selectedItems[axis] && Object.keys(selectedItems[axis]).length === 0;
    // console.log('chartConfig', chartConfig, 'selectedChartType',selectedChartType);

    if (selectedItems[axis]?.label && containsDate(selectedItems[axis]?.label)) {
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
        <>
        {isArray && <button onClick={() => handleAddNewData(axis)}>Add new data</button>}
        {isArray ? selectedChartType.axisData[axis].map((type, index) => (
          <Styled.AxisButton
          key={index}
          onClick={(e) => handleOpenMenu(e, axis)}
          className="axisbutton"
          sx={{
            justifyContent: selectedItems[axis] ? "flex-start" : "center",
            color: selectedItems[axis] ? "#212121" : "",
          }}
        >
          {Object.entries(type).length === 0
            ? " Select your data for Axis"
            : axisButtonLabel(axis, index)}
        </Styled.AxisButton>
        )) : (
          <Styled.AxisButton
            onClick={(e) => handleOpenMenu(e, axis)}
            className="axisbutton"
            sx={{
              justifyContent: selectedItems[axis] ? "flex-start" : "center",
              color: selectedItems[axis] ? "#212121" : "",
            }}
          >
            {isAxisEmpty
              ? " Select your data for Axis"
              : axisButtonLabel(axis)}
          </Styled.AxisButton>

        )}
        </>
      );
    }
  };

  const handleFormatVisualsChange = useCallback((subAccordionId, newValues) => {
    const newFormatVisualsData = selectedChart?.formatVisuals?.map((item) => ({
      ...item,
      subAccordions: item.subAccordions.map((sub) =>
        sub.id === subAccordionId
          ? { ...sub, data: { ...sub.data, ...newValues } }
          : sub
      ),
    }));

    // setFormatVisualsData(newFormatVisualsData);
    setFormatVisualsData((prevData) =>
      prevData.map((item) => ({
        ...item,
        subAccordions: item.subAccordions.map((sub) =>
          sub.id === subAccordionId ? { ...sub, data: { ...sub.data, ...newValues } } : sub
        ),
      }))
    );
    setChartConfig((prevArray) =>
      prevArray.map((item) => {
        if (item.id === selectedChart.id) {
          return {
            ...item,
            formatVisuals: newFormatVisualsData,
          };
        } else {
          return item;
        }
      })
    );
  }, []);

  const filterDataPoints = (dataPoints, minValue, maxValue) => {
    const data = dataPoints?.filter(item => item >= minValue && item <= maxValue);
    return data
  };

  const updateMarkerColor = (existingMarker, color) => {
    return {
      ...existingMarker,
      color
    };
  };

  const createFontConfig = (config) => ({
    family: config.font,
    size: config.fontSize,
    color: config.color,
    weight: config.textStyle.includes("bold") ? 600 : 500,
    style: config.textStyle.includes("italic") ? "italic" : "normal"
  });

  const createAxisTitle = (titleConfig) => ({
    text: titleConfig.textStyle.includes("underlined")
      ? `<u>${titleConfig.titleText}</u>`
      : titleConfig.titleText,
    font: createFontConfig(titleConfig)
  });

  const createAxisConfig = (valuesConfig, titleConfig, gridColor, gridDash) => ({
    title: createAxisTitle(titleConfig),
    tickfont: createFontConfig(valuesConfig),
    gridcolor: gridColor,
    griddash: gridDash
  });

  const getPieTextInfo = (isPercentage) => {
    if(isPercentage) return 'percent'
    return 'value'
  }

  const updateChartDataAndLayout = (prevItem, formatConfig) => {
    const {
      xValuesObj,
      xTitlesObj,
      yRangeObj,
      yValuesObj,
      yTitlesObj,
      legendOptionsObj,
      legendTextObj,
      legendColorsObj,
      gridXcolorObj,
      gridYcolorObj,
      labelOptionsObj,
      labelValuesObj,
      sliceColorsObj
    } = extractConfigData(formatConfig);
    let data, layout;
    console.log('sliceColorsObj', sliceColorsObj)
    if(selectedChartType.id === 'bar' || selectedChartType.id === 'line') {
      data = prevItem.data.map((dataset, index) => ({
        ...dataset,
        x: filterDataPoints(dataset.x, yRangeObj.minRange, yRangeObj.maxRange),
        marker: updateMarkerColor(dataset.marker, legendColorsObj[`color${index + 1}`])
      }))

      layout = {
        ...prevItem.layout,
        xaxis: createAxisConfig(
          xValuesObj,
          xTitlesObj,
          gridXcolorObj.color,
          gridYcolorObj.lineStyle
        ),
        yaxis: createAxisConfig(
          yValuesObj,
          yTitlesObj,
          gridYcolorObj.color,
          gridXcolorObj.lineStyle
        ),
        legend: {
          ...getLegendPosition(legendOptionsObj.positions)
        }
      }
    }
    if(selectedChartType.parent === 'pie') {
      data = prevItem.data.map((dataset) => ({
        ...dataset,
        textposition: labelOptionsObj.label,
        textinfo: getPieTextInfo(labelOptionsObj.percentage),
        textfont: {
          family: labelValuesObj.font,
          size: labelValuesObj.fontSize,
          color: labelValuesObj.color,
          weight: labelValuesObj.textStyle.includes("bold") && 700,
          style: labelValuesObj.textStyle.includes("italic") && "italic",
          decoration: labelValuesObj.textStyle.includes("underlined") && "underline",
        },
        sort: true,
        direction: labelOptionsObj.sorting,
        marker: {
          colors: [sliceColorsObj.color1, sliceColorsObj.color2, sliceColorsObj.color3, sliceColorsObj.color4]
        }
      }));

      layout = {
        ...prevItem.layout,
        width: labelOptionsObj.radius,
        height: labelOptionsObj.radius,
        legend: {
          ...getLegendPosition(legendOptionsObj.positions),
          symbolshape: legendOptionsObj.style,
          font: {
            family: legendTextObj.font,
            size: legendTextObj.fontSize,
            color: legendTextObj.color,
            weight: legendTextObj.textStyle.includes("bold") && 700,
            style: legendTextObj.textStyle.includes("italic") && 'italic',
            decoration: legendTextObj.textStyle.includes("underlined") && 'underline',
          },
        },
      };
    }
    if(selectedChartType.parent === 'area') {
      data = prevItem.data.map((dataset, index) => ({
        ...dataset,
        // x: filterDataPoints(dataset.x, yRangeObj.minRange, yRangeObj.maxRange),
        marker: updateMarkerColor(dataset.marker, legendColorsObj[`color${index + 1}`])
      }))

      layout = {
        ...prevItem.layout,
        xaxis: createAxisConfig(
          xValuesObj,
          xTitlesObj,
          gridXcolorObj.color,
          gridYcolorObj.lineStyle
        ),
        yaxis: createAxisConfig(
          yValuesObj,
          yTitlesObj,
          gridYcolorObj.color,
          gridXcolorObj.lineStyle
        ),
        legend: {
          ...getLegendPosition(legendOptionsObj.positions)
        }
      }
    }
    if(selectedChartType.parent === 'funnel'){
      data = prevItem.data.map((dataset) => ({
        ...dataset,
        // x: filterDataPoints(dataset.x, yRangeObj.minRange, yRangeObj.maxRange),
        // marker: updateMarkerColor(dataset.marker, legendColorsObj[`color${index + 1}`])
        textfont: createFontConfig(xValuesObj),
        insidetextanchor: legendOptionsObj?.positions
      }))

      layout = {
        ...prevItem.layout,
        yaxis: {
          tickfont: createFontConfig(yValuesObj)
        }
      }
    }

    console.log('updating chart new data', {
      data: data,
      layout: layout
    })
    return {
      data: data,
      layout: layout
    };
  };

  const findObjectById = (array, targetId) => {
    const mainLevel = array.find(item => item.id === targetId);
    if (mainLevel) return mainLevel;

    return array
      .flatMap(item => item.subAccordions || [])
      .find(subItem => subItem.id === targetId);
  };

  // Helper function to extract configuration data
  const extractConfigData = (formatVisualsData) => ({
    xValuesObj: findObjectById(formatVisualsData, 'x-values')?.data,
    xTitlesObj: findObjectById(formatVisualsData, 'x-titles')?.data,
    yRangeObj: findObjectById(formatVisualsData, 'y-range')?.data,
    yValuesObj: findObjectById(formatVisualsData, 'y-values')?.data,
    yTitlesObj: findObjectById(formatVisualsData, 'y-titles')?.data,
    legendOptionsObj: findObjectById(formatVisualsData, 'leg-options')?.data,
    legendTitlesObj: findObjectById(formatVisualsData, 'leg-titles')?.data,
    legendTextObj: findObjectById(formatVisualsData, 'leg-text')?.data,
    legendColorsObj: findObjectById(formatVisualsData, 'leg-colors')?.data,
    gridXcolorObj: findObjectById(formatVisualsData, 'grid-v')?.data,
    gridYcolorObj: findObjectById(formatVisualsData, 'grid-h')?.data,
    labelOptionsObj: findObjectById(formatVisualsData, 'label-options')?.data,
    labelValuesObj: findObjectById(formatVisualsData, 'label-values')?.data,
    sliceColorsObj: findObjectById(formatVisualsData, 'slices-colors')?.data
  });

  // Updated useEffect
  useEffect(() => {
    console.log('format visuals data changed', formatVisualsData)
    if (selectedChartData) {
      // console.log('format visuals data changed', formatVisualsData)
      setSelectedChartData(prevItem =>
        updateChartDataAndLayout(prevItem, formatVisualsData)
      );
    }
  }, [formatVisualsData]);

  const getLegendPosition = (position) => {
    switch (position) {
      case "Top Right":
        return {
          x: 1,
          y: 1.1,
          xanchor: "right",
          yanchor: "top",
          orientation: "h",
        };
      case "Top Center":
        return {
          x: 0.5,
          y: 1.1,
          xanchor: "center",
          yanchor: "top",
          orientation: "h",
        };
      case "Top Left":
        return {
          x: 0,
          y: 1.1,
          xanchor: "left",
          yanchor: "top",
          orientation: "h",
        };
      case "Bottom Right":
        return {
          x: 1,
          y: -0.3,
          xanchor: "right",
          yanchor: "bottom",
          orientation: "h",
        };
      case "Bottom Center":
        return {
          x: 0.5,
          y: -0.3,
          xanchor: "center",
          yanchor: "bottom",
          orientation: "h",
        };
      case "Bottom Left":
        return {
          x: 0,
          y: -0.3,
          xanchor: "left",
          yanchor: "bottom",
          orientation: "h",
        };
      case "Top Left Stacked":
        return {
          x: -0.1,
          y: 1,
          xanchor: "left",
          yanchor: "bottom",
          orientation: "v",
        };
      case "Top Right Stacked":
        return {
          x: 1.1,
          y: 1,
          xanchor: "left",
          yanchor: "bottom",
          orientation: "v",
        };
      default:
        return {
          x: 0.5,
          y: -0.3,
          xanchor: "center",
          yanchor: "bottom",
          orientation: "h",
        }; // Default position
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
        <MinMaxRange
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

  // const legTitlesAccordionDisplay = useCallback(
  //   (data, subAccordionId) => (
  //     <Styled.ValuesWrapper>
  //       <TitlesAccordion
  //         data={data}
  //         onValuesChange={(values) =>
  //           handleFormatVisualsChange(subAccordionId, values)
  //         }
  //       />
  //     </Styled.ValuesWrapper>
  //   ),
  //   [handleFormatVisualsChange]
  // );

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
          }
        />
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


  const labelTitlesAccordionDisplay = useCallback(
    (data, subAccordionId) => (
      <Styled.ValuesWrapper>
        <LabelOptions
          data={data}
          onValuesChange={(values) =>
            handleFormatVisualsChange(subAccordionId, values)
          }
        />
      </Styled.ValuesWrapper>
    ),
    [handleFormatVisualsChange]
  );

  const labelValuesAccordionDisplay = useCallback(
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

  const slicesColorsAccordionDisplay = useCallback(
    (data, subAccordionId) => (
      <Styled.ValuesWrapper>
        <SlicesColors
          data={data}
          onValuesChange={(values) =>
            handleFormatVisualsChange(subAccordionId, values)
          }
        />
      </Styled.ValuesWrapper>
    ),
    [handleFormatVisualsChange]
  );

  // const isLabelPresent = (columnLabel) => {
  //   const selectedChartParent = chartConfig.find(
  //     (item) => item.id === selectedChart?.id
  //   );
  //   return selectedChartParent.types.some((type) => {
  //     if (type.axisData && typeof type.axisData === "object") {
  //       return Object.values(type.axisData).some(
  //         (axis) =>
  //           axis && typeof axis === "object" && axis.label === columnLabel
  //       );
  //     }
  //     return false;
  //   });
  // };
  const isMenuItemDisabled = (column) => {
    const axisItemsArray = Object.keys(selectedItems);
    const axisToCheck = activeAxis === axisItemsArray[0] ? axisItemsArray[1] : axisItemsArray[0];
    if (Array.isArray(selectedChart[axisToCheck])) {
      return selectedItems[axisToCheck].find((item) => item.id === column.id);
    }
    return selectedItems[axisToCheck].id === column.id;
  };

  return (
    <Styled.WrapperBox>
      <AccordionGroup disableDivider>
        <Accordion>
          <Styled.AccordionSummaryBtn className="buildVisuals">
            <Typography>Build Visuals</Typography>
          </Styled.AccordionSummaryBtn>
          <Styled.AccordionDetailsWrapper className="hello">
            {selectedChartType?.buildVisuals.map((item) => (
              <Styled.SMFlexCol key={item.axisControl}>
                <p>
                  <span>{item.label}</span>{' '}
                  <span>{item?.helperLabel}</span>
                </p>                
                {renderAxisControl(item.axisControl)}
              </Styled.SMFlexCol>
            ))}
          </Styled.AccordionDetailsWrapper>
        </Accordion>
        <Accordion disabled={!isFormatVisualsActive}>
          <Styled.AccordionSummaryBtn className="formatVisuals">
            <Typography>Format Visuals</Typography>
          </Styled.AccordionSummaryBtn>
          <Styled.AccordionDetailsWrapper className="hello">
            <AccordionGroup disableDivider sx={{ gap: "0.75rem" }}>
              {formatVisualsData?.map((item) => (
                <Accordion key={item.id}>
                  <Styled.VisualsTitle>{item.label}</Styled.VisualsTitle>
                  <Styled.VisualsAccordionDetails>
                    <AccordionGroup disableDivider>
                      {item.subAccordions.map((sub) => (
                        <Accordion key={sub.id} value={sub.label}>
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
                            {/* {sub.id === "leg-titles" &&
                              legTitlesAccordionDisplay(sub.data, sub.id)} */}
                            {sub.id === "leg-text" &&
                              legTextAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "leg-colors" &&
                              columnColorsAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "grid-h" &&
                              gridHorizAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "grid-v" &&
                              gridVertAccordionDisplay(sub.data, sub.id)}
                            {/* {sub.id === "grid-v" &&
                              gridVertAccordionDisplay(sub.data, sub.id)} */}
                            {sub.id === "label-options" &&
                              labelTitlesAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "label-values" &&
                              labelValuesAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "slices-colors" &&
                              slicesColorsAccordionDisplay(sub.data, sub.id)}
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
                  disabled={isMenuItemDisabled(col)}
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
