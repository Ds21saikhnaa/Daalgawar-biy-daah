import axios from "axios";
let arr;
let link;
axios.get('https://www.poemist.com/api/v1/randompoems').then(resp => {
    arr = resp.data;
    link = arr.map(officer => officer.url);
    console.log(link);
    axios.get(link[0], link[1], link[2], link[3], link[4]).then(res => {
        console.log(res.data);
    })
});