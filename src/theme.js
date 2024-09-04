import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#FFFFFF",
          100: "#D4AF37",
          200: "#212121",
          300: "#808080",
          400: "#F5F7FA",
          500: undefined,
          600: undefined,
          700: undefined,
          800: undefined,
          900: undefined,
          solidBg: '#D4AF37',
          solidColor: '#ffffff',
        },
        secondary: {
          'accordionHover': 'rgba(212, 175, 55, 0.10)',
          'disabledText': '#89939E',
          'lightYellow': 'rgba(212, 175, 55, 0.10)',
          'dividerColor': 'rgba(99 107 116/0.2)',
          'secondary-hover': '#89939e40',
          'secondaryBtnColor': '#F5F5F5'
        },
        danger: {
          50: undefined,
          100: "#FF3131",
          200: undefined,
          300: undefined,
          400: undefined,
          500: undefined,
          600: undefined,
          700: undefined,
          800: undefined,
          900: undefined,
        },
        success: {
          50: "#C6FFAC",
          100: "#39B001",
          200: undefined,
          300: undefined,
          400: undefined,
          500: undefined,
          600: undefined,
          700: undefined,
          800: undefined,
          900: undefined,
        },
        warning: {
          50: "#FCE8DB",
          100: "#F93C65",
          200: undefined,
          300: undefined,
          400: undefined,
          500: undefined,
          600: undefined,
          700: undefined,
          800: undefined,
          900: undefined,
        },
      },
    },
    dark: {
      palette: {},
    },
  },
  components: {
    JoyInput: {
      styleOverrides: {
        root: {
          "--Input-focusedHighlight": "transparent !important",
        },
      },
    },
    // JoyTab: {
    //   styleOverrides: {
    //     root: {
    //       "&.Mui-selected": {
    //         background: "#D4AF37",
    //         color: "#FFFFFF",
    //         "&:hover": {
    //           background: "#D4AF37",
    //         },
    //       },
    //       "&:not(.Mui-selected)": {
    //         background: "#FFF",
    //         "&:hover": {
    //           background: "#FFF",
    //         },
    //       }
    //     },
    //   },
    // },
    JoyRadio: {
      styleOverrides: {
        root: () => ({
          "& .MuiRadio-radio": {
            backgroundColor: "#FFFFFF",
            borderColor: "#212121",

            "& .MuiRadio-icon": {
              backgroundColor: "#D4AF37",
            },

            "&:hover": {
              backgroundColor: "#FFFFFF",
              borderColor: "#212121",
            },
          },
        }),
      },
    },
    JoyToggleButtonGroup: {
      styleOverrides: {
        root: {
          "&>[data-last-child]": {
            borderLeft: 0
          },
          "&>[data-first-child]": {
            borderRight: 0
          }
        }
      }
    },
    JoyAccordionSummary: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        }
      }
    },
    JoyCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiCheckbox-checkbox.Mui-checked": {
            backgroundColor: 'var(--joy-palette-primary-100)'
          }
        }
      }
    },
    JoySwitch: {
      styleOverrides: {
        root : {
          '--Switch-trackBackground': "#D4AF37 !important"
        }
      }
    },
    JoyMenuItem: {
      styleOverrides: {
        root: {
          "&:not(.Mui-selected, [aria-selected='true']):hover": {
            // backgroundColor: 'var(--joy-palette-secondary-lightYellow)',
            // color: "var(--joy-palette-primary-100)",
            "& .MuiSvgIcon-root": {
              // color: "var(--joy-palette-primary-100)",
            },
            "& .data-flow-icon": {
              // filter: 'brightness(0) saturate(100%) invert(64%) sepia(94%) saturate(320%) hue-rotate(6deg) brightness(92%) contrast(91%)'
            }
          }
        }
      }
    },
    JoySelect: {
      styleOverrides: {
        root: {
          border: 0,
          // backgroundColor: 'var(--joy-palette-secondary-lightYellow)',
          // color: "var(--joy-palette-primary-100)",
          "&:hover": {
            // backgroundColor: 'var(--joy-palette-secondary-lightYellow)',
            // color: "var(--joy-palette-primary-100)",
          },
          "& .MuiSelect-indicator": {
            // '--Icon-color': 'var(--joy-palette-primary-100)'
          }
        }
      }
    },
    JoyOption: {
      styleOverrides: {
        root: {
          "&:not(.Mui-selected, [aria-selected='true']):hover": {
            // backgroundColor: 'rgba(212, 175, 55, 0.10)',
            // color: "#D4AF37"
          },
          "&.MuiOption-highlighted.Mui-selected": {
            // backgroundColor: 'rgba(212, 175, 55, 0.10)',
            // color: "#D4AF37"
          }
        }
      }
    },
    JoyTypography: {
      styleOverrides: {
        root: {
          color : '#212121'
        }
      }
    },
    JoyAutocomplete: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            '--Input-focusedHighlight': 'var(--joy-palette-secondary-secondary-hover)'
          }
          
        }
      }
    }
  },
});

export default theme;
