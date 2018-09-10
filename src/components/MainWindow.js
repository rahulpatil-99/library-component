import React, {Component} from 'react';
import Home from './Home';
import Reader from './Reader';
import AdminForm from './AdminForm';
import Admin from './Admin'; 
import {Switch, Route } from "react-router-dom";
import '../css/MainWindow.css';

class MainWindow extends Component{
    render(){
        return (
            <div className="mainWindow">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profile-form" component={Reader} />
                <Route path="/admin-form" component={AdminForm} />
                <Route path="/admin" component={Admin} />
            </Switch>
            </div>
        );
    }
}

export default MainWindow;