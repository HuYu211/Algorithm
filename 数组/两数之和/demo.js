let nums = [2,7,11,15];
let target = 9;

// 方法1--暴力循环
var twoSum = function(nums, target) {
    let arr = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = (i+1); j < nums.length; j++){
            if(nums[i]+nums[j]==target){
                arr.push(i);
                arr.push(j);
                break;break;
            }
        }
    }
    return arr;
};
// console.log(twoSum(nums, target));

// 方法2--构建哈希表
var twoSum2 = function(nums, target){
    //新建map结构 {num, index} ,这里num储存target-nums[i]
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        //如果map里存在target-nums[i],则返回target-nums[i]储存的i与此时的i
        if(map.has(nums[i])){
            return [map.get(nums[i]),i]
        }else{
            //如果不存在则设置{target-nums[i],i}
            map.set(target-nums[i],i)
        }
    }
}
console.log(twoSum2(nums, target));