import { createTheme } from "@mui/material/styles";
import { SMALL_BREAKPOINT } from "./breakpoints";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: SMALL_BREAKPOINT,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
