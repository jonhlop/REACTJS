import React, { Component} from 'react';
import Button from '@material-ui/core/Button';


export class Paises extends Component{
    getCountries(){
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error=> console.log(error));
    }
    render(){
        return(
            <div>
                <h1>Paises</h1>
                <Button
                    variant="contained"
                    color="Primary"
                    onClick={this.getCountries}>
                        Cargar Lista de paises
                </Button>
            </div>
        )
    }
}

export default Paises;