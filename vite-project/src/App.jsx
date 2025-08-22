import {Cabecalho, Conteudo, Rodape} from './components';
import { Inicial } from './Pages';

import './App.css'

const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Joana" />
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Rodape criador="Frndo"/>
    </>
  )
};

export {App};
