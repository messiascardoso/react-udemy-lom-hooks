import { useEffect, useState, useRef } from 'react';
import './App.css';

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();
  useEffect(() => {
    console.log('savedCb.current: ', savedCb.current);
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      cb();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
};

// App.jsx
function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [increment, setIncrement] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button onClick={() => setDelay((d) => d + increment)}>
        +{increment}
      </button>
      <button onClick={() => setDelay((d) => d - increment)}>
        -{increment}
      </button>
      <input
        type="number"
        value={increment}
        onChange={(e) => setIncrement(e.targer.value)}
      ></input>
    </div>
  );
}

export default App;
