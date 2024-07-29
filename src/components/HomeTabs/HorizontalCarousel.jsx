import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardsView from "./CardsView";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/joy";
import * as Styled from "./HomeTabs.styles";

const CustomArrow = ({ direction, onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "-4rem",
      right: direction === "next" ? "0" : "40px",
    }}
  >
    {direction === "next" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
  </IconButton>
);

function HorizontalCarousel({ data }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  };
  return (
    <Styled.Wrapper className="slider-container">
      <Slider {...settings} className="CardsView">
        {data.map((item) => (
          <CardsView key={item.id} cardData={item} />
        ))}
      </Slider>
    </Styled.Wrapper>
  );
}

export default HorizontalCarousel;
