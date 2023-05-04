const Node = function (v = null, next = null) {
  return {
    value: v,
    next: next,
  };
};

const LinkedList = function () {
  return {
    head: null,

    // append new node to the tail of the linked list
    append(v) {
      let newNode = Node(v);

      if (this.head === null) {
        this.head = newNode;
      } else {
        let tail = this.head;
        while (tail.next !== null) {
          tail = tail.next;
        }
        tail.next = newNode;
      }
    },

    //prepend new node to the head of the linked list
    prepend(v) {
      // make the head of the list to the next node, via Node factory function and insert the newly created node to the head
      let newNode = Node(v, this.head);
      this.head = newNode;
    },

    //return length of linked list
    size() {
      let current = this.head;
      let counter = 0;
      while (current !== null) {
        counter += 1;
        current = current.next;
      }
      console.log(`size is : `, counter);
      return counter;
    },

    //return head of linked list
    getHead() {
      let head = this.head.value;
      console.log(`head of list : `, head);
      return this.head;
    },

    //return tail of linked list
    getTail() {
      let tail = this.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
      console.log(`tail of list : `, tail.value);
      return tail;
    },

    //find node value at given index
    at(index) {
      if (index < 0) return;
      if (index > this.size()) {
        console.log('index out of bounds');
      }
      let head = this.head;
      for (let i = 0; i < index; i++) {
        head = head.next;
      }

      console.log(head.value);
      return head;
    },

    //remove last value of the linked list
    pop() {
      let tail = this.head;
      while (tail.next.next) {
        tail = tail.next;
      }
      //reason i used tail.next.next instead of tail.next and simply just tail on line 82 is that we need to be able to return a value, if i were to return
      //tail after it becoming null it wont be a functioning function, as we can't select & return the previous value
      console.log(`popped, tail :`, tail.next);
      tail.next = null;
      return tail;
    },

    contains(v) {
      let current = this.head;

      while (current) {
        if (current.value === v) {
          console.log(`contains ${v} :`, true);
          return true;
        }
        current = current.next;
      }
      console.log(`contains ${v} :`, false);
      return false;
    },

    find(v) {
      if (v < 0) return;
      let current = this.head;

      let index = 0;
      while (current) {
        if (current.value === v) {
          console.log(`value : ${v} found at index : `, index);
          return index;
        }
        index++;
        current = current.next;
      }
      console.log(`value is not in list`);
      return false;
    },

    toString() {
      current = this.head;
      let str = '';
      while (current) {
        str += `(${current.value}) -> `;
        current = current.next;
      }
      str += 'null';
      console.log(str);
      return str;
    },

    insertAt(v, index) {
      let current = this.head;
      let i = 0;
      while (current) {
        if (i === index - 1) {
          const newNode = Node(v, current.next);
          current.next = newNode;
        }
        current = current.next;
        i++;
      }
    },

    removeAt(index) {
      let current = this.head;
      let i = 0;
      while (current) {
        if (i === index - 1) {
          current.next = current.next.next;
        }
        i++;
        current = current.next;
      }
    },
  };
};

const list = LinkedList();
