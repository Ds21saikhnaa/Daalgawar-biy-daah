import React, { useState, useEffect } from "react";
import Choice from "./choiceMap";
const axios = require("axios");
const debounce = (fn, delay) => {
  let timeOut;
  return (...args) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
const Weather = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);
  const pull = async (q) => {
    if (!q) return;
    const res = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${q.toString()}.json?access_token=pk.eyJ1Ijoic2Fpa2hhbmJpbGVnIiwiYSI6ImNsMGFyaGs2NTAxM20za3A0cWFxMzd5YWMifQ.Gabbw102QC01jkqp0R1VmQ`
    );
    const arr = Object.values(res.data.features);
    setData(arr);
  };

  const [fetchGifsDebounced, setFetchGifsDebounced] = useState(() => {
    return debounce(pull, 1000);
  });
  useEffect(() => {
    //pull()
    fetchGifsDebounced(word);
  }, [word, setFetchGifsDebounced]);
  const handInput = (e) => {
    setWord(e.target.value);
  };
  const In = () => {
    return (
      <div>
        <input value={word} onChange={handInput} />
      </div>
    );
  };
  const renderGifs = () => {
    return data.map((element, index) => {
      return (
      <>
         <div style={{ display: "flex", flexDirection:"row" }}key={index}>
      <><Choice name={element.place_name} center={element.center} index={index}/></>
      </div>
      </>
      )
    });
  };
  return (
    <div className="NavBar">
      <div >{In()}</div>
      <div className="Row">{renderGifs()}</div>
    </div>
  );
};
export { Weather };