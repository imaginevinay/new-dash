import { useState } from 'react';
import BottomDrawer from '../../components/BottomDrawer/BottomDrawer';
import WorkspacesDrawer from '../../components/BottomDrawer/WorkspacesDrawer';
// import * as Styled from './Workspace.styles';

const Workspace = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSheetClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };


  return (
    <div>
        <BottomDrawer onClick={handleSheetClick} />
        <WorkspacesDrawer open={drawerOpen} onClose={handleDrawerClose} />
    </div>
  )
}

export default Workspace