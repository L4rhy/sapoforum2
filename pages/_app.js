import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme/theme";
import authProvider from "../context/authContext";

function GlobalStyle() {
   return (
      <style global jsx>{`
         * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
         }
         body {
            font-family: "Open Sans", sans-serif;
         }
         /* App fit Height */
         html,
         body,
         #__next {
            min-height: 100vh;
            display: flex;
            flex: 1;
         }
         #__next {
            flex: 1;
         }
         #__next > * {
            flex: 1;
         }
         /* ./App fit Height */
      `}</style>
   );
}

export default function CustomApp({ Component, pageProps }) {
   return (
      <>
         
         <ThemeProvider theme={theme}>   
            <GlobalStyle />
            <Component {...pageProps} />
         </ThemeProvider>
         
      </>
   );
}
