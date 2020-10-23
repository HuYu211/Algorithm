## 如何判断链表是不是回文呢？

1. 找到链表的中间节点
2. 将链表后半部分反转
3. 比较链表前半部分和后半部分是否相同

## 简单做一个链表
- 链表结构为 "1->2->2->1"
```javascript
function ListNode(val){
    this.val = val;
    this.next = null;
}
let head = new ListNode('1');
head.next = new ListNode('2')
head.next.next = new ListNode('2')
head.next.next.next = new ListNode('1')
```

## 方法1 -- 将值复制给数组然后切割数组比对
- 此方法为首先的想法，之后发现空间复杂度与时间复杂度都较高，只做一种思想的参考
1. 遍历链表，将所有的值放入数组中，之后将数组分为两部分
2. 一个数组部分从index:0到index:Math:floor(arr.length/2)--数组长度一半向下取整
3. 另一部分数组部分从index:Math:floor(arr.length/2)到末尾
4. 其中如果数组长度为基数的话忽略最中间的值
5. 将第二部分的数组翻转然后逐个比对值即可，值不同返回false，否则返回true
```javascript
var isPalindrome = function(head) {
    let arr = [];
    if(head === null){
        return true
    }
    //将链表的值全部加入数组
    while(head !== null){
        arr.push(head.val);
        head = head.next;
    }
    //将数组划分为两部分
    let arr1 = arr.slice(0,Math.floor(arr.length/2))
    let arr2 = arr.slice(-(Math.floor(arr.length/2)))
    //翻转第二个数组
    arr2 = arr2.reverse();
    //遍历判断两个数组内值是否相同
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }
    return true;
};
```
## 方法2 -- 将值复制到数组中后用双指针法
1. 复制链表值到数组列表中
2. 使用双指针法判断是否为回文
3. 一个指针指向数组头部，一个指针指向数组尾部
4. 两个指针同时向数组中间移动，停止条件为头部指针等于或大于尾部指针
5. 如果指针指向的两个值不相等则返回false，否则返回true 

- 时间复杂度：O(n)，其中 n 指的是链表的元素个数。
第一步： 遍历链表并将值复制到数组中，O(n)。
第二步：双指针判断是否为回文，执行了 O(n/2) 次的判断，即 O(n)。
- 总的时间复杂度：O(2n) = O(n)。
- 空间复杂度：O(n)，其中 n 指的是链表的元素个数，我们使用了一个数组列表存放链表的元素值

```javascript
var isPalindrome = function(head){
    let arr = [];
    if(head === null){
        return true;
    }
    while(head !== null){
        arr.push(head.val);
        head = head.next;
    }
    //设置i为数组头部，j为数组尾部，循环条件为i<j，i自增，j自减
    for(let i = 0, j = arr.length - 1; i < j; i++, j--){
        if(arr[i] !== arr[j]){
            return false;
        }
    }
    return true;
}
```

## 方法3 -- 递归
1. 定义一个frontPointer指向第一个节点
2. 遍历recursivelyCheck函数使currentNode指向最后一个节点（判断currentNode是否为空，为空则返回true，在上一级则开始比对frontPointer与currentNode的值）
3. 如果值相等则frontPointer指向下一个节点，currentNode返回到上一个节点
4. 值不相等则层层返回false
- 时间复杂度：O(n)，其中 n 指的是链表的大小。
- 空间复杂度：O(n)，其中 n 指的是链表的大小。
```javascript
let frontPointer;
var isPalindrome = function(head){
    frontPointer = head;
    return recursivelyCheck(head)
}
const recursivelyCheck = function(currentNode){
    //判断传来的节点是否为空，为空则返回true返回上一级
    if(currentNode !== null){
        //判断下一级是否已经比对完成，返回true则继续比对，返回false则继续向上级返回false
        if(!recursivelyCheck(currentNode.next)){
            return false;
        }
        //比对此节点与frontPointer节点值是否相等
        if(currentNode.val !== frontPointer.val){
            return false;
        }
        // frontPointer节点指向下一节点
        frontPointer = frontPointer.next;
    }
    return true;
}
```