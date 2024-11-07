import * as Styled from "./ChartCreationGrid.styles";
import SettingsIcon from "../../assets/icons/settings.svg";
import { useContext, memo } from "react";
import { AppContext } from "../../context/AppContext";
import Plot from "react-plotly.js";
import { Stack, Typography } from "@mui/joy";
import ChartSelectorMenu from "./ChartSelectorMenu";

const areEqual = (prevProps, nextProps) => {
  // Perform deep equality check on data and layout props
  return (
    JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data) &&
    JSON.stringify(prevProps.layout) === JSON.stringify(nextProps.layout)
  );
};

// eslint-disable-next-line react/display-name
const MemoizedPlot = memo(({ data, layout, config }) => {
  return (
    <Plot
      // ref={plotlyRef}
      data={data}
      layout={{
        ...layout,
        width: 70 * 16,
        height: 40 * 16,
      }}
      config={{
        responsive: true,
        modeBarButtonsToRemove: [
          'pan2d',
          'select2d',
          'lasso2d',
          'resetScale2d',
          'zoomOut2d',
        ],
        displaylogo: false,
        ...config,
      }}
    />
  );
}, areEqual);

const ChartCreationGrid = () => {
  const { selectedChart, selectedChartData } = useContext(AppContext);
  // const plotlyRef = useRef(null);

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
        <MemoizedPlot
          data={selectedChartData?.data}
          layout={selectedChartData?.layout}
          config={selectedChartData?.config}
        />
      )}
    </Styled.CanvasGridWrapper>
  );
};

export default ChartCreationGrid;


// import * as Styled from "./ChartCreationGrid.styles";
// import SettingsIcon from "../../assets/icons/settings.svg";
// import { useContext, useRef } from "react";
// import { AppContext } from "../../context/AppContext";
// import Plot from "react-plotly.js";
// import { Stack, Typography } from "@mui/joy";
// import ChartSelectorMenu from "./ChartSelectorMenu";

// const ChartCreationGrid = () => {
//   const { selectedChart, selectedChartData } = useContext(AppContext);
//   const plotlyRef = useRef(null)
//   return (
//     <Styled.CanvasGridWrapper
//       className={`${selectedChart?.id ? selectedChartData ? "hidePreview": "showBasicPreview": "showGridLines"}`}
//       previewImage={selectedChart?.previewImage}
//     >
//       <div className="header">
//         <Stack direction="row" spacing={"2.5rem"}>
//           <Stack>
//             <Typography level="h4">Chart Name</Typography>
//             <Typography level="subtitle" textColor="secondary.100">
//               {selectedChart?.name}
//             </Typography>
//           </Stack>
//           {selectedChart?.name && <ChartSelectorMenu />}
//         </Stack>
//         <div className="rightBtns">
//           <img src={SettingsIcon} alt="settings icon" />
//         </div>
//       </div>

//       {selectedChartData && (
//         <Plot
//           ref={plotlyRef}
//           data={selectedChartData?.data}
//           layout={{
//             ...selectedChartData?.layout,
//             width: 70 * 16,
//             height: 40* 16
//           }}
//           config={{
//             responsive: true,
//             modeBarButtonsToRemove: [
//               "pan2d",
//               "select2d",
//               "lasso2d",
//               "resetScale2d",
//               "zoomOut2d",
//             ],
//             displaylogo: false,
//           }}
//         />
//       )}
//     </Styled.CanvasGridWrapper>
//   );
// };

// export default ChartCreationGrid;
