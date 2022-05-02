import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Layout from "../layouts/layout";
import TextField from "@mui/material/TextField";
import appConfig from "../config.json";
import Head from "next/head";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { firebase, auth } from "../../SapoForum/pages/firebase/firebase";
import { useRouter } from "next/router";
import { connect } from "react-redux";

const PaginaInicial = ({usuario, dispatch}) => {
   const [email, setEmail] = useState();
   const [senha, setSenha] = useState();
   const [nomeCadrastro, setNomeCadastro] = useState();
   const [emailCadastro, setEmailCadastro] = useState();
   const [senhaCadastro, setSenhaCadastro] = useState();
   const roteamento = useRouter();
   const handleLogin = async () => {
      firebase.auth().signInWithEmailAndPassword(email, senha);
   };
   const handleCadastro = async () => {
      firebase
         .auth()
         .createUserWithEmailAndPassword(emailCadastro, senhaCadastro);

      firebase.auth().signInWithEmailAndPassword(emailCadastro, senhaCadastro);

      const user = firebase.auth().currentUser;
      user.updateProfile({
         displayName: nomeCadrastro,
         photoURL:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F10%2F05%2F22%2F37%2Fblank-profile-picture-973460_640.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fpt%2Fvectors%2Ffoto-de-perfil-em-branco-973460%2F&tbnid=ScRGRFGMiXHWfM&vet=12ahUKEwjs67_FtrL3AhUTMLkGHaAmDn0QMygAegQIARBG..i&docid=CaqOTE768pk6hM&w=640&h=640&q=foto%20usuario%20vazia&client=opera-gx&ved=2ahUKEwjs67_FtrL3AhUTMLkGHaAmDn0QMygAegQIARBG",
      });
   };
   const handleGoogle = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      // eslint-disable-next-line no-unused-vars
      const result = await auth.signInWithPopup(provider);
   };
   const handleGit = async () => {
      const provider = new firebase.auth.GithubAuthProvider();
      // eslint-disable-next-line no-unused-vars
      const result = await auth.signInWithPopup(provider);
   };

   const atualizarUsuario = (nome, avatar, estado) => {
      return {
         type: "atualizarUsuario",
         nome,
         avatar,
         estado,
      };
   };

   useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
         if (user) {
            const { displayName, photoURL } = user;
            console.log(usuario);
            dispatch(atualizarUsuario(displayName, photoURL, true));
            console.log(usuario);
            roteamento.push("/topicos");
         }
      });
   });

   return (
      <>
         <Head>
            <title>SapoForum</title>
            <meta charSet="utf-8" />
         </Head>
         <Layout>
            <Stack
               position="static"
               justifyContent="flex-end"
               alignItems=""
               direction="column"
               sx={{
                  width: "70vw",
                  height: "60vh",
                  borderRadius: "5px",
                  boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
                  backgroundColor: appConfig.theme.colors.neutrals["500"],
               }}
            >
               <Stack direction="row" alignItems="center">
                  <Grid
                     container
                     direction="column"
                     justifyContent="center"
                     alignItems="center"
                  >
                     <h2>Login</h2>
                     <TextField
                        id="email"
                        label="Email"
                        type="email"
                        variant="filled"
                        margin="normal"
                        color="primary"
                        value={email}
                        onChange={(event) => {
                           const valor = event.target.value;
                           setEmail(valor);
                        }}
                     />
                     <TextField
                        id="Senha"
                        label="Senha"
                        type="password"
                        variant="filled"
                        margin="normal"
                        value={senha}
                        onChange={(event) => {
                           const valor = event.target.value;
                           setSenha(valor);
                        }}
                     />
                     <Button variant="outlined" onClick={handleLogin}>
                        Login
                     </Button>
                  </Grid>
                  <Grid
                     container
                     margin="2%"
                     direction="column"
                     justifyContent="center"
                     alignItems="center"
                  >
                     <h2>Cadastro</h2>
                     <TextField
                        required
                        id="nome-cadastro"
                        label="nome"
                        variant="filled"
                        margin="normal"
                        value={nomeCadrastro}
                        onChange={(event) => {
                           const valor = event.target.value;
                           setNomeCadastro(valor);
                        }}
                     />
                     <TextField
                        required
                        id="email-cadastro"
                        label="email"
                        variant="filled"
                        margin="normal"
                        value={emailCadastro}
                        onChange={(event) => {
                           const valor = event.target.value;
                           setEmailCadastro(valor);
                        }}
                     />
                     <TextField
                        required
                        id="senha-cadastro"
                        label="senha"
                        type="password"
                        variant="filled"
                        margin="normal"
                        value={senhaCadastro}
                        onChange={(event) => {
                           const valor = event.target.value;
                           setSenhaCadastro(valor);
                        }}
                     />
                     <Button variant="outlined" onClick={handleCadastro}>
                        Cadastro
                     </Button>
                  </Grid>
               </Stack>
               <BottomNavigation
                  sx={{
                     borderRadius: "5px",
                     boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
                     backgroundColor: appConfig.theme.colors.neutrals["600"],
                  }}
               >
                  <BottomNavigationAction
                     icon={<GoogleIcon />}
                     onClick={handleGoogle}
                  />
                  <BottomNavigationAction
                     icon={<GitHubIcon />}
                     onClick={handleGit}
                  />
               </BottomNavigation>
            </Stack>
         </Layout>
      </>
   );
};
export default connect((state) => ({ usuario: state }))(PaginaInicial);
