import "../App.css"
import axios from 'axios'
import {useState, useEffect} from "react"
import Country from "./See"
const Get = ({name, center, index}) => {
    let a;
    const[news, setNews] = useState([])
    const mapClick = () => { 
        a = center
    }
    
    useEffect(() => {
        setTimeout(()=> {
            const darksky = async () => {
                const data = await axios.get(`https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${a[1]},${a[0]}`)
                console.log(data);
                const arr = data.data.daily.data
                setNews(arr)
            }
            darksky()
        }, 3000)
    }, [])
    console.log(news);
    return(
        <>
        <div className='Row' key={index} onClick={mapClick}>
            <h1>{index}{name}</h1>
        </div>
        <div className="Scon">
            {news.map(({ time, summary, icon, temperatureHigh, temperatureLow }, i) => {
                    return (<Country key={i} time={time} summary={summary} icon={icon} temperatureHigh={temperatureHigh} temperatureLow={temperatureLow} />)
                })}

        </div>
        </>
    )
}
export default Get;