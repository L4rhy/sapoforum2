import Layout from "../layout/"
import React, { useEffect } from "react";
import Head from "next/head";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import appConfig from "../config.json";
import { Image } from "@mui/icons-material";
import { connect } from "react-redux";
import { signOut } from "firebase/auth"
import { app } from "../service/firebase"
const Topicos = (usuario) => {
   const roteamento = useRouter();
   
   const handleSaposAfrica = ()=>{
      roteamento.push("/saposAfrica")
   }
   const handleSaposAmericaNorte = ()=>{
      roteamento.push("/SaposAmericaNorte")
   }
   const handleSaposAmericaSul = ()=>{
      roteamento.push("/SaposAmericaSul")
   }
   const handleSaposAsia = ()=>{
      roteamento.push("/saposAsia")
   }
   const handleSaposEuropa = ()=>{
      roteamento.push("/saposEuropa")
   }
   const handleSaposExoticos = ()=>{
      roteamento.push("/saposExoticos")
   }
   const handleSaposOceania = ()=>{
      roteamento.push("/saposOceania")
   }
   const handleSaposSuper = ()=>{
      roteamento.push("/saposSuper")
   }
   const handleLogout = ()=>{
      signOut()
      roteamento.push("/")
   }
   useEffect(()=>{
      if(usuario.estado==false){
         handleLogout
      }
   })
   return (
      <>
         <Head>
            <title>SapoForum - Topicos</title>
            <meta charSet="utf-8" />
         </Head>
         <Layout>
            
            <Stack
               position="static"
               justifyContent="space-around"
               alignItems=""
               direction="column"
               sx={{
                  width: "80vw",
                  height: "80vh",
                  borderRadius: "5px",
                  boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
                  backgroundColor: appConfig.theme.colors.neutrals["500"],
               }}
            >
               <Stack>
                  <Image
                     width="16px"
                     height="16px"
                     src={usuario.avatar}
                  />
                  <h3>
                     {usuario.nome}
                  </h3>
                  <Button
                     variant="outlined"
                     onClick={handleLogout}
                  >
                     Logout
                  </Button>
               </Stack>
               <Button 
                  variant="contained"
                  color="secondary" 
                  onClick={handleSaposAfrica}
               >
                  Sapos da Africa
               </Button>
               <Button 
                  variant="contained"
                  color="secondary" 
                  onClick={handleSaposAmericaNorte}
               >
                  Sapos da America do Norte
               </Button>
               <Button 
                  variant="contained"
                  color="secondary" 
                  onClick={handleSaposAmericaSul}
               >
                  Sapos da America do Sul
               </Button>
               <Button 
                  variant="contained"
                  color="secondary" 
                  onClick={handleSaposAsia}
               >
                  Sapos da Asia
               </Button>
               <Button 
                  variant="contained"
                  color="secondary" 
                  onClick={handleSaposEuropa}
               >
                  Sapos da Europa
               </Button>
               <Button 
                  variant="contained"
                  color="secondary" 
                  onClick={handleSaposExoticos}
               >
                  Sapos Exoticos
               </Button>
               <Button 
                  variant="contained"
                  color="secondary" 
                  onClick={handleSaposOceania}
               >
                  Sapos da oceania
               </Button>
               <Button 
                  variant="contained"
                  color="secondary" 
                  onClick={handleSaposSuper}
               >
                  Sapos com Super Poderes
               </Button>
            </Stack>
         </Layout>
      </>
   );
}
export default connect((state)=>({usuario:state}))(Topicos);