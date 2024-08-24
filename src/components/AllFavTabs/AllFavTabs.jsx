import TabList from "@mui/joy/TabList";
import TanstackTable from "../../components/TanstackTable/TanstackTable";
import { DATA_COLS, DATA } from "../../utils/dummyData";
import * as Styled from "./AllFavTabs.styles";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

export default function AllFavTabs() {
  return (
    <Styled.TabsWrapper aria-label="Basic tabs" defaultValue={0}>
      <TabList disableUnderline>
        <Styled.StyledTab><InsertDriveFileOutlinedIcon />All</Styled.StyledTab>
        <Styled.StyledTab><StarBorderOutlinedIcon />Favorite</Styled.StyledTab>
      </TabList>
      <Styled.TabPanelWrapper value={0}>
        <TanstackTable tableData={DATA} columnData={DATA_COLS} showColumnSearch showBulkSelect exportIcon moreIcon/>
      </Styled.TabPanelWrapper>
      <Styled.TabPanelWrapper value={1}>
        <TanstackTable tableData={DATA} columnData={DATA_COLS} showColumnSearch showBulkSelect exportIcon moreIcon/>
      </Styled.TabPanelWrapper>
    </Styled.TabsWrapper>
  );
}
