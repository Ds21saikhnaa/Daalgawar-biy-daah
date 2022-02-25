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
//hoioos n
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
const arra = (n) => {
  n.forEach((cur) => {
    if (typeof cur === 'object') {
         console.log(cur);
         
    } else {
        console.log(cur);
    }
  });

  //if (!n.length) return n;
  //return n.toString();
};


// console.log();
arra([1, [2, [3, 4]], [5, 5], 23])
// let str = ar.toString();
//     console.log(str);
