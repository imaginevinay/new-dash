import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import { useEffect, useState } from "react";
import * as Styled from "../CommonModalStyles";
import CloseIcon from "@mui/icons-material/Close";

export default function DataFlowModal({ open, handleDataFlowModalOnClose }) {
  const [inputVal, setInputVal] = useState(null);

  const handleSave = () => {
    handleDataFlowModalOnClose(inputVal);
  };

  useEffect(() => {
    setInputVal(null);
  }, [open]);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => handleDataFlowModalOnClose("close")}
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
          <Styled.Title>Data Flow</Styled.Title>
          <CloseIcon sx={{cursor: 'pointer'}} onClose={() => handleDataFlowModalOnClose("close")}/>
        </Styled.FlexSpace>

        <div>
          <Styled.RadioGroupContainer name="radio-buttons-group">
            <Styled.FormattedRadio value="new-dataflow" label="Create New Dataflow" />
            <Styled.FormattedRadio value="duplicate-dataflow" label="Duplicate Dataflow" />
            <Styled.FormattedRadio value="import-dataflow" label="Import Dataflow" />
          </Styled.RadioGroupContainer>

          <Styled.FlexEnd>
            <Styled.SaveBtn onClick={handleSave}>Next</Styled.SaveBtn>
          </Styled.FlexEnd>
        </div>
      </Sheet>
    </Modal>
  );
}
