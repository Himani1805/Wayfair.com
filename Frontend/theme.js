import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Open Sans', sans-serif",
    body: "'Open Sans', sans-serif",
  },
  colors: {
    purple: {
      500: "#7D3C98",
      600: "#6C3483",
    },
  },
});

export default theme;