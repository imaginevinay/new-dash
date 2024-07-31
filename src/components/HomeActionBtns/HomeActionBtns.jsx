import { useState } from "react";
import * as Styled from "./HomeActionBtns.styles";
import CreateReport from "../modals/CreateReport/CreateReport";
import CreateChart from "../modals/CreateChart/CreateChart";

const HomeActionBtns = () => {
  const [openReportModal, setOpenReportModal] = useState(false);
  const [openChartModal, setOpenChartModal] = useState(false);

  return (
    <>
      <Styled.ButtonWrapper aria-label="outlined primary button group">
        <Styled.ChartButton onClick={() => setOpenReportModal(true)}>
          <Styled.AddIconWhite color="primary" />
          <span>Create Report</span>
        </Styled.ChartButton>
        <Styled.ChartButton onClick={() => setOpenChartModal(true)}>
          <Styled.AddIconWhite color="primary" />
          <span>Create Chart</span>
        </Styled.ChartButton>
      </Styled.ButtonWrapper>


    <CreateReport open={openReportModal} setOpen={setOpenReportModal}/>
    <CreateChart open={openChartModal} setOpen={setOpenChartModal}/>
    </>
  );
};

export default HomeActionBtns;
