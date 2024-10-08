import IndeterminateCheckbox from "../components/TanstackTable/IndeterminateCheckbox";

// import IndeterminateCheckbox from '../components/TanstackTable/IndeterminateCheckbox';
export const recentlyViewed = [
  {
    id: 1,
    type: "Report",
    title: "Revenue Opportunities",
    owner: "Ashish Singh",
    details: {
      workspace: "Restaurant inspection",
      status: "Published",
      description: "Restaurant inspection data",
    },
  },
  {
    id: 2,
    type: "Chart",
    title: "Reservations And Bookings",
    owner: "Ashish Singh",
    details: {
      workspace: "Restaurant inspection",
      status: "Published",
      description: "Restaurant inspection data",
    },
  },
  {
    id: 3,
    type: "Report",
    title: "Time Booking",
    owner: "Ashish Singh",
    details: {
      workspace: "Restaurant inspection",
      status: "Published",
      description: "Restaurant inspection data",
    },
  },
  {
    id: 4,
    type: "Chart",
    title: "Population Survey",
    owner: "Ashish Singh",
    details: {
      workspace: "Restaurant inspection",
      status: "Published",
      description: "Restaurant inspection data",
    },
  },
  {
    id: 5,
    type: "Report",
    title: "Revenue Opportunities",
    owner: "Ashish Singh",
    details: {
      workspace: "Restaurant inspection",
      status: "Published",
      description: "Restaurant inspection data",
    },
  },
  {
    id: 6,
    type: "Chart",
    title: "Reservations And Bookings",
    owner: "Ashish Singh",
    details: {
      workspace: "Restaurant inspection",
      status: "Published",
      description: "Restaurant inspection data",
    },
  },
  {
    id: 7,
    type: "Report",
    title: "Time Booking",
    owner: "Ashish Singh",
    details: {
      workspace: "Restaurant inspection",
      status: "Published",
      description: "Restaurant inspection data",
    },
  },
  {
    id: 8,
    type: "Chart",
    title: "Population Survey",
    owner: "Ashish Singh",
    details: {
      workspace: "Restaurant inspection",
      status: "Published",
      description: "Restaurant inspection data",
    },
  },
];

export const pinnedByMe = [
  {
    id: 1,
    type: "Report",
    title: "Revenue Opportunities",
    owner: "Ashish Singh",
    details: {
      workspace: "Restaurant inspection",
      status: "Published",
      description: "Restaurant inspection data",
    },
  },
  {
    id: 2,
    type: "Chart",
    title: "Reservations And Bookings",
    owner: "Ashish Singh",
    details: {
      workspace: "Restaurant inspection",
      status: "Published",
      description: "Restaurant inspection data",
    },
  },
  {
    id: 3,
    type: "Report",
    title: "Time Booking",
    owner: "Ashish Singh",
    details: {
      workspace: "Restaurant inspection",
      status: "Published",
      description: "Restaurant inspection data",
    },
  },
  {
    id: 4,
    type: "Chart",
    title: "Population Survey",
    owner: "Ashish Singh",
    details: {
      workspace: "Restaurant inspection",
      status: "Published",
      description: "Restaurant inspection data",
    },
  },
  {
    id: 5,
    type: "Report",
    title: "Revenue Opportunities",
    owner: "Ashish Singh",
    details: {
      workspace: "Restaurant inspection",
      status: "Published",
      description: "Restaurant inspection data",
    },
  },
];

export const DATA_COLS = [
  {
    id: "select",
    size: "5px",
    header: ({ table }) => (
      <IndeterminateCheckbox
        className="header-checkbox"
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        className="row-checkbox"
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),        
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Type",
    accessorKey: "type",
  },
  {
    header: "Workspaces",
    accessorKey: "workspaces",
  },
  {
    header: "Created By",
    accessorKey: "createdBy",
  },
  {
    header: "Access Level",
    accessorKey: "accessLevel",
  },
  {
    header: "Status",
    accessorKey: "status",
  }
];
export const DATA = [
  {
    id: 1,
    name: "Restaurant Inspection",
    type: "Workspaces",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 2,
    name: "Restaurant Inspection",
    type: "Report",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can View",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 3,
    name: "Restaurant Inspection",
    type: "Semantic Model",
    workspaces: "Time Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can View",
    status: 'Draft',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 4,
    name: "Restaurant Inspection",
    type: "Dashboard",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Draft',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 5,
    name: "Restaurant Inspection",
    type: "Workspaces",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 6,
    name: "Restaurant Inspection",
    type: "Workspaces",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 7,
    name: "Restaurant Inspection",
    type: "Workspaces",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 8,
    name: "Restaurant Inspection",
    type: "Workspaces",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 9,
    name: "Restaurant Inspection",
    type: "Workspaces",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 10,
    name: "Restaurant Inspection",
    type: "Workspaces",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 11,
    name: "Restaurant Inspection",
    type: "Workspaces",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 12,
    name: "Restaurant Inspection",
    type: "Workspaces",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 13,
    name: "Survey Population",
    type: "Report",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can View",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 14,
    name: "Time Booking",
    type: "Semantic Model",
    workspaces: "Time Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can View",
    status: 'Draft',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 15,
    name: "Restaurant Inspection",
    type: "Dashboard",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Draft',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 16,
    name: "Restaurant Inspection",
    type: "Workspaces",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 17,
    name: "Restaurant Inspection",
    type: "Workspaces",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 18,
    name: "Restaurant Inspection",
    type: "Workspaces",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 19,
    name: "Restaurant Inspection",
    type: "Workspaces",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  },
  {
    id: 20,
    name: "Restaurant Inspection",
    type: "Workspaces",
    workspaces: "My Workspace",
    createdBy: "Ashish Singh",
    accessLevel: "Can Edit",
    status: 'Published',
    isFavorite: false,
    isPinned: false
  }
];

export const WORKSPACES_COLS = [
  {
    id: "select",
    size: "5px",
    header: ({ table }) => (
      <IndeterminateCheckbox
        className="header-checkbox"
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        className="row-checkbox"
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),        
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Type",
    accessorKey: "type",
  },
  {
    header: "Access Level",
    accessorKey: "accessLevel",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Refreshed",
    accessorKey: "refreshed",
  },
  {
    header: "Next Refresh",
    accessorKey: "nextRefresh",
  },
];
export const WORKSPACES_DATA = [
  {
    id: 1,
    name: 'Restaurant Data',
    type: 'Reports',
    accessLevel: 'Can View',
    status: 'Published',
    refreshed: '2/6/24, 10:44:33',
    nextRefresh: 'N/A'
  },
  {
    id: 2,
    name: 'Restaurant Data',
    type: 'Charts',
    accessLevel: 'Can View',
    status: 'Published',
    refreshed: '2/6/24, 10:44:33',
    nextRefresh: 'N/A'
  },
  {
    id: 3,
    name: 'Restaurant Data',
    type: 'Reports',
    accessLevel: 'Can View',
    status: 'Published',
    refreshed: '2/6/24, 10:44:33',
    nextRefresh: 'N/A'
  },
  {
    id: 4,
    name: 'Restaurant Data',
    type: 'Charts',
    accessLevel: 'Can View',
    status: 'Published',
    refreshed: '2/6/24, 10:44:33',
    nextRefresh: 'N/A'
  },
  {
    id: 5,
    name: 'Restaurant Data',
    type: 'Reports',
    accessLevel: 'Can View',
    status: 'Published',
    refreshed: '2/6/24, 10:44:33',
    nextRefresh: 'N/A'
  },
  {
    id: 6,
    name: 'Restaurant Data',
    type: 'Reports',
    accessLevel: 'Can View',
    status: 'Published',
    refreshed: '2/6/24, 10:44:33',
    nextRefresh: 'N/A'
  },
  {
    id: 7,
    name: 'Restaurant Data',
    type: 'Reports',
    accessLevel: 'Can View',
    status: 'Published',
    refreshed: '2/6/24, 10:44:33',
    nextRefresh: 'N/A'
  },
  {
    id: 8,
    name: 'Restaurant Data',
    type: 'Charts',
    accessLevel: 'Can View',
    status: 'Published',
    refreshed: '2/6/24, 10:44:33',
    nextRefresh: 'N/A'
  },
  {
    id: 9,
    name: 'Restaurant Data',
    type: 'Reports',
    accessLevel: 'Can View',
    status: 'Published',
    refreshed: '2/6/24, 10:44:33',
    nextRefresh: 'N/A'
  },
  {
    id: 10,
    name: 'Restaurant Data',
    type: 'Charts',
    accessLevel: 'Can View',
    status: 'Published',
    refreshed: '2/6/24, 10:44:33',
    nextRefresh: 'N/A'
  },
  {
    id: 11,
    name: 'Restaurant Data',
    type: 'Reports',
    accessLevel: 'Can View',
    status: 'Published',
    refreshed: '2/6/24, 10:44:33',
    nextRefresh: 'N/A'
  },
];

export const CHART_DATA = [
  {
    id: "bar",
    name: "Column / Bar",
    icon: "/src/assets/charts/categories/column.svg",
    chartTypes: [
      {
        id: "bar",
        name: "Vertical Bar",
        icon: "/src/assets/charts/chart-types/vBar.svg",
        previewImage: "/src/assets/charts/previews/Vertical Bar Chart.svg",
        axisData: {xAxis: null, yAxis: null}
      },
      {
        id: "stack",
        name: "Vertical Bar Stacked",
        icon: "/src/assets/charts/chart-types/vBarStacked.svg",
        previewImage: "/src/assets/charts/previews/Vertical Bar Chart Stacked.svg",
        axisData: {xAxis: null, yAxis: null, legend: null}
      },
      {
        id: "group",
        name: "Vertical Bar Grouped",
        icon: "/src/assets/charts/chart-types/vBarGrouped.svg",
        previewImage: "/src/assets/charts/previews/Vertical Bar Chart Grouped.svg",
        axisData: {xAxis: null, yAxis: null, legend: null}
      },
      {
        id: "hbar",
        name: "Horizontal Bar",
        icon: "/src/assets/charts/chart-types/hbar.svg",
        previewImage: "/src/assets/charts/previews/Horizontal Bar Chart.svg",
        axisData: {xAxis: null, yAxis: null}
      },
      {
        id: "hstack",
        name: "Horizontal Bar Stacked",
        icon: "/src/assets/charts/chart-types/hBarStacked.svg",
        previewImage:"/src/assets/charts/previews/Horizontal Bar Chart Stacked.svg",
        axisData: {xAxis: null, yAxis: null, legend: null}
      },
      {
        id: "hgroup",
        name: "Horizontal Bar Grouped",
        icon: "/src/assets/charts/chart-types/hBarGrouped.svg",
        previewImage: "/src/assets/charts/previews/Horizontal Bar Chart Grouped.svg",
        axisData: {xAxis: null, yAxis: null, legend: null}
      },
    ],
  },
  // {
  //   id: "line",
  //   name: "Line",
  //   icon: "/src/assets/charts/categories/line.svg",
  //   chartTypes: [
  //     {
  //       id: "line",
  //       name: "Line",
  //       icon: "/src/assets/charts/categories/line.svg",
  //       previewImage: "/src/assets/charts/previews/BarLineChart.svg",
  //     },
  //     {
  //       id: "vStackedLine",
  //       name: "Vertical Stacked Line",
  //       icon: "/src/assets/charts/chart-types/stackedLine.svg",
  //       previewImage: "/src/assets/charts/previews/stackedLine.svg",
  //     },
  //     {
  //       id: "steppedLine",
  //       name: "Stepped Line",
  //       icon: "/src/assets/charts/chart-types/steppedLine.svg",
  //       previewImage: "/src/assets/charts/previews/Stepped Line Chart.svg",
  //     },
  //     {
  //       id: "multipleLine",
  //       name: "Multiple Line",
  //       icon: "/src/assets/charts/chart-types/stackedLine.svg",
  //       previewImage: "/src/assets/charts/previews/Multiple Line Chart.svg",
  //     },
  //   ],
  // },
  // {
  //   id: "pie",
  //   name: "Pie",
  //   icon: "/src/assets/charts/categories/pie.svg",
  //   chartTypes: [
  //     {
  //       id: "pie",
  //       name: "Pie",
  //       icon: "/src/assets/charts/chart-types/pie.svg",
  //       previewImage: "/src/assets/charts/previews/PieChart.svg",
  //     },
  //     {
  //       id: "donut",
  //       name: "Donut",
  //       icon: "/src/assets/charts/chart-types/doughnut.svg",
  //       previewImage: "/src/assets/charts/previews/doughnut.svg",
  //     },
  //   ],
  // },
  // {
  //   id: "sunburst",
  //   name: "Sunburst",
  //   icon: "/src/assets/charts/categories/sunburst.svg",
  //   chartTypes: [
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
  //   chartTypes: [
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
  //   chartTypes: [
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
  //   chartTypes: [
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
  //   chartTypes: [
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
  //   chartTypes: [
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
  //   chartTypes: [
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
  //   chartTypes: [
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
  //   chartTypes: [
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
  //   chartTypes: [
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
  //   chartTypes: [
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
  //   chartTypes: [
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
  //   chartTypes: [
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
  //   chartTypes: [
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
  //   chartTypes: [
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
