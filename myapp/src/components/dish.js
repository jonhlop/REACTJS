import React, { Component, Fragment} from 'react';
import Button from '@material-ui/core/Button';

export class Flag extends Component{
   
    render(){
        return(
            <div>
                <h2>Bandera</h2>
               
            </div>
        );
    }
}
export class Ingredientes extends Component{
    render(){
         return( /* React.createElement('h4', {}, "Ingrediente"); */ 
       
        <Fragment>
            <h4>Ingredientes</h4>
             <Button variant="contained" color="primary">Elegir</Button>
        </Fragment>
       
    );
    }
}
//clase que me genera un componente
class Dish extends Component{
    ingredientes = ["Tortilla", "Carne", "Cebolla"];
    countIngredients(){
        return this.ingredientes.length;
    }
    render(){
        return(
            <div className="dish">
                <h1>{this.props.name}</h1>
        <h3>Total de ingrediente: {this.countIngredients()}</h3>
                <h3>{this.ingredientes.map((ingrediente, index)=>(
                    <li key={index}>{ingrediente}</li>
                ))}</h3>
                <Ingredientes></Ingredientes>
            </div>
        );
    }
}

export default Dish;