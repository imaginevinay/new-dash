import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import { Input, Textarea } from "@mui/joy";
import { useEffect, useState } from "react";
import * as Styled from "../CommonModalStyles";
import CloseIcon from '@mui/icons-material/Close';


export default function ReportModal({ open, handleReportModalOnClose }) {
  const [inputVal, setInputVal] = useState(null);
  const handleSave = () => {
    handleReportModalOnClose(inputVal);
  };

  const handleCancel = () => {
    handleReportModalOnClose("cancel");
  };

  useEffect(() => {
    setInputVal(null);
  }, [open]);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => handleReportModalOnClose("close")}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          background: "#FFF",
          width: '43.75rem',
          maxWidth: '43.75rem',
          borderRadius: "md",
          p: "2.5rem",
          boxShadow: "lg",
        }}
      >
        <Styled.FlexSpace>
            <Styled.Title>New Report</Styled.Title>
            <CloseIcon sx={{cursor: 'pointer'}} onClose={() => handleReportModalOnClose("close")}/>
        </Styled.FlexSpace>    
        
        
        
        <div>
          <Styled.FormContainer>
            <Styled.FormController>
              <Styled.FormLabelText>Name</Styled.FormLabelText>
              <Input placeholder="What would you name your Dashboard ?" />
            </Styled.FormController>

            <Styled.FormController>
              <Styled.FormLabelText>Description</Styled.FormLabelText>
              <Textarea placeholder="It’s Optional but oh, so helpful...." minRows={3}/>
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
