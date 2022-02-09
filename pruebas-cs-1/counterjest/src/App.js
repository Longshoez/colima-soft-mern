import { useState } from 'react';
import './App.css';

function App({value = 10}) {

  const [counter, setCounter] = useState(value);

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={() => setCounter(() => counter+1)}>+1</button>
        <h6 onClick={() => setCounter((value))}>{counter}</h6>
        <button type="button" onClick={() => setCounter(() => counter-1)}>-1</button>
      </header>
    </div>
  );
}

export default App;