import React, { useEffect, useRef, useState } from 'react'
export default function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef()
  const key = 'AIzaSyAB6cL647DSIoabnPLSSGcaV9oqy4dulzY'
  const [map, setMap] = useState()
  useEffect(() => {
    const onLoad = () => setMap(new window.google.maps.Map(ref.current, options))
    if (!window.google) {
      const script = document.createElement(`script`)
      script.src =
        `https://maps.googleapis.com/maps/api/js?keyAIzaSyAB6cL647DSIoabnPLSSGcaV9oqy4dulzY` +
        //process.env.GOOGLE_MAPS_API_KEY
      document.head.append(script)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  }, [options])
  if (map && typeof onMount === `function`) onMount(map, onMountProps)
  return (
    <div
      style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
      {...{ ref, className }}
    />
  )
}
Map.defaultProps = {
  options: {
    center: { lat: 50, lng: 100 },
    zoom: 5,
  },
}

