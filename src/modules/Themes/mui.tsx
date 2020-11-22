import { createMuiTheme } from '@material-ui/core/styles';
import * as button from './muiButtons';
import colors from './colors';

const overridedMuiTheme = createMuiTheme({
    props: {
        MuiTab: {
            disableRipple: true
        },
        MuiTabs: {
            textColor: 'primary'
        }
    },
    overrides: {
        MuiMenuItem: {
            root: {
                padding: '8px 10px',
                color: `${colors.onSurface.highEmphasis}`,
                '&:hover': {
                    background: `${colors.onSurface.hoveredState}`,
                    borderBottom: 'none'
                }
            }
        },
        MuiTabs: {
            root: {
                background: 'transparent',
                minHeight: '32px'
            },
            flexContainer: {
                // borderBottom: `2px solid ${colors.onSurface.white12}`,
                boxShadow: `inset 0 -2px 0 0 ${colors.onSurface.white12}`,
                boxSizing: 'border-box'
            },
            fixed: {
                display: 'flex'
            },
            indicator: {
                backgroundColor: `${colors.blue[200]}`,
                display: 'flex',
                justifyContent: 'center'
            }
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: 'transparent'
            },
            root: {
                backgroundColor: 'transparent'
                // borderBottom: `2px solid ${colors.onSurface.white12}`,
            }
        },
        MuiTab: {
            textColorPrimary: {
                color: `${colors.onSurface.disabled}`,
                '&$selected': {
                    color: `${colors.blue[200]}`
                }
            },
            wrapper: {
                lineHeight: '18px',
                marginTop: '4px',
                marginBottom: '4px'
            },
            root: {
                padding: 0,
                boxSizing: 'content-box',
                minHeight: '32px',
                '&:not(.lastTab)': {
                    marginRight: '16px'
                },
                '@media (min-width: 600px)': {
                    minWidth: '48px'
                },
                '&:hover': {
                    color: `${colors.blue[200]}`
                },
                '&$selected': {
                    color: `${colors.blue[200]}`
                }
            }
        },
        MuiInputLabel: {
            root: {
                lineHeight: '16px',
                fontSize: '13px',
                '&$focused': {
                    color: `${colors.blue[200]}`
                },
                '&$error': {
                    color: '#FC534E'
                },
                '&$disabled': {
                    color: `${colors.onSurface.disabled}`
                },
                'pointer-events': 'none'
            },
            shrink: {
                transform: 'translate(0, -16px) scale(0.85)'
            },
            marginDense: {
                transform: 'translate(0, -50%)'
            },
            formControl: {
                background: 'transparent',
                color: `${colors.onSurface.mediumEmphasis}`,
                left: '12px',
                top: '50%',
                transform: 'translate(0, -50%)'
            }
        },
        MuiFormHelperText: {
            root: {
                fontSize: '11px',
                lineHeight: '14px',
                color: `${colors.onSurface.mediumEmphasis}`,
                paddingLeft: '12px',
                '&$error': {
                    color: '#FC534E'
                },
                '&$disabled': {
                    color: `${colors.onSurface.mediumEmphasis}`
                }
            }
        },
        MuiInputBase: {
            input: {
                // backgroundColor: `${colors.onSurface.hoveredState}`,
                // background: 'green',
                // backgroundColor: 'red',
                height: 'auto',
                lineHeight: '16px',
                borderRadius: '4px',
                padding: '8px 12px',
                color: 'white',
                '&::placeholder': {
                    color: `${colors.onSurface.mediumEmphasis}`,
                    lineHeight: '16px',
                    fontSize: '13px'
                }
            },
            root: {
                color: `${colors.onSurface.mediumEmphasis}`,
                background: `${colors.onSurface.hoveredState}`,
                '&$disabled': {
                    color: `${colors.onSurface.disabled}`,
                    background: `${colors.onSurface.hoveredState}`
                }
            },
            adornedStart: {
                paddingLeft: '12px'
            },
            adornedEnd: {
                paddingRight: '12px'
            },
            inputAdornedEnd: {
                paddingRight: '12px'
            },
            inputAdornedStart: {
                paddingLeft: '12px'
            }
        },
        MuiInput: {
            formControl: {
                'label + &': {
                    marginTop: 0
                }
            },
            root: {
                caretColor: `${colors.blue[200]}`,
                // backgroundColor: `${colors.onSurface.hoveredState}`,
                borderRadius: '4px',
                '&$error': {
                    caretColor: 'white'
                },
                '&$focused': {
                    backgroundColor: `${colors.onSurface.hoveredState}`
                },
                '&$disabled': {
                    backgroundColor: `${colors.onSurface.hoveredState}`
                },
                '&:hover': {
                    backgroundColor: `${colors.onSurface.white8}`,
                    '&$disabled': {
                        backgroundColor: `${colors.onSurface.hoveredState}`
                    },
                    '&$focused': {
                        backgroundColor: `${colors.onSurface.hoveredState}`
                    }
                }
            },
            underline: {
                '&:before': {
                    borderBottom: 'none !important'
                },
                '&:after': {
                    borderBottom: `2px solid ${colors.blue[200]}`
                },
                '&$error': {
                    '&:after': {
                        borderBottom: '2px solid #FC534E'
                    }
                }
            }
        },
        MuiFilledInput: {
            root: {
                caretColor: `${colors.blue[200]}`,
                backgroundColor: `${colors.onSurface.hoveredState}`,
                borderRadius: '4px',
                '&$error': {
                    caretColor: 'white'
                },
                '&$focused': {
                    backgroundColor: `${colors.onSurface.hoveredState}`
                },
                '&$disabled': {
                    backgroundColor: `${colors.onSurface.hoveredState}`
                },
                '&:hover': {
                    backgroundColor: `${colors.onSurface.white8}`,
                    '&$disabled': {
                        backgroundColor: `${colors.onSurface.hoveredState}`
                    },
                    '&$focused': {
                        backgroundColor: `${colors.onSurface.hoveredState}`
                    }
                }
            },
            input: {
                padding: '24px 12px 10px'
            },
            underline: {
                '&:before': {
                    borderBottom: 'none !important'
                },
                '&:after': {
                    borderBottom: `2px solid ${colors.blue[200]}`
                },
                '&$error': {
                    '&:after': {
                        borderBottom: '2px solid #FC534E'
                    }
                }
            },
            adornedStart: {
              paddingLeft: '12px'
            },
            inputAdornedEnd: {
                paddingRight: '12px'
            },
            inputAdornedStart: {
                paddingLeft: '12px'
            }
        },
        MuiSelect: {
            root: {
                paddingTop: '24px',
                paddingBottom: '10px',
                paddingLeft: '12px',
                '&$error': {
                    color: 'green',
                    iconOpen: {
                        color: 'purple'
                    }
                }
            },
            select: {
                minWidth: '200px',
                position: 'relative',
                '&&': {
                    paddingRight: '44px'
                },
                '&:focus': {
                    backgroundColor: 'transparent'
                },
                '&$error': {
                    color: 'green'
                }
            },
            icon: {
                height: '24px',
                width: '24px',
                color: 'currentColor',
                position: 'absolute',
                marginRight: '12px',
                '&$disabled': {
                    color: `${colors.onSurface.disabled}`
                },
                '&$error': {
                    color: 'yellow'
                }
            },
            iconOpen: {
                color: `${colors.blue[200]}`,
                '&$error': {
                    color: '#FC534E'
                }
            },
            selectMenu: {
                color: `${colors.onSurface.highEmphasis}`
            }
        },
        MuiListItem: {
            root: {
                '&$selected': {
                    backgroundColor: `${colors.onSurface.white12}`,
                    '&:hover': {
                        backgroundColor: `${colors.onSurface.white12}`
                    }
                }
            }
        },
        MuiMenu: {
            paper: {
                maxHeight: '250px',
                marginTop: '8px',
                boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
                overflowY: 'scroll',
                '&::-webkit-scrollbar': {
                    width: '0px'
                },
                // '&::-webkit-scrollbar': {
                //     width: '4px'
                // },
                // '&::-webkit-scrollbar-track': {
                //     background: 'transparent'
                // },
                // '&::-webkit-scrollbar-thumb': {
                //     backgroundColor: `${colors.onSurface.white12}`,
                //     borderRadius: '4px'
                // },
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none'
            }
        },
        MuiDialog: {
            paper: {
                margin: '96px'
            },
            paperWidthXs: {
                maxWidth: '320px'
            },
            paperWidthMd: {
                maxWidth: '430px'
            }
            // container: {
            //     background: 'red'
            // } 
        },
        MuiBackdrop: {
            root: {
                // backgroundColor: `${colors.dark.area}`,
                // backgroundColor: 'green',
                opacity: 0.7
            }
        },
        MuiDialogActions: {
            root: {
                padding: '16px 24px 24px 24px'
            }
        },
        MuiPaper: {
            root: {
                backgroundColor: 'none',
                background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), #030919'
                // backgroundColor: 'red'
            }
        },
        MuiDialogTitle: {
            root: {
                color: `${colors.onSurface.highEmphasis}`,
                padding: '24px 24px 4px 24px'
            }
        },
        MuiDialogContent: {
            root: {
                padding: '12px 24px'
            }
        },
        MuiDialogContentText: {
            root: {
                color: `${colors.onSurface.mediumEmphasis}`,
                marginBottom: 0
            }
        },
        MuiButton: {
            root: {
                ...button.commonStyle
            },
            text: {
                ...button.commonStyle,
                ...button.sizes.medium,
                ...button.variants.text
            },
            textSizeSmall: {
                ...button.commonStyle,
                ...button.sizes.small,
                ...button.variants.text
            },
            textSizeLarge: {
                ...button.commonStyle,
                ...button.sizes.large,
                ...button.variants.text
            },
            outlined: {
                ...button.commonStyle,
                ...button.sizes.medium,
                ...button.variants.outlined
            },
            outlinedSizeSmall: {
                ...button.commonStyle,
                ...button.sizes.small,
                ...button.variants.outlined
            },
            outlinedSizeLarge: {
                ...button.commonStyle,
                ...button.sizes.large,
                ...button.variants.outlined
            },
            contained: {
                ...button.commonStyle,
                ...button.sizes.medium,
                ...button.variants.contained
            },
            containedSizeSmall: {
                ...button.commonStyle,
                ...button.sizes.small,
                ...button.variants.contained
            },
            containedSizeLarge: {
                ...button.commonStyle,
                ...button.sizes.large,
                ...button.variants.contained
            },
            startIcon: {
                margin: '0 8px 0 0'
            },
            endIcon: {
                margin: '0 0 0 8px'
            },
            // iconSizeSmall: {
            //     margin: 0
            // },
            label: {
                display: 'flex',
                alignItems: 'center'
            }
        }
    }
});

export default overridedMuiTheme;
