import React, { Component } from 'react';
import '../css/LeftNav.css'

class LeftNav extends Component {
    render(){
     return ( 
            <div className="leftNav">
                <p>Home</p>
                <p>Profile</p>
                <p>Admin</p>
            </div>
        )
    }
}

export default LeftNav;