import axios from "axios";
import readline from "readline";
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const convertFtoC = ($f) => {
    return ($f - 32) * (5 / 9);
};

const logNow = (ob) => {
    const f = ob.currently.temperature;
    const preProbability = Math.round(ob.currently.precipProbability * 100);
    const c = convertFtoC(f).toFixed(2);
    let precipType = ob.currently.precipType;
    if (precipType === undefined) {
        precipType = "boroo/tsas";
    } else if (precipType === "snow") {
        precipType = "tsas";
    } else if (precipType === "rain") {
        precipType = "boroo";
    }
    const name = ob.timezone.split("/");
    console.log(
        `'\x1b[36m%s\x1b[0m', odooo ${name[1]}-д  ${c} градус.\n${precipType} boloh magadlal ${preProbability}%`
    );
    return ob.hourly.data;
};
const logHourly = (arr) => {
    for (let i = 2; i < arr.length; i += 2) {
        const f = arr[i].temperature;
        const c = convertFtoC(f).toFixed(2);
        const precipProbability = Math.round(arr[i].precipProbability * 100);
        let precipType = arr[i].precipType;
        if (precipType === undefined) {
            precipType = "boroo/tsas";
        } else if (precipType === "snow") {
            precipType = "tsas";
        } else if (precipType === "rain") {
            precipType = "boroo";
        }
        console.log(`'\x1b[33m%s\x1b[0m', (${i / 2}) цагийн дараах мэдээлэл`);
        console.log(
            `'\x1b[36m%s\x1b[0m', \t<<< ${c} градус ${precipType} орох магадлал ${precipProbability}% >>>`
        );
    }
};





rl.question("gazriin neree oruulna uu: ", async(loca) => {
    const res = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${loca.toString()}.json?access_token=pk.eyJ1Ijoic2Fpa2hhbmJpbGVnIiwiYSI6ImNsMGFyaGs2NTAxM20za3A0cWFxMzd5YWMifQ.Gabbw102QC01jkqp0R1VmQ`
    );
    const arr = Object.values(res.data.features);
    arr.forEach((element, index) => {
        console.log(
            `${index + 1}.${element.place_name} lat: ${element.center[1]} long: ${
        element.center[0]
      }`
        );
    });
    rl.question("zow haygaa songo1: ", async(choice) => {
        let weather;
        let weather1 = `https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${arr[choice - 1].center[1]},${arr[choice - 1].center[0]}`;
        try {
            weather = await axios.get(weather1)
                //console.log(weather.data.currently);
        } catch (e) {
            console.log(e);
        }
        const json = weather.data;
        let hourly = logNow(json);
        logHourly(hourly);
        rl.close();
    });
});