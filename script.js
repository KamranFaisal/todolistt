// Getting the elements we need from the HTML
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Event listener to handle clicking the Add Task button
addButton.addEventListener('click', function() {
  // Get the task from the input field
  const taskText = inputField.value;

  // If the input field isn't empty
  if (taskText) {
    // Create a new list item (li) element
    const listItem = document.createElement('li');

    // Add the task text to the list item
    listItem.textContent = taskText;

    // Create a "Delete" button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      todoList.removeChild(listItem); // Remove the task when Delete is clicked
    });

    // Add the delete button to the list item
    listItem.appendChild(deleteButton);

    // Add the list item to the to-do list
    todoList.appendChild(listItem);

    // Clear the input field
    inputField.value = '';
  }
});
