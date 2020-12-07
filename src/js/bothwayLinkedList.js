class Node {
  constructor (element) {
    this.element = element;
    this.next = null;
    this.pre = null;
  }
}

class bothwayLList {
  constructor () {
    this.head = new Node('head');
  }
  insert (newElement, element) {
    const newNode = new Node(newElement);
    const current = this.find(element);
    newNode.pre = current;
    newNode.next = current.next;
    current.next = newNode;
  }
  find (element) {
    let current = this.head;
    while (current.element !== element) {
      current = current.next
    }
    return current;
  }
}