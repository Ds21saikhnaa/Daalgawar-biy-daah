import { useEffect, useState } from 'react'
function Input({ input, setInput ,inputVal, btnClick, }) {

    return (
        <>
            <input value={input} onChange={inputVal}></input>
            <button onClick={btnClick}>Search</button>
        </>
    );
}

export default Input;