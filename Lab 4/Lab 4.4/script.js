const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg"
];

let currentIndex = 0;
let slideshowInterval = null;

const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideshowBtn = document.getElementById('slideshowBtn');
const stopBtn = document.getElementById('stopBtn');

function showImage() {
    galleryImage.src = images[currentIndex];
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showImage();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showImage();
    }
});

slideshowBtn.addEventListener('click', () => {
    if (slideshowInterval) return;

    slideshowInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0; 
        }
        showImage();
    }, 2000); 
});

stopBtn.addEventListener('click', () => {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
});
