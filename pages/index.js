import React from "react"
import Grid from "@mui/material/Grid"
import Layout from "../layouts/layout"

export default function PaginaInicial() {
   return (
      <>
         <Layout>
            <Grid>
               barra navegação
            </Grid>
            <Grid>
               espaço cadrastro e logins
               <Grid>
                  espaço login
               </Grid>
               <Grid>
                  espaço cadrastro
               </Grid>
            </Grid>
         </Layout>
      </>
   )
}
