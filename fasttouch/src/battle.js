import React, {useState} from "react"
const Battle = () => {
    const [count, setCount] = useState(50)
    const divClick = () => {
        setCount(count + 1);
    }
    return(
        <span>{ count }</span>
    )
}
export{
    Battle
}