import Input from "./component/input";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Get from "./component/render";
function App() {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);
  const [click, setClick] = useState([]);
  const target = (e) => {
    setWord(e.target.value);
  };
  const onClick = () => {
    setClick(word);
    setWord("");
    console.log("hello");
  };
  useEffect(() => {
    const pull = async () => {
      const res = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${click}.json?access_token=pk.eyJ1Ijoic2Fpa2hhbmJpbGVnIiwiYSI6ImNsMGFyaGs2NTAxM20za3A0cWFxMzd5YWMifQ.Gabbw102QC01jkqp0R1VmQ`
      );
      const arr = Object.values(res.data.features);
      setData(arr);
    };
    pull();
  }, [click]);
  return (
    <div className="App">
      <h1>Weather</h1>
      <Input valiu={word} target={target} onClick={onClick} />
      <div className="Container">
        {data.map((element, index) => (
          <Get
            key={index}
            name={element.place_name}
            center={element.center}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
