/* eslint-disable react/prop-types */
import React from "react";
import Grid from "@mui/material/Grid";

export default function Layout({ children }) {
   return (
      <>
         <Grid sx={{}}>
            {children}
         </Grid>
      </>
   );
}
