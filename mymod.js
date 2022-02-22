//const { callbackify } = require("util");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const asuult = (type, callback) => {
    rl.question(type, (ask) => {
        callback(ask);
    });
};
const showCurrentTime = (date, callback1) => {
    rl.question(date, (ask1) => {
        callback1(ask1);
    });
}
const randomJoke = (ask, joke) => {
    rl.question(ask, (ask1) => {
        callback1(ask1);
    });
}

const close = () => {
    rl.close();
}
module.exports = {
    asuult,
    close,
    showCurrentTime,
};