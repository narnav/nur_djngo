import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Prod } from './features/counter/Prod';
import Cart from './features/counter/Cart';
import Login from './features/counter/Login';

function App() {
  return (
    <div className="App">
        <Counter />
        <Prod></Prod>
        <hr/>
        <Cart></Cart>
        <Login></Login>
    </div>
  );
}

export default App;
