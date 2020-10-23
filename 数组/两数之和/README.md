# 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标
## 设置初始值
```javascript
let nums = [2,7,11,15];
let target = 9;
```

## 方法1 -- 两个for循环判断相加值是否为target
- 时间复杂度：O(N^2)，其中 NN 是数组中的元素数量。最坏情况下数组中任意两个数都要被匹配一次。
- 空间复杂度：O(1)
```javascript
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
```

## 方法2 -- 使用哈希表
1. 创建一个哈希表，对于每一个 x，我们首先查询哈希表中是否存在 target - x，然后将 x 插入到哈希表中，即可保证不会让 x 和自己匹配
- 时间复杂度：O(N)，其中 N 是数组中的元素数量
- 空间复杂度：O(N)，其中 N 是数组中的元素数量
```javascript
var twoSum = function(nums, target){
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
```
