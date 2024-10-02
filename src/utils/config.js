export const CHART_DATA_CONFIG = [
    {
      id: "bar",
      name: "Column / Bar",
      icon: "/src/assets/charts/categories/column.svg",
      previewImage: '/src/assets/images/barchartPreview.svg',
      types: [
        {
          id: "bar",
          parent: 'bar',
          name: "Vertical Bar",
          icon: "/src/assets/charts/chart-types/vBar.svg",
          previewImage: "/src/assets/charts/previews/Vertical Bar Chart.svg",
          axisData: {xAxis: {}, yAxis: {}},
          orientation: null,
          buildVisuals: [
            {label : 'X - axis', axisControl: 'xAxis'},
            {label : 'Y - axis', axisControl: 'yAxis'},
          ]
        },
        {
          id: "stack",
          parent: 'bar',
          name: "Vertical Bar Stacked",
          icon: "/src/assets/charts/chart-types/vBarStacked.svg",
          previewImage: "/src/assets/charts/previews/Vertical Bar Chart Stacked.svg",
          orientation: null,
          axisData: {xAxis: {}, yAxis: [{}]},
          buildVisuals: [
            {label : 'X - axis', axisControl: 'xAxis'},
            {label : 'Y - axis', axisControl: 'yAxis'},
            // {label : 'Legend', axisControl: 'legend'},
          ]
        },
        {
          id: "group",
          parent: 'bar',
          name: "Vertical Bar Grouped",
          icon: "/src/assets/charts/chart-types/vBarGrouped.svg",
          previewImage: "/src/assets/charts/previews/Vertical Bar Chart Grouped.svg",
          orientation: null,
          axisData: {xAxis: {}, yAxis: []},
          buildVisuals: [
            {label : 'X - axis', axisControl: 'xAxis'},
            {label : 'Y - axis', axisControl: 'yAxis'},
            // {label : 'Legend', axisControl: 'legend'},
          ]
        },
        {
          id: "hbar",
          parent: 'bar',
          name: "Horizontal Bar",
          icon: "/src/assets/charts/chart-types/hbar.svg",
          previewImage: "/src/assets/charts/previews/Horizontal Bar Chart.svg",
          orientation: 'h',
          axisData: {xAxis: {}, yAxis: {}},
          buildVisuals: [
            {label : 'X - axis', axisControl: 'xAxis'},
            {label : 'Y - axis', axisControl: 'yAxis'},
          ]
        },
        {
          id: "hstack",
          parent: 'bar',
          name: "Horizontal Bar Stacked",
          icon: "/src/assets/charts/chart-types/hBarStacked.svg",
          previewImage:"/src/assets/charts/previews/Horizontal Bar Chart Stacked.svg",
          orientation: 'h',
          axisData: {xAxis: {}, yAxis: []},
          buildVisuals: [
            {label : 'X - axis', axisControl: 'xAxis'},
            {label : 'Y - axis', axisControl: 'yAxis'},
            // {label : 'Legend', axisControl: 'legend'},
          ]
        },
        {
          id: "hgroup",
          parent: 'bar',
          name: "Horizontal Bar Grouped",
          icon: "/src/assets/charts/chart-types/hBarGrouped.svg",
          previewImage: "/src/assets/charts/previews/Horizontal Bar Chart Grouped.svg",
          orientation: 'h',
          axisData: {xAxis: {}, yAxis: []},
          buildVisuals: [
            {label : 'X - axis', axisControl: 'xAxis'},
            {label : 'Y - axis', axisControl: 'yAxis'},
            // {label : 'Legend', axisControl: 'legend'},
          ]
        },
      ],
      formatVisuals: [
        {
          id: 1,
          label: "X - Axis",
          subAccordions: [
            {
              id: "x-values",
              label: "Values",
              data: {
                isChecked: true,
                font: "Arial",
                fontSize: 12,
                textStyle: [],
                color: "#000000",
                displayUnit: "Auto",
              },
            },
            {
              id: "x-titles",
              label: "Titles",
              data: {
                isChecked: true,
                titleText: "Order Date",
                font: "Arial",
                fontSize: 18,
                textStyle: [],
                color: "#000000",
              },
            },
          ],
        },
        {
          id: 2,
          label: "Y - Axis",
          subAccordions: [
            {
              id: "y-range",
              label: "Range",
              data: {
                minRange: "",
                maxRange: "",
                invertRange: true,
              },
            },
            {
              id: "y-values",
              label: "Values",
              data: {
                isChecked: true,
                font: "Arial",
                fontSize: 12,
                textStyle: [],
                color: "#000000",
                displayUnit: "Auto",
              },
            },
            {
              id: "y-titles",
              label: "Titles",
              data: {
                isChecked: true,
                titleText: "Order Sales",
                font: "Arial",
                fontSize: 18,
                textStyle: [],
                color: "#000000",
              },
            },
          ],
        },
        {
          id: 3,
          label: "Legend",
          subAccordions: [
            {
              id: "leg-options",
              label: "Options",
              data: {
                positions: "Bottom Center",
                style: "Circular Marker",
              },
            },
            {
              id: "leg-text",
              label: "Text",
              data: {
                isChecked: true,
                titleText: "Auto",
                font: "Inter UI",
                fontSize: 9,
                textStyle: [],
                color: "#000000",
              },
            },
            // add column colors accordion
            {
              id: "col-colors",
              label: "Column Colours",
              data: {
                color1: "#255FD1",
                color2: "#FF7F0E",
              },
            },
          ],
        },
        {
          id: 4,
          label: "Gridlines",
          subAccordions: [
            {
              id: "grid-horizontal",
              label: "Horizontal",
              data: {
                color: "#000000",
                transparency: 25,
                lineStyle: "solid",
              },
            },
            {
              id: "grid-vertical",
              label: "Vertical",
              data: {
                color: "#000000",
                transparency: 25,
                lineStyle: "solid",
              },
            },
          ],
        },
      ]
    },
    {
      id: "line",
      name: "Line",
      icon: "/src/assets/charts/categories/line.svg",
      previewImage: '/src/assets/images/barchartPreview.svg',
      types: [
        {
          id: "scatter",
          parent: 'line',
          name: "Line",
          icon: "/src/assets/charts/categories/line.svg",
          previewImage: "/src/assets/charts/previews/BarLineChart.svg",
          axisData: {xAxis: null, yAxis: null},
          buildVisuals: [
            {label : 'X - axis', axisControl: 'xAxis'},
            {label : 'Y - axis', axisControl: 'yAxis'},
          ],
        },
        {
          id: "vStackedLine",
          parent: 'line',
          name: "Vertical Stacked Line",
          icon: "/src/assets/charts/chart-types/stackedLine.svg",
          previewImage: "/src/assets/charts/previews/stackedLine.svg",
          axisData: {xAxis: null, yAxis: null, secondaryYAxis: null},
          buildVisuals: [
            {label : 'X - axis', axisControl: 'xAxis'},
            {label : 'Y - axis', axisControl: 'yAxis'},
            {label : 'Secondary Y - axis', axisControl: 'secondaryYAxis'},
          ]
        },
        {
          id: "steppedLine",
          parent: 'line',
          name: "Stepped Line",
          icon: "/src/assets/charts/chart-types/steppedLine.svg",
          previewImage: "/src/assets/charts/previews/Stepped Line Chart.svg",
          line: {shape: 'hvh'},
          axisData: {xAxis: null, yAxis: null, secondaryYAxis: null},
          buildVisuals: [
            {label : 'X - axis', axisControl: 'xAxis'},
            {label : 'Y - axis', axisControl: 'yAxis'},
            {label : 'Secondary Y - axis', axisControl: 'secondaryYAxis'},
          ]
        },
        {
          id: "multipleLine",
          parent: 'line',
          name: "Multiple Line",
          icon: "/src/assets/charts/chart-types/stackedLine.svg",
          previewImage: "/src/assets/charts/previews/Multiple Line Chart.svg",
          axisData: {xAxis: null, yAxis: null, secondaryYAxis: null},
          buildVisuals: [
            {label : 'X - axis', axisControl: 'xAxis'},
            {label : 'Y - axis', axisControl: 'yAxis'},
            {label : 'Secondary Y - axis', axisControl: 'secondaryYAxis'},
          ]
        },
      ],
      formatVisuals: [
        {
          id: 1,
          label: "X - Axis",
          subAccordions: [
            {
              id: "x-values",
              label: "Values",
              data: {
                isChecked: true,
                font: "Arial",
                fontSize: 12,
                textStyle: [],
                color: "#000000",
                displayUnit: "Auto",
              },
            },
            {
              id: "x-titles",
              label: "Titles",
              data: {
                isChecked: true,
                titleText: "Order Date",
                font: "Arial",
                fontSize: 18,
                textStyle: [],
                color: "#000000",
              },
            },
          ],
        },
        {
          id: 2,
          label: "Y - Axis",
          subAccordions: [
            {
              id: "y-range",
              label: "Range",
              data: {
                minRange: "",
                maxRange: "",
                invertRange: true,
              },
            },
            {
              id: "y-values",
              label: "Values",
              data: {
                isChecked: true,
                font: "Arial",
                fontSize: 12,
                textStyle: [],
                color: "#000000",
                displayUnit: "Auto",
              },
            },
            {
              id: "y-titles",
              label: "Titles",
              data: {
                isChecked: true,
                titleText: "Order Sales",
                font: "Arial",
                fontSize: 18,
                textStyle: [],
                color: "#000000",
              },
            },
          ],
        },
        // {
        //   id: 3,
        //   label: "Secondary Y - Axis",
        //   subAccordions: [
        //     {
        //       id: "sec-y-range",
        //       label: "Range",
        //       data: {
        //         minRange: "",
        //         maxRange: "",
        //         invertRange: true,
        //       },
        //     },
        //     {
        //       id: "sec-y-values",
        //       label: "Values",
        //       data: {
        //         isChecked: true,
        //         font: "Arial",
        //         fontSize: 12,
        //         textStyle: [],
        //         color: "#000000",
        //         displayUnit: "Auto",
        //       },
        //     },
        //     {
        //       id: "sec-y-titles",
        //       label: "Titles",
        //       data: {
        //         isChecked: true,
        //         titleText: "Order Sales",
        //         font: "Arial",
        //         fontSize: 18,
        //         textStyle: [],
        //         color: "#000000",
        //       },
        //     },
        //   ],
        // },
        {
          id: 3,
          label: "Legend",
          subAccordions: [
            {
              id: "leg-options",
              label: "Options",
              data: {
                positions: "Bottom Center",
                style: "Circular Marker",
              },
            },
            {
              id: "leg-text",
              label: "Text",
              data: {
                isChecked: true,
                titleText: "Auto",
                font: "Inter UI",
                fontSize: 9,
                textStyle: [],
                color: "#000000",
              },
            },
            // add column colors accordion
            {
              id: "col-colors",
              label: "Column Colours",
              data: {
                color1: "#255FD1",
                color2: "#FF7F0E",
              },
            },
          ],
        },
        {
          id: 4,
          label: "Gridlines",
          subAccordions: [
            {
              id: "grid-horizontal",
              label: "Horizontal",
              data: {
                color: "#000000",
                transparency: 25,
                lineStyle: "solid",
              },
            },
            {
              id: "grid-vertical",
              label: "Vertical",
              data: {
                color: "#000000",
                transparency: 25,
                lineStyle: "solid",
              },
            },
          ],
        },
      ]
    },
    {
      id: "pie",
      name: "Pie",
      icon: "/src/assets/charts/categories/pie.svg",
      previewImage: '/src/assets/images/piechartPreview.svg',
      types: [
        {
          id: "pie",
          name: "Pie",
          icon: "/src/assets/charts/chart-types/pie.svg",
          previewImage: "/src/assets/charts/previews/PieChart.svg",
          axisData: {legend: null, value: null},
          buildVisuals: [
            {label : 'Legend', axisControl: 'legend'},
            {label : 'Value', axisControl: 'value'},
          ]
        },
        {
          id: "donut",
          name: "Donut",
          icon: "/src/assets/charts/chart-types/doughnut.svg",
          previewImage: "/src/assets/charts/previews/doughnut.svg",
          axisData: {legend: null, value: null},
          buildVisuals: [
            {label : 'Legend', axisControl: 'legend'},
            {label : 'Value', axisControl: 'value'},
          ]
        },
      ],
      formatVisuals: [
        {
          id: 1,
          label: "Legend",
          subAccordions: [
            {
              id: "leg-options",
              label: "Options",
              data: {
                positions: "Bottom Center",
                style: "Circular Marker",
              },
            },
            {
              id: "leg-text",
              label: "Text",
              data: {
                isChecked: true,
                titleText: "Auto",
                font: "Inter UI",
                fontSize: 9,
                textStyle: [],
                color: "#000000",
              },
            },
            // add column colors accordion
            {
              id: "col-colors",
              label: "Column Colours",
              data: {
                color1: "#255FD1",
                color2: "#FF7F0E",
              },
            },
          ],
        },
        {
          id: 2,
          label: "Labels",
          subAccordions: [
           
            {
              id: "x-titles",
              label: "Options",
              data: {
                isChecked: true,
                titleText: "Order Date",
                font: "Arial",
                fontSize: 18,
                textStyle: [],
                color: "#000000",
              },
            },
            {
              id: "x-values",
              label: "Values",
              data: {
                isChecked: true,
                font: "Arial",
                fontSize: 12,
                textStyle: [],
                color: "#000000",
                displayUnit: "Auto",
              },
            },
          ],
        },
        {
          id: 3,
          label: "Slices",
          subAccordions: [
            {
              id: "grid-horizontal",
              label: "Colors",
              data: {
                color: "#000000",
                transparency: 25,
                lineStyle: "solid",
              },
            },
          ],
        },
      ]
    },
    // {
    //   id: "sunburst",
    //   name: "Sunburst",
    //   icon: "/src/assets/charts/categories/sunburst.svg",
    //   types: [
    //     {
    //       id: "SunBurst",
    //       name: "Sun Burst",
    //       icon: "/src/assets/charts/chart-types/sunburst.svg",
    //       previewImage: "/src/assets/charts/previews/sunburst.svg",
    //     }
    //   ],
    // },
    // {
    //   id: "scatter",
    //   name: "Scatter",
    //   icon: "/src/assets/charts/categories/scatter.svg",
    //   types: [
    //     {
    //       id: "Scatter",
    //       name: "Scatter",
    //       icon: "/src/assets/charts/chart-types/scatter.svg",
    //       previewImage: "/src/assets/charts/previews/scatter.svg",
    //     },
    //     {
    //       id: "ScatterSt",
    //       name: "Scatter Straight lines & Markers",
    //       icon: "/src/assets/charts/chart-types/scatter2.svg",
    //       previewImage: "/src/assets/charts/previews/scatter2.svg",
    //     },
    //     {
    //       id: "hDotPlot",
    //       name: "Horizontal Dot Plot",
    //       icon: "/src/assets/charts/chart-types/scatter3.svg",
    //       previewImage: "/src/assets/charts/previews/scatter3.svg",
    //     },
    //   ],
    // },
    // {
    //   id: "area",
    //   name: "Area",
    //   icon: "/src/assets/charts/categories/area.svg",
    //   types: [
    //     {
    //       id: "VerticalArea",
    //       name: "Vertical Area",
    //       icon: "/src/assets/charts/chart-types/vArea.svg",
    //       previewImage: "/src/assets/charts/previews/vArea.svg",
    //     },
    //     {
    //       id: "VAreaStacked",
    //       name: "Vertical Area Stacked",
    //       icon: "/src/assets/charts/chart-types/vAreaStacked.svg",
    //       previewImage: "/src/assets/charts/previews/vAreaStacked.svg",
    //     },
    //     {
    //       id: "HorizontalArea",
    //       name: "Horizontal Area",
    //       icon: "/src/assets/charts/chart-types/hArea.svg",
    //       previewImage: "/src/assets/charts/previews/hArea.svg",
    //     },
    //     {
    //       id: "HorizontalAreaStacked",
    //       name: "Horizontal Area Stacked",
    //       icon: "/src/assets/charts/chart-types/hAreaStacked.svg",
    //       previewImage: "/src/assets/charts/previews/hAreaStacked.svg",
    //     },
    //   ],
    // },
    // {
    //   id: "waterfall",
    //   name: "Waterfall",
    //   icon: "/src/assets/charts/categories/waterfall.svg",
    //   types: [
    //     {
    //       id: "VerticalWaterfall",
    //       name: "Vertical Waterfall",
    //       icon: "/src/assets/charts/chart-types/waterfall.svg",
    //       previewImage: "/src/assets/charts/previews/waterfall.svg",
    //     },
    //     {
    //       id: "VerticalGroupedWaterfall",
    //       name: "Vertical Grouped Waterfall",
    //       icon: "/src/assets/charts/chart-types/waterfall1.svg",
    //       previewImage: "/src/assets/charts/previews/Vertical Bar Chart Stacked.svg",
    //     },
    //     {
    //       id: "HorizontalWaterfall",
    //       name: "Horizontal Waterfall",
    //       icon: "/src/assets/charts/chart-types/waterfall2.svg",
    //       previewImage: "/src/assets/charts/previews/waterfall2.svg",
    //     },
    //     {
    //       id: "HorizontalGroupedWaterfall",
    //       name: "Horizontal Grouped Waterfall",
    //       icon: "/src/assets/charts/chart-types/waterfall3.svg",
    //       previewImage: "/src/assets/charts/previews/Horizontal Bar Chart.svg",
    //     }
    //   ],
    // },
    // {
    //   id: "treemap",
    //   name: "Tree Map",
    //   icon: "/src/assets/charts/categories/line.svg",
    //   types: [
    //     {
    //       id: "TreeMap",
    //       name: "Tree Map",
    //       icon: "/src/assets/charts/chart-types/tree.svg",
    //       previewImage: "/src/assets/charts/previews/tree.svg",
    //     },
    //     {
    //       id: "NestedTreeMap",
    //       name: "Nested Tree Map",
    //       icon: "/src/assets/charts/chart-types/tree1.svg",
    //       previewImage: "/src/assets/charts/previews/Vertical Bar Chart Stacked.svg",
    //     }
    //   ],
    // },
    // {
    //   id: "funnel",
    //   name: "Funnel",
    //   icon: "/src/assets/charts/categories/funnel.svg",
    //   types: [
    //     {
    //       id: "Funnel",
    //       name: "Funnel",
    //       icon: "/src/assets/charts/chart-types/funnel.svg",
    //       previewImage: "/src/assets/charts/previews/funnel.svg",
    //     },
    //     {
    //       id: "FunnelArea",
    //       name: "Funnel Area",
    //       icon: "/src/assets/charts/chart-types/funnelarea.svg",
    //       previewImage: "/src/assets/charts/previews/Multiple Line Chart.svg",
    //     },
    //     {
    //       id: "FunnelStacked",
    //       name: "Funnel Stacked",
    //       icon: "/src/assets/charts/chart-types/sfunnel.svg",
    //       previewImage: "/src/assets/charts/previews/sfunnel.svg",
    //     }
    //   ],
    // },
    // {
    //   id: "boxplot",
    //   name: "Boxplot",
    //   icon: "/src/assets/charts/categories/boxplot.svg",
    //   types: [
    //     {
    //       id: "VerticalBoxed",
    //       name: "Vertical Boxed",
    //       icon: "/src/assets/charts/chart-types/vboxed.svg",
    //       previewImage: "/src/assets/charts/previews/vboxed.svg",
    //     },
    //     {
    //       id: "VerticalGroupedBox",
    //       name: "Vertical Grouped Box",
    //       icon: "/src/assets/charts/chart-types/vgroupBoxed.svg",
    //       previewImage: "/src/assets/charts/previews/vgroupBoxed.svg",
    //     },
    //     {
    //       id: "HorizontalBox",
    //       name: "Horizontal Box",
    //       icon: "/src/assets/charts/chart-types/hBoxed.svg",
    //       previewImage: "/src/assets/charts/previews/hBoxed.svg",
    //     },
    //     {
    //       id: "HorizontalGroupedBox",
    //       name: "Horizontal Grouped Box",
    //       icon: "/src/assets/charts/chart-types/hGroupBox.svg",
    //       previewImage: "/src/assets/charts/previews/hGroupBox.svg",
    //     }
    //   ],
    // },
    // {
    //   id: "bubble",
    //   name: "Bubble",
    //   icon: "/src/assets/charts/categories/bubble.svg",
    //   types: [
    //     {
    //       id: "BubbleChart",
    //       name: "Bubble Chart",
    //       icon: "/src/assets/charts/chart-types/bubbleChart.svg",
    //       previewImage: "/src/assets/charts/previews/bubbleChart.svg",
    //     },
    //   ],
    // },
    // {
    //   id: "histogram",
    //   name: "Histogram",
    //   icon: "/src/assets/charts/categories/histogram.svg",
    //   types: [
    //     {
    //       id: "VerticalHistogram",
    //       name: "Vertical Histogram",
    //       icon: "/src/assets/charts/chart-types/vshitogram.svg",
    //       previewImage: "/src/assets/charts/previews/vshitogram.svg",
    //     },
    //     {
    //       id: "CumulativeHistogram",
    //       name: "Cumulative Histogram",
    //       icon: "/src/assets/charts/chart-types/chistogram.svg",
    //       previewImage: "/src/assets/charts/previews/chistogram.svg",
    //     },
    //     {
    //       id: "HorizontalHistogram",
    //       name: "Horizontal Histogram",
    //       icon: "/src/assets/charts/chart-types/hHistogram.svg",
    //       previewImage: "/src/assets/charts/previews/hHistogram.svg",
    //     },
    //     {
    //       id: "StackedHistogram",
    //       name: "Stacked Histogram",
    //       icon: "/src/assets/charts/chart-types/sHistogram.svg",
    //       previewImage: "/src/assets/charts/previews/sHistogram.svg",
    //     },
    //     {
    //       id: "2DHistogramContour",
    //       name: "2D Histogram Contour",
    //       icon: "/src/assets/charts/chart-types/2d-hist.svg",
    //       previewImage: "/src/assets/charts/previews/2d-hist.svg",
    //     }
    //   ],
    // },
    // {
    //   id: "violin",
    //   name: "Violin",
    //   icon: "/src/assets/charts/categories/violin.svg",
    //   types: [
    //     {
    //       id: "VerticalBar",
    //       name: "Vertical Bar",
    //       icon: "/src/assets/charts/chart-types/vBar.svg",
    //       previewImage: "/src/assets/charts/previews/Vertical Bar Chart.svg",
    //     },
    //     {
    //       id: "VBarStacked",
    //       name: "Vertical Bar Stacked",
    //       icon: "/src/assets/charts/chart-types/vBarStacked.svg",
    //       previewImage:
    //         "/src/assets/charts/previews/Vertical Bar Chart Stacked.svg",
    //     },
    //     {
    //       id: "VBarGrouped",
    //       name: "Vertical Bar Grouped",
    //       icon: "/src/assets/charts/chart-types/vBarGrouped.svg",
    //       previewImage:
    //         "/src/assets/charts/previews/Vertical Bar Chart Grouped.svg",
    //     },
    //     {
    //       id: "HBar",
    //       name: "Horizontal Bar",
    //       icon: "/src/assets/charts/chart-types/hbar.svg",
    //       previewImage: "/src/assets/charts/previews/Horizontal Bar Chart.svg",
    //     },
    //     {
    //       id: "HBarStacked",
    //       name: "Horizontal Bar Stacked",
    //       icon: "/src/assets/charts/chart-types/hBarStacked.svg",
    //       previewImage:
    //         "/src/assets/charts/previews/Horizontal Bar Chart Stacked.svg",
    //     },
    //     {
    //       id: "HBarGrouped",
    //       name: "Horizontal Bar Stacked",
    //       icon: "/src/assets/charts/chart-types/hBarGrouped.svg",
    //       previewImage:
    //         "/src/assets/charts/previews/Horizontal Bar Chart Grouped.svg",
    //     },
    //   ],
    // },
    // {
    //   id: "heatmap",
    //   name: "Heat Map",
    //   icon: "/src/assets/charts/categories/heatmap.svg",
    //   types: [
    //     {
    //       id: "HeatMap",
    //       name: "Heat Map",
    //       icon: "/src/assets/charts/chart-types/heatMap.svg",
    //       previewImage: "/src/assets/charts/previews/Heatmap.svg",
    //     },
    //     {
    //       id: "ChloropethMap",
    //       name: "Chloropeth Map",
    //       icon: "/src/assets/charts/chart-types/Chloropeth.svg",
    //       previewImage: "/src/assets/charts/previews/Chloropeth.svg",
    //     },
    //     {
    //       id: "BubbleMap",
    //       name: "Bubble Map",
    //       icon: "/src/assets/charts/chart-types/BubbleMap.svg",
    //       previewImage: "/src/assets/charts/previews/bubbleMap.svg",
    //     },
    //   ],
    // },
    // {
    //   id: "gauge",
    //   name: "Gauge",
    //   icon: "/src/assets/charts/categories/gauge.svg",
    //   types: [
    //     {
    //       id: "AngularGauge",
    //       name: "Angular Gauge",
    //       icon: "/src/assets/charts/chart-types/angular.svg",
    //       previewImage: "/src/assets/charts/previews/angular.svg",
    //     },
    //     {
    //       id: "BulletGauge",
    //       name: "Bullet Gauge",
    //       icon: "/src/assets/charts/chart-types/bullet.svg",
    //       previewImage:
    //         "/src/assets/charts/previews/bulletGauge.svg",
    //     }
    //   ],
    // },
    // {
    //   id: "3dplot",
    //   name: "3D Plots",
    //   icon: "/src/assets/charts/categories/line.svg",
    //   types: [
    //     {
    //       id: "3-DScatter",
    //       name: "3-D Scatter",
    //       icon: "/src/assets/charts/chart-types/3d.svg",
    //       previewImage: "/src/assets/charts/previews/Vertical Bar Chart.svg",
    //     },
    //     {
    //       id: "3-DSurface",
    //       name: "3-D Surface",
    //       icon: "/src/assets/charts/chart-types/3d1.svg",
    //       previewImage: "/src/assets/charts/previews/Vertical Bar Chart Stacked.svg",
    //     },
    //     {
    //       id: "3-DRibbon",
    //       name: "3-D Ribbon",
    //       icon: "/src/assets/charts/chart-types/3d2.svg",
    //       previewImage: "/src/assets/charts/previews/Vertical Bar Chart Grouped.svg",
    //     },
    //     {
    //       id: "3-DMesh",
    //       name: "3-D Mesh",
    //       icon: "/src/assets/charts/chart-types/3d3.svg",
    //       previewImage: "/src/assets/charts/previews/Horizontal Bar Chart.svg",
    //     }
    //   ],
    // },
    // {
    //   id: "combo",
    //   name: "Combo",
    //   icon: "/src/assets/charts/categories/combo.svg",
    //   types: [
    //     {
    //       id: "BarStacked&Line",
    //       name: "Bar Stacked & Line",
    //       icon: "/src/assets/charts/chart-types/combo.svg",
    //       previewImage: "/src/assets/charts/previews/combo.svg",
    //     },
    //     {
    //       id: "BarGrouped&Line",
    //       name: "Bar Grouped & Line",
    //       icon: "/src/assets/charts/chart-types/combo2.svg",
    //       previewImage: "/src/assets/charts/previews/combo2.svg",
    //     },
    //     {
    //       id: "BarStacked&MultipleLine",
    //       name: "Bar Stacked & Multiple Line",
    //       icon: "/src/assets/charts/chart-types/combo3.svg",
    //       previewImage: "/src/assets/charts/previews/combo3.svg",
    //     }
    //   ],
    // },
    // {
    //   id: "table",
    //   name: "Tables",
    //   icon:  "/src/assets/charts/categories/table.svg",
    //   types: [
    //     {
    //       id: "VerticalBar",
    //       name: "Vertical Bar",
    //       icon: "/src/assets/charts/chart-types/vBar.svg",
    //       previewImage: "/src/assets/charts/previews/Vertical Bar Chart.svg",
    //     },
    //     {
    //       id: "VBarStacked",
    //       name: "Vertical Bar Stacked",
    //       icon: "/src/assets/charts/chart-types/vBarStacked.svg",
    //       previewImage:
    //         "/src/assets/charts/previews/Vertical Bar Chart Stacked.svg",
    //     },
    //     {
    //       id: "VBarGrouped",
    //       name: "Vertical Bar Grouped",
    //       icon: "/src/assets/charts/chart-types/vBarGrouped.svg",
    //       previewImage:
    //         "/src/assets/charts/previews/Vertical Bar Chart Grouped.svg",
    //     },
    //     {
    //       id: "HBar",
    //       name: "Horizontal Bar",
    //       icon: "/src/assets/charts/chart-types/hbar.svg",
    //       previewImage: "/src/assets/charts/previews/Horizontal Bar Chart.svg",
    //     },
    //     {
    //       id: "HBarStacked",
    //       name: "Horizontal Bar Stacked",
    //       icon: "/src/assets/charts/chart-types/hBarStacked.svg",
    //       previewImage:
    //         "/src/assets/charts/previews/Horizontal Bar Chart Stacked.svg",
    //     },
    //     {
    //       id: "HBarGrouped",
    //       name: "Horizontal Bar Stacked",
    //       icon: "/src/assets/charts/chart-types/hBarGrouped.svg",
    //       previewImage:
    //         "/src/assets/charts/previews/Horizontal Bar Chart Grouped.svg",
    //     },
    //   ],
    // },
  ];