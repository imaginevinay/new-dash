import { useState } from "react";
import * as Styled from "./HomeActionBtns.styles";
import CreateReport from "../modals/CreateReport/CreateReport";
import CreateChart from "../modals/CreateChart/CreateChart";
import { Typography } from "@mui/joy";

const HomeActionBtns = () => {
  const [openReportModal, setOpenReportModal] = useState(false);
  const [openChartModal, setOpenChartModal] = useState(false);

  return (
    <>
      <Styled.ButtonWrapper aria-label="outlined primary button group">
        <Styled.ChartButton onClick={() => setOpenChartModal(true)}>
          <Styled.AddIconWhite color="primary" />
          <Typography
            level="body-lg"
            fontWeight="md"
          >
            Create Chart
          </Typography>
        </Styled.ChartButton>
        <Styled.ChartButton onClick={() => setOpenReportModal(true)}>
          <Styled.AddIconWhite color="primary" />
          <Typography
            level="body-lg"
            fontWeight="md"
          >
            Create Report
          </Typography>
        </Styled.ChartButton>
      </Styled.ButtonWrapper>

      <CreateReport open={openReportModal} setOpen={setOpenReportModal} />
      <CreateChart open={openChartModal} setOpen={setOpenChartModal} />
    </>
  );
};

export default HomeActionBtns;
