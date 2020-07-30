import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import App from './../App';
import Dishes from './dishes';
import Dish from './dish';
import Paises from './paises';
import NotFound from './notFound';
import Tienda from "./tienda";


const Router = () =>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/Platos" component={Dishes}></Route>
        <Route path="/Platos/:name" component={Dish}></Route>
        <Route path="/Paises" component={Paises}></Route>
        <Route path="/Tienda" component={Tienda}></Route>
       

    </Switch>
    </BrowserRouter>
);

export default Router;
    