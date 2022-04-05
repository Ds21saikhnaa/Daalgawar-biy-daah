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