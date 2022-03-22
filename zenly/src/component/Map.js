import { useEffect, useRef, useState } from "react";
import {
  collection,
  setDoc,
  doc,
  onSnapshot,
  getDocs,
  query,
} from "firebase/firestore";
import { db, auth } from "../Firebase";

const markers = [
  {
    lat: 47.9119453,
    lng: 106.8983796,
  },
  {
    lat: 47.9138608,
    lng: 106.912096,
  },
];
const Map = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [makerIndex, setMakerIndex] = useState(0);
  const [loc, setLoc] = useState([]);
  const loca = useRef([]);

  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      setLoc([position.coords.latitude, position.coords.longitude]);
      const da = async () => {
        const citiesRef = collection(db, "current-loctaion");
        const docRef = await setDoc(doc(citiesRef, auth.currentUser.uid), {
          lat: position.coords.latitude,
          lgn: position.coords.longitude,
          phone: auth.currentUser.phoneNumber,
          id: auth.currentUser.uid,
        });
      };
      da();
    });
  }, []);
  
  useEffect(() => {
    if (!loc.length) return;
    mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
      center: { lat: loc[0], lng: loc[1] },
      zoom: 5,
    });
    new window.google.maps.Marker({
      position: { lat: loc[0], lng: loc[1] },
      map: mapRef.current,
    });
    const coll = collection(db, "current-loctaion");
    const q = query(coll)
    onSnapshot(q, (snapshot) => {
      let data = snapshot.docChanges()
      new window.google.maps.Marker({
        position: { lat: data[0].doc.data().lat, lng: data[0].doc.data().lgn },
        map: mapRef.current,
      })
    })
  }, [loc]);

  const onAddMarker = () => {
    new window.google.maps.Marker({
      position: markers[makerIndex],
      map: mapRef.current,
    });
    setMakerIndex(makerIndex + 1);
  };
  return (
    <div>
      Zenly app
      <button onClick={onAddMarker}>Add Markers</button>
      <div id="map" ref={mapContainerRef}></div>
    </div>
  );
};
export { Map };
