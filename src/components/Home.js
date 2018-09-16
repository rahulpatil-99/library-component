import React, {Component} from 'react';

class Home extends Component {
    constructor(){
        super();
        this.state={
            searchText:''
        };
        this.handleSearchText = this.handleSearchText.bind(this);
    }
    handleSearchText(e){
        this.setState({ searchText: e.target.value });
    }
    getBooks(){
        const { books } = this.props;
        if (books) return books.map(book => <li>{book}</li>);
    }
    render(){
        const { filterBooks } = this.props;
        return (
            <div>
                <input type="text" onChange={this.handleSearchText} value={this.state.searchText}/>
                <button onClick={() => filterBooks(this.state.searchText)}>Search</button>
                <ul>
                    {this.getBooks()}
                </ul>
            </div>
        )
    }
}

export default Home;