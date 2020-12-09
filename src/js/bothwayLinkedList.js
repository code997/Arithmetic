class Node {
  constructor (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class BothwayLList {
  constructor () {
    this.head = new Node('head');
  }
  insert (newElement, element) {
    const newNode = new Node(newElement);
    const current = this.find(element);
    newNode.prev = current;
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
  remove (element) {
    const current = this.find(element);
    if (current.next !== null) { // 无法删除最后一个节点
      current.prev.next = current.next;
      current.next.prev = current.prev;
      current.prev = null;
      current.next = null;
    } else {
      current.prev.next = null;
    }
  }
  findLast () {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }
  display () {
    let current = this.head;
    while (!(current.next === null)) {
      console.log(current.next.element);
      current = current.next;
    }
  }
  // 扩展：使当前节点向前移动n个节点
  advance (element, n) {
    const queue = [];
    let [current, positionNode] = [this.head, null];
    while (current.next && current.next.element !== element) {
      queue.push(current.next);
      current = current.next;
    }
    // 目标节点
    current = current.next;
    // 被插入位置节点
    positionNode = queue[queue.length - n];
    [
      current.prev.next,
      current.next.prev,
      positionNode.prev.next,
      positionNode.prev,
      current.next,
      current.prev
    ] = [
      current.next,
      current.prev,
      current,
      current,
      positionNode,
      positionNode.prev
    ]
  }
  // 扩展：使当前节点向后移动n个节点
  back (element, n) {
    let [current, targetNode, positionNode] = [this.head, null, null];
    // 找到当前节点位置
    while (current.next && current.next.element !== element) {
      current = current.next;
    }
    targetNode = current.next;
    // 向后推移n个节点位置
    let num = 0;
    while (current.next && num < n) {
      current = current.next;
      num += 1;
    }
    positionNode = current.next;
    [
      targetNode.next.prev,
      targetNode.prev.next,
      positionNode.next,
      positionNode.next.prev,
      targetNode.next,
      targetNode.prev
    ] = [
      targetNode.prev,
      targetNode.next,
      targetNode,
      targetNode,
      positionNode.next,
      positionNode
    ]
  }
}

const cities = new BothwayLList();
cities.insert('Beijing', 'head');
cities.insert('Shanghai', 'Beijing');
cities.insert('Henan', 'Shanghai');
cities.insert('Shangqiu', 'Henan');
cities.insert('Nanyang', 'Shangqiu');
// cities.display();
// cities.advance('Henan', 1);
// cities.display();
console.log(cities);
cities.back('Beijing', 3);
cities.display();
// console.log(cities.findLast());
// console.log(cities.findLast());
// console.log(cities)