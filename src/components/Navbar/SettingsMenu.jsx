import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import * as Styled from "./Navbar.styles";
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';




export default function SettingsMenu() {
  return (
    <Dropdown>
      <Styled.MenuButtonStyled variant="plain">
        <SettingsOutlinedIcon color="primary"/>
      </Styled.MenuButtonStyled>
      <Menu>
        <MenuItem>
          <CachedOutlinedIcon />
          <span>Refresh Connectivity</span>
        </MenuItem>
        <MenuItem>
          <PersonOutlineOutlinedIcon />
          <span>Admin Access</span>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
