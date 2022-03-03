import axios from "axios";
let arr;
let link;
let maxRead = 0;
let $index = -1;
const req = async (url, index) => {
    let res = await axios.get(url);
}
axios.get('https://www.poemist.com/api/v1/randompoems').then(resp => {
    arr = resp.data;
    link = arr.map(officer => officer.url);
    console.log(link);
    axios.get(link[0], link[1], link[2], link[3], link[4]).then(res => {
        console.log(res.data);
    })
});

// const htmlReguest = async(url, index) => {

//     let response = await axios.get(url);
//     const helperArr = response.data.split('\n').join('').split(' ');
//     let readNumber = helperArr[helperArr.indexOf('Total') - 1];
//     if (maxRead < Number(readNumber)) {
//         maxRead = readNumber;
//         $index = index
//         return $index
//     }
//     return $index;

// }
// const problem = async() => {
//     let response = await axios.get('https://www.poemist.com/api/v1/randompoems%27)
//     let url = [];
//     const savePoemist = [];

//     response.data.forEach(element => {
//         savePoemist.push(element['content']);
//         url.push(element['url']);
//     });
//     let pro = htmlReguest(url[0], 0);
//     let pro1 = htmlReguest(url[1], 1);
//     let pro2 = htmlReguest(url[2], 2);
//     let pro3 = htmlReguest(url[3], 3);
//     let pro4 = htmlReguest(url[4], 4);
//     Promise.all([pro, pro1, pro2, pro3, pro4]).then((resultArr) => {
//         console.log(most total read: ${maxRead}\n${savePoemist[resultArr[4]]});
//     })
// }
// problem();