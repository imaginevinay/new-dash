
import * as Styled from "./ChartCreationLeftMenu.styles";
import LeftArrow from '../../assets/images/left-arrow.svg'
import TabPanel from '@mui/joy/TabPanel';
import Divider from '@mui/joy/Divider';
import RecommendedCharts from "./RecommendedCharts";


const ChartCreationLeftMenu = ({setShowChartCreation}) => {
  return (
    <Styled.LeftMenuWrapper className="LeftMenuWrapper">

      <Styled.MenuTitle>
        <img src={LeftArrow} onClick={() => setShowChartCreation(false)} style={{cursor: 'pointer'}}/>
        <span>Chart creation</span>
      </Styled.MenuTitle>

      <Styled.TabsWrapper defaultValue={0}>
        <Styled.TabListWrapper disableUnderline>
          <Styled.TabButton disableIndicator>Visualization</Styled.TabButton>
          <Styled.TabButton disableIndicator>Dataflow</Styled.TabButton>
        </Styled.TabListWrapper>
        <Divider sx={{mt : '2.5rem'}}/>
        <Styled.TabPanelBox value={0}>
          <RecommendedCharts />
        </Styled.TabPanelBox>
        <TabPanel value={1}>
          <b>Second</b> tab panel
        </TabPanel>
      </Styled.TabsWrapper>

    </Styled.LeftMenuWrapper>
  );
}

export default ChartCreationLeftMenu