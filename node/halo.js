const readline = require("readline");
const { asuult, close, showCurrentTime } = require("./mymod");
asuult("what is yoir name?", (name) => {
    console.log(`hello ${ name }, my name is doogii`);
    asuult("what is your age?", (age) => {
        console.log(`your age is: ${ age }`);
        showCurrentTime("Current time:", (time) => {
            console.log(`Current time is: ${time}`);
            close();
        })
    });
});