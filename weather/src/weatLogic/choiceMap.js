import { useEffect, useState } from 'react'
import axios from 'axios';
import Render from './ren'
function Choice({name, center, index}){
    const [flag, setflag] = useState(true)
    const [info, setinfo] = useState([])
    useEffect(() => {
        const darksky = async () => {
            const data = await axios.get(`https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${center[1]},${center[0]}`)
            const arr = data.data.daily.data
            setinfo(arr)
        }
        darksky()
    }, [])
    const clickBtn = () => {
        setflag(!flag);
    }
    console.log(flag);
    if (!flag) {
        return (
            <div className='flex container'>
                <h1>{name}</h1>
                {info.map(( element, index ) => {
                    console.log(element);
                    return <Render key={index} time={element.time} summary={element.summary} icon={element.icon} temperatureHigh={element.temperatureHigh} temperatureLow={element.temperatureLow} />
                })}
            </div>
        )
    } else {
        return(
            <div
                className='flex' key={index}>
                <div>{index+1}.{name}</div>
                <button onClick={clickBtn}>Weather</button>;
            </div>
        );
    }
}
export default Choice