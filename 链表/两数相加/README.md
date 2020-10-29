## 两数相加
- 给出两个非空的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储一位数字。如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和

### 方法1 -- 模拟
- 我们同时遍历两个链表，逐位计算它们的和，并与当前位置的进位值相加。具体而言，如果当前两个链表处相应位置的数字为 n1,n2，进位值为 carry，则它们的和为 n1+n2+carry（sum）；其中，答案链表处相应位置的数字为 (sum % 10)，而新的进位值为 Int(sum / 10) 。如果两个链表的长度不同，则可以认为长度短的链表的后面有若干个 0 。此外，如果链表遍历结束后，有 carry > 0，还需要在答案链表的后面附加一个节点，节点的值为 carry
- 时间复杂度：O(max(m,n))，其中 m,n 为两个链表的长度。我们要遍历两个链表的全部位置，而处理每个位置只需要 O(1) 的时间
- 空间复杂度：O(max(m,n))。答案链表的长度最多为较长链表的长度 +1

```javascript
var addTwoNumbers = function(l1, l2) {
    let head = null, tail = null;
    //初始化carry，用于记录进位
    let carry = 0;
    //循环直到两个链表都指向空
    while(l1 || l2){
        //如果l1存在则取l1的值，否则为0
        let num1 = l1 ? l1.val : 0;
        //如果l2存在则取l2的值，否则为0
        let num2 = l2 ? l2.val : 0;
        //将l1与l2与carry相加
        let sum = num1 + num2 + carry;
        //如果head为null，则将head指向tail并且给tail赋值，值为sum余10；
        if(!head){
            head = tail = new ListNode(sum % 10);
        }else{
            //给tail.next赋值，值为sum余10,并让tail指向下一个节点
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        //取出sum的进位
        carry = parseInt(sum / 10)
        //如果l1存在则l1指向下一个节点
        if(l1){
            l1 = l1.next;
        }
        //如果l2存在则l2指向下一个节点
        if(l2){
            l2 = l2.next;
        }
    }
    //循环结束时如果进位大于0，则赋值给tail下一个节点
    if(carry > 0){
        tail.next = new ListNode(carry)
    }
    return head;
};
```
