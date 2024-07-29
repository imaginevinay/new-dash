import TabList from "@mui/joy/TabList";
import * as Styled from "./HomeTabs.styles";
import { recentlyViewed, pinnedByMe } from "../../utils/dummyData";
import HorizontalCarousel from "./HorizontalCarousel";



export default function HomeTabs() {
  return (
    <Styled.TabsWrapper aria-label="userTabs" defaultValue={0}>
      <TabList underlinePlacement="none">
        <Styled.StyledTab>Recently Viewed</Styled.StyledTab>
        <Styled.StyledTab>Pinned By Me (5)</Styled.StyledTab>
      </TabList>
      <Styled.TabPanelWrapper value={0}>
        <HorizontalCarousel data={recentlyViewed} />
      </Styled.TabPanelWrapper>
      <Styled.TabPanelWrapper value={1}>
        <HorizontalCarousel data={pinnedByMe} />
      </Styled.TabPanelWrapper>
    </Styled.TabsWrapper>
  );
}
