/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
import { Provider } from "react-redux";
import store from "../store/index"

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
   const [usuario, setUsuario] = useState({
      nome: "",
      avatar: "",
   });

   return (
      <>
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               <GlobalStyle />
               <Component
                  setUsuario={setUsuario}
                  usuario={usuario}
                  {...pageProps}
               />
            </ThemeProvider>
         </Provider>
      </>
   );
}
