import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <div className="startForm">
        <h2>Insira o usuário do Github</h2>
        <input className="userInput" type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
        <h3>e clique fora do formulário para pesquisar</h3>
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {{formularioEstaVisivel && (
      <Formulario />
    )}

    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>} */}
    </>
  )
}

export default App
