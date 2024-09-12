import { createContext, useState } from 'react';
import PropTypes from 'prop-types'
// import useMediaQuery from "@mui/joy";


export const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const isMdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  // const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const [selectedChart, setSelectedChart] = useState({
    "icon": "/src/assets/charts/chart-types/vBar.svg",
    "label": "Vertical Bar",
    "types": [
        {
            "id": "bar",
            "name": "Vertical Bar",
            "icon": "/src/assets/charts/chart-types/vBar.svg",
            "previewImage": "/src/assets/charts/previews/Vertical Bar Chart.svg"
        },
        {
            "id": "stack",
            "name": "Vertical Bar Stacked",
            "icon": "/src/assets/charts/chart-types/vBarStacked.svg",
            "previewImage": "/src/assets/charts/previews/Vertical Bar Chart Stacked.svg"
        },
        {
            "id": "group",
            "name": "Vertical Bar Grouped",
            "icon": "/src/assets/charts/chart-types/vBarGrouped.svg",
            "previewImage": "/src/assets/charts/previews/Vertical Bar Chart Grouped.svg"
        },
        {
            "id": "hbar",
            "name": "Horizontal Bar",
            "icon": "/src/assets/charts/chart-types/hbar.svg",
            "previewImage": "/src/assets/charts/previews/Horizontal Bar Chart.svg"
        },
        {
            "id": "hstack",
            "name": "Horizontal Bar Stacked",
            "icon": "/src/assets/charts/chart-types/hBarStacked.svg",
            "previewImage": "/src/assets/charts/previews/Horizontal Bar Chart Stacked.svg"
        },
        {
            "id": "hgroup",
            "name": "Horizontal Bar Stacked",
            "icon": "/src/assets/charts/chart-types/hBarGrouped.svg",
            "previewImage": "/src/assets/charts/previews/Horizontal Bar Chart Grouped.svg"
        }
    ]
});
  const [selectedChartData, setSelectedChartData] = useState({
    "data": [
        {
            "x": [
                "2014",
                "2015",
                "2016",
                "2017"
            ],
            "y": [
                200,
                400,
                600,
                1000
            ],
            "type": "bar",
            "base": 0,
            "marker": {
                "color": "#255FD1"
            }
        }
    ],
    "layout": {
        "xaxis": {
            "title": {
                "text": "Order Date"
            },
            "type": "category",
            "range": [
                -0.5,
                3.5
            ],
            "autorange": true
        },
        "yaxis": {
            "title": {
                "text": "Order Sales"
            },
            "type": "linear",
            "range": [
                0,
                1052.6315789473683
            ],
            "autorange": true
        }
    }
});

  const contextValue = {
    selectedChart,
    setSelectedChart,
    selectedChartData, 
    setSelectedChartData
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
    children : PropTypes.node
}

export default AppProvider;
