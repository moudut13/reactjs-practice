import {Component} from "react";
import "./SingleInput.css";

class SetState extends Component{
    constructor(props) {
        super(props);
        this.state ={
            name : '',
            email : '',
            pass : '',
        }
    }

    formSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div className="card">
                <h1>Multi input form</h1>
                <p>Name        : {this.state.name}</p>
                <p>Email       : {this.state.email}</p>
                <p>Cell        : {this.state.pass}</p>
                <form onSubmit={this.formSubmit} >
                    <label>Name</label><br/>
                    <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}} name="name" placeholder="Enter Your Name" autoFocus={true}/><br/>
                    <label>Email</label><br/>
                    <input type="email" onChange={(event)=>{this.setState({email:event.target.value})}} name="email" placeholder="Enter Your Email" autoFocus={true} /><br/>
                    <label>Password</label><br/>
                    <input type="password" onChange={(event)=>{this.setState({pass:event.target.value})}} name="pass" placeholder="Enter Your Password" autoFocus={true} /><br/>
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

export default SetState;