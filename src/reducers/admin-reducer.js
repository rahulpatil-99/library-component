import { SET_READER_NAME, SET_ADDRESS, SET_DOB, ADD_READER } from "../constants";

const initialState = { readerName: '', address: '', dob: '' };

export default (state=initialState,action) => {
    switch(action.type){
        case SET_READER_NAME: return Object.assign({},state,{readerName:action.readerName});
        case SET_ADDRESS: return Object.assign({},state,{address:action.address});
        case SET_DOB: return Object.assign({},state,{dob:action.dob});
        case ADD_READER: return initialState;
        default: return state;
    }
};