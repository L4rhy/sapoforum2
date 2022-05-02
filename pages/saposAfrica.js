import React, {useEffect} from "react";
import Layout from "../layouts/layout";
import Head from "next/head";
import Stack from "@mui/material/Stack"
import  Grid from "@mui/material/Grid";
import Image, { Button } from "@mui/material"
import useRouter from "next/router"
import { firebase } from "../../SapoForum/pages/firebase/firebase";
import appConfig from "../config.json"
import connect from "react-redux"

const PaginaSaposAfrica = (usuario) => {
   
   const roteamento = useRouter()
   
   const handleLogout = ()=>{
      firebase.auth().signOut()
      roteamento.push("/")
   }
   useEffect(()=>{
      if(usuario.estado==false){
         handleLogout
      }
   })
   return(
      <>
         <Head>
            <title>SapoForum - Sapos Africa</title>
            <meta charSet="utf-8" />
         </Head>
         <Layout>
            <Stack
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
               <Grid>
                  <Image
                     width="16px"
                     height="16px"
                     src={usuario.avatar}
                  >

                  </Image>
                  <h3>
                     {usuario.nome}
                  </h3>
                  <Button
                     variant="outlined"
                     onClick={handleLogout}
                  >
                     Logout                     
                  </Button>
               </Grid>
            </Stack>
         </Layout>
      </>
   )
}
export default connect((state)=>({usuario:state}))(PaginaSaposAfrica)