import {SET_READER_NAME, SET_LASTNAME, SET_DOB, ADD_READER,
        SET_BOOK_TITLE, SET_ISBN, SET_AUTHOR, SET_COPIES, ADD_BOOK } from "../constants";

export const setReaderNameAction = name => ({
    type: SET_READER_NAME,
    readerName: name
});

export const setLastNameAction = lastName => ({
    type: SET_LASTNAME,
    lastName: lastName
});

export const setDOBAction = dob => ({
    type: SET_DOB,
    dob: dob
});

export const addReaderAction = () => ({
    type: ADD_READER
});

export const setBookTitle = title => ({
    type: SET_BOOK_TITLE,
    title: title
});

export const setIsbn = isbn => ({
    type: SET_ISBN,
    isbn: isbn
});

export const setAuthor = author => ({
    type: SET_AUTHOR,
    author: author
});

export const setCopies = copies => ({
    type: SET_COPIES,
    copies: copies
});

export const addBookAction = () => ({
    type: ADD_BOOK
});