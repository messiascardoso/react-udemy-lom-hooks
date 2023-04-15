import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  Children,
  useContext,
} from 'react';
import './App.css';
//import P from 'prop-types';

const globalState = {
  title: 'Título do contexto',
  body: 'Conteudo do body',
  counter: 0,
};

const GlobalContext = React.createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <div className="App" style={{ backgroundColor: 'red' }}>
      <H1 />
      <P />
    </div>
  );
};
// eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title },
  } = theContext;
  return <h1>{title}</h1>;
};
// eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext);
  const { contextState, setContextState } = theContext;
  console.log(theContext);
  return (
    // Para atualizar um state de um objeto precisa fazer o spread e depois
    // passar a chave a ser alterada como segundo parametro ou passar uma function conforme exemplo abaixo.
    <>
      {/* Update state with spread */}
      <button
        onClick={() =>
          setContextState({
            ...contextState,
            counter: contextState.counter + 1,
          })
        }
      >
        {contextState.counter}
      </button>
      {/* Update state with function */}
      <button
        onClick={() =>
          setContextState((prevState) => ({
            ...prevState,
            counter: prevState.counter + 1,
          }))
        }
      >
        {contextState.counter}
      </button>
    </>
  );
};

function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
