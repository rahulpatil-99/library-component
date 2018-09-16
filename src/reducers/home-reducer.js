const books = ["Math","Science","English","history","Geaography","civic","Marathi","dummy1","dummy2"];
const filteredBooks = ["Math","Science","English","history","Geaography"];
const initialState={ books:books };

export default (state = initialState, action) => {
    switch(action.type){
        case 'FILTER_BOOKS': return action.searchText ==="" ? Object.assign({},state,{books:books}) : Object.assign({},state,{books:filteredBooks})
        default : return state
    }
}