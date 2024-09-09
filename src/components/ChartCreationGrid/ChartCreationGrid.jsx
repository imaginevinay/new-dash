import * as Styled from "./ChartCreationGrid.styles";
import SettingsIcon from '../../assets/icons/settings.svg'; 
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Plot from 'react-plotly.js';


const  ChartCreationGrid = () => {
  const {selectedChart, selectedChartData} = useContext(AppContext);
  console.log('selectedChartData inside gridview', selectedChartData)
  return (
    <Styled.CanvasGridWrapper className={`${selectedChart?.label ? selectedChartData ? 'hidePreview': 'showBasicPreview': 'showGridLines'}`}>
      <div className="header">
        <span>Chart Name</span>
        <img src={SettingsIcon} alt="settings icon" />
      </div>
      <div className="subtitle">
        <span>{selectedChart?.label}</span>
      </div>

      {selectedChartData && <Plot
        data={selectedChartData?.data}
        layout={selectedChartData?.layout}
      />}
    </Styled.CanvasGridWrapper>
  )
}

export default ChartCreationGrid