import React, { Component} from 'react';

class AddBook extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            isbn:'',
            author:'',
            copies:"1"
        }
        this.handleTitle = this.handleTitle.bind(this);
        this.handleIsbn = this.handleIsbn.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleCopies = this.handleCopies.bind(this);
        this.submit = this.submit.bind(this);
    }
    handleTitle(e){
        this.setState({title: e.target.value});
    }
    handleIsbn(e){
        this.setState({isbn: e.target.value});
    }
    handleAuthor(e){
        this.setState({author: e.target.value});
    }
    handleCopies(e){
        this.setState({copies: e.target.value});
    }
    submit(){
        this.setState({title:'',isbn:'',author:'',copies:"1"});
    }
    render(){
        return (
            <div>
                <label for="title">Title:</label>
                <input type="text" id="title" onChange={this.handleTitle} value={this.state.title} required />
                <label for="isbn">ISBN:</label>
                <input type="text" id="isbn" onChange={this.handleIsbn} value={this.state.isbn} required />
                <label for="author">Author:</label>
                <input type="text" id="author" onChange={this.handleAuthor} value={this.state.author} required />
                <label for="copies">No-of-Copies:</label>
                <input type="number" min="1" max="10" id="copies" onChange={this.handleCopies} value={this.state.copies} required />
                <button onClick={this.submit}>Add-Book</button>
            </div>
        )
    }
}

export default AddBook;