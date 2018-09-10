import React, {Component} from 'react';

const books = ["Math","Science","English","history","Geaography","civic","Marathi","dummy1","dummy2"];
const filteredBooks = ["Math","Science","English","history","Geaography"];

class Home extends Component {
    constructor(){
        super();
        this.state={
            searchText:'',
            books:books
        };
        this.handleSearchText = this.handleSearchText.bind(this);
        this.filterBooks = this.filterBooks.bind(this);
    }
    handleSearchText(e){
        this.setState({ searchText: e.target.value });
    }
    filterBooks(e){
        this.state.searchText=="" ? this.setState({books:books}) : this.setState({books:filteredBooks});
    }
    getBooks(){
        return this.state.books.map(book => <li>{book}</li>);
    }
    render(){
        return (
            <div>
                <input type="text" onChange={this.handleSearchText} value={this.state.searchText}/>
                <button onClick={this.filterBooks}>Search</button>
                <ul>
                    {this.getBooks()}
                </ul>
            </div>
        )
    }
}

export default Home;