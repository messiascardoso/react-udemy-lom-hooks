import './App.css';
import { useEffect, useState } from 'react';

const eventFn = () => {
  console.log('h1 clickado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //Executa toda vez que o componente é atualizado
  // useEffect(() => {
  //   console.log('ComponentDidUpdate');
  // });

  //Executa somente 1x
  useEffect(() => {
    console.log('ComponentDidMount');
    document.querySelector('h1')?.addEventListener('click', eventFn);
    //ComponentWillUmount => limpa
    return () =>
      document.querySelector('h1')?.removeEventListener('click', eventFn);
  }, []);

  //Com dependencia - executa toda vez que a dependencia é alterada
  useEffect(() => {
    console.log('C1: ', counter, 'C2: ', counter2);
    //setCounter(counter + 1);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste 5</p>
      <h1>
        C1:{counter} C2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+(2)</button>
    </div>
  );
}

export default App;
