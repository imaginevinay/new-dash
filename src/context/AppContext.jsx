import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { CHART_DATA_CONFIG } from "../utils/config";
// import useMediaQuery from "@mui/joy";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [chartConfig, setChartConfig] = useState(CHART_DATA_CONFIG);
  // const isMdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  // const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const [selectedChart, setSelectedChart] = useState(null); // it selects and adds a chart + its subtype here
  const [selectedChartType, setSelectedChartType] = useState(null); // handles the selected chart subtype only the name is used here
  const [selectedChartData, setSelectedChartData] = useState(null); // used for handling the full data+layout sent to plotly
  const [leftMenuData, setLeftMenuData] = useState(null);

  const contextValue = {
    selectedChart,
    setSelectedChart,
    selectedChartData,
    setSelectedChartData,
    selectedChartType,
    setSelectedChartType,
    leftMenuData,
    setLeftMenuData,
    chartConfig,
    setChartConfig
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
