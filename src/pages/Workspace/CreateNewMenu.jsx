import dateFormat from "dateformat";
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Dropdown from '@mui/joy/Dropdown';
import DataFlowIcon from '../../assets/images/cursor-rays.svg?react'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import * as Styled from './Workspace.styles'
import NewFolderModal from '../../components/modals/CreateNewMenuModals/NewFolderModal';
import ReportModal from '../../components/modals/CreateNewMenuModals/ReportModal';
import ChartModal from '../../components/modals/CreateNewMenuModals/ChartModal';
import DataFlowModal from '../../components/modals/CreateNewMenuModals/DataFlowModal';
import { useNavigate } from 'react-router-dom';



import {randomNumberGenerator} from '../../utils/common'
import { useState } from "react";

export default function CreateNewMenu({setTableData}) {
  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false)
  const [isReportModalOpen, setIsReportModalOpen] = useState(false)
  const [isChartModalOpen, setIsChartModalOpen] = useState(false)
  const [isDataflowModalOpen, setIsDataflowModalOpen] = useState(false)
  const navigate = useNavigate();

  const handleFolderModalOnClose = (val) => {
    setIsFolderModalOpen(false);
    if(val !== 'close' && val !== 'cancel') {
      const rndNo = randomNumberGenerator(1,100);
      const now = new Date();
      const folderData = {
        id: rndNo,
        name: val,
        type: 'N/A',
        accessLevel: 'N/A',
        status: 'N/A',
        refreshed: dateFormat(now, "dd/mm/yy hh:MM:ss"),
        nextRefresh: 'N/A'
      }
      setTableData(prevData => [...prevData, folderData])
    }
  }

  const handleReportModalOnClose = () => {
    setIsReportModalOpen(false);
  }

  // eslint-disable-next-line no-unused-vars
  const handleChartModalOnClose = (value, type) => {
    setIsChartModalOpen(false);
    navigate('/create-chart');
  }

  const handleDataFlowModalOnClose = () => {
    setIsDataflowModalOpen(false);
  }

  return (
    <Dropdown>
      <Styled.MenuButtonItem endDecorator={<ArrowDropDown />}>Create New</Styled.MenuButtonItem>
      <Menu sx={{width: '11.625rem'}}>
        <MenuItem onClick={() => setIsFolderModalOpen(true)}><FolderOutlinedIcon/><span>Folder</span></MenuItem>
        <MenuItem onClick={() => setIsReportModalOpen(true)}><SummarizeOutlinedIcon/><span>Report</span></MenuItem>
        <MenuItem onClick={() => setIsChartModalOpen(true)}><EqualizerOutlinedIcon/><span>Chart</span></MenuItem>
        <MenuItem onClick={() => setIsDataflowModalOpen(true)}><DataFlowIcon className="data-flow-icon"/><span>Dataflow</span></MenuItem>
      </Menu>

      <NewFolderModal open={isFolderModalOpen} handleFolderModalOnClose={handleFolderModalOnClose}/>
      <ReportModal open={isReportModalOpen} handleReportModalOnClose={handleReportModalOnClose}/>
      <ChartModal open={isChartModalOpen} handleChartModalOnClose={(value, type) => handleChartModalOnClose(value, type)}/>
      <DataFlowModal open={isDataflowModalOpen} handleDataFlowModalOnClose={handleDataFlowModalOnClose}/>
      
    </Dropdown>
  );
}
