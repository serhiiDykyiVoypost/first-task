import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  red: '#FF3666',
  grey: '#7B8383',
  blue: '#4285F4',
  primaryRedColor: '#DD2025',
  primaryGreenColor: '#48B8B8',
  primaryGreyBackgroundColor: '#F4F4F4',
  secondaryGreyBackgroundColor: '#E8E8E8',
  primaryGreenGradient: 'linear-gradient(90deg, #48A2B8 0%, #45CEB4 101.93%)',
};

const shadows = {
  primaryBoxShadow:
    '-10px -10px 30px #FFFFFF, 10px 10px 30px rgba(174, 174, 192, 0.4)',
  inputOutlinedBoxShadow:
    'inset -1px -1px 1px rgba(255, 255, 255, 0.7), inset 1.5px 1.5px 1px rgba(174, 174, 192, 0.2), -1px -1px 3px #FFFFFF, 1.5px 1.5px 2px rgba(174, 174, 192, 0.4)',
  paperBoxShadow:
    '-10px -10px 30px #FFFFFF, 10px 10px 30px rgba(174, 174, 192, 0.4)',
  selectBoxShadow:
    '-1px -1px 3px #FFFFFF, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4)',
  selectDividerBoxShadow:
    'inset -1px -1px 1px rgba(255, 255, 255, 0.7), inset 1px 1px 2px rgba(174, 174, 192, 0.2)',
  sliderShadow:
    'inset -1px -1px 1px rgba(255, 255, 255, 0.7), inset 1.5px 1.5px 1px rgba(174, 174, 192, 0.2)',
};

const primaryFontFamily = 'Gilroy, sans-serif';

const theme = createMuiTheme({
  palette: {
    common: {
      black: colors.black,
      white: colors.white,
    },
    primary: {
      main: colors.blue,
    },
    grey: {
      400: colors.secondaryGreyBackgroundColor,
      500: colors.primaryGreyBackgroundColor,
      600: colors.grey,
    },
    error: {
      main: colors.red,
      400: colors.primaryRedColor,
    },
  },
  typography: {
    fontFamily: primaryFontFamily,
  },
  shadows: [
    'none',
    shadows.primaryBoxShadow,
    shadows.inputOutlinedBoxShadow,
    shadows.paperBoxShadow,
    shadows.selectBoxShadow,
    shadows.selectDividerBoxShadow,
    shadows.sliderShadow,
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: primaryFontFamily,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      h1: {
        fontSize: 25,
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: 25,
        fontWeight: 400,
        lineHeight: 1.2,
      },
      h3: {
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 1.165,
      },
      h4: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 1.235,
        whiteSpace: 'normal',
      },
      h5: {
        fontSize: 12,
        fontWeight: 'bold',
        lineHeight: 1.334,
        overflow: 'none',
        textOverflow: 'none',
        whiteSpace: 'normal',
      },
      h6: {
        fontSize: 12,
        fontWeight: 'normal',
        lineHeight: 1.6,
        overflow: 'none',
        textOverflow: 'none',
        whiteSpace: 'normal',
      },
      subtitle1: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1.75,
      },
      subtitle2: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.55,
      },
      caption: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.2,
      },
      overline: {
        fontSize: 35,
        fontWeight: 700,
        lineHeight: 1.165,
      },
      body1: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 1,
      },
      body2: {
        fontSize: 40,
        fontWeight: 700,
        lineHeight: 1.2,
      },
    },
    MuiPopover: {
      paper: {
        backgroundColor: colors.primaryGreyBackgroundColor,
        paddingTop: defaultTheme.spacing(2),
        borderRadius: 5,
        boxShadow: shadows.primaryBoxShadow,
      },
    },
    MuiListItemIcon: {
      root: {
        marginRight: defaultTheme.spacing(2.25),
        minWidth: 'auto',
      },
    },
    MuiButton: {
      root: {
        fontFamily: primaryFontFamily,
        textTransform: 'unset',
        boxShadow: shadows.primaryBoxShadow,
        fontSize: 20,
        lineHeight: 1,
        fontWeight: 700,
        padding: defaultTheme.spacing(5, 8),
        borderRadius: 5,
        '&:hover': {
          boxShadow: 'unset',
        },
        '&:active': {
          boxShadow: 'unset',
        },
        '&$focusVisible': {
          outline: 'none',
        },
        '&:focus': {
          outline: 'none',
        },
      },
      // change there
      sizeSmall: {
        fontSize: 16,
        fontStyle: 'normal',
        lineHeight: 1,
        fontWeight: 800,
        '&$contained': {
          padding: defaultTheme.spacing(2, 5.9),
        },
      },

      sizeLarge: {
        fontSize: 20,
        lineHeight: 1,
        fontWeight: 700,
        '&$outlined': {
          padding: defaultTheme.spacing(2.125, 2.875),
        },
        '&$contained': {
          padding: defaultTheme.spacing(2.5, 2.875),
        },
      },

      // outlined button
      outlined: {
        boxShadow: shadows.primaryBoxShadow,
        '&:hover': {
          boxShadow: 'unset',
        },
        '&:active': {
          boxShadow: 'unset',
        },
        '&:focus': {
          outline: 'none',
        },
      },
      outlinedPrimary: {
        background: colors.primaryGreyBackgroundColor,
        color: colors.black,
        borderColor: colors.primaryGreenColor,
        borderWidth: 3.5,
        '&:hover': {
          borderWidth: 3.5,
          borderColor: colors.blue,
        },
        '&:active': {
          borderWidth: 3.5,
          borderColor: colors.primaryGreenColor,
        },
        '&$disabled': {
          borderWidth: 3.5,
          borderColor: colors.primaryGreenColor,
        },
      },

      // contained button
      contained: {
        color: colors.white,
        background: colors.blue,
        boxShadow: shadows.primaryBoxShadow,
        border: 'none',
        '&:hover': {
          backgroundColor: colors.white,
        },
        '&:active': {
          boxShadow: 'unset',
          backgroundColor: colors.white,
        },
        '&:focus': {
          outline: 'none',
        },
      },
      containedPrimary: {
        color: colors.white,
        '&:hover': {
          backgroundColor: colors.blue,
        },
        '&:active': {
          backgroundColor: colors.blue,
        },
      },
    },

    // outlined input
    MuiOutlinedInput: {
      inputMarginDense: {
        padding: defaultTheme.spacing(2, 0.25),
      },
      notchedOutline: {
        border: 'unset',
      },
      root: {
        backgroundColor: colors.primaryGreyBackgroundColor,
        borderRadius: 5,
        paddingLeft: defaultTheme.spacing(1.25),
        '&$error': {
          borderColor: colors.red,
        },
      },
      input: {
        fontSize: 20,
        lineHeight: 1,
        fontWeight: 400,
        borderRadius: 5,
        padding: defaultTheme.spacing(2.25, 1.25),
        color: colors.black,
        fontFamily: primaryFontFamily,
      },
      multiline: {
        padding: defaultTheme.spacing(0.625, 1.25),
      },
    },

    MuiInputBase: {
      fullWidth: {
        boxShadow: shadows.inputOutlinedBoxShadow,
      },
    },

    // helper input text
    MuiFormHelperText: {
      root: {
        textAlign: 'right',
        color: colors.grey,
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 1,
        fontFamily: primaryFontFamily,
        paddingBottom: defaultTheme.spacing(4),
        marginTop: defaultTheme.spacing(1),
      },
      contained: {
        marginRight: defaultTheme.spacing(0),
      },
    },

    // chip
    MuiChip: {
      root: {
        display: 'flex',
        borderRadius: 5,
        boxSizing: 'border-box',
        borderColor: colors.primaryGreenColor,
        borderWidth: 3,
        backgroundColor: colors.primaryGreenColor,
        color: colors.white,
        fontWeight: 700,
        fontSize: 20,
        padding: defaultTheme.spacing(3.125, 1),
        marginBottom: defaultTheme.spacing(1.875),
        marginRight: defaultTheme.spacing(1.875),
        '& .MuiChip-avatar': {
          width: 18,
          height: 18,
          marginRight: defaultTheme.spacing(0.75),
          marginLeft: defaultTheme.spacing(1),
        },
      },
      label: {
        maxWidth: 200,
        letterSpacing: '0.01em',
        fontFamily: primaryFontFamily,
      },
      clickable: {
        '&:hover': {
          backgroundColor: colors.primaryGreenColor,
        },
        '&:focus': {
          backgroundColor: colors.primaryGreenColor,
        },
      },
      deletable: {
        '&:focus': {
          backgroundColor: colors.primaryGreenColor,
        },
      },
      outlined: {
        padding: defaultTheme.spacing(2.75, 0),
        borderColor: colors.primaryGreenColor,
        borderWidth: 3,
        backgroundColor: colors.primaryGreyBackgroundColor,
        color: colors.black,
        fontWeight: 400,
      },
    },

    // tabs
    MuiTabs: {
      indicator: {
        backgroundColor: colors.primaryGreenColor,
        height: 3,
        borderRadius: 3,
      },
    },

    // tab
    MuiTab: {
      root: {
        textTransform: 'none',
        textAlign: 'left',
        fontWeight: 400,
        marginRight: defaultTheme.spacing(7.5),
        fontFamily: primaryFontFamily,
        paddingBottom: defaultTheme.spacing(1),
        padding: defaultTheme.spacing(0),
        maxWidth: 150,
        borderBottomWidth: 1,
        '&:focus': {
          outline: 'none',
        },
      },
      textColorPrimary: {
        color: colors.grey,
        fontSize: 25,
        lineHeight: 1.2,
        '&:not($selected)': {
          color: colors.grey,
          '&:active': {
            color: colors.black,
            boxShadow: 'unset',
          },
        },
        '&$selected': {
          color: colors.black,
          '&:active': {
            color: colors.black,
            boxShadow: 'unset',
          },
        },
      },
      textColorSecondary: {
        color: colors.black,
        fontSize: 20,
        lineHeight: 1,
        '&$selected': {
          color: colors.black,
          '&:active': {
            color: colors.black,
            boxShadow: 'unset',
          },
        },
      },
    },

    // icon button
    MuiIconButton: {
      colorPrimary: {
        color: colors.primaryGreenColor,
        '&:hover': {
          color: colors.primaryGreenColor,
        },
        '&:active': {
          color: colors.primaryGreenColor,
        },
      },
      sizeSmall: {
        padding: defaultTheme.spacing(1.5),
        '& $label': {
          width: 26,
          height: 26,
        },
      },
      // colorDefault: {
      //   color: colors.black,
      //   '&:hover': {
      //     color: colors.black,
      //   },
      //   '&:active': {
      //     color: colors.black,
      //   },
      // },
    },

    // dialog
    MuiDialog: {
      paper: {
        borderRadius: 16,
        backgroundColor: colors.primaryGreyBackgroundColor,
      },
    },

    // dialog title
    MuiDialogTitle: {
      root: {
        padding: defaultTheme.spacing(4),
        paddingBottom: 0,
      },
    },

    // dialog actions
    MuiDialogActions: {
      root: {
        justifyContent: 'space-between',
      },
      spacing: {
        padding: defaultTheme.spacing(4),
      },
    },

    // paper
    MuiPaper: {
      root: {
        backgroundColor: colors.primaryGreyBackgroundColor,
      },
      rounded: {
        borderRadius: 16,
      },
      elevation10: {
        boxShadow: shadows.paperBoxShadow,
      },
    },

    // stepper
    MuiMobileStepper: {
      root: {
        backgroundColor: colors.primaryGreyBackgroundColor,
      },
      dotActive: {
        backgroundColor: colors.primaryGreenColor,
      },
      dot: {
        backgroundColor: colors.black,
        width: defaultTheme.spacing(1.25),
        height: defaultTheme.spacing(1.25),
        margin: defaultTheme.spacing(0, 0.65),
      },
      progress: {
        backgroundColor: colors.primaryGreyBackgroundColor,
        '& .MuiLinearProgress-bar': {
          backgroundColor: colors.primaryGreyBackgroundColor,
        },
      },
    },

    // icons select
    MuiSelect: {
      root: {
        boxShadow: shadows.selectBoxShadow,
        borderRadius: 5,
      },
      select: {
        '&:select': {
          borderRadius: 5,
          backgroundColor: 'inherit',
        },
        '&:focus': {
          borderRadius: 5,
          backgroundColor: 'inherit',
        },
      },
      selectMenu: {
        padding: defaultTheme.spacing(1.5),
      },
    },

    // list
    MuiListItemText: {
      primary: {
        color: colors.black,
        fontSize: 20,
      },
      secondary: {
        color: colors.black,
        fontSize: 12,
      },
    },

    // list item avatar
    MuiListItemAvatar: {
      root: {
        minWidth: 35,
      },
    },

    MuiListItem: {
      root: {
        cursor: 'pointer',
        paddingTop: defaultTheme.spacing(0),
      },
    },

    MuiTableCell: {
      root: {
        borderBottom: 'none',
      },
    },

    MuiDivider: {
      root: {
        boxShadow: shadows.selectDividerBoxShadow,
        height: 3,
        borderRadius: 5,
      },
    },
  },
});

export default theme;
