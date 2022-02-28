
const arrd = [
  ["O", "O", "O", "P"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
];
const ar1 = [
    ["A", "A", "A"],
    ["A", "A", "A"],
    ["A", "B", "A"]
]
let ll = "";
let r;
let c;
const whereIsWaldo = (arr) => {
  if (arr[0][0] === arr[0][1]) {
    ll = arr[0][0];
  }else if(arr[0][0] === arr[0][2] && arr[0][0] !== arr[0][1]){
    ll = arr[0][0];
  }else{
    ll = arr[0][1];
  }
  arr.forEach((cur, index, element, row) => {
    cur.forEach((el, i) => {
      if (el !== ll) {
          r = index + 1;
          c = i + 1;
        }
    });
});
console.log(r , c);
};
whereIsWaldo(ar1);


// // Products available
// const products = [
//     { number: 1, price: 100, name: 'Orange juice' },
//     { number: 2, price: 200, name: 'Soda' },
//     { number: 3, price: 150, name: 'Chocolate snack' },
//     { number: 4, price: 250, name: 'Cookies' },
//     { number: 5, price: 180, name: 'Gummy bears' },
//     { number: 6, price: 500, name: 'Chocolates' },
//     { number: 7, price: 120, name: 'Crackers' },
//     { number: 8, price: 220, name: 'Potato chips' },
//     { number: 9, price: 80, name: 'Small snack' },
//     ];
//     // Coins available
//     [500, 200, 100, 50, 20, 10]
// const vendingManchine = (ob, pri, num) => {
//     ob.filter(p => p.price === pri || p.number === num)
// }
// console.log(vendingManchine(products,180, 5));
// const mine = [
//     [0, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 1, 0, 1],
//     [1, 1, 0, 0]
// ];
// const minesweeper = (arra) => {

// }
const users = [
    { id: 11, name: 'Bat', age: 23, group: 'editor' },
    { id: 47, name: 'Bold', age: 28, group: 'admin' },
    { id: 85, name: 'Tulga', age: 34, group: 'editor' },
    { id: 97, name: 'Suren', age: 28, group: 'admin' }
];  