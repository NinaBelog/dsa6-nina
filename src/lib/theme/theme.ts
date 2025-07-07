import { palette, spacers, typography } from "./tokens";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
        colors: {
            border: {
                primary: {
                    loud: {
                        enabled: palette.yellow[400],
                        hover: palette.yellow[500],
                        active:palette.yellow[500],
                        focus:palette.yellow[600],
                    },
                },
                neutral: {
                    calm: {
                        enabled:palette.neutral[100],
                        hover:palette.neutral[200],
                        active:palette.neutral[200],
                        focus:palette.neutral[200],
                        disabled:palette.neutral[100],
                    },

                },
                global: {
                    calm: {
                        enabled:palette.neutral[300],
                    },

                },
                warning: {
                    loud: {
                        enabled:palette.red[500],
                        hover:palette.red[600],
                    },

                },
            },
            bg: {
                primary: {
                    loud: {
                        enabled:palette.yellow[400],
                        hover:palette.yellow[300],
                        active:palette.yellow[500],
                        focus:palette.yellow[400],
                    },
                    bold: {
                        enabled:palette.yellow[600],
                    },
                },
                neutral: {
                    calm: {
                        enabled:palette.neutral[100],
                        hover: palette.neutral[100],
                        active:palette.neutral[200],
                        focus:palette.neutral[100],
                        disabled:palette.neutral[100],
                    },
                calmest: {
                        enabled:palette.neutral[25],
                    },
                bold: {
                        enabled:palette.neutral[400],
                    },
                section: {
                        enabled:palette.neutral[25],
                    },
                global: {
                        enabled:palette.neutral[50],
                    },

                },
            info: {
                loud:{
                        enabled:palette.blue[500],
                    },
                },
            warning: {
                loud:{
                        enabled:palette.red[500],
                    },
                },
            success: {
                loud:{
                        enabled:palette.green[500],
                    },
                },
            },
            icon: {
                neutral: {
                    loud: {
                        enabled:palette.neutral[900],
                        onLight:palette.neutral[900],
                        inversed:palette.neutral[25],
                    },
                    calm: {
                        enabled:palette.neutral[200],
                        disabled:palette.neutral[300],
                    },

                },
            },
            text: {
                neutral: {
                    calm: {
                        enabled:palette.neutral[400],
                        disabled:palette.neutral[300],
                    },
                    loud: {
                        enabled:palette.neutral[900],
                        inverse:palette.neutral[25],
                        onLight:palette.neutral[900],
                    },

                },
                warning: {
                    loud: {
                        enabled:palette.red[500],
                    },

                },
                success: {
                    loud: {
                        enabled:palette.green[500],
                    },
                },
                link: {
                    loud: {
                        enabled:palette.blue[500],
                        hover:palette.blue[600],
                        active:palette.blue[700],
                        focus:palette.blue[700],
                    },
                }, 
            },
         },
     
        typography: {
         fontFamily:{
            text:typography.fontFamily.text,
            heading:typography.fontFamily.heading,
        },

        fontSize:{
            heading:{
                h1:typography.fontSize.h1,
                h2:typography.fontSize.h2,
                h3:typography.fontSize.h3,
                h4:typography.fontSize.h4,
                h5:typography.fontSize.h5,
                h6:typography.fontSize.h6,
                },
            text:{
                base:typography.fontSize.base,
                small:typography.fontSize.small,
                extraSmall:typography.fontSize.extraSmall,
            },
            component:{
                base: typography.fontSize.base,
                small:typography.fontSize.small,
                extraSmall:typography.fontSize.extraSmall,
            },
        },

        lineHeight:{
            heading:{
                h1:typography.lineHeight.h1,
                h2:typography.lineHeight.h2,
                h3:typography.lineHeight.h3,
                h4:typography.lineHeight.h4,
                h5:typography.lineHeight.h5,
                h6:typography.lineHeight.h6,
                },
            text:{
                base: typography.lineHeight.base,
                small:typography.lineHeight.small,
                extraSmall:typography.lineHeight.extraSmall,
            },
            component:{
                base: typography.lineHeight.base,
                small:typography.lineHeight.small,
                extraSmall:typography.lineHeight.extraSmall,
            },
        },

         fontWeight:{
            heading:{
                h1:typography.fontWeight.medium,
                h2:typography.fontWeight.medium,
                h3:typography.fontWeight.medium,
                h4:typography.fontWeight.medium,
                h5:typography.fontWeight.medium,
                h6:typography.fontWeight.medium,
                },
            text:{
                base:typography.fontWeight.regular,
                small:typography.fontWeight.regular,
                extraSmall:typography.fontWeight.regular,
            },
            component:{
                base:typography.fontWeight.regular,
                small:typography.fontWeight.regular,
                extraSmall:typography.fontWeight.regular,
            },
        },

         },
        spacing:{
            inner: {
                noGap:spacers[0],
                closest:spacers[4],
                close:spacers[8],
                relatedS:spacers[16],
                relatedM:spacers[20],
                grouped:spacers[24],
             },
            outer: {
                grouped:spacers[20],
                subsection:spacers[24],
                section:spacers[40],
             },
            padding: {
                xs:spacers[8],
                s:spacers[12],
                m:spacers[16],
                l:spacers[20],
                xl:spacers[24],
               xxl:spacers[32],
             },
           height: {
                x:spacers[0],
             },

         },
        borderRadius:{
                componentInner:spacers[6],
                componentBase:spacers[8],
                sectionInner:spacers[12],
                sectionBase:spacers[16],
                rounded:spacers[999],
         },
        shadows: {
            surface:{
                elevatedHover:`box-shadow: 0px 4px 16px rgba(9, 10, 11, 0.1)`,
            },
            overlay: {
                list:`box-shadow: 0px 2px 8px rgba(9, 10, 11, 0.08)`,
                tooltip:`box-shadow: 0px 2px 12px rgba(9, 10, 11, 0.1)`,
                drawer: `box-shadow: 0px 2px 16px rgba(9, 10, 11, 0.12)`,
                modal:`box-shadow: 0px 4px 20px rgba(9, 10, 11, 0.12)`,
                grabbedContent:`box-shadow: 0px 4px 20px rgba(9, 10, 11, 0.12)`,
                notifications:`box-shadow: 0px 4px 20px rgba(9, 10, 11, 0.24)`,
            },
         },
        focus: `box-shadow: 0px 0px 0px 2px #FFF799`,
        animation: {
            base: `all 0,2s`,
        },
        }


export const darkTheme: DefaultTheme = {
    ...lightTheme,
    colors: {
            border: {
                primary: {
                    loud: {
                        enabled: palette.yellow[400],
                        hover: palette.yellow[500],
                        active:palette.yellow[500],
                        focus:palette.yellow[600],
                    },
                },
                neutral: {
                    calm: {
                        enabled:palette.neutral[600],
                        hover:palette.neutral[400],
                        active:palette.neutral[700],
                        focus:palette.neutral[400],
                        disabled:palette.neutral[600],
                    },

                },
                global: {
                    calm: {
                        enabled:palette.neutral[600],
                    },

                },
                warning: {
                    loud: {
                        enabled:palette.red[400],
                        hover:palette.red[300],
                    },

                },
            },
            bg: {
                primary: {
                    loud: {
                        enabled:palette.yellow[400],
                        hover:palette.yellow[300],
                        active:palette.yellow[500],
                        focus:palette.yellow[400],
                    },
                    bold: {
                        enabled:palette.yellow[600],
                    },
                },
                neutral: {
                    calm: {
                        enabled:palette.neutral[600],
                        hover: palette.neutral[600],
                        active:palette.neutral[700],
                        focus:palette.neutral[600],
                        disabled:palette.neutral[600],
                    },
                calmest: {
                        enabled:palette.neutral[900],
                    },
                bold: {
                        enabled:palette.neutral[300],
                    },
                section: {
                        enabled:palette.neutral[700],
                    },
                global: {
                        enabled:palette.neutral[800],
                    },

                },
            info: {
                loud:{
                        enabled:palette.blue[400],
                    },
                },
            warning: {
                loud:{
                        enabled:palette.red[400],
                    },
                },
            success: {
                loud:{
                        enabled:palette.green[400],
                    },
                },
            },
            icon: {
                neutral: {
                    loud: {
                        enabled:palette.neutral[50],
                        onLight:palette.neutral[800],
                        inversed:palette.neutral[25],
                    },
                    calm: {
                        enabled:palette.neutral[400],
                        disabled:palette.neutral[500],
                    },

                },
            },
            text: {
                neutral: {
                    calm: {
                        enabled:palette.neutral[300],
                        disabled:palette.neutral[400],
                    },
                    loud: {
                        enabled:palette.neutral[50],
                        inverse:palette.neutral[900],
                        onLight:palette.neutral[900],
                    },

                },
                warning: {
                    loud: {
                        enabled:palette.red[400],
                    },

                },
                success: {
                    loud: {
                        enabled:palette.green[400],
                    },
                },
                link: {
                    loud: {
                        enabled:palette.blue[400],
                        hover:palette.blue[300],
                        active:palette.blue[200],
                        focus:palette.blue[200],
                    },
                }, 
            }
            
     },
    shadows: {
            surface:{
                elevatedHover:`box-shadow: 0px 4px 16px rgba(9, 10, 11, 0.1)`,
            },
            overlay: {
                list:`box-shadow: 0px 2px 8px rgba(9, 10, 11, 0.08)`,
                tooltip:`box-shadow: 0px 2px 12px rgba(9, 10, 11, 0.1)`,
                drawer: `box-shadow: 0px 2px 16px rgba(9, 10, 11, 0.12)`,
                modal:`box-shadow: 0px 4px 20px rgba(9, 10, 11, 0.12)`,
                grabbedContent:`box-shadow: 0px 4px 20px rgba(9, 10, 11, 0.12)`,
                notifications:`box-shadow: 0px 4px 20px rgba(9, 10, 11, 0.24)`,
            },
        },
} 
