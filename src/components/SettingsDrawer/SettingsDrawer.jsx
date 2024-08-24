import * as Styled from "./SettingsDrawer.styles";
import CloseIcon from "../../assets/images/x.svg";
import InfoIcon from "../../assets/images/info.svg";
import UserIcon from "../../assets/images/user.svg";
import EditAboutForm from "./EditAboutForm";
import ManageAccessForm from "./ManageAccessForm";


const SettingsDrawer = ({ open, onClose }) => {
  return (
    <Styled.RightDrawer
      anchor="right"
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
          <span>Workspace Settings</span>
          <img src={CloseIcon} onClick={onClose}/>
        </Styled.FlexSpace>
        <Styled.SettingTabs orientation="vertical">
          <Styled.TabItemWrapper disableUnderline>
            <Styled.TabItem indicatorPlacement="left"><img src={InfoIcon} alt="InfoIcon" />Edit About</Styled.TabItem>
            <Styled.TabItem indicatorPlacement="left"><img src={UserIcon} alt="InfoIcon" />Manage Access</Styled.TabItem>
          </Styled.TabItemWrapper>
          <Styled.TabPannnel value={0}>
            <EditAboutForm />
          </Styled.TabPannnel>
          <Styled.TabPannnel value={1}>
            <ManageAccessForm />
          </Styled.TabPannnel>
        </Styled.SettingTabs>
      </Styled.Container>
    </Styled.RightDrawer>
  );
};

export default SettingsDrawer;
