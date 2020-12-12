// 节点类
class Node {
  constructor (node) {
    this.element = node;
    this.next = null;
  }
}
// 链表类
class LList {
  constructor () {
    this.head = new Node('head');
    // this.head.next = this.head; // 循环链表
  }
  insert (newElement, element) {
    const newNode = new Node(newElement);
    const current = this.find(element);
    newNode.next = current.next;
    current.next = newNode;
  }
  find (element) {
    let current = this.head;
    while (current.element !== element) {
      current = current.next;
    }
    return current;
  }
  display () {
    let current = this.head;
    while (
      (current.next !== null) &&
      (current.next.element !== 'head') // 循环链表截至条件
    ) {
      console.log(current.next.element);
      current = current.next;
    }
  }
  remove (element) {
    const preNode = this.findPreNode(element);
    if (preNode.next !== null) {
      preNode.next = preNode.next.next;
    }
  }
  findPreNode (element) {
    let current = this.head;
    while (current.next !== null && current.next.element !== element) {
      current = current.next;
    }
    return current;
  }
  advance (element, n) {
    const preQueue = [];
    let [current, insertNode,targetNode, prevNode, nextNode] = [this.head, null, null, null, null];
    while(current.next && current.next.element !== 'head' && current.next.element !== element) {
      preQueue.push(current.next);
      current = current.next;
    }
    insertNode = preQueue[preQueue.length - n - 1] || this.head;
    targetNode = current.next;
    prevNode = preQueue[preQueue.length - 1];
    nextNode = current.next.next;
    if (!targetNode || !insertNode || !prevNode) return;
    [targetNode.next, insertNode.next, prevNode.next] = [insertNode.next,targetNode, nextNode]
  }
  count(){
    let current = this.head;
    var i = 0;
    while (!(current.next.element == "head")){
      current = current.next;
        i++;
    }
    return i;
  }
}

let cities = new LList();
cities.insert('Beijing', 'head');
cities.insert('Shanghai', 'Beijing');
cities.insert('Henan', 'Shanghai');
cities.insert('Shangqiu', 'Henan');
cities.insert('Nanyang', 'Shangqiu');
// cities.display();
// cities.remove('Shanghai');
// cities.display();
// cities.advance('Shangqiu', 2);
// cities.display();
// console.log(cities);

/**
 * 反转一个单向链表
 * */ 
// 输入：1-->2-->3-->4-->5
// 输出：5-->4-->3-->2-->1
// function reserveLList (head) {
//   let current = head;
//   let prev = null;
//   while (current) {
//     let next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
// }

// cities = reserveLList(cities.head);
// console.log(cities, 'cities');

// function reserveLList1 (head) {
//   let [current, prev] = [head, null];
//   while (current) {
//     [current.next, prev, current] = [prev, current, current.next];
//   }
//   return prev;
// }

// cities = reserveLList1(cities.head);
// console.log(cities, 'cities1')

/**
 * 链表两两反转
 * */ 
// 输入：1-->2-->3-->4-->5
// 输出：2-->1-->4-->3-->1
// function reserveLListTwo (cities) {
//   let current = cities.head.next;
//   let i = 1;
//   while (current.next.element !== 'head') {
//     if (i % 2 === 0) {
//       cities.advance(current.element, 1);
//       current = current.next.next;
//     } else {
//       current = current.next;
//     }
//     i++;
//   }
// }
// 输入：1-->2-->3-->4-->5
// 输出：2-->1-->4-->3-->5
// function swapPairs (head) {
  // const dummy = new Node(null);
  // dummy.next = head;
  // let prev = dummy;
  // let current = prev;
  // while (current.next && current.next.next) {
  //   let next = current.next;
  //   prev.next = next;
  //   current.next = next.next;
  //   next.next = current;
  //   prev = current;
  //   current = current.next;
  // }
  // return dummy.next;
// }

// 输入：1-->2-->3-->4-->5
// 输出：2-->1-->4-->3-->5
function swapPairs (head) {
  const dummy = new Node(null);
  dummy.next = head.next;
  let prev = dummy;
  let current = prev.next;
  while (current.next && current.next.next) {
    let next = current.next;
    prev.next = current.next;
    current.next = next.next;
    next.next = current;
    prev = current;
    current = current.next;
  }
  return dummy.next;
}
let nlist = new LList();
nlist.insert(1, 'head');
nlist.insert(2, 1);
nlist.insert(3, 2);
nlist.insert(4, 3);
nlist.insert(5, 4);
nlist.insert(6, 5);
nlist.insert(7, 6);
nlist.display();
console.log('=========1');
nlist = swapPairs(nlist.head);
console.log(nlist);
// cities.display();



/**
 * 一共41个人、第一个开始报数、每数到第3个人（中间搁两个）就将第三个人杀死，循环该过程。
 * 计算：站在第几位的两个人最后不会被杀死
 * */ 
// const warList = new LList();
// for(let i = 1; i <= 41; i++) {
//   warList.insert(i, i === 1 ? 'head': i - 1);
// }
// async function continueIndex (head, warList) {
//   let i = 1;
//   let current = head;
//   while (warList.count() > 2) {
//     if (current.next.element === 'head') {
//       current = current.next.next;
//     } else {
//       current = current.next;
//     }
//     if (i % 3 === 0) {
//       warList.remove(current.element);
//     }
//     i++;
//   }
//   warList.display();
// }
// continueIndex(warList.head, warList);

// function sleep (time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, time || 1000)
//   })
// }