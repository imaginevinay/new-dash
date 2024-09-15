import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import * as Styles from "../modals/CommonModalStyles";
import CloseIcon from "@mui/icons-material/Close";
import {
  Autocomplete,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  TextField,
} from "@mui/joy";
import * as Styled from "../BottomDrawer/BottomDrawers.styles";
import UploadIcon from "../../assets/images/upload-cloud.svg";
import ResetIcon from "../../assets/images/reset-icon.svg";
import NotFoundIcon from "../../assets/images/not-found.svg";
import { useRef, useState } from "react";

export default function AddWorkspaceModal({ open, handleOnClose }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    administrators: [contactList[0]],
    logo: null,
    path: null
  });

  const fileInputRef = useRef(null);

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const generateWorkspacePath = (input) => {
    const lowercased = input.toLowerCase();
    const dashedString = lowercased.replace(/\s+/g, '-');
    return dashedString;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      path: name === 'name' ? `/workspace/${generateWorkspacePath(value)}` : prevData.path,
    }));
  };

  const handleAdministratorsChange = (selectedAdmins) => {
    console.log("hello", selectedAdmins);
    setFormData((prevData) => ({
      ...prevData,
      administrators: selectedAdmins,
    }));
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        logo: imageUrl,
      }));
    }
  };
  const handleApply = () => {
    handleOnClose(formData, 'apply')
  };


  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => handleOnClose("close")}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          background: "#FFF",
          width: "50rem",
          maxWidth: "50rem",
          borderRadius: "md",
          p: "2.5rem",
          boxShadow: "lg",
        }}
      >
        <Styles.FlexSpace>
          <Styles.Title>Create a Workspace</Styles.Title>
          <CloseIcon
            sx={{ cursor: "pointer" }}
            onClick={() => handleOnClose("close")}
          />
        </Styles.FlexSpace>
        <div style={{ marginTop: "2.75rem" }}>
          <FormControl>
            <Styled.FlexColumn gap={"1rem"}>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                placeholder="Name this workspace"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Styled.FlexColumn>
          </FormControl>

          <FormControl>
            <Styled.FlexColumn gap={"1rem"}>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                placeholder="Describe this workspace"
                minRows={3}
                value={formData.description}
                onChange={handleInputChange}
              />
            </Styled.FlexColumn>
          </FormControl>
          <FormControl>
            <Styled.FlexColumn gap={"1rem"}>
              <FormLabel>Administrators</FormLabel>
              <Autocomplete
                multiple
                id={`autocomplete`}
                options={contactList}
                getOptionLabel={(option) => option.title}
                value={formData["administrators"]}
                onChange={(event, newValue) => {
                  handleAdministratorsChange(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder={"Select Admin Users"} />
                )}
                sx={{ p: "0.88rem" }}
              />
            </Styled.FlexColumn>
          </FormControl>

          <Styled.FlexColumn gap={"1rem"}>
            <FormLabel>Workspace Logo</FormLabel>
            <Styled.FlexGap gap={"2rem"}>
              <Styled.AspectBox>
                <div>
                  <img
                    loading="lazy"
                    src={formData?.logo ? formData.logo : NotFoundIcon}
                  />
                </div>
              </Styled.AspectBox>
              <Styled.FlexColumn gap={"1rem"} noMarginBottom>
                <Styled.ActionBtns onClick={triggerFileInput}>
                  <img src={UploadIcon} />
                  Upload
                </Styled.ActionBtns>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  style={{ display: "none" }}
                />
                <Styled.ActionBtns disabled>
                  <img src={ResetIcon} />
                  Reset
                </Styled.ActionBtns>
              </Styled.FlexColumn>
            </Styled.FlexGap>
          </Styled.FlexColumn>
          {/* </FormControl> */}
          <Styled.FlexEnd>
            <Styled.CreateWorkspaceBtn
              width={"auto"}
              onClick={() => handleOnClose("cancel")}
              cancelBtn={true}
            >
              Cancel
            </Styled.CreateWorkspaceBtn>
            <Styled.CreateWorkspaceBtn
              width={"auto"}
              onClick={() => handleApply()}
            >
              Apply
            </Styled.CreateWorkspaceBtn>
          </Styled.FlexEnd>
        </div>
      </Sheet>
    </Modal>
  );
}

const contactList = [
  { title: "ashishsingh(owner)", id: 1 },
  { title: "sonalisingh(owner)", id: 2 },
  { title: "rahulmurthi(owner)", id: 3 },
];
