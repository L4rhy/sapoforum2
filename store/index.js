import { createStore } from "redux";
const usuarioInicial = {
   nome: "",
   avatar: "",
   estado: false,
};

function reducer(state = usuarioInicial, action) {
   if (action.type == "atualizarUsuario") {
      return {
         ...state,
         nome: action.nome,
         avatar: action.avatar,
         estado: action.estado,
      };
   }
   return state
}
const store = createStore(reducer);
export default store;
