import { useCallback, useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Checkbox,
  Input,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  Switch,
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
import { allNotNull } from "../../utils/common";

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
        
      },
      {
        id: 3,
        label: "Order Sales",
        icon: QueueIcon,
        isChecked: false,
      },
      {
        id: 4,
        label: "Order Region",
        icon: QueueIcon,
        isChecked: false,
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
          font: "Inter UI",
          fontSize: 9,
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
          titleText: "Auto",
          font: "Inter UI",
          fontSize: 9,
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
          font: "Inter UI",
          fontSize: 9,
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
          titleText: "Auto",
          font: "Inter UI",
          fontSize: 9,
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
          style: "Circular Marker"
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
        }
      },
      // add column colors accordion
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
          transparency : 25,
          lineStyle: 'Dotted'
        }
      },
      {
        id: "grid-vertical",
        label: "Vertical",
        data: {
          color: "#000000",
          transparency : 25,
          lineStyle: 'Dotted'
        }
      },
    ],
  },
];

const VisualsAccordions = ({setIsVisualizeActive, setLeftMenuData}) => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeAxis, setActiveAxis] = useState(null);
  const [axisMenuData, setAxisMenuData] = useState(sqlData);
  const [isFormatVisualsActive, setIsFormatVisualsActive] = useState(false);
  const [formatVisualsData, setFormatVisualsData] = useState(formatVObj);

  const [selectedItems, setSelectedItems] = useState({
    xAxis: null,
    yAxis: null,
    legend: null,
  });

  const createAxisData = (val) => {
    const obj = {
      axisData: selectedItems,
      visualsData: formatVisualsData
    }
    if(val) {
      setLeftMenuData(obj)
    } else {
      setLeftMenuData(null)
    }
  }

  useEffect(()=> {
    console.log('selected items', selectedItems)
    if(allNotNull(selectedItems)){
      setIsVisualizeActive(true);
      setIsFormatVisualsActive(true);
      createAxisData(true);
    } else {
      setIsVisualizeActive(false);
      setIsFormatVisualsActive(false);
    }
  },[selectedItems, setIsVisualizeActive])
  
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
    handleCheckboxChangeByLabel(selectedItems[axis]);
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
      <span>{selectedItems[axis]}</span>
      <CloseIcon
        onClick={() => handleRemoveSelectedColumn(axis)}
        sx={{ cursor: "pointer" }}
      />
    </Styled.SMFlexRow>
  );

  const yearAccordion = () => (
    <AccordionGroup disableDivider sx={{ padding: "1.25rem" }}>
      <Accordion>
        <Styled.SelectedAccordionSummaryBtn yearBtn={true} className="yearAccordion">
          <Styled.SelectedAxisText>Year</Styled.SelectedAxisText>
        </Styled.SelectedAccordionSummaryBtn>
        <AccordionDetails sx={{ backgroundColor: "white" }}>
          <RadioGroup sx={{ mt: "0.75rem", p: "0 2.5rem" }}>
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
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );

  // Helper function to render axis button or accordion
  const renderAxisControl = (axis) => {
    if (selectedItems[axis] && containsDate(selectedItems[axis])) {
      return (
        <AccordionGroup disableDivider>
          <Accordion>
            <Styled.SelectedAccordionSummaryBtn className="axisbuttonAccordion">
              <Styled.SelectedAxisText>
                <span>{selectedItems[axis]}</span>
                <CloseIcon
                  onClick={() => handleRemoveSelectedColumn(axis)}
                  sx={{ cursor: "pointer" }}
                />
              </Styled.SelectedAxisText>
            </Styled.SelectedAccordionSummaryBtn>
            <AccordionDetails sx={{ backgroundColor: "#F5F7FA" }}>
              {yearAccordion()}
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
    setFormatVisualsData(prevData => 
      prevData.map(item => ({
        ...item,
        subAccordions: item.subAccordions.map(sub => 
          sub.id === subAccordionId ? { ...sub, data: { ...sub.data, ...newValues } } : sub
        )
      }))
    );
  }, []);

  // useEffect(()=> {console.log('data changed >>>>', formatVisualsData)},[formatVisualsData])

  const xValuesAccordionDisplay = useCallback((data, subAccordionId) => (
    <Styled.ValuesWrapper>
      <ValuesAccordion data={data} onValuesChange={(values) => handleFormatVisualsChange(subAccordionId, values)} />
    </Styled.ValuesWrapper>
  ), [handleFormatVisualsChange]);

  const xTitlesAccordionDisplay = useCallback((data, subAccordionId) => (
    <Styled.ValuesWrapper>
      <TitlesAccordion data={data} onValuesChange={(values) => handleFormatVisualsChange(subAccordionId, values)} />
    </Styled.ValuesWrapper>
  ), [handleFormatVisualsChange]);


  const yRangeAccordionDisplay = useCallback((data, subAccordionId) => (
    <Styled.ValuesWrapper>
      <DateRangeAccordion data={data} onValuesChange={(values) => handleFormatVisualsChange(subAccordionId, values)} />
    </Styled.ValuesWrapper>
  ), [handleFormatVisualsChange]);

  const yValuesAccordionDisplay = useCallback((data, subAccordionId) => (
    <Styled.ValuesWrapper>
      <ValuesAccordion data={data} onValuesChange={(values) => handleFormatVisualsChange(subAccordionId, values)}/>
    </Styled.ValuesWrapper>
  ), [handleFormatVisualsChange]);

  const yTitlesAccordionDisplay = useCallback((data, subAccordionId) => (
    <Styled.ValuesWrapper>
      <TitlesAccordion data={data} onValuesChange={(values) => handleFormatVisualsChange(subAccordionId, values)}/>
    </Styled.ValuesWrapper>
  ), [handleFormatVisualsChange]);

  const legOptionsAccordionDisplay = useCallback((data, subAccordionId) => (
    <Styled.ValuesWrapper>
      <OptionsAccordion data={data} onValuesChange={(values) => handleFormatVisualsChange(subAccordionId, values)}/>
    </Styled.ValuesWrapper>
  ), [handleFormatVisualsChange]);

  const legTextAccordionDisplay = useCallback((data, subAccordionId) => (
    <Styled.ValuesWrapper>
      <TitlesAccordion data={data} onValuesChange={(values) => handleFormatVisualsChange(subAccordionId, values)}/>
    </Styled.ValuesWrapper>
  ), [handleFormatVisualsChange]);

  const gridHorizAccordionDisplay = useCallback((data, subAccordionId) => (
    <Styled.ValuesWrapper>
      <HorizontalAccordion data={data} onValuesChange={(values) => handleFormatVisualsChange(subAccordionId, values)}/>
    </Styled.ValuesWrapper>
  ), [handleFormatVisualsChange]);

  const gridVertAccordionDisplay = useCallback((data, subAccordionId) => (
    <Styled.ValuesWrapper>
      <HorizontalAccordion data={data} onValuesChange={(values) => handleFormatVisualsChange(subAccordionId, values)}/>
    </Styled.ValuesWrapper>
  ), [handleFormatVisualsChange]);


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
            <Styled.SMFlexCol>
              <span>Legend</span>
              {renderAxisControl("legend")}
            </Styled.SMFlexCol>
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
                              {expandedSubAccordion === sub.id && (
                                <Switch
                                  checked={true}
                                  onChange={() => console.log("toggle change")}
                                />
                              )}
                            </div>
                          </AccordionSummary>
                          <AccordionDetails>
                            {sub.id === "x-values" && xValuesAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "x-titles" && xTitlesAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "y-range" && yRangeAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "y-values" && yValuesAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "y-titles" && yTitlesAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "leg-options" && legOptionsAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "leg-text" && legTextAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "grid-horizontal" && gridHorizAccordionDisplay(sub.data, sub.id)}
                            {sub.id === "grid-vertical" && gridVertAccordionDisplay(sub.data, sub.id)}

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
                  onClick={() => handleSelectItem(col.label, item.id, col.id)}
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
