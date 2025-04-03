class Queue {
  constructor() {
    this.items = [];
  }
  // Method to add an item to the queue
  enqueue = (item) => {
    this.items.push(item);
    this.displayQueue();
  };
  // Method to remove the first item from the queue
  dequeue = () => {
    // Check if the queue is empty, otherwise remove the first item
    const dequeuedItem = this.isEmpty() ? alert("Empty") : this.items.shift();
    this.displayQueue();
    return dequeuedItem;
  };
  // Method to check if the queue is empty
  isEmpty = () => !this.items.length;

  displayQueue = () => {
    const queueDiv = document.getElementById("queue");
    queueDiv.innerHTML = this.isEmpty()
      ? "Empty"
      : this.items
          .map((item, index) => `Position ${index + 1}: ${item}`)
          .join("<br>");
  };
}

const queue = new Queue();
// Event listener for the "enqueue" button
document.getElementById("enqueueButton").addEventListener("click", () => {
  const item = prompt("Enter item to enqueue:");
  item && queue.enqueue(item);
});
// Event listener for the "dequeue" button
document.getElementById("dequeueButton").addEventListener("click", () => {
  const dequeuedItem = queue.dequeue();
  dequeuedItem && alert(`Dequeued item: ${dequeuedItem}`);
});

queue.displayQueue();
