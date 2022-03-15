import Input from "./input";
import Show from "./weatherLog"
import { useEffect, useState } from "react"
const axios = require('axios');
const Qeq = () => {
    const [input, setInput] = useState()
    const [data, setData] = useState([])
    const [click, setClick] = useState([])
    const inputVal = (e) => {
        setInput(e.target.value);
    }
    const btnClick = (e) => {
        setClick(input)
        setInput('');
    }
    useEffect(() => {
        const req = async() => {
            const res = await axios.get(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${click}.json?access_token=pk.eyJ1Ijoic2Fpa2hhbmJpbGVnIiwiYSI6ImNsMGFyaGs2NTAxM20za3A0cWFxMzd5YWMifQ.Gabbw102QC01jkqp0R1VmQ`
              );
              const arr = res.data.features;
              setData(arr);
        }
        req()
    }, [click])
    return(
        <>
            <h1>Weather</h1>
            <Input input={input} setInput={setInput} inputVal={inputVal} btnClick={btnClick}/>
            {data.map(({ place_name, center },i) => {
                return <Show center={center} click={click} key = {i} name={place_name}/>
            })}
        </>
    )
}
export {
    Qeq
}