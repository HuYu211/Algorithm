## 有多少小于当前数字的数字
- 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。以数组形式返回答案。
- 初始化数组
```javascript
let nums = [8,1,2,2,3]
```
### 方法1 -- 暴力循环
- 对于数组中的每一个元素，我们都遍历数组一次，统计小于当前元素的数的数目
- 时间复杂度：O(N^2)，其中 NN 为数组的长度。
- 空间复杂度：O(1)。注意我们不计算答案数组的空间占用
```javascript
var smallerNumbersThanCurrent = function(nums) {
    let num = [];
    for(let i = 0; i < nums.length; i++){
        //初始化数目
        let sub = 0;
        for(let j = 0; j != i, j < nums.length; j++){
            //当j>i时，数目加1
            if(nums[i] > nums[j]){
                sub++
            }
        }
        num.push(sub);
    }
    return num;
}
```
### 方法2 -- 快速排序
- 将数组排序，并记录每一个数在原数组中的位置。对于排序后的数组中的每一个数，我们找出其左侧第一个小于它的数，这样就能够知道数组中小于该数的数量
- 时间复杂度：O(N\log N)，其中 N 为数组的长度。排序需要 O(N\log N) 的时间，随后需要 O(N) 时间来遍历。
- 空间复杂度：O(N)。因为要额外开辟一个数组
```javascript
var smallerNumbersThanCurrent = function(nums) {
    //新建二维数组
    const data = new Array(nums.length).fill(0).map(v => new Array(2).fill(0));
    //给二维数组赋值，第一个为数字，第二个为数组原本下标
    for(let i = 0; i < nums.length; i++){
        data[i][0] = nums[i];
        data[i][1] = i;
    }
    //按照数字排序
    data.sort((a, b) => a[0]-b[0]);
    //新建数组储存结果
    let ret = new Array(nums.length);
    //初始化基准点
    let prev = -1;
    for(let i = 0; i < nums.length; i++){
        //如果基准点是初始值或这个值不等于前一个值，则基准点移动到i
        if(prev === -1 || data[i][0] !== data[i-1][0]){
            prev = i;
        }
        //利用二维数组储存的下标赋值结果
        ret[data[i][1]] = prev
    }
    return ret;
}
```
### 方法3 -- 计数排序
- 注意到数组元素的值域为 [0,100][0,100]，所以可以考虑建立一个频次数组 cntcnt ，cnt[i]cnt[i] 表示数字 ii 出现的次数。那么对于数字 ii 而言，小于它的数目就为 cnt[0...i-1]cnt[0...i−1] 的总和
- 时间复杂度：O(N + K)，其中 K 为值域大小。需要遍历两次原数组，同时遍历一次频次数组 cnt找出前缀和
- 空间复杂度：O(K)。因为要额外开辟一个值域大小的数组

```javascript
var smallerNumbersThanCurrent = function(nums) {
    //创建一个长度101的数组
    const cnt = new Array(101).fill(0);
    const n = nums.length;
    //遍历nums，使大数组中下标为nums值的地方+1
    for(let i = 0; i < n; ++i){
        cnt[nums[i]] += 1;
    }
    //遍历大数组，从0加到100 
    for(let i = 1; i <= 100; ++i){
        cnt[i] += cnt[i - 1];
    }
    const ret = [];
    // 将下标为小数组值-1的值提出，就是这个值前有几个数字
    for(let i = 0; i < n;++i){
        ret.push(nums[i] ? cnt[nums[i] - 1] : 0)
    }
    return ret;
}
```
