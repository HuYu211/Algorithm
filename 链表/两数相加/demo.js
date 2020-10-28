function ListNode(val){
    this.val = val;
    this.next = null;
}

let l1 = new ListNode('2');
l1.next = new ListNode('4')
l1.next.next = new ListNode('3')

let l2 = new ListNode('5');
l2.next = new ListNode('6')
l2.next.next = new ListNode('4')

//方法1 -- 模拟
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
console.log(addTwoNumbers(l1,l2));