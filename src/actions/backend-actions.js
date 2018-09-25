import axios from 'axios';

const apiUrl = "http://localhost:3000";

export const createReader = (dispatch,userInput) => {
    const firstName= userInput.readerName;
    const lastName = userInput.lastName;
    const dob = userInput.dob;
    const body = {"firstName": firstName,"lastName": lastName,"dob": dob};
    return axios({
        baseURL: apiUrl,
        method: 'post',
        url: `/create`,
        data: body,
    }).then(response => {
        if(response.status === 200) {
            return dispatch({type:"READER_ADDED"})
        }
    }).catch((error) => {
        return dispatch({type:"UNABLE_TO_ADD_READER"})
    })
};