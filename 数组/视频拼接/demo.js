const clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], T = 10;

// 方法1 -- 动态规划
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
console.log(videoStitching(clips, T));