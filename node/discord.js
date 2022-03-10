require("dotenv").config();
const { Client, Intents } = require("discord.js")
const axios = require("axios");
const readline = require("readline");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.once("ready", () => {
    console.log("online");
})
client.on("messageCreate", message => {
    if (message.content.startsWith(">")) {
        if (message.content.substring(1) === "hello") {
            message.reply("hello");
        } else if (message.content.substring(1) === "date") {
            let a = new Date();
            message.reply(a.toString());
        } else if (message.content.substring(1) === "weather") {
            let rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            const convertFtoC = ($f) => {
                return ($f - 32) * (5 / 9);
            };
            const news = (weat) => {
                const tempratur = weat.currently.temperature;
                const ce = convertFtoC(tempratur).toFixed(2);
                const name = weat.timezone.split("/");
                console.log(
                    `'\x1b[36m%s\x1b[0m', odooo ${name[1]}-д  ${ce} градус.}%`
                );
                message.reply(`'\x1b[36m%s\x1b[0m', odooo ${name[1]}-д  ${ce} градус.}%`);
                return weat.hourly.data;
            }
            rl.question("gazriin neree oruulna uu: ", async(name) => {
                const res = await axios.get(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${name.toString()}.json?access_token=pk.eyJ1Ijoic2Fpa2hhbmJpbGVnIiwiYSI6ImNsMGFyaGs2NTAxM20za3A0cWFxMzd5YWMifQ.Gabbw102QC01jkqp0R1VmQ`
                );
                const arr = Object.values(res.data.features);
                arr.forEach((element, index) => {
                    console.log(
                        `${index + 1}.${element.place_name} lat: ${element.center[1]} long: ${
                    element.center[0]
                  }`
                    );
                });

                rl.question("gazraa songono uu:", async(choice) => {
                    let weather;
                    let weather1 = `https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${arr[choice - 1].center[1]},${arr[choice - 1].center[0]}`;
                    try {
                        weather = await axios.get(weather1)
                            //console.log(weather.data.currently);
                    } catch (e) {
                        console.log(e);
                    }
                    const json = weather.data;
                    let hourly = news(json);
                    rl.close();
                });
            })
        }
    }
})
client.login(process.env.TOKEN);