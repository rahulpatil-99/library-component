import {SET_READER_NAME, SET_LASTNAME, SET_DOB, ADD_READER, 
        SET_BOOK_TITLE, SET_ISBN, SET_AUTHOR, SET_COPIES, ADD_BOOK } from "../constants";
import {setFieldInState} from '../utils';

const initialState = { readerName: '', lastName: '', dob: '', title: '', isbn: '', author: '', copies: '1', readerAddMsg:'' };

export default (state=initialState,action) => {
    switch(action.type){
        case SET_READER_NAME: return setFieldInState(state,"readerName",action.readerName);
        case SET_LASTNAME: return setFieldInState(state,"lastName",action.lastName);
        case SET_DOB: return setFieldInState(state,"dob",action.dob);
        case ADD_READER: return Object.assign({},state,{readerName: '', lastName: '', dob: ''});
        case SET_BOOK_TITLE: return setFieldInState(state,"title",action.title);
        case SET_ISBN: return setFieldInState(state,"isbn",action.isbn);
        case SET_AUTHOR: return setFieldInState(state,"author",action.author);
        case SET_COPIES: return setFieldInState(state,"copies",action.copies);
        case ADD_BOOK: return Object.assign({},state,{title: '', isbn: '', author: '', copies: '1'});
        case "READER_ADDED": return setFieldInState(state,"readerAddMsg","Reader Added Successfully!");
        case "UNABLE_TO_ADD_READER": return setFieldInState(state,"readerAddMsg","Unable to add Reader!");
        default: return state;
    }
};