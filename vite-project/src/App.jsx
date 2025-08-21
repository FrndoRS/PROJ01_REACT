import './App.css'

import {Cabecalho, Conteudo, Rodape} from './components';

const App = () => {
  
  return (
    <>
      <Cabecalho nomeUsuario="Joana" />
      <Conteudo>
        <h1>Titulo</h1>
        <p>Texto Texto Texto</p>
      </Conteudo>
      <Rodape criador="Frndo"/>
    </>

  )
};

export {App};

