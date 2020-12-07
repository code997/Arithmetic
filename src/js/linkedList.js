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
    while (!(current.next === null)) {
      console.log(current.next.element);
      current = current.next;
    }
  }
  remove (element) {
    const preNode = this.findPreNode(element);
    console.log(preNode, 'preNode');
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
}

const cities = new LList();
cities.insert('Beijing', 'head');
cities.insert('Shanghai', 'Beijing');
cities.insert('Henan', 'Shanghai');
cities.display();
cities.remove('Shanghai');
cities.display();
console.log(cities);