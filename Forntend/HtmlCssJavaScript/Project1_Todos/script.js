// <!-- Project: Todo List App (Vanilla JS)
// Add, delete, mark complete tasks.
// Use local storage.
// Practice DOM manipulation and event handling. -->



// Get DOM elements
const form = document.getElementById('todo-form');   // Reference to the form element
const input = document.getElementById('todo-input'); // Reference to the input field
const list = document.getElementById('todo-list');   // Reference to the unordered list where tasks will be shown

// Load saved todos from localStorage when the page loads
document.addEventListener('DOMContentLoaded', loadTodos);

// Event listener: When the form is submitted
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from reloading the page

  const task = input.value.trim(); // Get the input text and remove whitespace

  if (task !== '') {
    addTodo(task);     // Display the task in the UI
    saveTodo(task);    // Save the task in localStorage
    input.value = '';  // Clear the input field
  }
});


// Function to add a new todo item to the UI
function addTodo(taskText) {
  const li = document.createElement('li'); // Create a new <li> element

  const span = document.createElement('span'); // Create a <span> to hold the task text
  span.textContent = taskText;                 // Set the span's text to the task
  li.appendChild(span);                        // Add span to the list item

  // Create 'Done' button
  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.addEventListener('click', () => {
    li.classList.toggle('completed'); // Toggle 'completed' class when clicked
  });

  // Create 'Delete' button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', () => {
    li.remove();                // Remove the task from UI
    removeTodo(taskText);       // Remove the task from localStorage
  });

  li.appendChild(doneBtn);      // Add 'Done' button to the <li>
  li.appendChild(delBtn);       // Add 'Delete' button to the <li>
  list.appendChild(li);         // Add the <li> to the main todo list
}


// Function to save a new task in localStorage
function saveTodo(task) {
  let todos = JSON.parse(localStorage.getItem('todos')) || []; // Get existing tasks or initialize empty array
  todos.push(task);                                             // Add the new task
  localStorage.setItem('todos', JSON.stringify(todos));        // Save back to localStorage
}


// Function to load saved tasks from localStorage and display them
function loadTodos() {
  let todos = JSON.parse(localStorage.getItem('todos')) || []; // Get saved tasks
  todos.forEach(task => addTodo(task));                        // Add each to the UI
}


// Function to remove a task from localStorage
function removeTodo(taskText) {
  let todos = JSON.parse(localStorage.getItem('todos')) || []; // Get saved tasks
  todos = todos.filter(task => task !== taskText);             // Filter out the deleted task
  localStorage.setItem('todos', JSON.stringify(todos));        // Save updated list back
}
