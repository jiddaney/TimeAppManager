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
});