## 题目描述
- 你将会获得一系列视频片段，这些片段来自于一项持续时长为 T 秒的体育赛事。这些片段可能有所重叠，也可能长度不一,视频片段 clips[i] 都用区间进行表示：开始于 clips[i][0] 并于 clips[i][1] 结束。我们甚至可以对这些片段自由地再剪辑，例如片段 [0, 7] 可以剪切成 [0, 1] + [1, 3] + [3, 7] 三部分,我们需要将这些片段进行再剪辑，并将剪辑后的内容拼接成覆盖整个运动过程的片段（[0, T]）。返回所需片段的最小数目，如果无法完成该任务，则返回 -1

### 动态规划--示例数据
clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], T = 10
1. 排序 clips = [[0,2],[1,5],[1,9],[4,6],[5,9],[8,10]]
2. 设置dp dp=[0,101,101,101,101,101,101,101,101,101,101] (T+1)
3. 遍历clips
    1. start = 0, end = 2 遍历j(start+1,end)
        1. dp[1] = min(dp[1], dp[0] + 1) = min(101, 1) = 1
        2. dp[2] = min(dp[2], dp[0] + 1) = 1
    2. start = 1, end = 5
        1. dp[2] = min(dp[2], dp[1] + 1) = min(101, 2) = 2
        2. dp[3] = min(dp[3], dp[1] + 1) = 2
        3. dp[4] = min(dp[4], dp[1] + 1) = 2
        4. dp[5] = min(dp[5], dp[1] + 1) = 2
    3. start = 1, end = 9
        1. dp[2] = min(dp[2], dp[1] + 1) = min(2, 2) = 2
        2. dp[3-5] = 2
        3. dp[6] = min(dp[6], dp[1] + 1) = min(101, 2) = 2
        4. dp[7-9] = 2
    4. start = 4, end = 6
        1. dp[5] = min(dp[5], dp[4] + 1) = min(2, 3) = 2
        2. dp[6] = min(dp[6], dp[4] + 1) = min(2, 3) = 2
    5. start = 5, end = 9
        1. dp[6] = min(dp[6], dp[5] + 1) = min(2, 3) = 2
        2. dp[7-9] = min(2, 3) = 2
    6. start = 8, end = 10
        1. dp[9] = min(dp[9], dp[8] + 1) = min(2, 3) = 2
        2. dp[10] = min(dp[10], dp[8] + 1) = min(101, 3) = 3

### 方法1 -- 动态规划
```javascript
var videoStitching = function(clips, T){
    //先将数组排序
    clips.sort(function(a,b){
        if(a[0]===b[0])return a[1]-b[1];
        return a[0]-b[0];
    })
    //创建新数组并赋值为最大
    let dp = new Array(T + 1).fill(101);
    //数组第一个值设置为0
    dp[0] = 0;
    for(let i = 0; i < clips.length; i++){
        //赋值开始与结束值
        let [start, end] = clips[i];
        for(let j = start + 1; j <=end; j++){
            //判断本片段开始时已走步数加1是否大于现在的步数
            dp[j] = Math.min(dp[j], dp[start] + 1);
        }
    }
    if(dp[T] === 101){
        return -1;
    }
    return dp[T]
}
```



