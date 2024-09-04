import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@mui/joy";
import * as Styled from "./BottomDrawers.styles";
import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";
import UploadIcon from "../../assets/images/upload-cloud.svg";
import ResetIcon from "../../assets/images/reset-icon.svg";
import NotFoundIcon from '../../assets/images/not-found.svg';

const CreateNewWorkspaceForm = () => {
  return (
    <FormControl>
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
    </FormControl>
  );
};

export default CreateNewWorkspaceForm;
