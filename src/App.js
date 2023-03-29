import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo  ${reverseClass}`} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>Contador: {counter}</h1>

        <button type="button" onClick={handleClick}>
          Reverse {reverseClass}
        </button>
        <button type="button" onClick={increment}>
          Increment
        </button>
      </header>
    </div>
  );
}

export default App;
