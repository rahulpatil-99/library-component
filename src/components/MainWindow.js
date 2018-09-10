import React, {Component} from 'react';
import Home from './Home';
import Reader from './Reader';
import Admin from './Admin';
import {Switch, Route } from "react-router-dom";

class MainWindow extends Component{
    render(){
        return (
            <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Reader} />
                <Route path="/admin" component={Admin} />
            </Switch>
            </div>
        );
    }
}

export default MainWindow;