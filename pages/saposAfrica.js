import React, {useEffect, useState} from "react";
import Layout from "../layouts/";
import Head from "next/head";
import Stack from "@mui/material/Stack"
import Image, { Button, TextField } from "@mui/material"
import useRouter from "next/router"
import { firebase } from "../service/firebase";
import appConfig from "../config.json"
import connect from "react-redux"

const PaginaSaposAfrica = (usuario) => {
   const [titulo, setTitulo]=useState()
   const [texto, setTexto]=useState()
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
               <Stack>
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
               </Stack>
               <Stack>
                  <TextField
                     id="titulo"
                     label="Insira o Titulo da postagem"
                     variant="filled"
                     margin="normal"
                     value={titulo}
                     onChange={(event) => {
                        const valor = event.target.value;
                        setTitulo(valor);
                     }}
                  />
                  <TextField
                     id="texto"
                     label="Insira o Texto da postagem"
                     variant="filled"
                     margin="normal"
                     value={texto}
                     onChange={(event) => {
                        const valor = event.target.value;
                        setTexto(valor);
                     }}
                  />
               </Stack>
            </Stack>
         </Layout>
      </>
   )
}
export default connect((state)=>({usuario:state}))(PaginaSaposAfrica)