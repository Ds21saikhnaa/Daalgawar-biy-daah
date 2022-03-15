function Country({ time, summary, icon, temperatureHigh, temperatureLow }) {
    let stamp = new Date(time * 1000)
    const celc = ((temperatureHigh - 32) * 5 / 9)
    const rounded = Math.round(celc)
    const celclow = ((temperatureLow - 32) * 5 / 9)
    const lowrounded = Math.round(celclow)
    return (
        <>
            <div className='s_container'>
                <h3>
                    {stamp?.getDay() === 1 ? "Monday" : console.log()}
                    {stamp?.getDay() === 2 ? "Tuesday" : console.log()}
                    {stamp?.getDay() === 3 ? "Wednesday" : console.log()}
                    {stamp?.getDay() === 4 ? "Thursday" : console.log()}
                    {stamp?.getDay() === 5 ? "Friday" : console.log()}
                    {stamp?.getDay() === 6 ? "Saturday" : console.log()}
                    {stamp?.getDay() === 0 ? "Sunday" : console.log()}
                </h3>
                 <div className='text'> {rounded}/{lowrounded} </div>
                <div className='text'>{summary}</div>
            </div>
        </>
    );

}
export default Country;