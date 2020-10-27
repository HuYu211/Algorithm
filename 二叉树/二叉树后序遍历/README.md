## 二叉树后序遍历
- 二叉树的后序遍历：按照访问左子树——右子树——根节点的方式遍历这棵树，而在访问左子树或者右子树的时候，我们按照同样的方式遍历，直到遍历完整棵树
### 方法1 -- 递归
- 定义 postorder(root) 表示当前遍历到 root 节点的答案。按照定义，我们只要递归调用 postorder(root->left) 来遍历 root 节点的左子树，然后递归调用 postorder(root->right) 来遍历 root 节点的右子树，最后将 root 节点的值加入答案即可，递归终止的条件为碰到空节点
- 时间复杂度：O(n)，其中 nn 是二叉搜索树的节点数。每一个节点恰好被遍历一次。
- 空间复杂度：O(n)，为递归过程中栈的开销，平均情况下为 O(logn)，最坏情况下树呈现链状，为 O(n)
```javascript
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

```
### 方法2 -- 迭代
- 设置栈，先进后出，出的左节点把根节点和右节点加进栈，首先添加根节点再添加右节点，这样可以让右节点先出栈
- 时间复杂度：O(n)，其中 nn 是二叉搜索树的节点数。每一个节点恰好被遍历一次。
- 空间复杂度：O(n)，为迭代过程中显式栈的开销，平均情况下为 O(logn)，最坏情况下树呈现链状，为 O(n)

```javascript
var postorderTraversal = function(root) {
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
```