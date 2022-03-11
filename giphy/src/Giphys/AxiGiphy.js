import React, { useState, useEffect } from 'react'
const axios = require('axios');
const Giphy = () => {
    const[word, setWord] = useState('');
    const [data, setData] = useState([]);
    //const [loading, setLoading] = useState(false);
    useEffect(() => {
        const pull = async () => {
            const res = await axios.get(
                `https://api.giphy.com/v1/gifs/search?q=${word}&api_key=1vBu1ut0WH0ZjfBKRFHoieZrleIYrunh`
            );
            setData(res.data.data)
          //  setLoading(false)
        }
        //setLoading(false)
        pull()
    }, [word] )
    const handInput = (e) => {
        setWord(e.target.value)
    }
    const In = () => {
        return (
        <div>
            <input
            value={word}
            onChange={handInput}
          />
        </div>
        )
    }
    const renderGifs = () => {
        return data.map(el => {
            return (
                <div>
                <div key={el.id}>
                    <img src={el.images.fixed_height.url }></img>
                </div>

                </div>
            )
        })
    }
    return <div>{In()}{renderGifs()}</div>
}
export{
    Giphy
}