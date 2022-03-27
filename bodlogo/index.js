let twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i ++){
        for(let j = i + 1; j < nums.length; j ++){
            if(nums[j] + nums[i]=== target){ 
                console.log([i, j]);
                return [i, j]
            }
        }
    }
 };