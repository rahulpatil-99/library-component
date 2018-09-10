import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import '../css/Admin.css';
import AddReader from './AddReader';
import AddBook from './AddBook';

class Admin extends Component{
    render(){
        return(
            <div className="admin">
                <Link to="/admin/addReader" className="link">Add-Reader</Link>
                <Link to="/admin/addBook" className="link">Add-Book</Link>
                <Route path="/admin/addReader" component={AddReader}/>
                <Route path="/admin/addBook" component={AddBook}/>
            </div>
        );
    }
}

export default Admin;