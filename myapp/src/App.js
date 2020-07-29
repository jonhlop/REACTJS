import React from 'react';
import  Header  from "./components/header";
import Dish, { Flag} from "./components/dish"; //esto es para usar muchos componentes hijo en un mismo componente padre
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Dish/>
      <Flag></Flag>
    </div>
  );
}

export default App;
