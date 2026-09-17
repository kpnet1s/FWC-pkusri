$(document).ready(function () {
	loadTasks();
	$("#new-task").click(function () {
		let task = prompt("Enter a new task:");
		if (task !== null && task.trim() !== "") {
			addTask(task);
			saveTasks();
		}
	});
	function addTask(taskText) {
		let newTask = $("<div></div>");
		newTask.text(taskText);
		newTask.addClass("task");
		newTask.click(function () {
			let confirmDelete = confirm("Do you want to delete this To Do List?");
			if (confirmDelete) {
				$(this).remove();
				saveTasks();
			}
		});
		$("#ft_list").prepend(newTask);
	}
	function saveTasks() {
		let tasks = [];
		$("#ft_list .task").each(function () {
			tasks.push($(this).text());
		});
		document.cookie = "tasks=" + encodeURIComponent(JSON.stringify(tasks)) + "; path=/; max-age=31536000";
	}
	function loadTasks() {
		let cookies = document.cookie.split("; ");
		for (let cookie of cookies) {
			let parts = cookie.split("=");
			if (parts[0] === "tasks") {
				let tasks = JSON.parse(decodeURIComponent(parts.slice(1).join("=")) );
				tasks.reverse().forEach(function (task) {
					addTask(task);
				});
				break;
			}
		}
	}
});
