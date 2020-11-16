import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import ShopPage from "./components/ShopPage"

const Routes = () => {


    return (
        <BrowserRouter>

            <Switch>
                
                <Route path="/" exact> 
                <HomePage/> 
                </Route>

                <Route path="/cart" exact> 
                <ShopPage/> 
                </Route>

            </Switch>

        </BrowserRouter>
    );
};

export default Routes;