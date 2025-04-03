// Exercise 01: Create a new expense and display the list
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function renderExpenses() {
  const expensesList = document.getElementById("expensesList");
  expensesList.innerHTML = ""; // Clear table content
  expenses.forEach((expense, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
         <td>${expense.description}</td>
      <td>$${expense.amount}</td>
      <td>${expense.date}</td>
      <td>${expense.category}</td>
      <td>
        <button class="btn btn-primary btn-sm" onclick="editExpense(${index})">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteExpense(${index})">Delete</button>
      </td>
    `;
    expensesList.appendChild(row); // Add each row to the table
  });

  // Save the updated expenses to localStorage
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function addOrUpdateExpense() {
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const editIndex = document.getElementById("editIndex").value;

  if (description === "" || amount === "" || date === "") {
    alert("Please fill in all fields"); // Ensure all fields are filled
    return;
  }

  const newExpense = {
    description,
    amount: parseFloat(amount), // Ensure the amount is a number
    date,
    category,
  };

  if (editIndex === "") {
    // Add new expense
    expenses.push(newExpense);
  } else {
    // Update existing expense
    expenses[editIndex] = newExpense;
    document.getElementById("editIndex").value = ""; // Clear edit index
  }

  // Reset form inputs
  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("date").value = "";
  document.getElementById("category").value = "Food";

  renderExpenses();
}

// Exercise 02: Delete an expense
function deleteExpense(index) {
  if (confirm("Are you sure you want to delete this expense?")) {
    expenses.splice(index, 1); // Remove expense by index
    renderExpenses(); // Re-render after deletion
  }
}

// Exercise 03: Update an expense
function editExpense(index) {
  const expense = expenses[index];
  // Populate form with selected expense data
  document.getElementById("description").value = expense.description;
  document.getElementById("amount").value = expense.amount;
  document.getElementById("date").value = expense.date;
  document.getElementById("category").value = expense.category;
  document.getElementById("editIndex").value = index; // Store index for editing
}

// Exercise 04: Sort expenses by amount
function sortExpenses(property, order) {
  expenses.sort((a, b) => {
    if (order === "asc") {
      return a[property] - b[property]; // Ascending sort
    } else {
      return b[property] - a[property]; // Descending sort
    }
  });
  renderExpenses();
}

// Exercise 05: Save the list in localStorage
document.addEventListener("DOMContentLoaded", renderExpenses);
