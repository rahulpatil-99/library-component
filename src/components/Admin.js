import React from 'react';
import {Link, Route} from 'react-router-dom';
import '../css/Admin.css';
import AddReader from './AddReader';
import AddBook from './AddBook';

const Admin = ({readerName, address, dob, handleReaderName, handleAddress, handleDOB, addReader}) => {
    const addReaderProps = {readerName, address, dob, handleReaderName, handleAddress, handleDOB, addReader};
    return (
        <div className="admin">
            <Link to="/admin/addReader" className="link">Add-Reader</Link>
            <Link to="/admin/addBook" className="link">Add-Book</Link>
            <Route path="/admin/addReader" render={()=> <AddReader {...addReaderProps} />} />
            <Route path="/admin/addBook" component={AddBook}/>
        </div>
    );
}

export default Admin;