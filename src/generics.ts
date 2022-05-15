/**
 *  FIFO: A first in first out collection
 */
class Queue<T> {
  private data: Array<T> = [];

  push(item: T) {
    this.data.push(item)
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

let queue: Queue<number> = new Queue<number>();
queue.push(1);
console.log(queue.pop());