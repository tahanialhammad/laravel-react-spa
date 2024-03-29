export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            //ex:

            // primary: amber,
            // divider: amber[200],
            // text: {
            //   primary: grey[900],
            //   secondary: grey[800],
            // },
          }
        : {
            // palette values for dark mode
            //ex
            // primary: deepOrange,
            // divider: deepOrange[700],
            // background: {
            //   default: deepOrange[900],
            //   paper: deepOrange[900],
            // },
            // text: {
            //   primary: '#fff',
            //   secondary: grey[500],
            // },
          }),
    },
  });
  