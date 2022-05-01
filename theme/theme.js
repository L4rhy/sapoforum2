import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
   palette: {
      primary: {
         light: "#91ff35",
         main: "#76ff03",
         dark: "#52b202",
         contrastText: "#92E6A7",
      },
      secondary: {
         light: "#6fbf73",
         main: "#68784F",
         dark: "#505D3C",
         contrastText: "#081C15",
      },
   },
});

export default theme;
