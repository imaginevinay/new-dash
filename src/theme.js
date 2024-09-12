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
          solidBg: 'var(--joy-palette-primary-100)',
          solidColor: 'var(--joy-palette-primary-50)',
        },
        secondary: {
          50: 'rgba(212, 175, 55, 0.10)',
          100: '#89939E',
          200: 'rgba(212, 175, 55, 0.10)',
          300: 'rgba(99 107 116/0.2)',
          400: '#89939e40',
          500: '#F5F5F5',
          600: undefined,
          700: undefined,
          800: undefined,
          900: undefined,
          // solidBg: 'var(--joy-palette-secondary-400)',
          // solidActiveBg: 'var(--joy-palette-secondary-500)',
          // outlinedBorder: 'var(--joy-palette-secondary-500)',
          // outlinedColor: 'var(--joy-palette-secondary-700)',
          // outlinedActiveBg: 'var(--joy-palette-secondary-100)',
          softColor: 'var(--joy-palette-primary-100)',
          softHoverColor: 'var(--joy-palette-primary-50)',
          softBg: 'var(--joy-palette-secondary-50)',
          softActiveBg: 'var(--joy-palette-secondary-50)',
          softHoverBg: 'var(--joy-palette-primary-100)'
          // plainColor: 'var(--joy-palette-secondary-700)',
          // plainActiveBg: 'var(--joy-palette-secondary-100)',
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
  typography: {
    subtitle: {
      fontSize: '0.7875rem',
      // color: 'var(--joy-palette-secondary-100)'
    }
  },
  components: {
    JoyInput: {
      styleOverrides: {
        root: {
          "--Input-focusedHighlight": "transparent !important",
          '& .MuiInput-input::placeholder': {
            fontSize: "var(--joy-fontSize-sm)"
          },
        },
      },
    },
    JoyTextarea: {
      styleOverrides: {
        root: {
          "--Input-focusedHighlight": "transparent !important",
          '& .MuiTextarea-textarea::placeholder': {
            fontSize: "var(--joy-fontSize-sm)"
          },
        },
      },
    },
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
          },
          '& .MuiAutocomplete-input::placeholder': {
            fontSize : 'var(--joy-fontSize-sm)'
          },
          
        }
      }
    },
    JoyChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--joy-palette-primary-100)',
          "& .MuiChip-label": {
            color: 'var(--joy-palette-primary-50)'
          },
          "& .MuiChip-endDecorator": {
            '.MuiChipDelete-root': {
              backgroundColor: 'var(--joy-palette-primary-100)',
              ".MuiSvgIcon-root": {
                color: 'var(--joy-palette-primary-50)'
              }
            },
            color: 'var(--joy-palette-primary-50)'
          }
        }
      }
    },
    JoyIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: 'inherit'
          }
        }}
    },
    // JoyAutocompleteListbox: {
    //   styleOverrides: {
    //     root: ({ ownerState }) => ({
    //       '& .MuiAutocomplete-input::placeholder': {
    //         color: 'red',
    //         fontStyle: 'italic',
    //       },
    //     }),
    //   },
    // },
  },
});

export default theme;
