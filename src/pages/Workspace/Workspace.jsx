import { useEffect, useState } from "react";
import BottomDrawer from "../../components/BottomDrawer/BottomDrawer";
import WorkspacesDrawer from "../../components/BottomDrawer/WorkspacesDrawer";
import SettingsIcon from "../../assets/images/settings.svg";
import GroupIcon from "../../assets/images/groupIcon.svg";
import * as Styled from "./Workspace.styles";
import SettingsDrawer from "../../components/SettingsDrawer/SettingsDrawer";
import CreateNewMenu from "./CreateNewMenu";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import TanstackTable from "../../components/TanstackTable/TanstackTable";
import { WORKSPACES_COLS, WORKSPACES_DATA } from "../../utils/dummyData";

const Workspace = () => {
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState('all');
  const [tableData, setTableData] = useState([]);

  const filterWorkspaceTable = (type) => {
    return WORKSPACES_DATA.filter(workspace => {
      if(type === 'all') return true;
      if(type === 'reports') return workspace.type === 'Reports';
      if(type === 'charts') return workspace.type === 'Charts';
    });
  }

  useEffect(() => {
;    setTableData(filterWorkspaceTable(selectedButton));
  }, [selectedButton])
  


  const handleBottomDrawerClick = () => {
    setBottomDrawerOpen(true);
  };

  const handleBottomDrawerClose = () => {
    setBottomDrawerOpen(false);
  };

  const handleSettingsDrawerClose = () => {
    setSettingsDrawerOpen(false);
  };

  return (
    <div>
      <Styled.Header>
        <Styled.WorkspaceTitle>
          <img src={GroupIcon} alt="workspace" loading="lazy" />
          <span>Restaurant Inspections</span>
        </Styled.WorkspaceTitle>
        <Styled.SettingsBtn onClick={() => setSettingsDrawerOpen(true)}>
          <img src={SettingsIcon} alt="settings" loading="lazy" />
          Workspace Settings
        </Styled.SettingsBtn>
      </Styled.Header>
      <Styled.MidRow>
        <Styled.ButtonWrapper>
          <CreateNewMenu setTableData={setTableData}/>
          <Styled.ButtonItem isSelected={selectedButton==='all'} onClick={() => setSelectedButton('all')}>
            <FolderOutlinedIcon />
            <span>All</span>
          </Styled.ButtonItem>
          <Styled.ButtonItem isSelected={selectedButton==='reports'} onClick={() => setSelectedButton('reports')}>
            <SummarizeOutlinedIcon />
            <span>Reports</span>
          </Styled.ButtonItem>
          <Styled.ButtonItem isSelected={selectedButton==='charts'} onClick={() => setSelectedButton('charts')}>
            <EqualizerOutlinedIcon/>
            <span>Charts</span>
          </Styled.ButtonItem>
        </Styled.ButtonWrapper>
      </Styled.MidRow>

      <TanstackTable tableData={tableData} columnData={WORKSPACES_COLS} deleteIcon exportIcon moreIcon showMainSearch/>

      <BottomDrawer onClick={handleBottomDrawerClick} />
      <WorkspacesDrawer
        open={bottomDrawerOpen}
        onClose={handleBottomDrawerClose}
      />
      <SettingsDrawer
        open={settingsDrawerOpen}
        onClose={handleSettingsDrawerClose}
      />
    </div>
  );
};

export default Workspace;
