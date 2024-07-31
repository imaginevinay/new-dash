import { useState } from "react";
import FormControl from "@mui/joy/FormControl";
import RadioGroup from "@mui/joy/RadioGroup";
import * as Styled from "./CreateReport.styles";
import WorkspaceMenu from "./WorkspaceMenu";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { FormLabel, Input, Textarea } from "@mui/joy";

export default function CreateReport({ open, setOpen }) {
  const [selectedValue, setSelectedValue] = useState("myWorkspace");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);
  const [showNextPage, setShowNextPage] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    if (event.target.value === "selectExisting") {
      setDropdownOpen(true);
    }
  };

  const handleWorkspaceSelect = (workspace) => {
    setSelectedWorkspace(workspace);
    setSelectedValue("selectExisting");
    setDropdownOpen(false);
  };

  return (
    <Styled.ModalContainer
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => setOpen(false)}
    >
      <Styled.SheetWrapper variant="outlined">
        <Styled.ModalCloseBtn variant="plain" />
        <Styled.Headline>
          {showNextPage && (
            <Styled.GoBackIcon
              sx={{ cursor: "pointer" }}
              onClick={() => setShowNextPage(false)}
            />
          )}
          Create Report
        </Styled.Headline>
        {!showNextPage && (
          <FormControl>
            <RadioGroup value={selectedValue} onChange={handleRadioChange}>
              <Styled.FormattedRadio
                className="vinay-radio"
                value="myWorkspace"
                label="My Workspace"
              />
              <Styled.RadioWithDropdown
                value="selectExisting"
                label="Choose Workspace"
                onClick={() => setDropdownOpen(true)}
              />
              <Styled.DropDownWrapper>
                <WorkspaceMenu
                  open={dropdownOpen}
                  setOpen={setDropdownOpen}
                  onSelect={handleWorkspaceSelect}
                  selectedWorkspace={selectedWorkspace}
                />
              </Styled.DropDownWrapper>

              <Styled.FormattedRadio
                value="other"
                label={
                  <Styled.ChooseWorkspaceBtn>
                    <AddOutlinedIcon />
                    <span>Create New Workspace</span>
                  </Styled.ChooseWorkspaceBtn>
                }
              />
            </RadioGroup>
          </FormControl>
        )}
        {showNextPage && (
          <FormControl>
            <Styled.ItemWrapper>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name this Report" />
            </Styled.ItemWrapper>

            <Styled.ItemWrapper>
              <FormLabel>Short Name</FormLabel>
              <Input placeholder="Give Short Name for this report" />
            </Styled.ItemWrapper>

            <Styled.ItemWrapper>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Describe this Report"
                minRows={2}
                maxRows={4}
              />
            </Styled.ItemWrapper>
          </FormControl>
        )}
        <Styled.ButtonWrapper>
          <Styled.NextButton onClick={() => setShowNextPage(true)}>
            {showNextPage ? "Create Report" : "Next" }
          </Styled.NextButton>
        </Styled.ButtonWrapper>
      </Styled.SheetWrapper>
    </Styled.ModalContainer>
  );
}


