import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import ShopPage from "./components/ShopPage"

const Routes = () => {

    var productCart = [];
    var products = [];

    return (
        <BrowserRouter>

            <Switch>
                
                <Route path="/" exact> 
                <HomePage 
                totalCart={productCart.length} 
                /> 
                </Route>

                <Route path="/cart" exact> 
                <ShopPage 
                productCart={productCart}
                totalCart={productCart.length}
                /> 
                </Route>

            </Switch>

        </BrowserRouter>
    );
};

export default Routes;