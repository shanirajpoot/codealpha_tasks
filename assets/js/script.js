 let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

      const taskForm = document.getElementById("task-form");
      const taskInput = document.getElementById("task-input");
      const taskList = document.getElementById("task-list");

      function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }

      function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
          const li = document.createElement("li");
          li.className = task.completed ? "completed" : "";

          const span = document.createElement("span");
          span.textContent = task.text;
          span.onclick = () => toggleComplete(index);

          const actions = document.createElement("div");
          actions.classList.add("task-actions");

          const editBtn = document.createElement("button");
          editBtn.textContent = "Edit";
          editBtn.classList.add("edit");
          editBtn.onclick = () => editTask(index);

          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete";
          deleteBtn.classList.add("delete");
          deleteBtn.onclick = () => deleteTask(index);

          actions.appendChild(editBtn);
          actions.appendChild(deleteBtn);
          li.appendChild(span);
          li.appendChild(actions);

          taskList.appendChild(li);
        });
      }

      function addTask(e) {
        e.preventDefault();
        const text = taskInput.value.trim();
        if (!text) return;

        tasks.push({ text, completed: false });
        taskInput.value = "";
        saveTasks();
        renderTasks();
      }

      function toggleComplete(index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
      }

      function editTask(index) {
        const newText = prompt("Edit task:", tasks[index].text);
        if (newText !== null && newText.trim() !== "") {
          tasks[index].text = newText.trim();
          saveTasks();
          renderTasks();
        }
      }

      function deleteTask(index) {
        if (confirm("Delete this task?")) {
          tasks.splice(index, 1);
          saveTasks();
          renderTasks();
        }
      }

      taskForm.addEventListener("submit", addTask);

      // Initial render
      renderTasks();