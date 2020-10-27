//初始化二叉树
//[1,null,2,3]
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

// 方法1 -- 递归
var postorderTraversal = function(root) {
    let arr = [];
    dfs(arr, root);
    return arr;
};
function dfs(arr, root){
    if(root){
        dfs(arr, root.left);
        dfs(arr, root.right);
        arr.push(root.val);
    }else{
        return
    }
}

// 方法2 -- 迭代
var postorderTraversal2 = function(root) {
    let stack = [];
    let result = [];
    if(root){
        stack.push(root);
    }
    while(stack.length !== 0){
        root = stack.pop();
        if(root){
            stack.push(root);
            stack.push(null)
            if(root.right){
            stack.push(root.right);
            }
            if(root.left){
            stack.push(root.left);
            }
        }else{
            result.push(stack.pop().val)
        }
    }
    return result;
}