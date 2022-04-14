import React ,{ useState } from "react";
function FunctionComponent(){
    const [foodState , setFoodState] =useState({
        food : [
            {name : 'mango' ,weight : '800gm'},
            {name : 'banana' ,weight : '8900gm'},
            {name : 'pineapple' ,weight : '670gm'},
            {name : 'watermelon' ,weight : '980gm'},
        ],
    });
    const clickHandler = () =>{
        // console.log('this button is click now')
        setFoodState({
            food : [
                {name : 'Nokia' ,weight : '180gm'},
            ]
        });
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
            <br/>
            <br/>
            <p>This food name is {foodState.food[0].name}, Weight {foodState.food[0].weight}.</p>
            this
        </div>
    );
}
export default FunctionComponent;