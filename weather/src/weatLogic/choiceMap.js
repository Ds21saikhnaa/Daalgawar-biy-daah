import { useEffect, useState } from 'react'
import axios from 'axios';
import Country from './ren'
function Choice({name, center, index}){
    const [bool, setbool] = useState(true)
    const [info, setinfo] = useState([])
    useEffect(() => {
        const darksky = async () => {
            const data = await axios.get(`https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${center[1]},${center[0]}`)
            const arr = data.data.daily.data
            setinfo(arr)
        }
        darksky()
    }, [])
    const clickb = () => {
        setbool(!bool);
    }
    if (!bool) {
        return (
            // time, summary, icon, temperatureHigh, temperatureLow
            <div className='flex container'>
                {info.map(( element, index ) => {
                    console.log(index);
                    return <Country key={index} time={element.time} summary={element.summary} icon={element.icon} temperatureHigh={element.temperatureHigh} temperatureLow={element.temperatureLow} />
                })}
            </div>
        )
    } else {
        return (
            <div
                className='flex'>
                <div>{index+1}.{name}</div>
                <button onClick={clickb}>Weather</button>;
            </div>
        );
    }
}
export default Choice