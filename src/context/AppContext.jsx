import { createContext } from 'react';
import PropTypes from 'prop-types'
// import useMediaQuery from "@mui/joy";


export const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const isMdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  // const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  const contextValue = {
    // isMdScreen,
    // isMobileScreen
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
    children : PropTypes.node
}

export default AppProvider;
