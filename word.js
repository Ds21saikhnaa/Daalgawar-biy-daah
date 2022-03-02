import fs from "fs";

const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        });
    });
}

const getTopTen = (data) => {
    const counts = data
        .match(/[a-zA-Z]+/g)
        .reduce((acc, word) => {
            const lowerWord = word.toLowerCase();
            if (acc[lowerWord]) {
                acc[lowerWord]++;
            } else {
                acc[lowerWord] = 1;
            }
            return acc;
        }, {});

    const top10 = Object
        .keys(counts)
        .slice(0, 10)
        .map((word) => ({
            word: word,
            count: counts[word],
        }))
        .sort((w1, w2) => w2.count - w1.count);

    for (const word of Object.keys(counts).slice(10)) {
        let isFound = false;
        for (let i = 9; i >= 0; i--) {
            if (top10[i].count > counts[word]) {
                top10.splice(i + 1, 0, {
                    word: word,
                    count: counts[word]
                });
                isFound = true;
                break;
            };
        }

        if (!isFound) {
            top10.splice(0, 0, {
                word: word,
                count: counts[word]
            });
        }

        top10.pop();
    }

    return top10;
}

const promise1 = readFile('./text/big.txt')
const promise2 = readFile('./text/sgb-words.txt')
const promise3 = readFile('./text/shakespeare.txt')
const promise4 = readFile('./text/smaller.txt')

Promise.all([promise1, promise2, promise3, promise4]).then((resultArr) => {
    console.log(getTopTen(resultArr.join(' ')));
});