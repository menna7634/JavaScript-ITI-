 let interval;
    function startClock() {
        alert("Clock Started");
        clearInterval(interval);
        interval = setInterval(() => {
            document.getElementById('clock').innerText = new Date().toLocaleTimeString();
        }, 1000);
    }

    window.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 'w') {
            clearInterval(interval);
            alert("Clock Stopped");
        }
    });