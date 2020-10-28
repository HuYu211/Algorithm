## 独一无二的出现次数
- 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
- 初始化
```javascript
let arr = [1,2,2,1,1,3]
```
### 方法1 -- 使用哈希表
- 使用map表记录，格式为[数字，数字出现次数]，之后用数组记录下map表中所有数字出现的次数，数组排序后判断数组中是否有重复的数，有则返回false，否则返回true
- 时间复杂度：O(N)，其中 N 为数组的长度。遍历原始数组需要 O(N) 时间，而遍历中间过程产生的哈希表又需要 O(N) 的时间，遍历结果数组需要 O(N) 的时间
- 空间复杂度：O(N)
```javascript
var uniqueOccurrences = function(arr) {
    let map = new Map();
    for(let i = 0; i　< arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i],parseInt(map.get(arr[i])+1))
        }else{
            map.set(arr[i],1)
        }
    }
    let result = [];
    for(let key of map.values()){
        result.push(key);
    }
    result.sort();
    for(let i = 0; i < result.length; i++){
        if(result[i] === result[i+1]){
            return false;
        }
    }
    return true;
};
```

### 方法2 -- 哈希表结合Set()
- 使用map表记录，格式为[数字，数字出现次数]，之后用Set对象记录下map表中所有数字出现的次数，由于Set的成员都是唯一的，我们只需比对Set与Map的长度是否一致即可判断次数是否重复
- 时间复杂度：O(N)，其中 N 为数组的长度。遍历原始数组需要 O(N) 时间，而遍历中间过程产生的哈希表又需要 O(N) 的时间
- 空间复杂度：O(N)
```javascript
var uniqueOccurrences = function(arr) {
    let map = new Map();
    for(let i = 0; i <arr.length; i++){
        if(map.has(arr[i])){
            //如果map中存在这个数，则将它原本的value取出加1赋值（使用parseInt()确保相加不会出错）
            map.set(arr[i],parseInt(map.get(arr[i])+1));
        }else{
            map.set(arr[i],1)
        }
    }
    let times = new Set();
    for(let [key, value] of map){
        times.add(value)
    }
    return times.size === map.size;

}
```