import { IconButton } from "@mui/joy";
import * as Styled from "./BottomDrawers.styles";
import SearchIcon from "@mui/icons-material/Search";
import WorkspaceImg from "../../assets/images/workspace.png";
import GroupIcon from "../../assets/images/groupIcon.svg";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreateNewWorkspaceForm from "./CreateNewWorkspaceForm";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import PinnedDarkIcon from "../../assets/icons/pin-dark.svg?react";

const myWorkspace = [{ id: 1, name: "My Workspace", imgSrc :  WorkspaceImg }];
const allWorkspaces = [
  { id: 2, name: "Restaurant Inspection", imgSrc :  GroupIcon},
  { id: 3, name: "Survey Population", imgSrc :  GroupIcon },
];

const WorkspacesDrawer = ({ open, onClose }) => {
  const [isCreateWorkspace, setIsCreateWorkspace] = useState(false);
  const [pinnedWorkspace, setPinnedWorkspace] = useState([]);

  const handleWorkspacePinning = (newItem) => {
    setPinnedWorkspace(prevItems => {
      const isDuplicate = prevItems.some(item => item.id === newItem.id);
      if (!isDuplicate) {
        return [...prevItems, newItem];
      }
      return prevItems;
    });
  }

  const handleWorkspaceUnpin = (itemToRemove) => {
    setPinnedWorkspace(prevItems => prevItems.filter(item => item !== itemToRemove));
  };

  return (
    <Styled.BottomDrawer
      className="drawer-bottom"
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

            {pinnedWorkspace.length>0 && <Styled.FlexColumn>
              <Styled.Title>Pinned Workspaces</Styled.Title>
              {pinnedWorkspace.map((item) => (
                <Styled.FlexGap key={item.id} className="workspace-item">
                  <Styled.AvatarIcon src={item.imgSrc} alt="workspace" />
                  <Styled.WorkspaceName>{item.name}</Styled.WorkspaceName>
                  <Styled.MoreActionsWrapper className="showOnHover">
                    <PinnedDarkIcon style={{cursor: 'pointer'}} onClick={() => handleWorkspaceUnpin(item)}/>
                    {/* <MoreVertOutlinedIcon sx={{width: '1rem', height: '1.5rem'}}/> */}
                  </Styled.MoreActionsWrapper>
                </Styled.FlexGap>
              ))}
            </Styled.FlexColumn>}

            <Styled.FlexColumn>
              <Styled.Title>My Workspace</Styled.Title>
              {myWorkspace.map((item) => (
                <Styled.FlexGap key={item.id} className="workspace-item">
                  <Styled.AvatarIcon src={item.imgSrc} alt="workspace" />
                  <Styled.WorkspaceName>{item.name}</Styled.WorkspaceName>
                  <Styled.MoreActionsWrapper className="showOnHover">
                    <PinnedDarkIcon style={{cursor: 'pointer'}} onClick={() => handleWorkspacePinning(item)}/>
                    <MoreVertOutlinedIcon sx={{width: '1rem', height: '1.5rem'}}/>
                  </Styled.MoreActionsWrapper>
                </Styled.FlexGap>
              ))}
            </Styled.FlexColumn>
            <Styled.FlexColumn>
              <Styled.Title>All</Styled.Title>
              {allWorkspaces.map((item) => (
                <Styled.FlexGap key={item.id} className="workspace-item">
                  <Styled.AvatarIcon src={item.imgSrc} alt="workspace" />
                  <Styled.WorkspaceName>{item.name}</Styled.WorkspaceName>
                  <Styled.MoreActionsWrapper className="showOnHover">
                    <PinnedDarkIcon style={{cursor: 'pointer'}} onClick={() => handleWorkspacePinning(item)}/>
                    <MoreVertOutlinedIcon sx={{width: '1rem', height: '1.5rem'}}/>
                  </Styled.MoreActionsWrapper>
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
            <Styled.CreateWorkspaceBtn width={'auto'} onClick={() => setIsCreateWorkspace(false)} cancelBtn={true}>Cancel</Styled.CreateWorkspaceBtn>
            <Styled.CreateWorkspaceBtn width={'auto'}>Apply</Styled.CreateWorkspaceBtn>
          </Styled.FlexEnd>
        )}
      </Styled.Container>
    </Styled.BottomDrawer>
  );
};

export default WorkspacesDrawer;
