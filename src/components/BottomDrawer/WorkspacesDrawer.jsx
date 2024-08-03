import { IconButton } from "@mui/joy";
import * as Styled from "./BottomDrawers.styles";
import SearchIcon from "@mui/icons-material/Search";
import WorkspaceImg from "../../assets/images/workspace.png";
import GroupIcon from "../../assets/images/groupIcon.svg";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreateNewWorkspaceForm from "./CreateNewWorkspaceForm";

const myWorkspace = [{ id: 1, name: "My Workspace" }];
const allWorkspaces = [
  { id: 1, name: "Restaurant Inspection" },
  { id: 2, name: "Survey Population" },
];

const WorkspacesDrawer = ({ open, onClose }) => {
  const [isCreateWorkspace, setIsCreateWorkspace] = useState(false);

  return (
    <Styled.BottomDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            opacity: 0,
            backdropFilter: "none",
          },
        },
      }}
    >
      <Styled.Container>
        <Styled.FlexSpace>
          {!isCreateWorkspace && (
            <Styled.MenuTitle>Workspaces</Styled.MenuTitle>
          )}
          {isCreateWorkspace && (
            <Styled.MenuTitle>
              <ArrowBackIcon sx={{cursor: 'pointer'}} onClick={() => setIsCreateWorkspace(false)} />
              <span>Create a Workspace</span>
            </Styled.MenuTitle>
          )}
          <IconButton onClick={onClose}>
            <Styled.LessIcon />
          </IconButton>
        </Styled.FlexSpace>
        {!isCreateWorkspace ? (
          <div>
            <Styled.FlexSpace>
              <Styled.SearchBox
                placeholder="Search"
                startDecorator={<SearchIcon />}
              />
            </Styled.FlexSpace>
            <Styled.FlexColumn>
              <Styled.Title>My Workspace</Styled.Title>
              {myWorkspace.map((item) => (
                <Styled.FlexGap key={item.id}>
                  <Styled.AvatarIcon src={WorkspaceImg} alt="workspace" />
                  <Styled.WorkspaceName>{item.name}</Styled.WorkspaceName>
                </Styled.FlexGap>
              ))}
            </Styled.FlexColumn>
            <Styled.FlexColumn>
              <Styled.Title>All</Styled.Title>
              {allWorkspaces.map((item) => (
                <Styled.FlexGap key={item.id}>
                  <img src={GroupIcon} alt="workspace" loading="lazy" />
                  <Styled.WorkspaceName>{item.name}</Styled.WorkspaceName>
                </Styled.FlexGap>
              ))}
            </Styled.FlexColumn>
          </div>
        ) : (
          <CreateNewWorkspaceForm />
        )}

        {!isCreateWorkspace ? (
          <Styled.CreateWorkspaceBtn onClick={() => setIsCreateWorkspace(true)}>
            <AddIcon />
            Create Workspace
          </Styled.CreateWorkspaceBtn>
        ) : (
          <Styled.FlexEnd>
            <Styled.CreateWorkspaceBtn width={'auto'}>Apply</Styled.CreateWorkspaceBtn>
            <Styled.CreateWorkspaceBtn width={'auto'} onClick={() => setIsCreateWorkspace(false)}>Cancel</Styled.CreateWorkspaceBtn>
          </Styled.FlexEnd>
        )}
      </Styled.Container>
    </Styled.BottomDrawer>
  );
};

export default WorkspacesDrawer;
