  // Function to display the current date
  function displayCurrentDate() {
    const currentDateElement = document.getElementById("currentDate");
    const today = new Date().toDateString(); // String representation of the current date
    currentDateElement.textContent = `Today is ${today}`;
  }

  // Function to load tasks from localStorage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
      const listItem = document.createElement("li"); // New list item element for the task
      listItem.className = "list-group-item";
      listItem.textContent = `${task.date} at ${task.time}: ${task.description}`;

      const removeButton = document.createElement("button");// A remove button for each task
      removeButton.textContent = "Remove";
      removeButton.className = "btn btn-danger btn-sm float-right";
      removeButton.onclick = function () {  // Set up an event listener to remove the task when the button is clicked
        removeTask(listItem, task.date, task.time, task.description);
      };

      listItem.appendChild(removeButton); // Append the remove button to the list item
      document.getElementById("taskList").appendChild(listItem);

      highlightCurrentDateTask(listItem, task.date);
    });
  }
  // Function to add a task to the list and to localStorage
  function addTask() {
    const taskDescription = document.getElementById("taskDescription").value;
    const taskTime = document.getElementById("taskTime").value;
    const taskDate = document.getElementById("taskDate").value;

    if (!taskDescription || !taskTime || !taskDate) { // Check if any field is empty and show an alert
      alert("Please fill in all fields (task name, time, and date).");
      return;
    }
    // Create a new list item element for the new task
    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = `${taskDate} at ${taskTime}: ${taskDescription}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "btn btn-danger btn-sm float-right";
    removeButton.onclick = function () {
      removeTask(listItem, taskDate, taskTime, taskDescription);
    };

    listItem.appendChild(removeButton);// Append the remove button to the list item
    taskList.appendChild(listItem);

    saveTask(taskDate, taskTime, taskDescription);// Save the new task to localStorage

    highlightCurrentDateTask(listItem, taskDate);
  }

  // Function to save a task in localStorage
  function saveTask(date, time, description) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ date, time, description });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  // Function to remove a task and update localStorage
  function removeTask(taskElement, date, time, description) {
    taskElement.remove();
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter(task => 
      !(task.date === date && task.time === time && task.description === description)
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  // Function to highlight tasks matching the current date
  function highlightCurrentDateTask(taskElement, taskDate) {
    const today = new Date().toISOString().split("T")[0]; 
    if (taskDate === today) {
      taskElement.classList.add("highlight-current-date");
    }
  }
  // Initialize date display and load tasks when the page loads
  window.onload = function () {
    displayCurrentDate();
    loadTasks(); 
  };