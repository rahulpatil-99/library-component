import React, { Component} from 'react';

class AddReader extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            address:'',
            date:'mm / dd / yyyy'
        }
        this.handleReaderName = this.handleReaderName.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleDOB = this.handleDOB.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleReaderName(e){
        this.setState({name: e.target.value});
    }

    handleAddress(e){
        this.setState({address: e.target.value});
    }
    
    handleDOB(e){
        this.setState({date: e.target.value});
    }

    submit(){
        this.setState({name:'',address:'',date:'mm / dd / yyyy'});
    }
    render(){
        return (
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" onChange={this.handleReaderName} value={this.state.name} required />
                <label for="address">Address:</label>
                <input type="text" id="address" onChange={this.handleAddress} value={this.state.address} required />
                <label for="dob">Date-Of-Birth:</label>
                <input type="date" id="dob" onChange={this.handleDOB} value={this.state.date} required />
                <button onClick={this.submit}>Add-Reader</button>
            </div>
        )
    }
}

export default AddReader;