import '../App.css';
import React, { useState, useEffect } from 'react'
const axios = require('axios');
const debounce = (fn, delay) => {
    let timeOut;
    return (...args) => {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}
const Giphy = () => {
    const [word, setWord] = useState('');
    const [data, setData] = useState([]);
    const pull = async (q) => {
        if (!q) return
        const res = await axios.get(
            `https://api.giphy.com/v1/gifs/search?q=${q}&api_key=1vBu1ut0WH0ZjfBKRFHoieZrleIYrunh`
        );
        setData(res.data.data)
    }
    const [fetchGifsDebounced, setFetchGifsDebounced] = useState(() => {
        return debounce(pull, 1000);
    });
    useEffect(() => {
        //pull()
        fetchGifsDebounced(word);
    }, [word, setFetchGifsDebounced])
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
                <div key={el.id} style={{}}>
                    <div style={{ width: "300px" }}>
                        <img src={el.images.fixed_height.url} alt={el.title}></img>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className='NavBar'>
            <div style={{ position: 'absolute' }}>
                {In()}
            </div>
            <div className='Row'>
                {renderGifs()}
            </div>
        </div>
    )
}
export {
    Giphy
}