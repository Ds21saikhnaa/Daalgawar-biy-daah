let readline = require("readline");
const chocolates= [
    {"dark":true, "flavour":"strawberry"},
    {"dark":false, "flavour":"strawberry"},
    {"dark":false, "flavour":"almond"},
    {"dark":true, "flavour":"almond"},
    {"dark":false, "flavour":"lemon"},
  ];
  
const checkProperty = () => {
    chocolates.forEach(function () {
        const result = chocolates.filter(e => e.dark === true).map((e) => {
            return e;   
        })
    });
    console.log(result);
}
// const per = [
//     {id: 1, name: "DORJ", age: 19},
//     {id: 2, name: "BAT", age: 13},
//     {id: 3, name: "BAAGUU", age: 15},
//     {id: 4, name: "HER", age: 20},
//     {id: 5, name: "HIS", age: 23},
// ];
// const result = per.filter(e => e.age >= 18).map((e) => {
//     e.name = e.name.toLowerCase();
//     return e;   
// })
// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question(`given: `, (user) => {
//   let tInput = user.trim();
//   let array = tInput.split(" ");
//   let sum = 0;
//   let d;
//   let urj = 1;
//   array.forEach(function (value) {
//     // d = array.map((value) => {
//     //     return 2022 - value;
//     // })
//     });
//     // console.log(d);
//   rl.close();
// });
