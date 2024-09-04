import TabList from "@mui/joy/TabList";
import TanstackTable from "../../components/TanstackTable/TanstackTable";
import { DATA_COLS, DATA } from "../../utils/dummyData";
import * as Styled from "./AllFavTabs.styles";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useEffect, useState } from "react";
import IndeterminateCheckbox from "../TanstackTable/IndeterminateCheckbox";

export default function AllFavTabs() {
  const [columnData, setColumnData] = useState(DATA_COLS);
  const [allTabsdata, setAllTabsdata] = useState(DATA);
  const [favTabsdata, setFavTabsdata] = useState([]);

  const handleToggleFavorite = (id) => {
    setAllTabsdata(prevData => prevData.map(item => 
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    ));
  };

  const handleTogglePinned = (id) => {
    setAllTabsdata(prevData => prevData.map(item => 
      item.id === id ? { ...item, isPinned: !item.isPinned } : item
    ));
  };

  useEffect(() => {
    setFavTabsdata(allTabsdata.filter(item => item.isFavorite));
  }, [allTabsdata])

  useEffect(() => {
    const newColumnData = [
      {
        id: "select",
        size: "5px",
        header: ({ table }) => (
          <IndeterminateCheckbox
            className="header-checkbox"
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <IndeterminateCheckbox
            className="row-checkbox"
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),        
      },
      ...columnData, // Initial column data
    ];
  
    setColumnData(newColumnData);
  }, []); // Empty dependency array to run only once
  
 
  return (
    <Styled.TabsWrapper aria-label="Basic tabs" defaultValue={0}>
      <TabList disableUnderline sx={{mb: '2.75rem'}}>
        <Styled.StyledTab><InsertDriveFileOutlinedIcon />All</Styled.StyledTab>
        <Styled.StyledTab><StarBorderOutlinedIcon />Favorites</Styled.StyledTab>
      </TabList>
      <Styled.TabPanelWrapper value={0}>
        <TanstackTable tableData={allTabsdata} columnData={columnData} showColumnSearch showBulkSelect exportIcon moreIcon onToggleFavorite={handleToggleFavorite} onTogglePinned={handleTogglePinned}/>
      </Styled.TabPanelWrapper>
      <Styled.TabPanelWrapper value={1}>
        <TanstackTable tableData={favTabsdata} columnData={columnData} showColumnSearch showBulkSelect exportIcon moreIcon/>
      </Styled.TabPanelWrapper>
    </Styled.TabsWrapper>
  );
}
