import { useEffect, useRef, useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 

const markers = [
    {
        lat: 47.9119453,
        lng: 106.8983796,
    },
    {
        lat: 47.9138608,
        lng: 106.912096,
    }
]
const Map = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [ makerIndex, setMakerIndex ] = useState(0);
  const [loc, setLoc] = useState([])
  const loca = useRef([])
  // const da = async() =>{
  //   const docRef = await addDoc(collection(db, "users"), {
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLoc([position.coords.latitude, position.coords.longitude])
    });
    console.log(loc);
      mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
        //center: {lat: 50, lng: 100},  
        center: {lat: loc[0], lng: loc[1]},
        zoom: 14,
      });
  }, []);

  const onAddMarker = () => {
      new window.google.maps.Marker({
          position: markers[makerIndex],
          map: mapRef.current,
      });
      setMakerIndex(makerIndex + 1);
  }
  return (
      <div>
          Zenly
          <button onClick={ onAddMarker }>Add Markers</button>
          <div id="map" ref={ mapContainerRef }></div>
      </div>
  )
}
export{
  Map
}