import * as Styled from './BottomDrawers.styles';
import { IconButton } from '@mui/joy';



const BottomDrawer = ({ onClick }) => {
    return (
        <Styled.SheetMenu onClick={onClick}>
          <Styled.MenuTitle>Workspaces</Styled.MenuTitle>
          <IconButton>
            <Styled.MoreIcon />
          </IconButton>
        </Styled.SheetMenu>
      );
}

export default BottomDrawer