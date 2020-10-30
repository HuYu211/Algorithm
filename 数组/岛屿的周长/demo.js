let grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
//方法1 -- 暴力循环
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
        console.log('sum'+sum);
    }
    return sum;
};
// console.log(islandPerimeter(grid));
// 方法2 -- 暴力循环
var islandPerimeter2 = function(grid) {
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
console.log(islandPerimeter2(grid));