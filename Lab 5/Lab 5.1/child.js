 let seconds = 5;
    const timer = document.getElementById("timer");

    const countdown = setInterval(() => {
        seconds--;
        timer.textContent = seconds;

        if (seconds === 0) {
            clearInterval(countdown);
            window.close();
        }
    }, 1000);