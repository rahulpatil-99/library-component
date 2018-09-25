import React from 'react';

const AddReader = ({addReaderDispatch, addReaderData}) => {
    const {handleReaderName, handleLastName, handleDOB, addReader} = addReaderDispatch;
    const {readerName, lastName, dob, readerAddMsg} = addReaderData;
    return (
        <div>
            {readerAddMsg && <h1>{readerAddMsg}</h1>}
            <label for="name">Name:</label>
            <input type="text" id="name" onChange={(e) => handleReaderName(e.target.value)} value={readerName} required />
            <label for="lastName">LastName:</label>
            <input type="text" id="lastName" onChange={(e) => handleLastName(e.target.value)} value={lastName} required />
            <label for="dob">Date-Of-Birth:</label>
            <input type="text" id="dob" onChange={(e)=> handleDOB(e.target.value)} value={dob} required />
            <button onClick={()=> addReader(addReaderData)}>Add-Reader</button>
        </div>
    );
}

export default AddReader;