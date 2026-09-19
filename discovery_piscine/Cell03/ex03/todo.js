const list = document.getElementById("ft_list");
const newButton = document.getElementById("new_btn");

function createTodo(text) {
    const todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;

    todo.addEventListener("click", function() {
        if (confirm("Do you want to remove this To Do List?")) {
            todo.remove();
            saveTodos();
        }
    });

    list.prepend(todo);
}

function saveTodos() {
    let todos = [];

    const items = list.querySelectorAll(".todo");

    items.forEach(function(item) {
        todos.push(item.textContent);
    });

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; max-age=31536000; path=/";

    console.log("Saved:", document.cookie);
}

function loadTodos() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        if (cookie.startsWith("todos=")) {
            const value = cookie.substring("todos=".length);

            const todos = JSON.parse(decodeURIComponent(value));

            for (let i = todos.length - 1; i >= 0; i--) {
                createTodo(todos[i]);
            }
        }
    }
}

newButton.addEventListener("click", function() {
    const text = prompt("Enter a new TO DO:");

    if (text !== null && text.trim() !== "") {
        createTodo(text);
        saveTodos();
    }
});

loadTodos();
