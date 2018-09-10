import React, {Component} from 'react';

class Reader extends Component {
    constructor(){
        super();
        this.state={
            readerName:''
        }
        this.handleReaderName = this.handleReaderName.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleReaderName(e){
        this.setState({readerName: e.target.value});
    }
    submit(e){
        this.setState({readerName:''});
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.handleReaderName} value={this.state.readerName}/>
                <button onClick={this.submit}>submit</button>
            </div>
        )
    }
}

export default Reader;