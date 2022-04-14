import {Component} from "react";
import "./FormValidation.css"

class FormValidation extends Component{

    constructor(props) {
        super(props);
        this.state ={
            name : '',//Name
            email : '',//Email
            pass : '',//Password
            nameError : '',//Name error
            emailError : '',//email error
            passError : '',//password error
        }
    }

    //Form Validation
    Validation (){
        if (!this.state.name > 0 && !this.state.email > 0 && !this.state.pass > 0){
            this.setState({ nameError : "Name ,Email ,Password are Required!"});
        }else if (!this.state.name > 0){
            this.setState({ nameError : "Name Required!"});
        }else if (!this.state.email > 0){
            this.setState({ emailError : "Email Required!"});
        }else if(!this.state.pass > 0){
            this.setState({ passError : "Password Required!"});
        }else {
            return true;
        }
    }

    //Form Submit
    FormSubmit = (e) =>{
        e.preventDefault();
        if (this.Validation()){
            alert('Form Submit Done')
        }

    }
    render() {
        return(
            <div className="card">
                <h1>Form Validation</h1>
                <form onSubmit={this.FormSubmit}>
                    <label>Name</label><br/>
                    <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}} name="name" placeholder="Enter Your Name" autoFocus={true}/><br/>
                    <strong>{this.state.nameError}</strong><br/>
                    <label>Email</label><br/>
                    <input type="email" onChange={(event)=>{this.setState({email:event.target.value})}} name="email" placeholder="Enter Your Email" autoFocus={true} /><br/>
                    <strong>{this.state.emailError}</strong><br/>
                    <label>Password</label><br/>
                    <input type="password" onChange={(event)=>{this.setState({pass:event.target.value})}} name="pass" placeholder="Enter Your Password" autoFocus={true} /><br/>
                    <strong>{this.state.passError}</strong><br/>
                    <button type="submit">Save</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        );
    }
}

export default FormValidation;