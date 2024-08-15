import * as Styled from "./ChartCreationGrid.styles";
import SettingsIcon from '../../assets/icons/settings.svg'; 

const ChartCreationGrid = () => {
  return (
    <Styled.CanvasGridWrapper>
      <div className="header">
        <span>Chart Name</span>
        <img src={SettingsIcon} alt="settings icon" />
      </div>
    </Styled.CanvasGridWrapper>
  )
}

export default ChartCreationGrid