import { createContext, useState } from "react";
import PropTypes from "prop-types";
// import useMediaQuery from "@mui/joy";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const isMdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  // const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const [selectedChart, setSelectedChart] = useState(null); // it selects and adds a chart + its subtype here
  const [selectedChartType, setSelectedChartType] = useState(null); // handles the selected chart subtype only the name is used here
  const [selectedChartData, setSelectedChartData] = useState(null); // used for handling the full data+layout sent to plotly
  // const [selectedChartSubType, setSelectedChartSubType] = useState(selectedChart?.types[0] || null);

  const contextValue = {
    selectedChart,
    setSelectedChart,
    selectedChartData,
    setSelectedChartData,
    selectedChartType,
    setSelectedChartType,
    // selectedChartSubType,
    // setSelectedChartSubType
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;


