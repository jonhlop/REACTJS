import React, { Component, Fragment} from 'react';

export class Flag extends Component{
    render(){
        return(
            <div>
                <h1>Bandera</h1>
            </div>
        );
    }
}
export class Ingredientes extends Component{
    render(){
         return( /* React.createElement('h4', {}, "Ingrediente"); */ 
       
        <Fragment>
            <h1>Ingredientes</h1>
        </Fragment>
    );
    }
}
//clase que me genera un componente
class Dish extends Component{
    render(){
        return(
            <div>
                <h1>Tacos</h1>
                <Ingredientes></Ingredientes>
            </div>
        );
    }
}

export default Dish;