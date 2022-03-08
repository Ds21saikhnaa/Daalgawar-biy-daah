import React, {useState} from "react"
import './App.css';
const Click = () => {
    const [count, setCount] = useState(0)
    console.log("count");
    return( 
    <div className="Column">
        <div className="Column">{count}</div>
        <button onClick={() => {setCount(count+1)}}>Click here!</button>
    </div>
    );
}
export {
    Click
}