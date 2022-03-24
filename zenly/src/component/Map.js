import { useEffect, useRef, useState } from "react";
import { collection, setDoc, doc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../Firebase";
import { signOut } from "firebase/auth";

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
const icons = {
  me: {
    url:
      "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
    scaledSize: new window.google.maps.Size(50, 50),
  },
  other: {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
    scaledSize: new window.google.maps.Size(50, 50),
  },
};
const Map = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [makerIndex, setMakerIndex] = useState(0);
  const [loc, setLoc] = useState([47.9138608, 106.912096]);

  useEffect(() => {
    navigator.geolocation.watchPosition(async (position) => {
      setLoc([position.coords.latitude, position.coords.longitude]);

      const citiesRef = collection(db, "current-loctaion");
      await setDoc(doc(citiesRef, auth.currentUser.uid), {
        lat: position.coords.latitude,
        lgn: position.coords.longitude,
        phone: auth.currentUser.phoneNumber,
        id: auth.currentUser.uid,
      });
    });
  }, []);

  useEffect(() => {
    let arr = [];
    if (!loc.length) return;
    mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
      center: { lat: loc[0], lng: loc[1] },
      zoom: 5,
    });
    onSnapshot(collection(db, "current-loctaion"), (snapshot) => {
      arr.forEach((el) => {
        el.setMap(null);
      });
      snapshot.docs.forEach((doc) => {
        let a = new window.google.maps.Marker({
          position: { lat: doc.data().lat, lng: doc.data().lgn },
          map: mapRef.current,
          icon: auth.currentUser.uid === doc.data().id ? icons.me : icons.other,
        });
        arr.push(a);
      });
    });
  }, [loc]);

  const onAddMarker = () => {
    new window.google.maps.Marker({
      position: markers[makerIndex],
      map: mapRef.current,
    });
    setMakerIndex(makerIndex + 1);
  };

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="Container">
      <div className="helper">
        <button onClick={onAddMarker}>Add Markers</button>
        <button onClick={logOut}>logOut</button>
      </div>
      <div id="map" ref={mapContainerRef}></div>
    </div>
  );
};
export { Map };
