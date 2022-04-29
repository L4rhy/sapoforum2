import React , { Children, createContext, useContext, useState} from "react";

export const authContext = createContext()

export function authProvider({children}) {
   const [usuario, setUsuario] = useState({
      nome: "",
      avatar: ""
   });
   console.log(children)
   return (
      <authContext.Provider value={{ usuario, setUsuario }}>
         {children}
      </authContext.Provider>
   );
}

export function useUsuario(){
   const context = useContext(authContext)
   return context
} 