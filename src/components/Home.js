import React, {Component} from 'react';

class Home extends Component {
    getBooks(){
        const { books } = this.props;
        if (books) return books.map(book => <li>{book}</li>);
    }
    render(){
        const { filterBooks, setSearchText, searchText } = this.props;
        return (
            <div>
                <input type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText}/>
                <button onClick={() => filterBooks()}>Search</button>
                <ul>
                    {this.getBooks()}
                </ul>
            </div>
        )
    }
}

export default Home;