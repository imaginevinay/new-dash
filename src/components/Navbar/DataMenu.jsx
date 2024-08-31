import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import * as Styled from "./Navbar.styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlusIcon from "../../assets/icons/plus.svg";
import DataFlowIcon from "../../assets/icons/cursor-arrow-rays.svg";
import { Typography } from "@mui/joy";

export default function DataMenu() {
  return (
    <Dropdown>
      <Styled.MenuButtonStyled variant="plain">
        <span>Data</span> <KeyboardArrowDownIcon color="primary" />
      </Styled.MenuButtonStyled>
      <Menu>
        <MenuItem>
          <img src={PlusIcon} />
          <Typography level="body-md">Create DataTable</Typography>
        </MenuItem>
        <MenuItem>
          <img src={DataFlowIcon} />
          <Typography level="body-md">Create Dataflow</Typography>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
