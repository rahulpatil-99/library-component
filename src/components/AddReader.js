import React from 'react';

const AddReader = ({ handleReaderName, handleAddress, handleDOB, addReader, readerName, address, dob}) => {
    return (
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" onChange={(e) => handleReaderName(e.target.value)} value={readerName} required />
            <label for="address">Address:</label>
            <input type="text" id="address" onChange={(e) => handleAddress(e.target.value)} value={address} required />
            <label for="dob">Date-Of-Birth:</label>
            <input type="text" id="dob" onChange={(e)=> handleDOB(e.target.value)} value={dob} required />
            <button onClick={()=> addReader()}>Add-Reader</button>
        </div>
    );
}

export default AddReader;