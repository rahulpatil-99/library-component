import React from 'react';
import {Link, Route} from 'react-router-dom';
import '../css/Admin.css';
import AddReader from './AddReader';
import AddBook from './AddBook';

const Admin = ({addReaderData, addReaderDispatch,  addBookData, addBookDispatch}) => {
    const addReaderProps = {addReaderData, addReaderDispatch};
    const addBookProps = {addBookData, addBookDispatch};
    return (
        <div className="admin">
            <Link to="/admin/addReader" className="link">Add-Reader</Link>
            <Link to="/admin/addBook" className="link">Add-Book</Link>
            <Route path="/admin/addReader" render={()=> <AddReader {...addReaderProps} />} />
            <Route path="/admin/addBook" render={() => <AddBook {...addBookProps} />}/>
        </div>
    );
};

export default Admin;