import React, {useState, useCallback, useRef} from 'react';
import './App.css';
import {Hello} from './Hello';
import {Square} from './Square';


function App() {
  const [count, setCount] = useState<number>(0)
  const list = [7,21,37]
  const increment = useCallback(
    (n) => {
      setCount(c => c + n)
    },
    [setCount],
  )
  return (
    <div className="App">
      <Hello increment = {increment} />
      <div>count: {count}</div>
      {list.map(n => {
        return (
          <Square n = {n} increment = {increment} />
        )
      })}
    </div>
  );
}

export default App;
