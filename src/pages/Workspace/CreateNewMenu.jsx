import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Dropdown from '@mui/joy/Dropdown';
import DataFlowIcon from '../../assets/images/cursor-rays.svg'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import * as Styled from './Workspace.styles'

export default function CreateNewMenu() {

  return (
    <Dropdown>
      <Styled.MenuButtonItem endDecorator={<ArrowDropDown />}>Create New</Styled.MenuButtonItem>
      <Menu sx={{width: '11.625rem'}}>
        <MenuItem><FolderOutlinedIcon/><span>Folder</span></MenuItem>
        <MenuItem><SummarizeOutlinedIcon/><span>Report</span></MenuItem>
        <MenuItem><EqualizerOutlinedIcon/><span>Chart</span></MenuItem>
        <MenuItem><img src={DataFlowIcon}/><span>Dataflow</span></MenuItem>
      </Menu>
    </Dropdown>
  );
}
