import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import StoreFront from './components/StoreFront/StoreFront';

export default (
    <HashRouter>
        <div>
            <Route exact path = '/' component = {Home} />
            <Route path = '/shoppingcart' component = {ShoppingCart} />
            <Route path = '/storefront' component = {StoreFront}/>
        </div>
    </HashRouter>
)