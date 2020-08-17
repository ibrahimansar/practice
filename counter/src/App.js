import React, {useState} from 'react';
import './App.css';

function App() {
  const [Count, setCount] = useState(0)
  return (
    <div className="App">
      <p>{Count}</p>
      <button onClick = {()=> setCount(Count + 1)} > Add 1</button>
      <button onClick = {()=> setCount(0)}>reset</button>
      <h1>Mahmood Naina</h1>
    </div>
  );
}

export default App;
