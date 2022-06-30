/* eslint-disable react/prop-types */
import React from "react";
import Grid from "@mui/material/Grid";
import appConfig from "../config.json";

export default function Layout({ children }) {
   return (
      <>
         <Grid  
            container        
            justifyContent="center"
            alignItems="center"
            sx={{
               backgroundColor: appConfig.theme.colors.primary["700"],
               backgroundImage:
               "url(https://i.pinimg.com/564x/5e/e8/ca/5ee8cae49e26467bc13e0b1e214c0c62.jpg)",
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundBlendMode: "multiply",
            }}>
            {children}
         </Grid>
      </>
   );
}
