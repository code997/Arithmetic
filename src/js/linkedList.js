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
    this.head.next = this.head; // 循环链表
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
      !(current.next === null) &&
      !(current.next.element === 'head') // 循环链表截至条件
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
console.log(cities);

/**
 * 反转一个单向链表
 * */ 

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


const warList = new LList();
for(let i = 1; i <= 41; i++) {
  warList.insert(i, i === 1 ? 'head': i - 1);
}
async function continueIndex (head, warList) {
  let i = 1;
  let current = head;
  while (warList.count() > 2) {
    await sleep(100);
    if (current.next.element === 'head') {
      current = current.next.next;
    } else {
      current = current.next;
    }
    if (i % 3 === 0) {
      warList.remove(current.element);
      console.log('移除' + current.element);
    }
    i++;
  }
  warList.display();
}
continueIndex(warList.head, warList);

function sleep (time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time || 1000)
  })
}