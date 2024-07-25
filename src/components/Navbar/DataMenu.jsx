import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import * as Styled from "./Navbar.styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";

export default function DataMenu() {
  return (
    <Dropdown>
      <Styled.MenuButtonStyled variant="plain">
        <span>Data</span> <KeyboardArrowDownIcon color="primary"/>
      </Styled.MenuButtonStyled>
      <Menu>
        <MenuItem>
          <AddOutlinedIcon />
          <span>Go to DMS</span>
        </MenuItem>
        <MenuItem>
          <AdsClickOutlinedIcon />
          <span>Set Up Dataflow</span>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
