document.addEventListener('DOMContentLoaded', function() {
    let tasks = [];
    let currentTimer = {
        minutes: 25,
        seconds: 0,
        isRunning: false,
        interval: null,
        defaultDuration: 25
    };

    const editTaskModal = new bootstrap.Modal(document.getElementById('editTaskModal'));

    // Timer Duration Control
    window.setTimerDuration = function(minutes) {
        if (!currentTimer.isRunning) {
            currentTimer.defaultDuration = minutes;
            resetTimer();
            // Update active button state
            document.querySelectorAll('.btn-group .btn-outline-primary').forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent.includes(minutes.toString())) {
                    btn.classList.add('active');
                }
            });
        }
    };

    // Task Management Functions
    function addTask(description, priority) {
        const task = {
            id: Date.now(),
            description,
            priority,
            completed: false
        };
        tasks.push(task);
        renderTasks();
        saveTasksToLocalStorage();
    }

    function deleteTask(taskId) {
        tasks = tasks.filter(task => task.id !== taskId);
        renderTasks();
        saveTasksToLocalStorage();
    }

    function editTask(taskId) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            document.getElementById('editTaskId').value = task.id;
            document.getElementById('editTaskInput').value = task.description;
            document.getElementById('editPriorityInput').value = task.priority;
            editTaskModal.show();
        }
    }
});