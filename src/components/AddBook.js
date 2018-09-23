import React from 'react';

const AddBook = ({addBookData,addBookDispatch}) => {
    const {title, isbn, author, copies} = addBookData;
    const {handleTitle, handleIsbn, handleAuthor, handleCopies, addBook} = addBookDispatch;
    return (
        <div>
            <label for="title">Title:</label>
            <input type="text" id="title" onChange={(e) => handleTitle(e.target.value)} value={title} />
            <label for="isbn">ISBN:</label>
            <input type="text" id="isbn" onChange={(e) => handleIsbn(e.target.value)} value={isbn} />
            <label for="author">Author:</label>
            <input type="text" id="author" onChange={(e) => handleAuthor(e.target.value)} value={author} />
            <label for="copies">No-of-Copies:</label>
            <input type="number" min="1" max="10" id="copies" onChange={(e) => handleCopies(e.target.value)} value={copies} />
            <button onClick={()=> addBook()}>Add-Book</button>
        </div>
    );
};

export default AddBook;