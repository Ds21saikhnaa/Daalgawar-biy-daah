//const testPromise = (data) => {
let myPromise = new Promise((res, rej) => {
        let data = '';
        if (data % 2 === 0) rej('even');
        else if (data % 2 !== 0) res('odd');
        else rej('error');
    })
    // }
    //testPromise(Math.floor(Math.random() * 100))
myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})