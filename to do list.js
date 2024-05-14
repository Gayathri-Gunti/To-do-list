
function addTodo() {
    var input = document.getElementById("todoInput");
    var text = input.value.trim();
    if (text === "") {
        alert("Please enter a task!");
        return;
    }
    var listItem = createTodoItem(text);
    var todoList = document.getElementById("todoList");
    todoList.appendChild(listItem);
    input.value = "";
}

function createTodoItem(text) {
    var listItem = document.createElement("li");
    listItem.className = "todoItem";

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        if (this.checked) {
            label.classList.add("completed");
        } else {
            label.classList.remove("completed");
        }
    };

    var label = document.createElement("label");
    label.textContent = text;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        listItem.remove();
    };

    var updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.onclick = function() {
        var newText = prompt("Update the task:", text);
        if (newText !== null) {
            label.textContent = newText.trim();
        }
    };

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    listItem.appendChild(updateButton);

    return listItem;
}


document.getElementById("addButton").addEventListener("click", addTodo);
