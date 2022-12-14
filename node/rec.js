//fib ol
//const fib = (n) => {
//     if(n === 1)return 1;
//     if(n === 2)return 1;
//     return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(4));
//tooni niilber
// const sum = (n) => {
//     if(n === 0)return 0;
//     return sum(n - 1) + n;
// }
// console.log(sum(5));
//pactrall
// const pac = (n) => {
//     if(n === 0) return;
//     if(n === 1) return 1;
//     return pac(n - 1) * n;
// }
// console.log(pac(6));
//hoioos n hewlene
// const rev = (n) => {
//     n = n.toString();
//     if (n === "") {
//         return "";
//       }
//       return n[n.length - 1] + rev(n.substring(0, n.length - 1));
// }
// console.log(rev('3214151'));
//array niiiluuleh
//const ar = [1,[2,[3,4]],[5,5],23]
//bol array niiluuleh;
// const newArr = [];
// const arra = (n) => {
//     n.forEach((cur) => {
//         if (typeof cur === 'object') {
//             arra(cur);
//         } else {
//             newArr.push(cur);
//         }
//     });
// };
// arra([1, [2, [3, 4]],
//     [5, 5], 23
// ])
// console.log(newArr);
//anhni too olno
// const prime = (n) => {
//     let m, flag = 0;
//     m = n / 2;
//     for (let i = 2; i <= m; i++) {
//         if (n % i === 0) {
//             console.log("not prime number");
//             flag = 1;
//         }
//     }
//     if (flag === 0) {
//         console.log('prime number');
//     }
// }
// prime(5)
//recursion
// function isPrime(num, div = 2) {
//     if (num <= div) {
//         return false;
//     }
//     if (num % 2 === 0) {
//         return false;
//     } else {
//         return true;
//     }
//     return isPrime(num);
// }
// console.log(isPrime(5));