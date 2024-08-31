import * as Styled from "./HomeTabs.styles";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import EmptyImg from "../../assets/image.svg";
import PinnedIcon from "../../assets/icons/pinned.svg";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Tooltip, Typography } from "@mui/joy";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import ExpandIcon from "../../assets/icons/maximize.svg";
import PinnedDarkIcon from "../../assets/icons/pin-dark.svg";

export default function CardsView({ cardData, pinned }) {
  return (
    <Styled.CardWrapper variant="plain">
      <Styled.TitleBox className="titleBox">
        <AssessmentOutlinedIcon className="left-icon" />
        <Styled.ColumnBox>
          <span className="title">{cardData.title}</span>
          <span className="subtitle">{cardData.type}</span>
        </Styled.ColumnBox>
        {pinned ? (
          <img src={PinnedIcon} className="right-icon" />
        ) : (
          <StarBorderOutlinedIcon className="right-icon" />
        )}
      </Styled.TitleBox>
      <Styled.ImageContainer>
        <img src={EmptyImg} />
      </Styled.ImageContainer>
      <Styled.CardContentWrapper orientation="horizontal">
        <div className="owner_details">
          <span>Owner : {cardData.owner}</span>
          <div className="details">
            <span>Details</span>
            <Tooltip
              placement="bottom-end"
              variant="outlined"
              arrow
              title={<MoreDetails extraDetails={cardData?.details} />}
            >
              <KeyboardArrowDownOutlinedIcon className="down-icon" />
            </Tooltip>
          </div>
        </div>
        {pinned ? (
          <Dropdown>
            <MenuButton
              slots={{ root: IconButton }}
              slotProps={{ root: { variant: "plain", color: "neutral" } }}
              sx={{padding: 0, minWidth: '1.25rem', "&:hover": {backgroundColor: 'inherit'}}}
            >
              <MoreVertOutlinedIcon className="more-icon" />
            </MenuButton>
            <Menu>
              <MenuItem>
                <img src={ExpandIcon} />
                <Typography level="body-md">Open</Typography>
              </MenuItem>
              <MenuItem>
                <img src={PinnedDarkIcon} />
                <Typography level="body-md">Unpin Report</Typography>
              </MenuItem>
            </Menu>
          </Dropdown>
        ) : (
          <Tooltip
            placement="bottom"
            variant="outlined"
            arrow
            title="More Options"
          >
            <MoreVertOutlinedIcon className="more-icon" />
          </Tooltip>
        )}
      </Styled.CardContentWrapper>
    </Styled.CardWrapper>
  );
}

const MoreDetails = ({ extraDetails }) => {
  return (
    <Styled.MoreDetails>
      <Styled.DetailItem>
        <span className="title">Workspace :</span>{" "}
        <span>{extraDetails.workspace}</span>
      </Styled.DetailItem>
      <Styled.DetailItem>
        <span className="title">Status :</span>{" "}
        <span>{extraDetails.status}</span>
      </Styled.DetailItem>
      <Styled.DetailItem>
        <span className="title">Description :</span>{" "}
        <span className="desc">{extraDetails.description}</span>
      </Styled.DetailItem>
    </Styled.MoreDetails>
  );
};
