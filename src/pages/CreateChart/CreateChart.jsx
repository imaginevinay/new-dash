import * as Styled from "./CreateChart.styles";
import ChartCreationLeftMenu from '../../components/ChartCreationLeftMenu/ChartCreationLeftMenu';
import ChartCreationGrid from '../../components/ChartCreationGrid/ChartCreationGrid';

const CreateChart = () => {
  return (
    <Styled.ChartCreationWrapper>
      <ChartCreationLeftMenu/>
      <ChartCreationGrid />
    </Styled.ChartCreationWrapper>
  )
}

export default CreateChart