import React, {Component} from "react";
class ClassComponents extends Component{
    constructor(props) {
        super(props);
        this.state = {
            food : [
                {name : 'mango' ,weight : '800gm'},
                {name : 'banana' ,weight : '8900gm'},
                {name : 'pineapple' ,weight : '670gm'},
                {name : 'watermelon' ,weight : '980gm'},
            ],
        };
    }
    clickHandler = () =>{
        // console.log('this button is click now')
        this.setState({
            food : [
                {name : 'Nokia' ,weight : '180gm'},
            ]
        });
    }
    render() {
        return(
            <div>
                <button onClick={this.clickHandler}>Click</button>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. {this.props.name}
                </p>
                <br/>
                <br/>
                <p>This food name is {this.state.food[0].name}, Weight {this.state.food[0].weight}.</p>
            </div>
        );
    }
}
export default ClassComponents;