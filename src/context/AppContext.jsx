import { createContext, useState } from "react";
import PropTypes from "prop-types";
// import useMediaQuery from "@mui/joy";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const isMdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  // const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const [selectedChart, setSelectedChart] = useState({
    icon: "/src/assets/charts/chart-types/vBar.svg",
    label: "Vertical Bar",
    types: [
      {
        id: "bar",
        name: "Vertical Bar",
        icon: "/src/assets/charts/chart-types/vBar.svg",
        previewImage: "/src/assets/charts/previews/Vertical Bar Chart.svg",
      },
      {
        id: "stack",
        name: "Vertical Bar Stacked",
        icon: "/src/assets/charts/chart-types/vBarStacked.svg",
        previewImage:
          "/src/assets/charts/previews/Vertical Bar Chart Stacked.svg",
      },
      {
        id: "group",
        name: "Vertical Bar Grouped",
        icon: "/src/assets/charts/chart-types/vBarGrouped.svg",
        previewImage:
          "/src/assets/charts/previews/Vertical Bar Chart Grouped.svg",
      },
      {
        id: "hbar",
        name: "Horizontal Bar",
        icon: "/src/assets/charts/chart-types/hbar.svg",
        previewImage: "/src/assets/charts/previews/Horizontal Bar Chart.svg",
      },
      {
        id: "hstack",
        name: "Horizontal Bar Stacked",
        icon: "/src/assets/charts/chart-types/hBarStacked.svg",
        previewImage:
          "/src/assets/charts/previews/Horizontal Bar Chart Stacked.svg",
      },
      {
        id: "hgroup",
        name: "Horizontal Bar Grouped",
        icon: "/src/assets/charts/chart-types/hBarGrouped.svg",
        previewImage:
          "/src/assets/charts/previews/Horizontal Bar Chart Grouped.svg",
      },
    ],
  });
  const [selectedChartData, setSelectedChartData] = useState(null);
  const [selectedChartType, setSelectedChartType] = useState(
    selectedChart?.types[0]?.id || null
  );

  const contextValue = {
    selectedChart,
    setSelectedChart,
    selectedChartData,
    setSelectedChartData,
    selectedChartType,
    setSelectedChartType,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
