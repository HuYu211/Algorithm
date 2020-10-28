//初始化
let arr = [1,2,2,1,1,3]

// 方法1 -- 使用map表
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
console.log(uniqueOccurrences(arr));

//方法2 -- map结合set
var uniqueOccurrences2 = function(arr) {
    let map = new Map();
    for(let i = 0; i <arr.length; i++){
        if(map.has(arr[i])){
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
console.log(uniqueOccurrences2(arr));