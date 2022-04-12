// 2 tooni niilber taarwal index butsaana 
//let twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i ++){
//         for(let j = i + 1; j < nums.length; j ++){
//             if(nums[j] + nums[i]=== target){ 
//                 console.log([i, j]);
//                 return [i, j]
//             }
//         }
//     }
//  };
// palindrome,
// const isPalindrome = function(x) {
//     let sum = 0, helper = x;
//     if(x < 0) return false
//     while(helper > 0){
//         sum = sum * 10 + helper % 10;
//         helper = Math.floor(helper / 10);
//     }    
//     if(sum === x)return true
//     else if(x === x % 10) return true
//     else return false
// };
// sum arr
// let addTwoNumbers = function(l1, l2) {
//     let a = l1.reverse().join('')
//     let b = l2.reverse().join('')
//     let sum = parseInt(a) + parseInt(b)
//     let c = sum.toString().split('').map((cur) => parseInt(cur)).reverse();
//     return c
    
// };
// addTwoNumbers([2,4,3], [5,6,4])
// const lengthOfLongestSubstring = function(s) {
//     let arr = [];
//     let arrLen = 0;
//     for (let i = 0; i < s.length; i++) {
//         const currentCharacterPosition = arr.indexOf(s[i]);
//         if (currentCharacterPosition !== -1) {
//             arr.splice(0, currentCharacterPosition + 1);
//         }
//         arr.push(s[i]);
//         arrLen = Math.max(
//             arrLen,
//             arr.length
//         );
//     }
//     return arrLen;
// };
// console.log(lengthOfLongestSubstring('aaa'));
// const romanToInt = function(s) {
//     const sym = { 
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     }
//     let sum = 0;
//     for(let i = 0; i <= s.length - 1; i ++ ){
//         const cur = sym[s[i]];
//         const next = sym[s[i+1]];
//         if (cur < next){
//             sum += next - cur // IV -> 5 - 1 = 4
//             i++
//         } else {
//             sum += cur
//         }
//     }
//     return sum
// };
// romanToInt('MCMXCIV')
// const removeDuplicates = function(nums) {
//     let i = 0;
//     let j = 1;
//     while(j < nums.length){
//         if(nums[i] !== nums[j])
//             nums[++ i] = nums[j];
//         j ++
//     }
//     return i + 1
// };
// console.log(topKFrequent([1,1,1,2,2,5])); 
// const longestCommonPrefix = function(strs){
//     if(!strs.length) return '';
//     for(let i = 0; i < strs[0].length; i++){
//         for(let j = 0; j < strs.length; j ++){
//             if(strs[0][i] !== strs[j][i]){
//                 return strs[0].slice(0, i);
//             }
//         }
//     }
//     return strs[0]
// }
// console.log(longestCommonPrefix(["flower","flow","flight"]));
// const addTwoNumbers = function(l1, l2) {
//     let current = new ListNode();
//     let result = current; 
//     let carry = 0
//     while(l1 || l2 || carry) {
//         let sum1 = 0
//         if(l1) {
//             sum1 += l1.val;
//             l1 = l1.next;
//         }   
//         let sum2 = 0
//         if(l2) {
//             sum2 += l2.val;
//             l2 = l2.next;
//         }
//         const sum = sum1 + sum2 + carry;
//         carry = Math.floor(sum / 10)
//         const dg = sum % 10
//         const newList = new ListNode(dg)
//         current.next = newList
//         current = newList
//     }
//     return result.next
// };
// var isValid = function(s) {
//       let arr = []
//     for(let i = 0; i <= s.length - 1; i ++){
//         const current = s[i]
//         console.log('-->',current);
//         if(current === '('){
//             arr.push(')')
//         }else if(current === '['){
//             arr.push(']')
//         }else if(current === '{'){
//             arr.push('}')
//         }else{
//             const pop = arr.pop()
//             console.log('pop',pop, 'cur' , current);
//             if(current !== pop) return false 
//         }
//     }
//     return !arr.length ;
// };
// console.log(isValid('{}()')); 
// const removeElement = function(nums, val) {
//     let i = 0;
//     for(let j = 0; j < nums.length; j++){
//         if(nums[j] !== val){
//             nums[i] = nums[j]
//             i++;
//         }
//     }
//     return i
// };
// // removeElement([1,2,2,3,0,4,2], 2)
// console.log(removeElement([1,2,2,3,0,4,2], 2));
// var calPoints = function(ops) {
//     let arr = [];
//     for(let i = 0; i < ops.length; i ++){ 
//         if(ops[i] === 'C'){
//             arr.pop();
//         }else if(ops[i] === 'D'){
//             arr.push(2 * arr[arr.length - 1])
//         }else if(ops[i] === '+'){
//             arr.push(parseInt(arr[arr.length-2]) + parseInt(arr[arr.length-1]));
//         }else{
//             arr.push(parseInt(ops[i]))
//         }
//     }
//     return arr.reduce((acc, cur) => acc + cur);
// };
// calPoints(["5","2","C","D","+"])
// calPoints(["5","-2","4","C","D","9","+","+"])
// var findMedianSortedArrays = function(nums1, nums2) {
//     let arr = nums1.concat(nums2).sort()
//     let l = arr.length/2
//     let sum;
//     if(arr.length === 3){
//         return arr[1].toFixed(5)
//     }
//     if(l % 2 === 0){
//         sum = (arr[l-1] + arr[l])/2
//         return sum.toFixed(5)
//     }else{
//         l = l+0.5
//         console.log(arr[l-1].toFixed(5));
//         return arr[l-1].toFixed(5)
//     }
       
// };
// findMedianSortedArrays([2,3,5], [1,4])
// var findMedianSortedArrays = function(nums1, nums2) {
//     let arr = nums1.concat(nums2).sort((a, b) => a - b)
//     let l = Math.floor(arr.length/2)
//     if(arr.length % 2 !== 0){
//         console.log(arr[l]);
//         return arr[l]
//     }else{
//         console.log((arr[l - 1]+ arr[l])/2);
//         return (arr[l - 1] + arr[l])/2
//     }   
// };
// findMedianSortedArrays([3], [-2,-1]) //1,2,3,4 -> 0,1,2,3
// var solveSudoku = function(board) {
//     solve(board);
// };

// const solve = (board) => {
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       if (board[i][j] !== '.') continue;
//       for (let k = 1; k <= 9; k++) {
//         if (isValid(board, i, j, '' + k)) {
//             board[i][j] = '' + k;
//           if (solve(board)) {
//             return true;
//           } else {
//             board[i][j] = '.';
//           }
//         }
//       }
//       return false;
//     }
//   }
// //   console.log(board);
//   return true;
// };

// const isValid = (board, i, j, num) => {
//     for (let k = 0; k < 9; k++) {
//         if (board[i][k] === num) return false;
//         if (board[k][j] === num) return false;
//         if (board[Math.floor(i / 3) * 3 + Math.floor(k / 3)][Math.floor(j / 3) * 3 + (k % 3)] === num) return false;
//     }
//     return true;
// };
var solveSudoku = function(board){
    let rows = Array.from(new Array(9), () => new Array(10).fill(0));
    let cols = Array.from(new Array(9), () => new Array(10).fill(0));
    let boxes = Array.from(new Array(9), () => new Array(10).fill(0));
    for(let i = 1; i < 9; i ++){
        for(let j = 1; j < 9; j ++){
            if(board[i][j] !== '.'){
                let num = parseInt(board[i][j])
                let boardX = Math.floor(j / 3);
                let boardY = Math.floor(i / 3);
                rows[i][num] = 1;
                cols[j][num] = 1;
                boxes[boardY * 3 + boardX][num] = 1;
            }
        }
    }
    give(board, 0, 0 , rows, cols , boxes)
}
const give = (board, x, y, rows, cols, boxes) => {
    if(y === 9) return true;
    let nextX = (x + 1) % 9;
    let nextY = nextX === 0 ? y + 1 : y;
    if (board[y][x] !== '.') return give(board, nextX, nextY, rows, cols, boxes);
    for (let i = 1; i <= 9; i++) {
        let boX = Math.floor(x / 3);
        let boY = Math.floor(y / 3);
        let box_index = boY * 3 + boX;
        if (!rows[y][i] && !cols[x][i] && !boxes[box_index][i]) {
            rows[y][i] = 1;
            cols[x][i] = 1;
            boxes[box_index][i] = 1;
            board[y][x] = i.toString();
            if (give(board, nextX, nextY, rows, cols, boxes)) return true;
            board[y][x] = '.';
            boxes[box_index][i] = 0;
            cols[x][i] = 0;
            rows[y][i] = 0;
        }
    }
    return false;
}
solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]); 