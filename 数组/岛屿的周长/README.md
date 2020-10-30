## 岛屿的周长
- 初始化数据
```javascript
let grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
```
### 方法1 -- 暴力循环+四个方法判断+边界判断
- 对于一个陆地格子的每条边，它被算作岛屿的周长当且仅当这条边为网格的边界或者相邻的另一个格子为水域。 因此，我们可以遍历每个陆地格子，看其四个方向是否为边界或者水域，如果是则sum+1
- 时间复杂度：O(nm)，其中 nn 为网格的高度，m 为网格的宽度。我们需要遍历每个格子
- 空间复杂度：O(1)。只需要常数空间存放若干变量


```javascript
var islandPerimeter = function(grid) {
    let sum = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            console.log(i+'+'+j);
            if(grid[i][j] === 1){
                if(i !== 0 && grid[i-1][j] ===0){
                    console.log('i !== 0');
                    sum += 1;
                }
                if((i !== grid.length-1) && grid[i+1][j] === 0){
                    console.log('i !== length');
                    sum += 1;
                }
                if(j !== 0 && grid[i][j-1] === 0){
                    console.log('j !== 0');
                    sum += 1;
                }
                if((j !== grid[i].length-1) && grid[i][j+1] === 0){
                    console.log('j !== length');
                    sum += 1;
                }
                if(i === 0){
                    console.log('i+1');
                    sum += 1;
                }
                if(j === 0){
                    console.log('j+1');
                    sum += 1
                }
                if(i === grid.length-1){
                    console.log('i+1');
                    sum += 1
                }
                if(j === grid[i].length-1){
                    console.log('j+1');
                    sum += 1;
                }
            }
        }
    }
    return sum;
};
```
### 方法2 -- 暴力循环+四个方法判断
- 对于一个陆地格子的每条边，我们可以把陆地的四条边都加上sum，然后判断他的四条边是否有陆地，有的话则sub+1，最后用sum减去sub得到周长
- 时间复杂度：O(nm)，其中 nn 为网格的高度，m 为网格的宽度。我们需要遍历每个格子
- 空间复杂度：O(2)。只需要常数空间存放若干变量
```javascript
var islandPerimeter = function(grid) {
    let sum = 0;
    let sub = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === 1){
                sum += 4;
                if(i !== 0 && grid[i-1][j] === 1){
                    sub += 1;
                }
                if((i !== grid.length-1) && grid[i+1][j] === 1){
                    sub += 1;
                }
                if(j !== 0 && grid[i][j-1] === 1){
                    sub += 1;
                }
                if((j !== grid[i].length-1) && grid[i][j+1] === 1){
                    sub += 1;
                }
            }
        }
    }
    sum = sum - sub;
    return sum;
};
```