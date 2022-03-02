const testPromise = (data) => {
    return new Promise((res, rej) => {
        if (typeof data !== 'number'){
            rej('error');
        } 
        if (data % 2 === 0) {
            setTimeout(() => {
                rej('even');
            }, 2000)
        }if (data % 2 !== 0) {
            setTimeout(() =>{
                res('odd');
            })
        }
        })
}
    //testPromise(Math.floor(Math.random() * 100))
myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})