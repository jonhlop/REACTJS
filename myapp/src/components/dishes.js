import React, { Component} from 'react';
import {
    Button, 
    List, ListItem, ListSubheader, ListitemText, ListIntemIcon}from '@material-ui/core/';
import data from "../assets/data/dishes.json";


export class Dishes extends Component{
    goBack = event =>{
        event.preventDefault();
        this.props.history.push("/Tienda")
        /* creacion de boton de navegación */
      }
    render(){
        return(
            <div>
                <h1>Platos</h1>
                <Button variant="contained" color="secondary" onClick={this.goBack}>Cambiar de ruta</Button>

                {/* data.dishes.map(dish =>(
                    <div>
                        <div>{dish.name}</div>
                        <div>{dish.ingredients}</div>
                    </div>

                )) */}

                
            </div>
        )
    }
}

export default Dishes;