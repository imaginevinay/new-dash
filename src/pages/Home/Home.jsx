import HomeTabs from "../../components/HomeTabs/HomeTabs";
import * as Styled from "./Home.styles";
import TanstackTable from "../../components/TanstackTable/TanstackTable";
import { DATA_COLS, DATA } from "../../utils/dummyData";

const Home = () => {
  return (
    <>
      <Styled.ButtonWrapper aria-label="outlined primary button group">
        <Styled.ChartButton>
          <Styled.AddIconWhite color="primary" />
          <span>Create Report</span>
        </Styled.ChartButton>
        <Styled.ChartButton>
          <Styled.AddIconWhite color="primary" />
          <span>Create Chart</span>
        </Styled.ChartButton>
      </Styled.ButtonWrapper>

      {/* Home Tabs */}
      <Styled.Wrapper>
        <HomeTabs />
      </Styled.Wrapper>

      {/* Home table */}
      <Styled.TableContainer>
        <TanstackTable tableData={DATA} columnData={DATA_COLS} />
      </Styled.TableContainer>
    </>
  );
};

export default Home;
