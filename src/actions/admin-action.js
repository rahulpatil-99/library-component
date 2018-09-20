import { SET_READER_NAME, SET_ADDRESS, SET_DOB, ADD_READER } from "../constants";

export const setReaderNameAction = name => ({
    type: SET_READER_NAME,
    readerName: name
});

export const setAddressAction = address => ({
    type: SET_ADDRESS,
    address: address
});

export const setDOBAction = dob => ({
    type: SET_DOB,
    dob: dob
});

export const addReaderAction = () => ({
    type: ADD_READER
});