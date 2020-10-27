## 二叉树前序遍历
- 给定一个二叉树，返回它的 前序 遍历
- 二叉树的前序遍历：按照访问根节点——左子树——右子树的方式遍历这棵树，而在访问左子树或者右子树的时候，我们按照同样的方式遍历，直到遍历完整棵树
### 初始化二叉树
- [1,null,2,3]
```javascript
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
```
### 方法1 -- 递归
- 按照定义，我们只要首先将 root 节点的值加入答案，然后递归调用 preorder(root.left) 来遍历 root 节点的左子树，最后递归调用 preorder(root.right) 来遍历 root 节点的右子树即可，递归终止的条件为碰到空节点
- 时间复杂度：O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次
- 空间复杂度：O(n)，为递归过程中栈的开销，平均情况下为 O(log n)，最坏情况下树呈现链状，为 O(n)
```javascript
var preorderTraversal = function(root) {
    let arr = [];
    qianxu(root,arr);
    return arr;
};
function qianxu(root, arr){
    if(root !== null){
        arr.push(root.val);
        qianxu(root.left,arr);
        qianxu(root.right,arr)
    }
}
```
### 方法2 -- 迭代
- 设置栈，先进后出，出的节点把左右子节点已进栈，首先添加右节点再添加左节点，这样可以让左节点先出栈
- 时间复杂度：O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次
- 空间复杂度：O(n)，为迭代过程中显式栈的开销，平均情况下为 O(logn)，最坏情况下树呈现链状，为 O(n)
```javascript
var preorderTraversal2 = function (root) {
    let stack = [];
    let result = [];
    if(root === null){
        return null;
    }
    stack.push(root);
    while(stack.length !== 0){
        let node = stack.pop();
        result.push(node.val);
        if(node.right){
            stack.push(node.right)
        }
        if(node.left){
            stack.push(node.left)
        }
    }
    return result;
}
```