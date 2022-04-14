import {Component} from "react";
import "./SingleInput.css"

class SingleInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name        : 'Md Shuvo Ahmad',
            email       : 'admin@gmail.com',
            cell        : '01764570150',
            address     : 'Ullapara',
            username    : 'admin13',
        }
    }

    onChangeDataName = (e) =>{
        let name = e.target.name['name'];
        let val = e.target.value;
        /*this.setState({name : name})*/
        this.setState({name:val})
    }
    onChangeDataEmail = (e) =>{
        let email = e.target.name['email'];
        let val = e.target.value;
        this.setState({email:val})
    }
    onChangeDataCell = (e) =>{
        let cell = e.target.name;
        let val = e.target.value;
        this.setState({cell:val})
    }
    onChangeDataAddress = (e) =>{
        let address = e.target.name;
        let val = e.target.value;
        this.setState({address:val})
    }
    onChangeDataUsername = (e) =>{
        let username = e.target.name;
        let val = e.target.value;
        this.setState({username:val})
    }

    formSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return(
            <div className="card">
                <h1>Single input form</h1>
                <h1>Name        : {this.state.name}</h1>
                <h1>Email       : {this.state.email}</h1>
                <h1>Cell        : {this.state.cell}</h1>
                <h1>Address     : {this.state.address}</h1>
                <h1>Username    : {this.state.username}</h1>
                <form onSubmit={this.formSubmit}>
                    <label>Name</label><br/>
                    <input type="text" name="name" autoFocus={true} value={this.state.name}  onChange={this.onChangeDataName}/><br/>
                    <label>Email</label><br/>
                    <input type="text" name="email" autoFocus={true} value={this.state.email}  onChange={this.onChangeDataEmail}/><br/>
                    <label>Cell</label><br/>
                    <input type="text" name="cell" autoFocus={true} value={this.state.cell}  onChange={this.onChangeDataCell}/><br/>
                    <label>Address</label><br/>
                    <input type="text" name="address" autoFocus={true} value={this.state.address}  onChange={this.onChangeDataAddress}/><br/>
                    <label>Username</label><br/>
                    <input type="text" name="username" autoFocus={true} value={this.state.username}  onChange={this.onChangeDataUsername}/><br/>
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}





export default SingleInput;