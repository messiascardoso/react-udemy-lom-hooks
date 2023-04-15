import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  Children,
  useContext,
  useReducer,
} from 'react';
import './App.css';
//import P from 'prop-types';

const globalState = {
  title: 'O titulo',
  body: 'Conteudo body',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda');
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join() };
    }
  }
  console.log('NENHUMA ACAO ENCONTRADA');
  return { ...state };
};

function App() {
  //dispatch => disparar acoes que chama a function reducer
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;
  return (
    <div>
      <pre style={{ backgroundColor: '#dedede' }}>
        {JSON.stringify(state, null, 4)}
      </pre>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-Br'),
          })
        }
      >
        Muda text
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>invert</button>
      <button onClick={() => dispatch({ type: '' })}>Sem Action</button>
    </div>
  );
}

export default App;
