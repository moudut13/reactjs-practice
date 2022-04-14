import {Component} from "react";
import "./SingleInput.css"

class MultInput extends Component{
    constructor(props) {
        super(props);
        this.state ={
            name : '',
            email : '',
            cell : '',
            address : '',
        }
    }
    onChangeData = (e) =>{
        let name = e.target.name;
        let val = e.target.value;
        this.setState({[name] : val });
        console.log(name);
        //console.log(val);
    }
    render() {
        return(
            <div className="card">
                <h1>Multi input form</h1>

                <form >
                    <label>Name</label><br/>
                    <input type="text" name="name" autoFocus={true} onChange={this.onChangeData} /><br/>
                    <label>Email</label><br/>
                    <input type="text" name="email" autoFocus={true} onChange={this.onChangeData} /><br/>
                    <label>Cell</label><br/>
                    <input type="text" name="cell" autoFocus={true} onChange={this.onChangeData} /><br/>
                    <label>Address</label><br/>
                    <input type="text" name="address" autoFocus={true} onChange={this.onChangeData} /><br/>
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}
export default MultInput;