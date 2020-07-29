import React, { Component} from 'react';
import {TextField, Fab} from '@material-ui/core/';
import AddIcon from "@material-ui/icons/Add"

export class Newdish extends Component{
    /* constructor(){
        super();
        this.addDish = this.addDish.bind(this);
    } */

    newDish = React.createRef();

   addDish = event =>{
    console.log('Agregar Plato');
    event.preventDefault();//Evitar que la pagina se recarge
    console.log(this.newDish.value);
   }


    render(){
        console.log(this)
        return(
            <div>
                <form autoComplete="off" onSubmit={this.addDish}>
                    
                <TextField 
                id="outlined-basic" 
                label="Nuevo Plato" 
                margin="normal"
                variant="outlined" 
                inputRef={e => (this.newDish = e)}
                />

                <Fab color="primary" size="medium" className="dish-form-icon" onClick={this.addDish}>
                    <AddIcon></AddIcon>
                </Fab>
</form>
               
            </div>
        );
    }
}
export default Newdish;