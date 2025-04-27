  // Get elements
window.onload = function() { 
    const taskInput = 
document.getElementById("taskInput");
const addBtn = 
document.getElementById("addBtn");
const taskList = 
document.getElementById("taskList");
// this addeventlistener removes any extra spaces from the beginning of the string
addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    // Don't add any empty tasks
    if (taskText === "") {
        alert("Please enter a task!");
    return;
}
// Create a new list item
const li = document.createElement("li");
li.textContent = taskText;

// Add click toggle to mark as complete
li.addEventListener('click', function() {
    li.classList.toggle('completed');

    if (li.classList.contains('completed')) {
        showToast("Marked as read")

    // Remove edit button after marked as read
    const buttons = li.querySelectorAll('button');
    if (buttons.length >= 1) {
        li.removeChild(buttons[0]); //buttons[1] is the edit btn
    }
}
});

// Create a delete btn
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "delete";
deleteBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // prevent toggle when delete is clicked
    li.remove();
});

// Create an edit button
const editBtn = document.createElement('button');
editBtn.textContent = 'edit';
editBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Preventing triggering complete toggle
    
    const newTask = prompt('Edit your task:', li.firstChild.textContent.trim());
    if (newTask !== null && newTask !== '') {
        li.firstChild.textContent = newTask;
    }
});

// Append the editBtn
li.appendChild(editBtn);

// Append the delete btn to the list item
li.appendChild(deleteBtn);

// Add the list item to the task list
taskList.appendChild(li);

// clear the input field after adding the task
taskInput.value = "";
});
};

// Show toast message
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000); 
}