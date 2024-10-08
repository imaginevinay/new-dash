import * as Styled from "./ChartCreationGrid.styles";
import SettingsIcon from "../../assets/icons/settings.svg";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Plot from "react-plotly.js";
import { Stack, Typography } from "@mui/joy";
import ChartSelectorMenu from "./ChartSelectorMenu";

const ChartCreationGrid = () => {
  const { selectedChart, selectedChartData } = useContext(AppContext);
  return (
    <Styled.CanvasGridWrapper
      className={`${selectedChart?.id ? selectedChartData ? "hidePreview": "showBasicPreview": "showGridLines"}`}
      previewImage={selectedChart?.previewImage}
    >
      <div className="header">
        <Stack direction="row" spacing={"2.5rem"}>
          <Stack>
            <Typography level="h4">Chart Name</Typography>
            <Typography level="subtitle" textColor="secondary.100">
              {selectedChart?.name}
            </Typography>
          </Stack>
          {selectedChart?.name && <ChartSelectorMenu />}
        </Stack>
        <div className="rightBtns">
          <img src={SettingsIcon} alt="settings icon" />
        </div>
      </div>

      {selectedChartData && (
        <Plot
          data={selectedChartData?.data}
          layout={{
            ...selectedChartData?.layout,
            width: 70 * 16,
            height: 40* 16
          }}
          config={{
            responsive: true,
            modeBarButtonsToRemove: [
              "pan2d",
              "select2d",
              "lasso2d",
              "resetScale2d",
              "zoomOut2d",
            ],
            displaylogo: false,
          }}
        />
      )}
    </Styled.CanvasGridWrapper>
  );
};

export default ChartCreationGrid;
