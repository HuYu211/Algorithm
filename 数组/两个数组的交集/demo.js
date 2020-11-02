// 初始化数据
let nums1 = [1,2,2,1], nums2 = [2,2];

//方法1 -- 暴力循环
var intersection = function(nums1, nums2) {
    let result = [];
    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums1[i] === nums2[j]){
                result.push(nums1[i]);
            }
        }
    } 
   result = [...new Set(result)];
   return result;
};


// 方法2 -- 两个set集和
var intersection2 = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    return set(set1,set2)
};

function set(set1, set2){
    if(set1.size > set2.size){
        return set(set2, set1)
    }
    let result = new Set();
    for(const num of set1){
        if(set2.has(num)){
            result.add(num)
        }
    }
    return [...result];
}