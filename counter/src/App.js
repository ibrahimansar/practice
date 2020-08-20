import React from 'react';
import Counter from './Counter/Counter';
import classes from './App.module.css';

const App = () => {
  return(
    <div className = {classes.App}>
    <Counter />
    </div>
  )
}

export default App;
