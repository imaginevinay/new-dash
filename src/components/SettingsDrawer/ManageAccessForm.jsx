import WorkspaceTypeMenu from "./WorkspaceTypeMenu";
import { useState } from "react";
import * as Styled from "./SettingsDrawer.styles";
import SearchIcon from "@mui/icons-material/Search";
import WorkspaceImg from "../../assets/images/workspace.png";
import OwnershipTypeMenu from "./OwnershipTypeMenu";
import ReportIcon from "../../assets/images/report.svg";
import ChartIcon from "../../assets/images/chart.svg";
import PlusIcon from "../../assets/icons/plus-white.svg?react";
import {
  Checkbox,
  Dropdown,
  MenuButton,
  Menu,
  MenuItem,
  Typography,
  Select,
  selectClasses,
  Option,
} from "@mui/joy";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import { ArrowDropDown, KeyboardArrowDown } from "@mui/icons-material";
import EyeIcon from "../../assets/icons/eye.svg?react";
import EditIcon from "../../assets/icons/edit.svg?react";

const ManageAccessForm = () => {
  const [menuSelect, setMenuSelect] = useState("workspace");
  const [showAddPeople, setShowAddPeople] = useState(false);
  const [adminUsers] = useState([
    {
      id: 1,
      type: "Owner",
      name: "Ashish Singh",
    },
  ]);
  const [allUsers, setAllUsers] = useState([
    {
      id: 1,
      name: "Rahul Rane",
      role: "view",
    },
  ]);

  const [allData] = useState([
    {
      id: 1,
      type: "Report",
      name: "Restaurant Inspection.csv",
    },
    {
      id: 2,
      type: "Chart",
      name: "Survey Analysis",
    },
  ]);

  const handleMenuSelect = (name) => {
    setMenuSelect(name);
  };

  const handleRoleUpdate = (id, newRole) => {
    setAllUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  // const handleAddPeople = () => {
  //   setShowAddPeople(true)
  // }

  return (
    <>
      {!showAddPeople ? (
        <Styled.Wrapper>
          <WorkspaceTypeMenu
            selectedItem={menuSelect}
            onSelect={handleMenuSelect}
          />
        </Styled.Wrapper>
      ) : (
        <Styled.AddPeopleTitle onClick={() => setShowAddPeople(false)}>
          <ArrowLeftIcon />
          <Typography level="body-lg" fontWeight="md">
            Add People
          </Typography>
        </Styled.AddPeopleTitle>
      )}

      {!showAddPeople ? (
        menuSelect === "workspace" ? (
          <Styled.div>
            <Styled.FlexColumn>
              <Styled.AddPeopleButton onClick={() => setShowAddPeople(true)}>
                <PlusIcon />
                Add New people or groups
              </Styled.AddPeopleButton>
              <Styled.SearchBox
                placeholder="Search within workspace"
                startDecorator={<SearchIcon />}
              />
            </Styled.FlexColumn>
            <Styled.FlexColumn>
              <Styled.Title>Admin</Styled.Title>
              {adminUsers.map((item) => (
                <Styled.FlexGap key={item.id}>
                  <Styled.AvatarIcon src={WorkspaceImg} alt="workspace" />
                  <Styled.WorkspaceName>
                    <span className="title">{item.name}</span>
                    <span className="sub">{item.type}</span>
                  </Styled.WorkspaceName>
                </Styled.FlexGap>
              ))}
            </Styled.FlexColumn>
            <Styled.FlexColumn>
              <Styled.Title>All</Styled.Title>
              {allUsers.map((item) => (
                <Styled.FlexGap key={item.id}>
                  <Styled.AvatarIcon src={WorkspaceImg} alt="workspace" />
                  <Styled.WorkspaceName>
                    <span className="title">{item.name}</span>
                    <OwnershipTypeMenu
                      selectedItem={item.role}
                      onSelect={(newVal) => handleRoleUpdate(item.id, newVal)}
                    />
                  </Styled.WorkspaceName>
                </Styled.FlexGap>
              ))}
            </Styled.FlexColumn>

            <Styled.FlexEnd>
              <Styled.CreateWorkspaceBtn width={"auto"}>
                Apply
              </Styled.CreateWorkspaceBtn>
              <Styled.CreateWorkspaceBtn width={"auto"} cancelBtn={true}>
                Cancel
              </Styled.CreateWorkspaceBtn>
            </Styled.FlexEnd>
          </Styled.div>
        ) : (
          <Styled.div>
            <Styled.Wrapper>
              <Styled.SearchBox
                placeholder="Search the report or charts"
                startDecorator={<SearchIcon />}
              />
            </Styled.Wrapper>
            <Styled.FlexColumn>
              <Styled.Title>All</Styled.Title>
              {allData.map((item) => (
                <Styled.FlexGap key={item.id}>
                  <img src={item.type === "Report" ? ReportIcon : ChartIcon} />
                  <Styled.WorkspaceName>
                    <span className="title">{item.name}</span>
                    <span className="sub">{item.type}</span>
                  </Styled.WorkspaceName>
                  <Checkbox sx={{ ml: "auto" }} />
                </Styled.FlexGap>
              ))}
            </Styled.FlexColumn>
            <Styled.FlexEnd>
              <Styled.CreateWorkspaceBtn width={"auto"}>
                Next
              </Styled.CreateWorkspaceBtn>
            </Styled.FlexEnd>
          </Styled.div>
        )
      ) : (
        <div style={{marginTop: '2.5rem'}}>
          <Styled.Wrapper>
            <Styled.SearchBox
              placeholder="Enter name or email"
              startDecorator={<SearchIcon />}
            />
          </Styled.Wrapper>
          <Styled.FlexEnd>
            <Select
              placeholder="Set Access"
              indicator={<KeyboardArrowDown />}
              sx={{
                [`& .${selectClasses.indicator}`]: {
                  transition: "0.2s",
                  [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                  },
                },
              }}
            >
              <Option value="view">
                <EyeIcon />
                <span>Can View</span>
              </Option>
              <Option value="edit">
                <EditIcon />
                <span>Can Edit</span>
              </Option>
            </Select>
            <Styled.AddBtn>Add</Styled.AddBtn>
          </Styled.FlexEnd>
        </div>
      )}
    </>
  );
};

export default ManageAccessForm;
