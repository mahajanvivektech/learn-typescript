"use strict";
/**
 *  FIFO: A first in first out collection
 */
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
let queue = new Queue();
queue.push(1);
console.log(queue.pop());
