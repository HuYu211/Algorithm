//初始化二叉树
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
//root[1,null,2,3] root2[1,null,2,3]
let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

let root2 = new TreeNode(1);
root2.right = new TreeNode(2);
root2.right.left = new TreeNode(3);

// 方法1 -- 深度遍历
// 如果两个二叉树都不为空，那么首先判断它们的根节点的值是否相同，若不相同则两个二叉树一定不同，若相同，再分别判断两个二叉树的左子树是否相同以及右子树是否相同。这是一个递归的过程，因此可以使用深度优先搜索，递归地判断两个二叉树是否相同
// 时间复杂度：O(min(m,n))，其中 m 和 n 分别是两个二叉树的节点数。对两个二叉树同时进行深度优先搜索，只有当两个二叉树中的对应节点都不为空时才会访问到该节点，因此被访问到的节点数不会超过较小的二叉树的节点数
// 空间复杂度：O(min(m,n))，其中 m 和 n 分别是两个二叉树的节点数。空间复杂度取决于递归调用的层数，递归调用的层数不会超过较小的二叉树的最大高度，最坏情况下，二叉树的高度等于节点数


var isSameTree = function(p, q) {
    return dfs(p ,q)
};
function dfs(p, q){
    if(p === null && q === null){
        return true
    }else if(p === null || q === null){
        return false;
    }else if(p.val === q.val){
        return dfs(p.left, q.left) && dfs(p.right, q.right);
    }else {
        return false;
    }
}


//方法2 -- 广度遍历
var isSameTree2 = function(p, q) {
    let stack1= [];
    let stack2 = [];
    if(p === null && q === null){
        return true;
    }else if(p === null || q === null){
        return false;
    }else{
        stack1.push(p);
        stack2.push(q);
    }
    while(stack1.length !== 0 && stack2.length !== 0){
        let node1 = stack1.pop();
        let node2 = stack2.pop();
        if(node1.val === node2.val){
            if(node1.right && node2.right){
                stack1.push(node1.right);
                stack2.push(node2.right);
            }else if(node1.left && node2.left){
                stack1.push(node1.left);
                stack2.push(node2.left);
            }else if(node1.left === null ^ node2.left === null){
                return false;
            }else if(node1.right === null ^ node2.right === null){
                return false;
            }
        }else{
            return false;
        }
    }
    return true;
};
console.log(isSameTree(root,root2));