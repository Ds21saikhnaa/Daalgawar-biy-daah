import axios from "axios"
export const getCountriesByName = async (countryName) => {
//     const { data: { features } } = await axios.get(`${ MAP_BOX_URL }/${ countryName }.json`, {
//         params: {
//             access_token: MAP_BOX_ACCESS_TOKEN,
//         }
//     });

//     return features.map(({ place_name, center }) => ( {
//         name: place_name,
//         lat: center[1],
//         lng: center[0],
//     }))
// }

// export const getDailyWeathersByCoords = async (lat, lng) => {
//     const { data: { daily } } = await axios.get(OWM_URL, {
//         params: {
//             lat: lat,
//             lon: lng,
//             appid: OWM_API_KEY,
//             units: 'metric',
//         },
//     });

//     return daily.map((daily) => ({
//         dayTemp: daily.temp.day,
//         nightTemp: daily.temp.night,
//         iconId: daily.weather[0].id,
//         date: daily.dt,
//     }))
}

