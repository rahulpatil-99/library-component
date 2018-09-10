import React, { Component } from 'react';
import '../css/LeftNav.css';
import {Link} from 'react-router-dom';

class LeftNav extends Component {
    render(){
     return ( 
            <div className="leftNav">
                <Link to="/"><p>Home</p></Link>
                <Link to="/profile-form"><p>Profile</p></Link>
                <Link to="/admin-form"><p>Admin</p></Link>
            </div>
        )
    }
}

export default LeftNav;