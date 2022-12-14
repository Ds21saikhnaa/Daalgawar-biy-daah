import axios from 'axios';
export const getCountriesByName = async (countryName) => {
    const { data: { features } } = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${countryName}.json?access_token=pk.eyJ1Ijoic2Fpa2hhbmJpbGVnIiwiYSI6ImNsMGFyaGs2NTAxM20za3A0cWFxMzd5YWMifQ.Gabbw102QC01jkqp0R1VmQ`
      );

    return features.map(({ place_name, center }) => ( {
        name: place_name,
        lat: center[1],
        lng: center[0],
    }))
}

export const getDailyWeathersByCoords = async (lat, lng) => {
    const { data: { daily } } =await axios.get(`https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${lat},${lng}`)
    return daily.data.map((data) => ({
        time: data.time,
        summary: data.summary,
        icon: data.icon,
        temperatureHigh: data.temperatureHigh,
        temperatureLow: data.temperatureLow
    }))
}
