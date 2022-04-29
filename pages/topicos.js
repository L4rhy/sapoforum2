import Layout from "../layouts/layout"
import React from "react"
import Head from "next/head"
import { Stack } from "@mui/material"
import { Button } from "@mui/material"
import { useRouter } from "next/router"
import appConfig from "../config.json"
export default function Topicos(props){
   const roteamento = useRouter();
   console.log(props.usuario)
   return(
      <>
         <Head>
            <title>SapoForum - Topicos</title>
            <meta charSet="utf-8" />
         </Head>
         <Layout>
            <Stack
               position="static"
               justifyContent="space-between"
               alignItems=""
               direction="column"
               sx={{
                  width: "70vw",
                  height: "50vh",
                  borderRadius: "5px",
                  boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
                  backgroundColor: appConfig.theme.colors.neutrals["500"],
               }}
            >
               <Button 
                  variant="outlined" 
                  color="default"
                  onClick={
                     roteamento.push("/saposAfrica")
                  }
               >
                 Sapos da Africa
               </Button>
               <Button 
                  variant="outlined" 
                  color="default"
                  onClick={
                     roteamento.push("/saposAmericaNorte")
                  }
               >
                 Sapos da America do Norte
               </Button>
               <Button 
                  variant="outlined" 
                  color="default"
                  onClick={
                     roteamento.push("/saposAmericaSul")
                  }
               >
                 Sapos da America do Sul
               </Button>
               <Button 
                  variant="outlined" 
                  color="default"
                  onClick={
                     roteamento.push("/saposAsia")
                  }
               >
                 Sapos da Asia
               </Button>
               <Button 
                  variant="outlined" 
                  color="default"
                  onClick={
                     roteamento.push("/saposEuropa")
                  }
               >
                 Sapos da Europa
               </Button>
               <Button 
                  variant="outlined" 
                  color="default"
                  onClick={
                     roteamento.push("/saposExoticos")
                  }
               >
                 Sapos Exoticos
               </Button>
               <Button 
                  variant="outlined" 
                  color="default"
                  onClick={
                     roteamento.push("/saposOcania")
                  }
               >
                 Sapos da Oceania
               </Button>
               <Button 
                  variant="outlined" 
                  color="default"
                  onClick={
                     roteamento.push("/saposSuper")
                  }
               >
                 Sapos com Super Poderes
               </Button>
            </Stack>
         </Layout>
      </>
   )
}