import TabList from "@mui/joy/TabList";
import * as Styled from "./HomeTabs.styles";
import { recentlyViewed, pinnedByMe } from "../../utils/dummyData";
import HorizontalCarousel from "./HorizontalCarousel";
import { Typography } from "@mui/joy";



export default function HomeTabs() {
  return (
    <Styled.TabsWrapper aria-label="userTabs" defaultValue={0}>
      <TabList disableUnderline>
        <Styled.StyledTab><Typography level="body-lg" fontWeight="400">Recently Viewed</Typography></Styled.StyledTab>
        <Styled.StyledTab><Typography level="body-lg" fontWeight="400">Pinned By Me (5)</Typography></Styled.StyledTab>
      </TabList>
      <Styled.TabPanelWrapper value={0}>
        <HorizontalCarousel data={recentlyViewed} />
      </Styled.TabPanelWrapper>
      <Styled.TabPanelWrapper value={1}>
        <HorizontalCarousel data={pinnedByMe} pinned/>
      </Styled.TabPanelWrapper>
    </Styled.TabsWrapper>
  );
}
