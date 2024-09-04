import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
  } from "@mui/joy";
  import * as Styled from "./SettingsDrawer.styles";
  import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";
  import UploadIcon from "../../assets/images/upload-cloud.svg";
  import ResetIcon from "../../assets/images/reset-icon.svg";
  import NotFoundIcon from '../../assets/images/not-found.svg';
  
  const EditAboutForm = () => {
    return (
      <FormControl sx={{height: '100%'}}>
        <Styled.FlexColumn gap={"1rem"}>
          <FormLabel>Workspace Logo</FormLabel>
          <Styled.FlexGap gap={"2rem"}>
            <Styled.AspectBox>
              <div>
                  <img loading="lazy" src={NotFoundIcon}/>
              </div>            
            </Styled.AspectBox>
            <Styled.FlexColumn gap={"1rem"} noMarginBottom>
              <Styled.ActionBtns>
                <img src={UploadIcon} />
                Upload
              </Styled.ActionBtns>
              <Styled.ActionBtns disabled>
                <img src={ResetIcon} />
                Reset
              </Styled.ActionBtns>
            </Styled.FlexColumn>
          </Styled.FlexGap>
        </Styled.FlexColumn>

        <Styled.FlexColumn gap={"1rem"}>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name this workspace" />
        </Styled.FlexColumn>
  
        <Styled.FlexColumn gap={"1rem"}>
          <FormLabel>Description</FormLabel>
          <Textarea placeholder="Describe this workspace" minRows={3} />
        </Styled.FlexColumn>
        <Styled.FlexColumn gap={"1rem"}>
          <FormLabel>Contact List</FormLabel>
          <AutocompleteInput placeholder={"Enter Users or groups"} isContactList={true}/>
        </Styled.FlexColumn>

        <Styled.FlexEnd>
            <Styled.CreateWorkspaceBtn width={'auto'}>Apply Changes</Styled.CreateWorkspaceBtn>
            <Styled.CreateWorkspaceBtn width={'auto'} cancelBtn={true}>Cancel</Styled.CreateWorkspaceBtn>
          </Styled.FlexEnd>
      </FormControl>
    );
  };
  
  export default EditAboutForm;
  