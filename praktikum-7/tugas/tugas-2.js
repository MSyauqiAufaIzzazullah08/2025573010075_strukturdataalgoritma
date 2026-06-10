// tugas-2.js
// Min Stack dengan getMin() O(1)

class Stack {
    constructor() {
        this.items = [];
    }

    push(data) {
        this.items.push(data);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

class MinStack {
    constructor() {
        this.stackData = new Stack(); 
        this.stackMin = new Stack();  
    }

    push(value) {
        this.stackData.push(value);

        if (
            this.stackMin.isEmpty() ||
            value <= this.stackMin.peek()
        ) {
            this.stackMin.push(value);
        }
    }

    pop() {
        if (this.stackData.isEmpty()) return null;

        const removed = this.stackData.pop();

        if (removed === this.stackMin.peek()) {
            this.stackMin.pop();
        }

        return removed;
    }

    peek() {
        return this.stackData.peek();
    }

    getMin() {
        return this.stackMin.peek();
    }

    isEmpty() {
        return this.stackData.isEmpty();
    }
}

const ms = new MinStack();

console.log("Push 5");
ms.push(5);

console.log("Push 3");
ms.push(3);

console.log("Push 7");
ms.push(7);

console.log("Push 2");
ms.push(2);

console.log("Minimum saat ini =", ms.getMin()); // 2

console.log("\nPop =", ms.pop()); // 2
console.log("Minimum saat ini =", ms.getMin()); // 3

console.log("\nPop =", ms.pop()); // 7
console.log("Minimum saat ini =", ms.getMin()); // 3