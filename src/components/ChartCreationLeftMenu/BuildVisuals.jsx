import { useState } from "react";
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
  Typography,
} from "@mui/joy";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as Styled from "./ChartCreationLeftMenu.styles";
import TableIcon from "../../assets/icons/table.svg";
import CalendarIcon from "../../assets/icons/calendar.svg";
import QueueIcon from "../../assets/icons/queue.svg";
import CloseIcon from "@mui/icons-material/Close";

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

const BuildVisuals = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeAxis, setActiveAxis] = useState(null);
  const [axisMenuData, setAxisMenuData] = useState(sqlData);
  const [selectedItems, setSelectedItems] = useState({
    xAxis: null,
    yAxis: null,
    legend: null,
  });

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
        <Styled.SelectedAccordionSummaryBtn
          yearBtn={true}
          expandIcon={<ExpandMoreIcon />}
          className="yearAccordion"
        >
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
            <Styled.SelectedAccordionSummaryBtn
              expandIcon={<ExpandMoreIcon />}
              className="axisbuttonAccordion"
            >
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

  return (
    <Styled.WrapperBox>
      <AccordionGroup disableDivider>
        <Accordion>
          <Styled.AccordionSummaryBtn
            className="buildVisuals"
            expandIcon={<ExpandMoreIcon />}
          >
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
        <Accordion>
          <Styled.AccordionSummaryBtn
            className="formatVisuals"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Format Visuals</Typography>
          </Styled.AccordionSummaryBtn>
          <Styled.AccordionDetailsWrapper className="hello">
            <AccordionGroup disableDivider>
              <Accordion>
                <AccordionSummary>X - Axis</AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Y - Axis</AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Legend</AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Gridlines</AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
              </Accordion>
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
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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

// const formatVisualsAccordionObj = [
//   {
//     id : 1,
//     label : 'X - Axis',
//     subAccordions: []
//   }
// ]

export default BuildVisuals;
