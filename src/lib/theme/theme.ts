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

} 
