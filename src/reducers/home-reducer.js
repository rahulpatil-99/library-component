import { FILTER_BOOKS, SET_SEARCH_TEXT } from "../constants";

const books = ["Math","Science","English","history","Geaography","civic","Marathi","dummy1","dummy2"];
const filteredBooks = ["Math","Science","English","history","Geaography"];
const initialState={ books:books, searchText:'' };

export default (state = initialState, action) => {
    switch(action.type){
        case FILTER_BOOKS: return state.searchText ==='' ? 
            Object.assign({},state,{books:books}) : Object.assign({},state,{books:filteredBooks});
        case SET_SEARCH_TEXT: return Object.assign({},state,{searchText:action.searchText});
        default : return state;
    }
}