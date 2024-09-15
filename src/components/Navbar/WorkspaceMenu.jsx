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
import { useNavigate } from "react-router";

const WORKSPACE_LIST = [
  {
    id: 1,
    label: "My Workspace",
    img: WorkspaceImg,
    path: '/workspace/my-workspace'
  },
  {
    id: 2,
    label: "Search workspace",
    path: '/workspace/search-workspace'
  },
  {
    id: 3,
    label: "Survey",
    path: '/workspace/survey'
  },
  {
    id: 4,
    label: "Restaurant inspection",
    path: '/workspace/restaurant-inspection'
  },
  {
    id: 5,
    label: "Time booking",
    path: '/workspace/time-booking'
    
  },
];

export default function WorkspaceMenu() {
  const [workspaceList, setWorkspaceList] = useState(WORKSPACE_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleCloseModal = (value, type) => {
    console.log("value, type", value, type);
    setIsModalOpen(false);
    
    const newWorkspace = {
      id: workspaceList[length-1]?.id + 1,
      label: value?.name,
      path: value?.path 
    };

    setWorkspaceList(prevWorkspaces => [...prevWorkspaces, newWorkspace]);
    navigate(value.path);
  };

  const handleClick = (item) => {
    if (item.path) {
      navigate(item.path);
    }
  }

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
            <MenuItem onClick={() => handleClick(item)}>
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
