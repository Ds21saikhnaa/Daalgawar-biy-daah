import fs from "fs";
fs.readFile("./text/big.txt", "utf-8", (error, data) => {
    let arr = []
    if (error) {
        console.log(error);
        return
    } else {
        let letters = /^[A-Za-z]+$/;
        let word = data.split(' ');
        arr.push(word);
        // let lines = data.toString().split("\n");
        // let wordCount = lines.reduce((words, line) => {
        //     let w = line.split(" ");
        //     arr.push(w)
        // });

    }
    console.log(arr);
});