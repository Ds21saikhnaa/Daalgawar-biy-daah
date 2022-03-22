import { useEffect, useRef, useState } from "react";
import {
  collection,
  setDoc,
  doc,
  onSnapshot,
  getDocs,
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
    navigator.geolocation.getCurrentPosition((position) => {
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
      zoom: 14,
    });
    new window.google.maps.Marker({
      position: { lat: loc[0], lng: loc[1] },
      map: mapRef.current,
    });
  }, [loc]);
  // const unsub = onSnapshot(doc(db, "current-loctaion", auth.currentUser.uid), (doc) => {
  //   const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
  //   console.log(" data: ", doc.data());
  // });
  // useEffect(() => {
  //   unsub();
  // }, []);
  const a = async () => {
    const querySnapshot = await getDocs(collection(db, "current-loctaion"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      new window.google.maps.Marker({
        position: { lat: doc.data().lat, lng: doc.data().lgn },
        map: mapRef.current,
      })
    });
  };
  // const unsubscribe = onSnapshot(collection(db, "current-loctaion"), (doc) => {
  //   console.log(db.do);
  // });
  useEffect(() => {
    a();
  }, []);

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
