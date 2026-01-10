const marbles = document.querySelectorAll('.marble');
const greyImage = "images/marble1.jpg";
const orangeImage = "images/marble2.jpg";

let currentIndex = 0;
let timer = null;

function startAnimation() {
    timer = setInterval(() => {
        marbles.forEach(img => {
            img.src = greyImage;
            img.classList.remove('active-state');
        });

        marbles[currentIndex].src = orangeImage;
        marbles[currentIndex].classList.add('active-state');
        currentIndex = (currentIndex + 1) % marbles.length;
    }, 1000);
}
marbles.forEach(marble => {
    marble.addEventListener('mouseenter', () => {
        clearInterval(timer);
    });

    marble.addEventListener('mouseleave', () => {
        startAnimation();
    });
});
startAnimation();