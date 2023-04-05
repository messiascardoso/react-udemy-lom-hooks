import './App.css';
import P from 'prop-types';
import React, { useCallback, useState } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

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

  return (
    <div className="App">
      <p>Teste 5</p>
      <h1>C1:{counter}</h1>
      <Button incrementButton={incrementCounter}>+</Button>
    </div>
  );
}

export default App;
