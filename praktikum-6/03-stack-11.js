// 03-stack-ll.js
// IMPLEMENTASI STACK DENGAN LINKED LIST

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  removeHead() {
    if (!this.head) return null;

    const removed = this.head.data;

    this.head = this.head.next;
    this.length--;

    return removed;
  }

  getHead() {
    return this.head ? this.head.data : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    if (!this.head) {
      console.log("[Stack kosong]");
      return;
    }

    let current = this.head;
    let result = "";

    while (current) {
      result += current.next
        ? `[${current.data}] -> `
        : `[${current.data}]`;

      current = current.next;
    }

    console.log(result);
  }
}

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.prepend(data);
  }

  pop() {
    return this.list.removeHead();
  }

  peek() {
    return this.list.getHead();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.length;
  }

  print() {
    console.log("Isi Stack:");
    this.list.print();
  }
}

const stack = new Stack();

console.log("==================================");
console.log("PUSH DATA");
console.log("==================================");

stack.push("Buka VS Code");
stack.push("Menulis Kode");
stack.push("Menjalankan Program");
stack.push("Menyimpan File");

stack.print();

console.log("\nTop Stack:", stack.peek());
console.log("Ukuran Stack:", stack.size());

console.log("\n==================================");
console.log("POP DATA");
console.log("==================================");

console.log("Data dipop:", stack.pop());
stack.print();

console.log("Data dipop:", stack.pop());
stack.print();

console.log("\nTop Stack Sekarang:", stack.peek());

console.log("\n==================================");
console.log("SIMULASI UNDO");
console.log("==================================");

const undoStack = new Stack();

const actions = [
  "Mengetik Hello World",
  "Menghapus Baris",
  "Menambahkan Function",
  "Mengganti Variabel"
];

for (const action of actions) {
  console.log("Aksi:", action);
  undoStack.push(action);
}

console.log("\nIsi Stack Undo:");
undoStack.print();

console.log("\nUNDO 1:");
console.log("Membatalkan:", undoStack.pop());

console.log("\nUNDO 2:");
console.log("Membatalkan:", undoStack.pop());

console.log("\nSisa Stack:");
undoStack.print();

console.log("\nApakah stack kosong?", undoStack.isEmpty());
console.log("Jumlah aksi tersisa:", undoStack.size());