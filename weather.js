import axios from "axios";
const req = async(loca) => {
    const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${loca.toString()}.json?access_token=pk.eyJ1Ijoic2Fpa2hhbmJpbGVnIiwiYSI6ImNsMGFyaGs2NTAxM20za3A0cWFxMzd5YWMifQ.Gabbw102QC01jkqp0R1VmQ`);
    const arr = []
    arr.push(res.data)
    console.log(arr.length);
    const promises = arr.map(async(po) => {
        console.log(po.length);
        return {
            text: po.text,
            center: po.center,
            name: po.place_name,
        }
    });
    //const po = await Promise.all(promises);
    //console.log(po);
}
req('ulaanbaatar')
    //const res = await axios.get(po.center);
    //const totalRead = parseInt(res.data.split('Total read')[0].split('</i>').pop());