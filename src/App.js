import './App.css';
import P from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';

const Button = ({ incrementButton }) => {
  console.log('Filho renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  //Todo a vez que o componente e atualizado esta funcão é criada novamente.
  // Roda tudo que esta dentro do componente

  // Usar o useCallback somente se a function for pesada.

  const incrementCounter = useCallback((num) => {
    //console.log('incrementCounter');
    setCounter((c) => c + num);
  }, []);

  console.log('Pai renderizou');

  //Memoriza o componente para ser renderizado somente uma vez
  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter}>+</Button>;
  }, [incrementCounter]);

  return (
    <div className="App">
      <p>Teste 5</p>
      <h1>C1:{counter}</h1>
      {btn}
      {/* {useMemo(() => {
        return <Button incrementButton={incrementCounter}>+</Button>;
      }, [incrementCounter])} */}
    </div>
  );
}

export default App;
