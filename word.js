import fs from "fs";
fs.readFile("./text/big.txt", "utf-8", (error, data) => {
    let arr = []
    if (error) {
        console.log(error);
        return
    } else {
        let lines = data.toString().split("\n");
        let wordCount = lines.reduce((words, line) => {
            let w = line.split(" ");
            arr.push(w)
        });

    }
    console.log(arr);
});
// const checkWord = w => {
//     let letters = /^[A-Za-z]+$/;
//     if (w.match(letters)) return true;
//     return false;
// };
// const a = filename => {
//     return new Promise((res, rej) => {
//         return new Promise((resolve, reject) => {
//             fs.readFile(filename, (err, data) => {
//                 if (err) reject(err);
//                 let lines = data.toString().split("\n");
//                 let wordCount = lines.reduce((words, line) => {
//                     let w = line.split(" ");
//                     words = w
//                         .filter(checkWord)
//                         .map(x => x.toLowerCase())
//                         .reduce((words, word) => {
//                             words[word] =
//                                 words[word] == undefined ? 1 : words[word] + 1;
//                             return words;
//                         }, words);
//                     return words;
//                 }, {});
//                 resolve(wordCount);
//             });
//         }).then(result => {
//             let array = Object.keys(result).map(el => {
//                 return {
//                     word: el,
//                     count: result[el]
//                 }
//             })
//             array.sort(function(a, b) {
//                 return b.count - a.count;
//             })
//             array = array.slice(0, 10);
//             res(array);
//             // console.log(array);
//         })
//     })

// };


// Promise.all([a('./text/big.txt'), a('./text/sgb-words.txt'), a('./text/shakespeare.txt'), a('./text/smaller.txt')]).then((values) => {

//     let arr = values[0].concat(values[1]).concat(values[2]).concat(values[3]);
//     // console.log(arr);
//     let obj = arr.reduce((acc, cur) => {
//         acc[cur.word] = acc[cur.word] == undefined ? cur.count : acc[cur.word] + cur.count;
//         return acc;
//     }, {})
//     console.log(obj);

// });