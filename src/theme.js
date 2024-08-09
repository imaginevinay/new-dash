import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  "colorSchemes": {
    "light": {
      "palette": {
        "primary": {
          "50": "#FFFFFF",
          "100": "#D4AF37",
          "200": "#212121",
          "300": "#808080",
          "400": "#F5F7FA",
          "500": undefined,
          "600": undefined,
          "700": undefined,
          "800": undefined,
          "900": undefined
        },
        "danger": {
          "50": undefined,
          "100": "#FF3131",
          "200": undefined,
          "300": undefined,
          "400": undefined,
          "500": undefined,
          "600": undefined,
          "700": undefined,
          "800": undefined,
          "900": undefined
        },
        "success": {
          "50": "#C6FFAC",
          "100": "#39B001",
          "200": undefined,
          "300": undefined,
          "400": undefined,
          "500": undefined,
          "600": undefined,
          "700": undefined,
          "800": undefined,
          "900": undefined
        },
        "warning": {
          "50": "#FCE8DB",
          "100": "#F93C65",
          "200": undefined,
          "300": undefined,
          "400": undefined,
          "500": undefined,
          "600": undefined,
          "700": undefined,
          "800": undefined,
          "900": undefined
        }
      }
    },
    "dark": {
      "palette": {}
    }
  },
  components: {
    JoyInput: {
      styleOverrides: {
        root:{
          '--Input-focusedHighlight' : 'transparent !important'
        }
      }
    },
    // JoyButton: {
    //   styleOverrides: {
    //     root: {
    //       "&:hover": {
    //         background: 'inherit !important'
    //       }
    //     }
    //   }
    // }
    JoyRadio: {
      styleOverrides: {
        root: () => ({
          "& .MuiRadio-radio": {
            backgroundColor: '#FFFFFF',
            borderColor: "#212121",
        
            "& .MuiRadio-icon": {
              backgroundColor: '#D4AF37',
            },
        
            "&:hover": {
              backgroundColor: '#FFFFFF',
              borderColor: "#212121",
            },
          },
        }),
      },
    },
  }
})

export default theme;
