import AllFavTabs from "../../components/AllFavTabs/AllFavTabs";
import HomeActionBtns from "../../components/HomeActionBtns/HomeActionBtns";
import HomeTabs from "../../components/HomeTabs/HomeTabs";
import * as Styled from "./Home.styles";
// import TanstackTable from "../../components/TanstackTable/TanstackTable";
// import { DATA_COLS, DATA } from "../../utils/dummyData";

const Home = () => {
  return (
    <>
      {/* Home action btns Create Report + create Chart */}
      <HomeActionBtns />
      
      {/* Home Tabs */}
      <Styled.Wrapper>
        <HomeTabs />
      </Styled.Wrapper>

      {/* Home table */}
      <AllFavTabs />
      {/* <Styled.TableContainer>
        <TanstackTable tableData={DATA} columnData={DATA_COLS} />
      </Styled.TableContainer> */}
    </>
  );
};

export default Home;
