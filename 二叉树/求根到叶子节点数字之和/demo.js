//初始化二叉树
//[1,2,3]
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

//方法1 -- 深度遍历
// 从根节点开始，遍历每个节点，如果遇到叶子节点，则将叶子节点对应的数字加到数字之和。如果当前节点不是叶子节点，则计算其子节点对应的数字，然后对子节点递归遍历
// 时间复杂度：O(n)，其中 n 是二叉树的节点个数。对每个节点访问一次。
// 空间复杂度：O(n)，其中 n 是二叉树的节点个数。空间复杂度主要取决于递归调用的栈空间，递归栈的深度等于二叉树的高度，最坏情况下，二叉树的高度等于节点个数，空间复杂度为 O(n)

var sumNumbers = function(root) {
    return dfs(root, 0)
};
function dfs(root,sum){
    if(root === null){
        return 0;
    }
    sum = sum * 10 + root.val;
    if(root.left === null && root.right === null){
        return sum;
    }else{
        return dfs(root.left,sum) + dfs(root.right,sum);
    }
}

//方法2 -- 广度遍历
// 时间复杂度：O(n)，其中 n 是二叉树的节点个数。对每个节点访问一次。
// 空间复杂度：O(n)，其中 n 是二叉树的节点个数。空间复杂度主要取决于队列，每个队列中的元素个数不会超过 n

var sumNumbers2 = function(root) {
    if(root === null){
        return 0;
    }
    let sum = 0;
    let stack1 = [];
    let stack2 = [];
    stack1.push(root);
    stack2.push(root.val);
    while(stack1.length !== 0){
        let node = stack1.shift();
        let num = stack2.shift();
        if(node.left === null && node.right === null){
            sum += num;
        }else{
            if(node.left !== null){
                stack1.push(node.left);
                stack2.push(node.left.val + num * 10);
            }
            if(node.right !== null){
                stack1.push(node.right);
                stack2.push(node.right.val + num * 10);
            }
        }
    }
    return sum;
};