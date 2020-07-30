import React, { Component } from 'react';
import  Header  from "./components/header";
import Dish, {Flag} from "./components/dish"; //esto es para usar muchos componentes hijo en un mismo componente padre
import './styles/App.css';
import Newdish from './components/newdish';
import Button from '@material-ui/core/Button';



class App extends Component {
  dish = "tacos";
  dishes = ["Tacos","Jalapeños", "Paella"];

  showDishes = event =>{
    event.preventDefault();
    this.props.history.push("/Platos")
    /* creacion de boton de navegación */
  }

render(){
  return (
    <div className="App">
      <Header />
      <Newdish></Newdish>
      Yo como {this.dish} 
                <ul>
                    {
                        this.dishes.map((dish, index)=><li key={index}>{dish}</li>)
                    }
                </ul>
                <Button variant="contained" color="secondary" onClick={this.showDishes}>Cambiar de ruta</Button>
      <Dish name={this.dish} />
      <Flag></Flag>
    </div>
  );
}
  
}

export default App;
