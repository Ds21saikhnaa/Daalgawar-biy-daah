import { useEffect, useRef, useState } from "react";
import {
  collection,
  setDoc,
  doc,
  onSnapshot,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../Firebase";
import { signOut } from "firebase/auth";
const icons = {
  me: {
    url: "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
    scaledSize: new window.google.maps.Size(50, 50),
  },
  other: {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
    scaledSize: new window.google.maps.Size(50, 50),
  },
};
const Map = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [flag, setFlag] = useState(true);
  const [loc, setLoc] = useState([]);
  const [text, setText] = useState("");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(async (position) => {
      setLoc([position.coords.latitude, position.coords.longitude]);

      const citiesRef = collection(db, "current-loctaion");
      await setDoc(doc(citiesRef, auth.currentUser.uid), {
        lat: position.coords.latitude,
        lgn: position.coords.longitude,
        phone: auth.currentUser.phoneNumber,
        id: auth.currentUser.uid,
      });
    });

    return () => navigator.geolocation.clearWatch(watchId)
  }, [setLoc]);

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
    // mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
    //   center: { lat: loc[0], lng: loc[1] },
    //   zoom: 5,
    // });
    console.log("j");
  };
  const chat = () => {
    setFlag(!flag);
  };
  const logOut = async () => {
    await signOut(auth);
  };

  const write = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const send = async () => {
    let dateNow = new Date();
    await addDoc(collection(db, "chats"), {
      text: text,
      createdAt: dateNow,
      phone: auth.currentUser.phoneNumber,
      id: auth.currentUser.uid,
    });
  };

  useEffect(() => {
    onSnapshot(query(collection(db, "chats"), orderBy('createdAt')), (snapshot) => {
      let arr = [];

      snapshot.docs.forEach((doc) => {
        arr.push(doc.data());
      });
      setChats([...arr]);
    });
    // const citiesRef = collection(db, "chats");
    // return query(citiesRef, orderBy('createdAt'))
  }, []);

  return (
    <div className="Container">
      <div className="helper">
        <div className="chat" onClick={chat}></div>
        <div className="logOut" onClick={logOut}></div>
      </div>
      <div id="map" ref={mapContainerRef}></div>
      {flag ? null : (
        <div className="chats">
          <div className="display">
            {
              // arr.length > 1 ? <div>Loading</div>
              // :  
              chats.map((el, i) => (
                <div key={i}>{el.text}</div>
              ))
            }
          </div>
          <div className="in">
            <input
              placeholder="write text"
              onChange={write}
              value={text}
            ></input>
            <button onClick={send}>send</button>
          </div>
        </div>
      )}
    </div>
  );
};
export { Map };
