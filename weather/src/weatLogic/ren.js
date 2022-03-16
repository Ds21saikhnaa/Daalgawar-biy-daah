
import WeatherIcon from 'react-icons-weather';
function Render({ time, summary, icon, temperatureHigh, temperatureLow }) {
    let timezo = new Date(time * 1000)
    const c = ((temperatureHigh - 32) * 5 / 9)
    const rounded = Math.round(c)
    const clow = ((temperatureLow - 32) * 5 / 9)
    const lowrounded = Math.round(clow)
    return (
        <>
            <div className='s_container'>
                <h3>
                    {timezo?.getDay() === 1 ? "Monday" : false}
                    {timezo?.getDay() === 2 ? "Tuesday" : false}
                    {timezo?.getDay() === 3 ? "Wednesday" : false}
                    {timezo?.getDay() === 4 ? "Thursday" : false}
                    {timezo?.getDay() === 5 ? "Friday" : false}
                    {timezo?.getDay() === 6 ? "Saturday" : false}
                    {timezo?.getDay() === 0 ? "Sunday" : false}
                </h3>
                <WeatherIcon name="darksky" iconId={icon} flip="horizontal" className="images" rotate="90" />
                 <div className='text'> {`${rounded}C`}/{`${lowrounded}C`} </div>
                <div className='text'>{summary}</div>
                <div className='text'>{icon}</div>
            </div>
        </>
    );

}
export default Render;