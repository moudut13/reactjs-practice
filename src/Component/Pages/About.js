import React, { useState} from "react";
function About(){
    const [count , setCount] = useState(0)
    return(
        <div>
            <h1>Click ME </h1>
            <h4>Count : {count}</h4>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    );
}
export default About;