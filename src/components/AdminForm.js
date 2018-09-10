import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class AdminForm extends Component {
    constructor(){
        super();
        this.state={
            password:'',
            isValid:false
        }
        this.handleAdminPassword = this.handleAdminPassword.bind(this);
        this.submit = this.submit.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    handleAdminPassword(e){
        this.setState({password: e.target.value});
    }
    submit(e){
        this.setState({password:'',isValid:true});
    }
    redirect(){
        if(this.state.isValid) return <Redirect to="/admin" />;
    }
    render(){
        return (
            <div>
                {this.redirect()}
                <input type="text" onChange={this.handleAdminPassword} value={this.state.password}/>
                <button onClick={this.submit}>submit</button>
            </div>
        )
    }
}

export default AdminForm;