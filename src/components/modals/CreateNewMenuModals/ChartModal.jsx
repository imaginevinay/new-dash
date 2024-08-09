import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import { Dropdown, Input, Menu, MenuItem } from "@mui/joy";
import { useEffect, useState } from "react";
import * as Styled from "../CommonModalStyles";
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';


export default function ChartModal({ open, handleChartModalOnClose }) {
  const [inputVal, setInputVal] = useState(null);
  const handleSave = () => {
    handleChartModalOnClose(inputVal);
  };

  const handleCancel = () => {
    handleChartModalOnClose("cancel");
  };

  useEffect(() => {
    setInputVal(null);
  }, [open]);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => handleChartModalOnClose("close")}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          background: "#FFF",
          width: "43.75rem",
          maxWidth: "43.75rem",
          borderRadius: "md",
          p: "2.5rem",
          boxShadow: "lg",
        }}
      >
        <Styled.FlexSpace>
          <Styled.Title>Chart Creation</Styled.Title>
          <CloseIcon sx={{cursor: 'pointer'}} onClose={() => handleChartModalOnClose("close")}/>
        </Styled.FlexSpace>

        <div>
          <Styled.FormContainer>
            <Styled.FormController>
              <Styled.FormLabelText>Chart Name</Styled.FormLabelText>
              <Input placeholder="Enter Chart Name" />
            </Styled.FormController>

            <Styled.FormController>
              <Styled.FormLabelText>Select Dataflow</Styled.FormLabelText>
              {/* <Input placeholder="Select from existing Data Flow" /> */}
              <Dropdown>
                <Styled.MenuButtonItm endDecorator={<ArrowDropDown />}>Select from existing Data Flow</Styled.MenuButtonItm>
                <Menu sx={{ width: "37.75rem", zIndex: 999999}}>
                  <MenuItem><span>Folder</span></MenuItem>
                  <MenuItem><span>Report</span></MenuItem>
                  <MenuItem><span>Chart</span></MenuItem>
                  <MenuItem><span>Dataflow</span></MenuItem>
                </Menu>
              </Dropdown>
            </Styled.FormController>
          </Styled.FormContainer>

          <Styled.FlexEnd>
            <Styled.SaveBtn onClick={handleSave}>Save</Styled.SaveBtn>
            <Styled.CancelBtn onClick={handleCancel}>Cancel</Styled.CancelBtn>
          </Styled.FlexEnd>
        </div>
      </Sheet>
    </Modal>
  );
}
