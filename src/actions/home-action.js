import { FILTER_BOOKS, SET_SEARCH_TEXT } from "../constants";

export const filterBookAction = () => ({ type: FILTER_BOOKS });

export const setSearchTextAction = text => ({
    type: SET_SEARCH_TEXT,
    searchText: text
});
