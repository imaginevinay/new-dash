import * as Styled from "./HomeTabs.styles";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import EmptyImg from "../../assets/image.svg";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Tooltip } from "@mui/joy";

export default function CardsView({ cardData }) {
  return (
    
    <Styled.CardWrapper variant="plain">
      <Styled.TitleBox className="titleBox">
        <AssessmentOutlinedIcon className="left-icon" />
        <Styled.ColumnBox>
          <span className="title">{cardData.title}</span>
          <span className="subtitle">{cardData.type}</span>
        </Styled.ColumnBox>
        <StarBorderOutlinedIcon className="right-icon" />
      </Styled.TitleBox>
      <Styled.ImageContainer>
        <img src={EmptyImg} loading="lazy" alt="" />
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
        <Tooltip placement="bottom"
              variant="outlined"
              arrow
              title="More Options">
        <MoreVertOutlinedIcon className="more-icon" />
        </Tooltip>
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
