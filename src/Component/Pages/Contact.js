import {Component} from "react";

class Contact extends Component{
    state = {
        time : 0,
    }
    change = () =>{
        this.setState({time: this.state.time + 1})
    }
    render() {
        return(
            <div>
                <h1>Click Time</h1>
                <h4>Count : {this.state.time}</h4>
                <button onClick={this.change}>Click</button>
            </div>
        );
    }
}
export default Contact;