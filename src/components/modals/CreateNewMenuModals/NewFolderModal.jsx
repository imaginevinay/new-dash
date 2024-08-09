import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Input } from "@mui/joy";
import { useEffect, useState } from "react";
import * as Styled from "../CommonModalStyles";

export default function NewFolderModal({ open, handleFolderModalOnClose }) {
  const [inputVal, setInputVal] = useState(null);
  const handleSave = () => {
    handleFolderModalOnClose(inputVal);
  };

  const handleCancel = () => {
    handleFolderModalOnClose("cancel");
  };

  useEffect(()=>{setInputVal(null)},[open])
  
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => handleFolderModalOnClose("close")}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          background: '#FFF',
          width: 800,
          maxWidth: 800,
          borderRadius: "md",
          p: '2.5rem',
          boxShadow: "lg",
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
        >
          New Folder
        </Typography>
        <Input
          placeholder="Enter your folder name"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          sx={{ margin: "2.5rem 0" }}
        />
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "1.5rem" }}
        >
          <Styled.SaveBtn onClick={handleSave}>Save</Styled.SaveBtn>
          <Styled.CancelBtn onClick={handleCancel}>Cancel</Styled.CancelBtn>
        </div>
      </Sheet>
    </Modal>
  );
}
