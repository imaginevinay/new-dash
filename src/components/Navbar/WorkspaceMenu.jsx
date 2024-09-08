import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import * as Styled from "./Navbar.styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import PlusIcon from "../../assets/icons/plus.svg?react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Avatar, Button, ListDivider, Typography } from "@mui/joy";
import WorkspaceImg from "../../assets/images/workspace.png";
import { useState } from "react";
import AddWorkspaceModal from "./AddWorkspaceModal";

const WORKSPACE_LIST = [
  {
    id: 1,
    label: "My Workspace",
    img: WorkspaceImg,
  },
  {
    id: 2,
    label: "Search workspace",
  },
  {
    id: 3,
    label: "Survey",
  },
  {
    id: 4,
    label: "Restaurant inspection",
  },
  {
    id: 5,
    label: "Time booking",
  },
];

export default function WorkspaceMenu() {
  const [workspaceList, setWorkspaceList] = useState(WORKSPACE_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = (value, type) => {
    console.log("value, type", value, type);
    setIsModalOpen(false);
  };

  return (
    <Dropdown>
      <Styled.MenuButtonStyled variant="plain">
        <span>Workspace</span> <KeyboardArrowDownIcon color="primary" />
      </Styled.MenuButtonStyled>
      <Styled.MenuWrapper>
        <Button
          variant="soft"
          color="secondary"
          sx={{ fontWeight: 500, gap: "0.5rem", fontSize: "1rem" }}
          onClick={() => setIsModalOpen(true)}
        >
          <AddOutlinedIcon />
          Add workspace
        </Button>
        {workspaceList.map((item) => (
          <div key={item.id}>
            <MenuItem>
              {item.img ? <Avatar src={item.img} /> : <></>}
              <Typography level="body-md">{item.label}</Typography>
            </MenuItem>
            {item.id === 1 && <ListDivider />}
          </div>
        ))}
      </Styled.MenuWrapper>
      <AddWorkspaceModal
        open={isModalOpen}
        handleOnClose={(value, type) => handleCloseModal(value, type)}
      />
    </Dropdown>
  );
}
