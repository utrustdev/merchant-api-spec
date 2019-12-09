// To change the theme, check this structure at ReDoc: https://github.com/Redocly/redoc/blob/master/src/theme.ts
const options = {
  theme: {
    colors: {
      primary: {
        main: "#5B47FF"
      }
    },
    logo: {
      gutter: "0px"
    },
    typography: {
      fontWeightRegular: "400",
      fontWeightBold: "600",
      fontWeightLight: "300",
      fontFamily: "ibmplexsans, sans-serif",
      headings: {
        fontFamily: "fkgrotesk, sans-serif",
        fontWeight: "500"
      }
    }
  }
};

Redoc.init("swagger.yaml", options, document.getElementById("redoc-container"));
